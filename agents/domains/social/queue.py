"""
Weekly social post queue.

Queue files live in agents/state/social_queue/<ISO-week>.json and are
committed to git so GitHub Actions (and humans reviewing GBP posts)
share one source of truth.

Post statuses:
    pending_review -> approved -> published
                               -> failed
    skipped (e.g. IG post with no image available)
"""

import json
from datetime import date, datetime, timedelta
from pathlib import Path
from typing import Any, Dict, List, Optional

QUEUE_DIR = Path(__file__).parent.parent.parent / "state" / "social_queue"

STATUS_PENDING = "pending_review"
STATUS_APPROVED = "approved"
STATUS_PUBLISHED = "published"
STATUS_FAILED = "failed"
STATUS_SKIPPED = "skipped"

DAY_NAMES = ["monday", "tuesday", "wednesday", "thursday", "friday",
             "saturday", "sunday"]


def iso_week_id(d: date) -> str:
    """Return ISO week id like '2026-W29' for a date."""
    iso = d.isocalendar()
    return f"{iso[0]}-W{iso[1]:02d}"


def next_week_dates(from_date: Optional[date] = None,
                    days: Optional[List[str]] = None) -> List[date]:
    """
    Dates for the given posting days in the NEXT ISO week
    (the week starting the Monday after from_date).
    """
    from_date = from_date or date.today()
    days = [d.lower() for d in (days or ["monday", "wednesday", "friday"])]
    next_monday = from_date + timedelta(days=(7 - from_date.weekday()))
    return [next_monday + timedelta(days=DAY_NAMES.index(d)) for d in days]


def current_week_dates(from_date: Optional[date] = None,
                       days: Optional[List[str]] = None) -> List[date]:
    """Dates for the posting days in the week containing from_date."""
    from_date = from_date or date.today()
    days = [d.lower() for d in (days or ["monday", "wednesday", "friday"])]
    monday = from_date - timedelta(days=from_date.weekday())
    return [monday + timedelta(days=DAY_NAMES.index(d)) for d in days]


def queue_path(week_id: str) -> Path:
    return QUEUE_DIR / f"{week_id}.json"


def load_queue(week_id: str) -> Optional[Dict[str, Any]]:
    path = queue_path(week_id)
    if not path.exists():
        return None
    with open(path, "r") as f:
        return json.load(f)


def save_queue(queue: Dict[str, Any]) -> Path:
    QUEUE_DIR.mkdir(parents=True, exist_ok=True)
    path = queue_path(queue["week"])
    with open(path, "w") as f:
        json.dump(queue, f, indent=2, ensure_ascii=False)
    return path


def new_queue(week_id: str) -> Dict[str, Any]:
    return {
        "week": week_id,
        "generated_at": datetime.now().isoformat(),
        "posts": [],
    }


def posts_due(queue: Dict[str, Any], on_date: date) -> List[Dict[str, Any]]:
    """Posts scheduled for on_date that have not been published yet."""
    iso = on_date.isoformat()
    return [
        p for p in queue.get("posts", [])
        if p.get("scheduled_date") == iso
        and p.get("status") in (STATUS_APPROVED, STATUS_PENDING)
    ]


def approve_posts(queue: Dict[str, Any], platform: Optional[str] = None,
                  post_ids: Optional[List[str]] = None) -> int:
    """Flip pending_review posts to approved. Returns count approved."""
    count = 0
    for p in queue.get("posts", []):
        if p.get("status") != STATUS_PENDING:
            continue
        if platform and p.get("platform") != platform:
            continue
        if post_ids and p.get("id") not in post_ids:
            continue
        p["status"] = STATUS_APPROVED
        p["approved_at"] = datetime.now().isoformat()
        count += 1
    return count
