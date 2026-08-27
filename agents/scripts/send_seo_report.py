#!/usr/bin/env python3
"""
Email the weekly reports.

Combines the newest technical SEO health report and the newest marketing
performance report into a single HTML email and sends it via SendGrid.
Recipients, sender and API key all come from the environment so no address is
ever committed to the repo.

Either report may be absent — whatever exists is sent.

Environment:
    SENDGRID_API_KEY   required
    SEO_REPORT_TO      required — comma-separated recipients
    SEO_REPORT_FROM    required — verified SendGrid sender address

Exit codes:
    0 sent
    1 misconfigured or send failed
    2 nothing to send (no report found)
"""

import json
import os
import re
import sys
import urllib.error
import urllib.request
from pathlib import Path

SENDGRID_ENDPOINT = "https://api.sendgrid.com/v3/mail/send"
REPO_ROOT = Path(__file__).resolve().parents[2]


def newest(pattern: str) -> Path | None:
    reports = sorted((REPO_ROOT / "reports").glob(pattern))
    return reports[-1] if reports else None


def latest_summary() -> dict:
    snaps = sorted((REPO_ROOT / "agents" / "state" / "seo_health").glob("*.json"))
    if not snaps:
        return {}
    try:
        return json.loads(snaps[-1].read_text())
    except (json.JSONDecodeError, OSError):
        return {}


def regressions_from(state_name: str) -> list[str]:
    """Read an agent's last recorded regressions from its state file."""
    path = REPO_ROOT / "agents" / "state" / state_name
    if not path.exists():
        return []
    try:
        return json.loads(path.read_text()).get("last_regressions", [])
    except (json.JSONDecodeError, OSError):
        return []


def body_of(path: Path) -> str:
    """Strip the document wrapper so several reports can share one email."""
    html = path.read_text()
    match = re.search(r"<body[^>]*>(.*)</body>", html, re.S)
    inner = match.group(1) if match else html
    style = re.search(r"<style[^>]*>(.*?)</style>", html, re.S)
    return (f"<style>{style.group(1)}</style>" if style else "") + inner


def build_subject(snapshot: dict, regressions: list[str]) -> str:
    date = snapshot.get("date", "")
    s = snapshot.get("summary", {})
    if regressions:
        return (
            f"[ACTION NEEDED] Mile High DNA weekly — "
            f"{len(regressions)} regression(s) — {date}"
        )
    crawled = s.get("urls_crawled", 0)
    unique = s.get("unique_titles", 0)
    return f"Mile High DNA weekly — all clear — {unique}/{crawled} unique titles — {date}"


def main() -> int:
    api_key = os.getenv("SENDGRID_API_KEY")
    to_raw = os.getenv("SEO_REPORT_TO")
    sender = os.getenv("SEO_REPORT_FROM")

    missing = [
        name
        for name, val in (
            ("SENDGRID_API_KEY", api_key),
            ("SEO_REPORT_TO", to_raw),
            ("SEO_REPORT_FROM", sender),
        )
        if not val
    ]
    if missing:
        print(f"Not sending — missing env: {', '.join(missing)}", file=sys.stderr)
        return 1

    marketing = newest("marketing-*.html")
    seo = newest("seo-health-*.html")
    if not (marketing or seo):
        print("Not sending — no report file found", file=sys.stderr)
        return 2

    snapshot = latest_summary()
    regressions = regressions_from("analytics.marketing_state.json") + regressions_from(
        "seo.health_state.json"
    )

    # Marketing first: performance is what the business reads, technical health
    # is the explanation underneath it.
    sections = []
    for label, path in (("Marketing Performance", marketing), ("Technical SEO Health", seo)):
        if path and path.exists():
            sections.append(body_of(path))
        else:
            sections.append(
                f'<p style="color:#9ca3af">{label}: no report produced this week.</p>'
            )

    html = "<hr style='margin:40px 0;border:0;border-top:1px solid #e5e7eb'>".join(sections)
    included = ", ".join(p.name for p in (marketing, seo) if p)

    recipients = [a.strip() for a in to_raw.split(",") if a.strip()]
    payload = {
        "personalizations": [{"to": [{"email": a} for a in recipients]}],
        "from": {"email": sender, "name": "Mile High DNA Marketing Monitor"},
        "subject": build_subject(snapshot, regressions),
        "content": [{"type": "text/html", "value": f"<div>{html}</div>"}],
    }

    req = urllib.request.Request(
        SENDGRID_ENDPOINT,
        data=json.dumps(payload).encode(),
        headers={
            "Authorization": f"Bearer {api_key}",
            "Content-Type": "application/json",
        },
        method="POST",
    )
    try:
        with urllib.request.urlopen(req, timeout=30) as resp:
            print(f"Sent [{included}] to {len(recipients)} recipient(s) — HTTP {resp.status}")
            return 0
    except urllib.error.HTTPError as exc:
        print(f"SendGrid rejected the message: {exc.code} {exc.read().decode()[:400]}", file=sys.stderr)
        return 1
    except urllib.error.URLError as exc:
        print(f"Could not reach SendGrid: {exc.reason}", file=sys.stderr)
        return 1


if __name__ == "__main__":
    sys.exit(main())
