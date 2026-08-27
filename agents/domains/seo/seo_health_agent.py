"""
SEO Health Agent

Crawls every URL in the live sitemap with a real browser, records a weekly
snapshot of technical SEO health, and compares it against the site's own
history so regressions surface in days rather than months.

WHY THIS EXISTS
In January 2026 a URL restructure shipped alongside three silent regressions:
the sitemap kept advertising the old URLs, no page emitted a canonical tag,
and react-helmet-async stopped writing <title> so every route served the
homepage title. Traffic decayed for eight months before anyone found it.
Every one of those failures is measurable on a schedule. This agent measures
them, stores the numbers, and shouts when they move the wrong way.

A plain HTTP crawl cannot see any of it — the site is a client-rendered SPA
whose raw HTML is ~600 characters. Pages are therefore rendered in headless
Chromium before metrics are read.

Usage:
    python -m agents.run seo.health --live
    python -m agents.run seo.health --live --limit 20     # quick check
"""

import asyncio
import json
import re
import urllib.request
from datetime import datetime, timezone
from pathlib import Path
from typing import Any, Dict, List, Optional

from agents.core.base_agent import BaseAgent

ORIGIN = "https://milehighdnatesting.com"
SITEMAP_URL = f"{ORIGIN}/sitemap.xml"

# Page-render concurrency. Kept modest so a scheduled run never looks like
# a burst of bot traffic in analytics.
CONCURRENCY = 6
PAGE_TIMEOUT_MS = 30_000
# Time for the SPA to mount and for metadata to be written to <head>.
SETTLE_MS = 1_200


