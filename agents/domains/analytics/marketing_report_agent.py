"""
Marketing Report Agent

Weekly Search Console + GA4 + Google Ads snapshot, trended over four horizons —
weekly, monthly, quarterly and annual — each compared against the immediately
preceding period of the same length.

WHY FOUR HORIZONS
A 37% organic decline spread over eight months never shows up as a bad week;
week-over-week it looks like noise every single time. The January 2026 URL
restructure decayed for eight months precisely because nothing ever compared a
quarter to the quarter before it. The long windows are the ones that catch a
slow bleed, so thresholds tighten as the window widens: a 25% weekly swing is
normal, a 10% quarterly decline is not.

Each data source is optional. A source with no credentials renders as
"not configured" instead of failing the run, so partial setup still produces a
useful report.

Environment:
    GOOGLE_CLIENT_ID / GOOGLE_CLIENT_SECRET   shared OAuth client
    GSC_REFRESH_TOKEN   + GSC_SITE_URL        Search Console
    GA4_REFRESH_TOKEN   + GA4_PROPERTY_ID     GA4 Data API
    ADS_REFRESH_TOKEN   + ADS_CUSTOMER_ID
                        + ADS_DEVELOPER_TOKEN
                        [+ ADS_LOGIN_CUSTOMER_ID]                Google Ads

Usage:
    python -m agents.run analytics.marketing --live
"""

import json
import os
import urllib.error
import urllib.parse
from datetime import date, datetime, timedelta, timezone
from pathlib import Path
from typing import Any, Callable, Dict, List, Optional

from agents.core.base_agent import BaseAgent
from agents.core.google_auth import GoogleAuthError, api_post, get_access_token

# Search Console data lags ~2 days. Ending every window there keeps each
# comparison like-for-like instead of measuring a partial period against a full one.
LAG_DAYS = 3

# Window lengths are multiples of 7 so every period contains whole weeks and
# day-of-week seasonality cancels out of the comparison.
PERIODS: List[tuple[str, int]] = [
    ("weekly", 7),
    ("monthly", 28),
    ("quarterly", 91),
    ("annual", 364),
]

# Percentage decline that counts as a regression. Longer windows carry less
# noise, so a smaller move is meaningful.
THRESHOLDS = {"weekly": -25, "monthly": -15, "quarterly": -10, "annual": -10}

# Search Console only retains ~16 months, so the annual comparison (which needs
# two full years) cannot be served. Detected up front rather than guessed at.
GSC_RETENTION_DAYS = 480


def _range(days: int, offset: int = 0) -> tuple[str, str]:
    """Return (start, end) for a window of `days`, `offset` periods back."""
    end = date.today() - timedelta(days=LAG_DAYS + offset * days)
    start = end - timedelta(days=days - 1)
    return start.isoformat(), end.isoformat()


def _pct(now: float, was: float) -> Optional[float]:
    if not was:
        return None
    return round((now - was) / was * 100, 1)


