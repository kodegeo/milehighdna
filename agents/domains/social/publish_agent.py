"""
Social Publish Agent

Publishes today's approved posts from the weekly queue.
    python -m agents.run social.publish --live --yes

Behavior:
- Loads the queue for the current ISO week.
- Finds posts scheduled for today.
- approved  -> publish (live mode) or print (dry-run)
- pending_review -> skipped with a warning (GBP awaiting approval)
- Updates statuses in the queue file (commit the change in CI).
"""

from datetime import date, datetime
from typing import Any, Dict
from zoneinfo import ZoneInfo

from agents.core.base_agent import BaseAgent
from agents.domains.social import queue as q
from agents.domains.social.publishers import PUBLISHERS, missing_env


class SocialPublishAgent(BaseAgent):

    def __init__(self, dry_run: bool = True):
        super().__init__(agent_name="social.publish", dry_run=dry_run)

    def can_publish_live(self) -> bool:
        return not self.dry_run

    def check_guardrails(self) -> bool:
        return True

    def execute(self, **kwargs) -> Dict[str, Any]:
        today = kwargs.get("on_date") or datetime.now(
            ZoneInfo("America/Denver")).date()
        if isinstance(today, str):
            today = date.fromisoformat(today)

        week_id = q.iso_week_id(today)
        queue = q.load_queue(week_id)
        if queue is None:
            return {"success": False,
                    "error": f"No queue file for {week_id}. "
                             "Run social.generate first."}

        due = q.posts_due(queue, today)
        if not due:
            self.logger.info(f"No posts due on {today} ({week_id}).")
            return {"success": True, "published": 0, "skipped": 0,
                    "message": "nothing due today"}

        published, skipped, failed = [], [], []

        for post in due:
            pid, platform = post["id"], post["platform"]

            if post["status"] == q.STATUS_PENDING:
                self.logger.warning(
                    f"⏸  {pid}: still pending_review — NOT published. "
                    f"Approve it in the queue file or run social.approve.")
                skipped.append(pid)
                continue

            if self.dry_run:
                self.logger.info(f"[DRY RUN] would publish {pid}:")
                self.logger.info(f"  {post.get('title')}")
                self.logger.info(f"  {post.get('body', '')[:200]}")
                published.append(pid)
                continue

            missing = missing_env(platform)
            if missing:
                msg = f"{pid}: missing env vars {missing}"
                self.logger.error(f"❌ {msg}")
                post["status"] = q.STATUS_FAILED
                post["result"] = {"error": msg}
                failed.append(pid)
                continue

            publisher = PUBLISHERS[platform]()
            result = publisher.publish(post)
            post["result"] = result
            if result.get("success"):
                post["status"] = q.STATUS_PUBLISHED
                post["published_at"] = datetime.now().isoformat()
                self.logger.info(f"✅ {pid} published "
                                 f"({result.get('post_id')})")
                published.append(pid)
            else:
                post["status"] = q.STATUS_FAILED
                self.logger.error(f"❌ {pid} failed: "
                                  f"{str(result.get('error'))[:300]}")
                failed.append(pid)

        if not self.dry_run:
            q.save_queue(queue)

        return {
            "success": len(failed) == 0,
            "date": today.isoformat(),
            "week": week_id,
            "published": len(published),
            "skipped_pending_review": len(skipped),
            "failed": len(failed),
            "failed_ids": failed,
        }


class SocialApproveAgent(BaseAgent):
    """
    Approve pending_review posts (typically GBP) in a queue.

        python -m agents.run social.approve                 # next/current week, all pending
        python -m agents.run social.approve --week 2026-W30
    """

    def __init__(self, dry_run: bool = True):
        super().__init__(agent_name="social.approve", dry_run=dry_run)

    def check_guardrails(self) -> bool:
        return True

    def execute(self, **kwargs) -> Dict[str, Any]:
        week_id = kwargs.get("week")
        if not week_id:
            # default: the nearest week that has a queue file with pending posts
            today = date.today()
            for candidate in (q.iso_week_id(q.next_week_dates(today)[0]),
                              q.iso_week_id(today)):
                queue = q.load_queue(candidate)
                if queue and any(p["status"] == q.STATUS_PENDING
                                 for p in queue["posts"]):
                    week_id = candidate
                    break
            if not week_id:
                return {"success": False,
                        "error": "No queue with pending posts found."}

        queue = q.load_queue(week_id)
        if queue is None:
            return {"success": False, "error": f"No queue for {week_id}"}

        pending = [p for p in queue["posts"]
                   if p["status"] == q.STATUS_PENDING]
        for p in pending:
            self.logger.info(f"\n--- {p['id']} ({p['scheduled_date']}) ---")
            self.logger.info(f"Title: {p.get('title')}")
            self.logger.info(f"Body:  {p.get('body')}")

        if self.dry_run:
            return {"success": True, "week": week_id,
                    "pending": len(pending),
                    "message": "dry-run: re-run with --live --yes to approve"}

        count = q.approve_posts(queue, platform=kwargs.get("platform"))
        q.save_queue(queue)
        self.logger.info(f"✅ Approved {count} post(s) in {week_id}")
        return {"success": True, "week": week_id, "approved": count}