class SEOHealthAgent(BaseAgent):
    """Weekly technical-SEO snapshot with trend analysis."""

    def __init__(self, dry_run: bool = True, limit: Optional[int] = None):
        super().__init__(agent_name="seo.health", dry_run=dry_run)
        self.limit = limit
        self.snapshot_dir = self.state_dir / "seo_health"
        self.snapshot_dir.mkdir(parents=True, exist_ok=True)
        self.reports_dir = Path(__file__).resolve().parents[3] / "reports"
        self.reports_dir.mkdir(parents=True, exist_ok=True)

    # ---------------------------------------------------------------- guards

    def check_guardrails(self) -> bool:
        try:
            import playwright  # noqa: F401
        except ImportError:
            self.logger.error(
                "playwright is not installed. Run:\n"
                "  pip install playwright && playwright install chromium"
            )
            return False
        return True

    # ------------------------------------------------------------- crawling

    def fetch_sitemap_urls(self) -> List[str]:
        with urllib.request.urlopen(SITEMAP_URL, timeout=30) as resp:
            xml = resp.read().decode("utf-8")
        urls = re.findall(r"<loc>([^<]+)</loc>", xml)
        if self.limit:
            urls = urls[: self.limit]
        return urls

    async def _probe(self, context, url: str, sem) -> Dict[str, Any]:
        async with sem:
            page = await context.new_page()
            row: Dict[str, Any] = {"url": url}
            try:
                resp = await page.goto(
                    url, wait_until="domcontentloaded", timeout=PAGE_TIMEOUT_MS
                )
                row["status"] = resp.status if resp else None
                row["final_url"] = page.url
                await page.wait_for_timeout(SETTLE_MS)
                row.update(
                    await page.evaluate(
                        """() => ({
                            title: document.title || null,
                            canonical: document.querySelector('link[rel=canonical]')?.href || null,
                            description: document.querySelector('meta[name=description]')?.content || null,
                            h1: document.querySelector('h1')?.innerText?.trim()?.slice(0, 160) || null,
                            robots: document.querySelector('meta[name=robots]')?.content || null,
                            jsonld: document.querySelectorAll('script[type="application/ld+json"]').length,
                            titleTags: document.querySelectorAll('title').length,
                            canonicalTags: document.querySelectorAll('link[rel=canonical]').length,
                        })"""
                    )
                )
            except Exception as exc:  # noqa: BLE001 - record, never abort the crawl
                row["error"] = str(exc)[:200]
            finally:
                await page.close()
            return row

    async def _crawl(self, urls: List[str]) -> List[Dict[str, Any]]:
        from playwright.async_api import async_playwright

        async with async_playwright() as pw:
            browser = await pw.chromium.launch()
            context = await browser.new_context(
                viewport={"width": 1280, "height": 900},
                user_agent=(
                    "Mozilla/5.0 (compatible; MileHighSEOHealth/1.0; "
                    "+https://milehighdnatesting.com/)"
                ),
            )
            sem = asyncio.Semaphore(CONCURRENCY)
            rows = await asyncio.gather(*(self._probe(context, u, sem) for u in urls))
            await browser.close()
        return list(rows)

    # ------------------------------------------------------------- analysis

    def summarise(self, rows: List[Dict[str, Any]]) -> Dict[str, Any]:
        paths = {r["url"].replace(ORIGIN, "") or "/" for r in rows}

        titles = [r.get("title") for r in rows if r.get("title")]
        title_counts: Dict[str, int] = {}
        for t in titles:
            title_counts[t] = title_counts.get(t, 0) + 1
        duplicate_titles = {t: c for t, c in title_counts.items() if c > 1}

        def path_of(r):
            return r["url"].replace(ORIGIN, "") or "/"

        missing_canonical = [path_of(r) for r in rows if not r.get("canonical")]
        missing_description = [path_of(r) for r in rows if not r.get("description")]
        missing_title = [path_of(r) for r in rows if not r.get("title")]
        non_200 = [
            f"{path_of(r)} ({r.get('status') or r.get('error', 'error')})"
            for r in rows
            if r.get("status") != 200
        ]
        duplicate_tags = [
            path_of(r)
            for r in rows
            if (r.get("titleTags") or 0) > 1 or (r.get("canonicalTags") or 0) > 1
        ]

        # A canonical pointing somewhere that is not itself and not in the
        # sitemap tells Google to ignore the URL we just submitted.
        canonical_conflicts = []
        for r in rows:
            can = r.get("canonical")
            if not can:
                continue
            can_path = can.replace(ORIGIN, "") or "/"
            if can_path != path_of(r) and can_path not in paths:
                canonical_conflicts.append(f"{path_of(r)} -> {can_path}")

        noindex = [path_of(r) for r in rows if "noindex" in (r.get("robots") or "")]

        return {
            "urls_crawled": len(rows),
            "http_200": sum(1 for r in rows if r.get("status") == 200),
            "non_200": non_200,
            "unique_titles": len(set(titles)),
            "duplicate_title_groups": len(duplicate_titles),
            "duplicate_titles": duplicate_titles,
            "missing_title": missing_title,
            "missing_canonical": missing_canonical,
            "missing_description": missing_description,
            "canonical_conflicts": canonical_conflicts,
            "duplicate_tags": duplicate_tags,
            "noindex": noindex,
            "jsonld_blocks": sum(r.get("jsonld") or 0 for r in rows),
        }

    # ---------------------------------------------------------------- trend

    def load_history(self) -> List[Dict[str, Any]]:
        snaps = []
        for f in sorted(self.snapshot_dir.glob("*.json")):
            try:
                snaps.append(json.loads(f.read_text()))
            except (json.JSONDecodeError, OSError):
                continue
        return snaps

    # metric -> (label, direction) where direction is "up" if higher is better
    TRACKED = {
        "urls_crawled": ("Sitemap URLs", "up"),
        "http_200": ("URLs returning 200", "up"),
        "unique_titles": ("Unique titles", "up"),
        "jsonld_blocks": ("Structured-data blocks", "up"),
        "duplicate_title_groups": ("Duplicate title groups", "down"),
    }
    # These are lists; shorter is better.
    TRACKED_LISTS = {
        "missing_title": "Pages missing a title",
        "missing_canonical": "Pages missing a canonical",
        "missing_description": "Pages missing a description",
        "canonical_conflicts": "Canonicals pointing off-sitemap",
        "non_200": "URLs not returning 200",
        "duplicate_tags": "Pages with duplicated head tags",
    }

    # Longer horizons for technical health. Weekly catches a step change (a
    # deploy that breaks titles); the wider windows catch slow drift — a sitemap
    # quietly shrinking, or missing descriptions creeping up release by release.
    HORIZONS = [("weekly", 1), ("monthly", 4), ("quarterly", 13), ("annual", 52)]

    def horizon_comparisons(
        self, current: Dict[str, Any], history: List[Dict[str, Any]], today: str
    ) -> List[Dict[str, Any]]:
        """Compare the current snapshot against the nearest one N weeks back."""
        cur_date = datetime.strptime(today, "%Y-%m-%d").date()
        dated = []
        for snap in history:
            try:
                dated.append(
                    (datetime.strptime(snap["date"], "%Y-%m-%d").date(), snap)
                )
            except (ValueError, KeyError):
                continue

        out = []
        for name, weeks in self.HORIZONS:
            target_age = weeks * 7
            # Accept a snapshot within half a period of the target age, so a
            # missed week does not silently compare against the wrong horizon.
            tolerance = max(4, target_age // 2)
            best = None
            for snap_date, snap in dated:
                age = (cur_date - snap_date).days
                if age <= 0:
                    continue
                if abs(age - target_age) <= tolerance:
                    if best is None or abs(age - target_age) < abs(best[0] - target_age):
                        best = (age, snap)
            if best is None:
                out.append({"name": name, "status": "insufficient_history"})
                continue

            age, snap = best
            prev = snap["summary"]
            cells = {}
            for key, (label, _better) in self.TRACKED.items():
                cells[label] = (prev.get(key, 0), current.get(key, 0))
            for key, label in self.TRACKED_LISTS.items():
                cells[label] = (len(prev.get(key, [])), len(current.get(key, [])))
            out.append(
                {
                    "name": name,
                    "status": "ok",
                    "compared_with": snap["date"],
                    "age_days": age,
                    "cells": cells,
                }
            )
        return out

    def analyse_trend(
        self, current: Dict[str, Any], history: List[Dict[str, Any]]
    ) -> Dict[str, Any]:
        prev = history[-1]["summary"] if history else None
        deltas = []
        regressions = []

        for key, (label, better) in self.TRACKED.items():
            now = current.get(key, 0)
            was = prev.get(key, 0) if prev else None
            change = None if was is None else now - was
            deltas.append(
                {"label": label, "now": now, "was": was, "change": change}
            )
            if change is None or change == 0:
                continue
            worse = (change < 0) if better == "up" else (change > 0)
            if worse:
                regressions.append(f"{label}: {was} → {now}")

        for key, label in self.TRACKED_LISTS.items():
            now = len(current.get(key, []))
            was = len(prev.get(key, [])) if prev else None
            change = None if was is None else now - was
            deltas.append(
                {"label": label, "now": now, "was": was, "change": change}
            )
            if change is not None and change > 0:
                new_items = sorted(
                    set(current.get(key, [])) - set(prev.get(key, []))
                )[:5]
                detail = f" (new: {', '.join(new_items)})" if new_items else ""
                regressions.append(f"{label}: {was} → {now}{detail}")

        return {
            "has_previous": prev is not None,
            "weeks_of_history": len(history),
            "deltas": deltas,
            "regressions": regressions,
        }

    # --------------------------------------------------------------- report

    def render_html(
        self, snapshot: Dict[str, Any], trend: Dict[str, Any], history: List[Dict[str, Any]]
    ) -> str:
        s = snapshot["summary"]
        date = snapshot["date"]

        def arrow(d):
            if d["change"] is None:
                return '<span class="muted">—</span>'
            if d["change"] == 0:
                return '<span class="muted">no change</span>'
            sign = "+" if d["change"] > 0 else ""
            return f'<strong>{sign}{d["change"]}</strong>'

        rows = "".join(
            f"<tr><td>{d['label']}</td><td class='n'>{d['now']}</td>"
            f"<td class='n muted'>{'—' if d['was'] is None else d['was']}</td>"
            f"<td class='n'>{arrow(d)}</td></tr>"
            for d in trend["deltas"]
        )

        if trend["regressions"]:
            banner = (
                '<div class="alert bad"><h2>Regressions since last week</h2><ul>'
                + "".join(f"<li>{r}</li>" for r in trend["regressions"])
                + "</ul></div>"
            )
        elif trend["has_previous"]:
            banner = (
                '<div class="alert good"><h2>No regressions</h2>'
                "<p>Every tracked metric held steady or improved.</p></div>"
            )
        else:
            banner = (
                '<div class="alert info"><h2>Baseline established</h2>'
                "<p>First snapshot — trends begin next week.</p></div>"
            )

        # Multi-horizon view: the same metrics against 1, 4, 13 and 52 weeks ago.
        h_headers = "".join(
            f"<th class='n'>{h['name'].title()}"
            + (
                f"<br><span class='hdrsub'>vs {h['compared_with']}</span>"
                if h.get("status") == "ok"
                else "<br><span class='hdrsub'>no data yet</span>"
            )
            + "</th>"
            for h in trend.get("horizons", [])
        )
        labels = []
        for _k, (lab, _b) in self.TRACKED.items():
            labels.append(lab)
        for _k, lab in self.TRACKED_LISTS.items():
            labels.append(lab)

        h_rows = ""
        for lab in labels:
            cells = ""
            for h in trend.get("horizons", []):
                if h.get("status") != "ok":
                    cells += "<td class='n muted'>—</td>"
                    continue
                was, now = h["cells"].get(lab, (0, 0))
                delta = now - was
                if delta == 0:
                    cells += f"<td class='n muted'>{now}</td>"
                else:
                    sign = "+" if delta > 0 else ""
                    cells += (
                        f"<td class='n'><strong>{sign}{delta}</strong>"
                        f"<br><span class='abs'>{was} → {now}</span></td>"
                    )
            h_rows += f"<tr><td>{lab}</td>{cells}</tr>"

        horizons_html = (
            f"<table><thead><tr><th>Metric</th>{h_headers}</tr></thead>"
            f"<tbody>{h_rows}</tbody></table>"
            if trend.get("horizons")
            else "<p class='muted'>Not enough history yet.</p>"
        )

        # Sparkline-ish history table for the headline metrics.
        hist_rows = ""
        for snap in history[-8:] + [snapshot]:
            hs = snap["summary"]
            hist_rows += (
                f"<tr><td>{snap['date']}</td>"
                f"<td class='n'>{hs.get('urls_crawled', 0)}</td>"
                f"<td class='n'>{hs.get('unique_titles', 0)}</td>"
                f"<td class='n'>{len(hs.get('missing_canonical', []))}</td>"
                f"<td class='n'>{len(hs.get('non_200', []))}</td></tr>"
            )

        def issue_list(key, label):
            items = s.get(key, [])
            if not items:
                return ""
            shown = "".join(f"<li>{i}</li>" for i in items[:25])
            more = (
                f"<li class='muted'>…and {len(items) - 25} more</li>"
                if len(items) > 25
                else ""
            )
            return f"<h3>{label} ({len(items)})</h3><ul>{shown}{more}</ul>"

        issues = "".join(
            issue_list(k, v) for k, v in self.TRACKED_LISTS.items()
        ) or "<p class='muted'>No outstanding issues.</p>"

        return f"""<!doctype html>
<html lang="en"><head><meta charset="utf-8">
<title>Mile High DNA — SEO Health — {date}</title>
<style>
 body{{font:15px/1.55 -apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif;
   max-width:820px;margin:0 auto;padding:32px 20px;color:#1f2937}}
 h1{{font-size:22px;margin:0 0 4px}} h2{{font-size:17px;margin:0 0 8px}}
 h3{{font-size:14px;margin:20px 0 6px;text-transform:uppercase;letter-spacing:.04em;color:#4b5563}}
 .sub{{color:#6b7280;margin:0 0 24px}}
 table{{border-collapse:collapse;width:100%;margin:12px 0 24px}}
 th,td{{text-align:left;padding:7px 10px;border-bottom:1px solid #e5e7eb}}
 th{{font-size:12px;text-transform:uppercase;letter-spacing:.04em;color:#6b7280}}
 td.n,th.n{{text-align:right;font-variant-numeric:tabular-nums}}
 .muted{{color:#9ca3af}}
 .abs{{font-size:11px;color:#9ca3af}}
 .hdrsub{{font-weight:400;text-transform:none;letter-spacing:0;font-size:11px;color:#9ca3af}}
 .alert{{border-radius:8px;padding:14px 18px;margin:0 0 24px}}
 .alert ul{{margin:8px 0 0;padding-left:20px}}
 .bad{{background:#fef2f2;border:1px solid #fecaca}}
 .good{{background:#f0fdf4;border:1px solid #bbf7d0}}
 .info{{background:#eff6ff;border:1px solid #bfdbfe}}
 ul{{margin:6px 0;padding-left:20px}} li{{margin:2px 0}}
 code{{background:#f3f4f6;padding:1px 5px;border-radius:4px;font-size:13px}}
</style></head><body>
<h1>Mile High DNA — Technical SEO Health</h1>
<p class="sub">Week of {date} · {s['urls_crawled']} URLs crawled ·
{trend['weeks_of_history']} week(s) of history</p>

{banner}

<h2>This week vs. last</h2>
<table><thead><tr><th>Metric</th><th class="n">Now</th>
<th class="n">Last week</th><th class="n">Change</th></tr></thead>
<tbody>{rows}</tbody></table>

<h2>Longer horizons</h2>
{horizons_html}

<h2>History</h2>
<table><thead><tr><th>Date</th><th class="n">Sitemap URLs</th>
<th class="n">Unique titles</th><th class="n">No canonical</th>
<th class="n">Not 200</th></tr></thead><tbody>{hist_rows}</tbody></table>

<h2>Outstanding issues</h2>
{issues}

<p class="muted" style="margin-top:32px;font-size:13px">
Generated by <code>agents/domains/seo/seo_health_agent.py</code>.
Pages are rendered in headless Chromium because the site is a client-rendered
SPA — a plain HTTP crawl cannot see titles or canonicals.</p>
</body></html>"""

    # -------------------------------------------------------------- execute

    def execute(self, *args, **kwargs) -> dict:
        if not self.check_guardrails():
            return {"success": False, "message": "guardrails failed"}

        urls = self.fetch_sitemap_urls()
        self.logger.info(f"Crawling {len(urls)} sitemap URLs…")

        if self.dry_run:
            return {
                "success": True,
                "dry_run": True,
                "message": f"Would crawl {len(urls)} URLs",
            }

        rows = asyncio.run(self._crawl(urls))
        summary = self.summarise(rows)

        date = datetime.now(timezone.utc).strftime("%Y-%m-%d")
        history = [h for h in self.load_history() if h.get("date") != date]
        trend = self.analyse_trend(summary, history)
        trend["horizons"] = self.horizon_comparisons(summary, history, date)

        snapshot = {
            "date": date,
            "generated_at": datetime.now(timezone.utc).isoformat(),
            "origin": ORIGIN,
            "summary": summary,
            "pages": rows,
        }
        (self.snapshot_dir / f"{date}.json").write_text(
            json.dumps(snapshot, indent=2)
        )

        report_path = self.reports_dir / f"seo-health-{date}.html"
        report_path.write_text(self.render_html(snapshot, trend, history))

        self.update_state("last_run", date)
        self.update_state("last_summary", summary)
        self.update_state("last_regressions", trend["regressions"])

        for r in trend["regressions"]:
            self.logger.warning(f"REGRESSION — {r}")

        return {
            "success": True,
            "date": date,
            "report_path": str(report_path),
            "summary": summary,
            "trend": trend,
            "regressions": trend["regressions"],
        }