class MarketingReportAgent(BaseAgent):
    """Multi-horizon paid + organic performance snapshot."""

    def __init__(self, dry_run: bool = True):
        super().__init__(agent_name="analytics.marketing", dry_run=dry_run)
        self.snapshot_dir = self.state_dir / "marketing"
        self.snapshot_dir.mkdir(parents=True, exist_ok=True)
        self.reports_dir = Path(__file__).resolve().parents[3] / "reports"
        self.reports_dir.mkdir(parents=True, exist_ok=True)

    def check_guardrails(self) -> bool:
        return True  # every source is individually optional

    # ------------------------------------------------------------- helpers

    def _collect(
        self,
        fetch: Callable[[int, int], Dict[str, float]],
        max_lookback: Optional[int] = None,
    ) -> Dict[str, Any]:
        """
        Run `fetch(days, offset)` for the current and prior window of every
        period, marking periods the data source cannot reach.
        """
        out: Dict[str, Any] = {}
        for name, days in PERIODS:
            if max_lookback and days * 2 > max_lookback:
                out[name] = {"status": "insufficient_history"}
                continue
            try:
                out[name] = {
                    "status": "ok",
                    "current": fetch(days, 0),
                    "prior": fetch(days, 1),
                    "window": " vs ".join(
                        ["→".join(_range(days, 0)), "→".join(_range(days, 1))]
                    ),
                }
            except urllib.error.HTTPError as exc:
                out[name] = {
                    "status": "error",
                    "message": f"HTTP {exc.code}: {exc.read().decode()[:160]}",
                }
        return out

    # ------------------------------------------------------- Search Console

    def fetch_gsc(self) -> Dict[str, Any]:
        site = os.getenv("GSC_SITE_URL", "sc-domain:milehighdnatesting.com")
        try:
            token = get_access_token("GSC_REFRESH_TOKEN")
        except GoogleAuthError as exc:
            return {"status": "error", "message": str(exc)}
        if not token:
            return {"status": "not_configured", "needs": "GSC_REFRESH_TOKEN"}

        endpoint = (
            "https://searchconsole.googleapis.com/webmasters/v3/sites/"
            f"{urllib.parse.quote(site, safe='')}/searchAnalytics/query"
        )

        def totals(days: int, offset: int) -> Dict[str, float]:
            start, end = _range(days, offset)
            body = api_post(
                endpoint, token, {"startDate": start, "endDate": end, "dimensions": []}
            )
            r = (body.get("rows") or [{}])[0]
            return {
                "clicks": int(r.get("clicks", 0)),
                "impressions": int(r.get("impressions", 0)),
                "position": round(r.get("position", 0) or 0, 1),
            }

        def pages(offset: int) -> Dict[str, int]:
            start, end = _range(7, offset)
            body = api_post(
                endpoint,
                token,
                {
                    "startDate": start,
                    "endDate": end,
                    "dimensions": ["page"],
                    "rowLimit": 200,
                },
            )
            return {
                r["keys"][0].replace("https://milehighdnatesting.com", ""): int(
                    r.get("clicks", 0)
                )
                for r in body.get("rows", [])
            }

        result: Dict[str, Any] = {
            "status": "ok",
            "periods": self._collect(totals, max_lookback=GSC_RETENTION_DAYS),
        }

        try:
            now, prev = pages(0), pages(1)
            movers = [
                {"path": p, "now": now.get(p, 0), "was": prev.get(p, 0),
                 "change": now.get(p, 0) - prev.get(p, 0)}
                for p in set(now) | set(prev)
                if abs(now.get(p, 0) - prev.get(p, 0)) >= 3
            ]
            movers.sort(key=lambda m: m["change"])
            result["biggest_losers"] = movers[:8]
            result["biggest_gainers"] = list(reversed(movers[-8:]))
        except urllib.error.HTTPError:
            result["biggest_losers"] = result["biggest_gainers"] = []

        return result

    # ------------------------------------------------------------------ GA4

    def fetch_ga4(self) -> Dict[str, Any]:
        prop = os.getenv("GA4_PROPERTY_ID")
        try:
            token = get_access_token("GA4_REFRESH_TOKEN")
        except GoogleAuthError as exc:
            return {"status": "error", "message": str(exc)}
        if not (token and prop):
            return {
                "status": "not_configured",
                "needs": "GA4_REFRESH_TOKEN + GA4_PROPERTY_ID",
            }

        endpoint = (
            f"https://analyticsdata.googleapis.com/v1beta/properties/{prop}:runReport"
        )

        def totals(days: int, offset: int) -> Dict[str, float]:
            start, end = _range(days, offset)
            body = api_post(
                endpoint,
                token,
                {
                    "dateRanges": [{"startDate": start, "endDate": end}],
                    "dimensions": [{"name": "sessionDefaultChannelGroup"}],
                    "metrics": [{"name": "sessions"}, {"name": "keyEvents"}],
                },
            )
            by_channel: Dict[str, Dict[str, int]] = {}
            for row in body.get("rows", []):
                by_channel[row["dimensionValues"][0]["value"]] = {
                    "sessions": int(float(row["metricValues"][0]["value"])),
                    "key_events": int(float(row["metricValues"][1]["value"])),
                }
            return {
                "sessions": sum(v["sessions"] for v in by_channel.values()),
                "organic": by_channel.get("Organic Search", {}).get("sessions", 0),
                "paid": by_channel.get("Paid Search", {}).get("sessions", 0),
                "key_events": sum(v["key_events"] for v in by_channel.values()),
            }

        return {"status": "ok", "periods": self._collect(totals)}

    # ----------------------------------------------------------- Google Ads

    def fetch_ads(self) -> Dict[str, Any]:
        customer = (os.getenv("ADS_CUSTOMER_ID") or "").replace("-", "")
        dev_token = os.getenv("ADS_DEVELOPER_TOKEN")
        try:
            token = get_access_token("ADS_REFRESH_TOKEN")
        except GoogleAuthError as exc:
            return {"status": "error", "message": str(exc)}
        if not (token and customer and dev_token):
            return {
                "status": "not_configured",
                "needs": "ADS_REFRESH_TOKEN + ADS_CUSTOMER_ID + ADS_DEVELOPER_TOKEN",
            }

        endpoint = (
            "https://googleads.googleapis.com/v18/customers/"
            f"{customer}/googleAds:searchStream"
        )
        headers = {"developer-token": dev_token}
        login_cid = (os.getenv("ADS_LOGIN_CUSTOMER_ID") or "").replace("-", "")
        if login_cid:
            headers["login-customer-id"] = login_cid

        def totals(days: int, offset: int) -> Dict[str, float]:
            start, end = _range(days, offset)
            query = (
                "SELECT metrics.cost_micros, metrics.clicks, metrics.conversions "
                "FROM customer "
                f"WHERE segments.date BETWEEN '{start}' AND '{end}'"
            )
            body = api_post(endpoint, token, {"query": query}, headers)
            cost = clicks = conv = 0.0
            for chunk in body if isinstance(body, list) else [body]:
                for row in chunk.get("results", []):
                    m = row.get("metrics", {})
                    cost += float(m.get("costMicros", 0)) / 1_000_000
                    clicks += float(m.get("clicks", 0))
                    conv += float(m.get("conversions", 0))
            return {
                "cost": round(cost, 2),
                "clicks": int(clicks),
                "conversions": round(conv, 1),
            }

        return {"status": "ok", "periods": self._collect(totals)}

    # --------------------------------------------------------------- trends

    # (source key, metric key, label, higher_is_better, alertable, prefix)
    METRICS = [
        ("gsc", "clicks", "Organic clicks", True, True, ""),
        ("gsc", "impressions", "Organic impressions", True, True, ""),
        ("gsc", "position", "Average position", False, False, ""),
        ("ga4", "sessions", "Total sessions", True, False, ""),
        ("ga4", "organic", "Organic sessions", True, True, ""),
        ("ga4", "paid", "Paid sessions", True, False, ""),
        ("ga4", "key_events", "Key events", True, True, ""),
        ("ads", "cost", "Ad spend", True, False, "$"),
        ("ads", "clicks", "Ad clicks", True, False, ""),
        ("ads", "conversions", "Ad conversions", True, True, ""),
    ]

    def analyse_trend(self, snap: Dict[str, Any]) -> Dict[str, Any]:
        matrix: List[Dict[str, Any]] = []
        regressions: List[str] = []

        for source, key, label, higher_better, alertable, prefix in self.METRICS:
            blob = snap.get(source, {})
            if blob.get("status") != "ok":
                continue

            row: Dict[str, Any] = {"label": label, "prefix": prefix, "cells": {}}
            for name, _days in PERIODS:
                period = blob["periods"].get(name, {})
                if period.get("status") != "ok":
                    row["cells"][name] = {"status": period.get("status", "missing")}
                    continue
                now = period["current"].get(key, 0)
                was = period["prior"].get(key, 0)
                pct = _pct(now, was)
                row["cells"][name] = {
                    "status": "ok",
                    "now": now,
                    "was": was,
                    "pct": pct,
                    "good": None if pct is None else (pct >= 0) == higher_better,
                }
                if not alertable or pct is None:
                    continue
                if higher_better and pct <= THRESHOLDS[name]:
                    regressions.append(
                        f"{label} {name} {pct:+.1f}% ({prefix}{was} → {prefix}{now})"
                    )
            matrix.append(row)

        # Average position is "lower is better", so it needs its own rule.
        gsc = snap.get("gsc", {})
        if gsc.get("status") == "ok":
            for name, _ in PERIODS:
                p = gsc["periods"].get(name, {})
                if p.get("status") != "ok":
                    continue
                now, was = p["current"]["position"], p["prior"]["position"]
                if was and now - was >= 1.0:
                    regressions.append(
                        f"Average position {name} worsened {was} → {now}"
                    )

        ads = snap.get("ads", {})
        if ads.get("status") == "ok":
            wk = ads["periods"].get("weekly", {})
            if wk.get("status") == "ok":
                c = wk["current"]
                if c["conversions"] == 0 and c["cost"] > 0:
                    regressions.append(
                        f"${c['cost']} spent this week with 0 tracked conversions — "
                        "check the Ads conversion action is firing"
                    )

        return {"matrix": matrix, "regressions": regressions}

    # --------------------------------------------------------------- render

    def render_html(self, snap: Dict[str, Any], trend: Dict[str, Any]) -> str:
        date_str = snap["date"]

        def cell(c, prefix):
            if c.get("status") == "insufficient_history":
                return '<td class="n muted" title="Search Console retains ~16 months">n/a</td>'
            if c.get("status") != "ok":
                return '<td class="n muted">—</td>'
            if c["pct"] is None:
                return f'<td class="n muted">{prefix}{c["now"]}</td>'
            cls = "up" if c["good"] else "down"
            return (
                f'<td class="n"><span class="{cls}">{c["pct"]:+.1f}%</span>'
                f'<br><span class="abs">{prefix}{c["was"]} → {prefix}{c["now"]}</span></td>'
            )

        body_rows = "".join(
            f'<tr><td>{r["label"]}</td>'
            + "".join(cell(r["cells"].get(n, {}), r["prefix"]) for n, _ in PERIODS)
            + "</tr>"
            for r in trend["matrix"]
        ) or (
            '<tr><td colspan="5" class="muted">No data sources configured yet.</td></tr>'
        )

        if trend["regressions"]:
            banner = (
                '<div class="alert bad"><h2>Performance regressions</h2><ul>'
                + "".join(f"<li>{r}</li>" for r in trend["regressions"])
                + "</ul></div>"
            )
        else:
            banner = (
                '<div class="alert good"><h2>No performance regressions</h2>'
                "<p>Every tracked metric is within normal range across all four horizons.</p></div>"
            )

        pending = []
        for name, blob in (
            ("Search Console", snap["gsc"]),
            ("Google Analytics 4", snap["ga4"]),
            ("Google Ads", snap["ads"]),
        ):
            if blob.get("status") == "not_configured":
                pending.append(f"<li><strong>{name}</strong> — set {blob['needs']}</li>")
            elif blob.get("status") == "error":
                pending.append(
                    f"<li><strong>{name}</strong> — error: {blob.get('message','')}</li>"
                )
        pending_html = (
            '<div class="alert info"><h2>Sources not reporting</h2>'
            f'<ul>{"".join(pending)}</ul></div>'
            if pending
            else ""
        )

        movers_html = ""
        gsc = snap.get("gsc", {})
        if gsc.get("status") == "ok" and gsc.get("biggest_losers"):
            def mv(items):
                return "".join(
                    f'<tr><td>{m["path"]}</td><td class="n">{m["now"]}</td>'
                    f'<td class="n muted">{m["was"]}</td>'
                    f'<td class="n"><span class="{"up" if m["change"] >= 0 else "down"}">'
                    f'{m["change"]:+d}</span></td></tr>'
                    for m in items
                )
            movers_html = f"""
<h2>Pages losing clicks (week over week)</h2>
<table><thead><tr><th>Page</th><th class="n">This week</th>
<th class="n">Last week</th><th class="n">Change</th></tr></thead>
<tbody>{mv(gsc["biggest_losers"])}</tbody></table>
<h2>Pages gaining clicks (week over week)</h2>
<table><thead><tr><th>Page</th><th class="n">This week</th>
<th class="n">Last week</th><th class="n">Change</th></tr></thead>
<tbody>{mv(gsc["biggest_gainers"])}</tbody></table>"""

        headers = "".join(
            f'<th class="n">{n.title()}<br><span class="hdrsub">{d}d vs prior {d}d</span></th>'
            for n, d in PERIODS
        )

        return f"""<!doctype html>
<html lang="en"><head><meta charset="utf-8">
<title>Mile High DNA — Marketing Performance — {date_str}</title>
<style>
 body{{font:15px/1.55 -apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif;
   max-width:900px;margin:0 auto;padding:32px 20px;color:#1f2937}}
 h1{{font-size:22px;margin:0 0 4px}} h2{{font-size:17px;margin:24px 0 8px}}
 .sub{{color:#6b7280;margin:0 0 24px}}
 table{{border-collapse:collapse;width:100%;margin:12px 0 20px}}
 th,td{{text-align:left;padding:8px 10px;border-bottom:1px solid #e5e7eb;vertical-align:top}}
 th{{font-size:12px;text-transform:uppercase;letter-spacing:.04em;color:#6b7280}}
 .hdrsub{{font-weight:400;text-transform:none;letter-spacing:0;font-size:11px;color:#9ca3af}}
 td.n,th.n{{text-align:right;font-variant-numeric:tabular-nums}}
 .abs{{font-size:11px;color:#9ca3af}}
 .muted{{color:#9ca3af}} .up{{color:#15803d;font-weight:600}} .down{{color:#b91c1c;font-weight:600}}
 .alert{{border-radius:8px;padding:14px 18px;margin:0 0 20px}}
 .alert ul{{margin:8px 0 0;padding-left:20px}}
 .bad{{background:#fef2f2;border:1px solid #fecaca}}
 .good{{background:#f0fdf4;border:1px solid #bbf7d0}}
 .info{{background:#eff6ff;border:1px solid #bfdbfe}}
</style></head><body>
<h1>Mile High DNA — Marketing Performance</h1>
<p class="sub">Week of {date_str} · every horizon compared against the period immediately before it</p>

{banner}
{pending_html}

<h2>Trend across horizons</h2>
<table><thead><tr><th>Metric</th>{headers}</tr></thead>
<tbody>{body_rows}</tbody></table>

{movers_html}

<p class="muted" style="margin-top:32px;font-size:13px">
Generated by <code>agents/domains/analytics/marketing_report_agent.py</code>.
Windows end {LAG_DAYS} days back because Search Console data lags, and are whole
multiples of 7 days so day-of-week seasonality cancels out. Search Console
retains ~16 months, so its annual column cannot be computed.</p>
</body></html>"""

    # -------------------------------------------------------------- execute

    def execute(self, *args, **kwargs) -> dict:
        if self.dry_run:
            return {
                "success": True,
                "dry_run": True,
                "configured": {
                    "gsc": bool(os.getenv("GSC_REFRESH_TOKEN")),
                    "ga4": bool(os.getenv("GA4_REFRESH_TOKEN")),
                    "ads": bool(os.getenv("ADS_REFRESH_TOKEN")),
                },
            }

        snapshot = {
            "date": datetime.now(timezone.utc).strftime("%Y-%m-%d"),
            "generated_at": datetime.now(timezone.utc).isoformat(),
            "gsc": self.fetch_gsc(),
            "ga4": self.fetch_ga4(),
            "ads": self.fetch_ads(),
        }
        trend = self.analyse_trend(snapshot)

        date_str = snapshot["date"]
        (self.snapshot_dir / f"{date_str}.json").write_text(
            json.dumps(snapshot, indent=2)
        )
        report_path = self.reports_dir / f"marketing-{date_str}.html"
        report_path.write_text(self.render_html(snapshot, trend))

        self.update_state("last_run", date_str)
        self.update_state("last_regressions", trend["regressions"])

        for r in trend["regressions"]:
            self.logger.warning(f"REGRESSION — {r}")

        return {
            "success": True,
            "date": date_str,
            "report_path": str(report_path),
            "sources": {k: snapshot[k].get("status") for k in ("gsc", "ga4", "ads")},
            "regressions": trend["regressions"],
        }
