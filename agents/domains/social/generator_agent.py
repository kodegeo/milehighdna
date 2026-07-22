"""
Social Content Generator Agent

Generates a full week of platform-specific posts (GBP, Instagram,
Facebook, Threads) using OpenAI, guided by keyword_strategy.yml and
social_platforms.yml. Writes the queue to agents/state/social_queue/.

Run Sunday (or any day — it always targets the NEXT week):
    python -m agents.run social.generate --live --yes
For the week containing today (mid-week backfill):
    python -m agents.run social.generate --live --yes --current-week
Dry-run prints posts without calling OpenAI unless a key is present.
"""

import json
import os
import random
import re
from pathlib import Path
from typing import Any, Dict, List, Optional

import yaml

from agents.core.base_agent import BaseAgent
from agents.domains.social import queue as q

BANNED_PATTERNS = [
    r"\$\s?\d",              # pricing
    r"\bguarantee[ds]?\b",
    r"\bensures?\b",
    r"\bperfect for\b",
    r"\b100%\b",
    r"\d{3}[-.)\s]\d{3}[-.\s]\d{4}",  # phone numbers (GBP auto-reject)
]


class SocialGenerateAgent(BaseAgent):
    """Generates the weekly social posting queue."""

    def __init__(self, dry_run: bool = True):
        super().__init__(agent_name="social.generate", dry_run=dry_run)
        agents_root = Path(__file__).parent.parent.parent
        self.config_dir = agents_root / "config"
        self.prompts_dir = agents_root / "prompts" / "social"

        with open(self.config_dir / "social_platforms.yml") as f:
            self.platform_config = yaml.safe_load(f)
        with open(self.config_dir / "keyword_strategy.yml") as f:
            self.strategy = yaml.safe_load(f)
        with open(self.prompts_dir / "base.txt") as f:
            self.prompt_template = f.read()

        self._openai_client = None

    # ---------- OpenAI (plain HTTPS, no SDK dependency) ----------

    def _generate_post_text(self, prompt: str) -> Dict[str, Any]:
        import requests
        resp = requests.post(
            "https://api.openai.com/v1/chat/completions",
            headers={"Authorization": f"Bearer {os.environ['OPENAI_API_KEY']}"},
            json={
                "model": os.getenv("OPENAI_MODEL", "gpt-4o-mini"),
                "messages": [{"role": "user", "content": prompt}],
                "temperature": 0.9,
                "response_format": {"type": "json_object"},
            },
            timeout=60,
        )
        resp.raise_for_status()
        return json.loads(resp.json()["choices"][0]["message"]["content"])

    # ---------- content planning ----------

    def _pick_clusters(self, n: int) -> List[Dict[str, Any]]:
        """Weighted pick of n clusters, avoiding same cluster twice in a row."""
        clusters = self.strategy["clusters"]
        weights = [c.get("weight", 1) for c in clusters]
        picked: List[Dict[str, Any]] = []
        while len(picked) < n:
            c = random.choices(clusters, weights=weights, k=1)[0]
            if picked and picked[-1]["name"] == c["name"]:
                continue
            picked.append(c)
        return picked

    def _recent_openings(self) -> List[str]:
        return self.state.get("recent_openings", [])

    def _remember_opening(self, body: str) -> None:
        opening = " ".join(body.split()[:6])
        recent = self.state.get("recent_openings", [])
        recent.append(opening)
        self.state["recent_openings"] = recent[-30:]

    def _validate(self, post: Dict[str, Any], max_length: int) -> Optional[str]:
        body = post.get("body", "")
        if not body or len(body) < 60:
            return "body too short"
        if len(body) > max_length:
            return f"body exceeds {max_length} chars"
        text = f"{post.get('title','')} {body}"
        for pat in BANNED_PATTERNS:
            if re.search(pat, text, re.IGNORECASE):
                return f"matched banned pattern: {pat}"
        return None

    def _platform_extras(self, platform_key: str, cfg: Dict[str, Any]) -> str:
        extras = []
        if cfg.get("hashtags"):
            extras.append(f"- Include exactly {cfg['hashtags']} relevant hashtags "
                          "(mix of local Denver tags and service tags).")
        if platform_key == "gbp":
            extras.append("- Do NOT include any URL in the body (the CTA button carries the link).")
            extras.append("- No emojis, no hashtags.")
        if platform_key == "instagram":
            extras.append("- Do not include raw URLs; say 'link in bio' if needed.")
        if platform_key == "threads":
            extras.append("- Single short paragraph. No links unless essential.")
        if platform_key == "facebook":
            extras.append(f"- End with the target URL on its own line.")
        return "\n".join(extras)

    # ---------- image pool ----------

    def _next_image(self) -> Optional[str]:
        pool = self.platform_config.get("image_pool") or []
        if not pool:
            return None
        idx = self.state.get("image_index", 0)
        url = pool[idx % len(pool)]
        self.state["image_index"] = idx + 1
        return url

    def _next_images(self, n: int) -> list:
        """n distinct images from the pool (fewer if the pool is small)."""
        pool = self.platform_config.get("image_pool") or []
        if not pool:
            return []
        n = min(n, len(pool))
        return [self._next_image() for _ in range(n)]

    # ---------- main ----------

    def execute(self, **kwargs) -> Dict[str, Any]:
        sched = self.platform_config["schedule"]
        if kwargs.get("current_week"):
            dates = q.current_week_dates(days=sched["days"])
        else:
            dates = q.next_week_dates(days=sched["days"])
        week_id = q.iso_week_id(dates[0])

        existing = q.load_queue(week_id)
        if existing and not kwargs.get("force"):
            self.logger.info(
                f"Queue for {week_id} already exists — leaving it untouched "
                "(use --force to regenerate). Nothing to do.")
            return {"success": True, "skipped": True, "week": week_id,
                    "message": f"Queue for {week_id} already exists; "
                               "kept as-is."}

        queue = q.new_queue(week_id)
        platforms = {k: v for k, v in self.platform_config["platforms"].items()
                     if v.get("enabled")}
        business = self.platform_config["business"]
        errors: List[str] = []

        clusters_for_week = self._pick_clusters(len(dates))
        locations = (self.strategy["locations"]["primary"]
                     + self.strategy["locations"]["rotation"])

        # Pick which day's Instagram post becomes a carousel (if configured)
        ig_cfg = self.platform_config["platforms"].get("instagram", {})
        carousel_cfg = ig_cfg.get("carousel") or {}
        carousel_days: set = set()
        if carousel_cfg.get("posts_per_week", 0) > 0:
            k = min(carousel_cfg["posts_per_week"], len(dates))
            carousel_days = set(random.sample(range(len(dates)), k))

        for day_idx, post_date in enumerate(dates):
            cluster = clusters_for_week[day_idx]
            keyword = random.choice(cluster["keywords"])
            location = locations[(self.state.get("location_index", 0) + day_idx)
                                 % len(locations)]
            # If the keyword names a city, the post must use that city
            for loc in locations:
                if loc.lower() in keyword.lower():
                    location = loc
                    break

            for pkey, pcfg in platforms.items():
                post_id = f"{week_id}-{post_date.strftime('%a').lower()}-{pkey}"
                image_url = None
                image_urls: list = []
                if pcfg.get("requires_image"):
                    if pkey == "instagram" and day_idx in carousel_days:
                        image_urls = self._next_images(
                            carousel_cfg.get("images", 3))
                    image_url = (image_urls[0] if image_urls
                                 else self._next_image())
                    if image_url is None:
                        behavior = self.platform_config.get(
                            "missing_image_behavior", "skip")
                        if behavior == "skip":
                            self.logger.warning(
                                f"{post_id}: no image in pool — skipping "
                                f"{pkey} (requires_image)")
                            queue["posts"].append({
                                "id": post_id, "platform": pkey,
                                "scheduled_date": post_date.isoformat(),
                                "status": q.STATUS_SKIPPED,
                                "skip_reason": "image_pool empty",
                            })
                            continue
                        errors.append(f"{post_id}: image required but pool empty")
                        continue

                prompt = self.prompt_template.format(
                    platform_name=pcfg["display_name"],
                    voice=pcfg["voice"].strip(),
                    cluster_name=cluster["name"],
                    keyword=keyword,
                    target_url=cluster["target_url"],
                    location=location,
                    max_length=pcfg["max_length"],
                    optimal_length=pcfg["optimal_length"],
                    recent_openings="; ".join(self._recent_openings()) or "(none)",
                    platform_extras=self._platform_extras(pkey, pcfg),
                )

                if self.dry_run:
                    content = {"title": f"[DRY RUN] {cluster['name']}",
                               "body": f"[DRY RUN] {pkey} post about {keyword} "
                                       f"in {location}.", "hashtags": []}
                else:
                    content = None
                    for attempt in range(3):
                        try:
                            candidate = self._generate_post_text(prompt)
                            problem = self._validate(candidate,
                                                     pcfg["max_length"])
                            if problem is None:
                                content = candidate
                                break
                            self.logger.warning(
                                f"{post_id} attempt {attempt+1}: {problem}")
                        except Exception as e:
                            self.logger.warning(
                                f"{post_id} attempt {attempt+1} failed: {e}")
                    if content is None:
                        errors.append(f"{post_id}: generation failed after 3 attempts")
                        continue
                    self._remember_opening(content["body"])

                status = (q.STATUS_APPROVED if pcfg.get("auto_approve")
                          else q.STATUS_PENDING)
                queue["posts"].append({
                    "id": post_id,
                    "platform": pkey,
                    "scheduled_date": post_date.isoformat(),
                    "status": status,
                    "cluster": cluster["name"],
                    "keyword": keyword,
                    "location": location,
                    "target_url": cluster["target_url"],
                    "cta_url": business["booking_url"] if pkey == "gbp"
                               else cluster["target_url"],
                    "title": content.get("title", ""),
                    "body": content.get("body", ""),
                    "hashtags": content.get("hashtags", []),
                    "image_url": image_url,
                    "image_urls": image_urls if len(image_urls) >= 2 else [],
                    "published_at": None,
                    "result": None,
                })

        self.state["location_index"] = (self.state.get("location_index", 0)
                                        + len(dates))
        self._save_state()

        path = q.save_queue(queue)
        generated = [p for p in queue["posts"]
                     if p["status"] != q.STATUS_SKIPPED]
        pending = [p for p in generated if p["status"] == q.STATUS_PENDING]

        self.logger.info(f"Queue written: {path}")
        for p in queue["posts"]:
            self.logger.info(
                f"  {p['scheduled_date']} [{p['platform']:>9}] "
                f"{p['status']:>14} — {p.get('title','')[:50]}")

        return {
            "success": len(errors) == 0,
            "week": week_id,
            "queue_file": str(path),
            "posts_generated": len(generated),
            "pending_review": len(pending),
            "pending_platforms": sorted({p["platform"] for p in pending}),
            "errors": errors,
            "total_errors": len(errors),
        }
