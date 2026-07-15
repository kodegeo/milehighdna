"""
Live publishers for social platforms.

All publishers take a post dict from the weekly queue and return
{"success": bool, "post_id" or "error": ...}.

Required environment variables (see SOCIAL_AUTOMATION_SETUP.md):

Facebook / Instagram (Meta Graph API):
    META_PAGE_ID            Facebook Page ID
    META_PAGE_ACCESS_TOKEN  Long-lived Page access token
    IG_USER_ID              Instagram Business account ID (linked to the Page)

Threads (separate token system):
    THREADS_USER_ID         Threads user ID
    THREADS_ACCESS_TOKEN    Long-lived Threads access token

Google Business Profile:
    GOOGLE_CLIENT_ID / GOOGLE_CLIENT_SECRET
    GBP_REFRESH_TOKEN       OAuth refresh token w/ business.manage scope
    GBP_ACCOUNT_ID          numeric account id
    GBP_LOCATION_ID         numeric location id
"""

import os
import time
from typing import Any, Dict

import requests

GRAPH = "https://graph.facebook.com/v21.0"
THREADS_GRAPH = "https://graph.threads.net/v1.0"
GBP_API = "https://mybusiness.googleapis.com/v4"
TIMEOUT = 30


def _caption(post: Dict[str, Any], include_link: bool = False) -> str:
    body = post.get("body", "")
    tags = post.get("hashtags") or []
    parts = [body]
    if include_link and post.get("target_url") and post["target_url"] not in body:
        parts.append(post["target_url"])
    if tags:
        parts.append(" ".join(t if t.startswith("#") else f"#{t}" for t in tags))
    return "\n\n".join(parts)


class FacebookPublisher:
    def publish(self, post: Dict[str, Any]) -> Dict[str, Any]:
        page_id = os.environ["META_PAGE_ID"]
        token = os.environ["META_PAGE_ACCESS_TOKEN"]
        payload = {"message": _caption(post), "access_token": token}
        if post.get("target_url"):
            payload["link"] = post["target_url"]
        r = requests.post(f"{GRAPH}/{page_id}/feed", data=payload,
                          timeout=TIMEOUT)
        if r.ok:
            return {"success": True, "post_id": r.json().get("id")}
        return {"success": False, "error": r.text}


class InstagramPublisher:
    """Publishes via the Instagram API with Instagram Login
    (graph.instagram.com, its own IG_ACCESS_TOKEN — not the page token)."""

    IG_GRAPH = "https://graph.instagram.com/v25.0"

    def _container(self, token: str, data: Dict[str, Any]) -> Dict[str, Any]:
        data["access_token"] = token
        r = requests.post(f"{self.IG_GRAPH}/me/media", data=data,
                          timeout=TIMEOUT)
        return {"ok": r.ok, "id": r.json().get("id") if r.ok else None,
                "error": None if r.ok else r.text}

    def publish(self, post: Dict[str, Any]) -> Dict[str, Any]:
        token = os.environ["IG_ACCESS_TOKEN"]
        images = post.get("image_urls") or []
        if len(images) < 2 and not post.get("image_url"):
            return {"success": False,
                    "error": "Instagram requires image_url(s)"}

        if len(images) >= 2:
            # Carousel: item containers -> carousel container -> publish
            children = []
            for url in images[:10]:
                c = self._container(token, {"image_url": url,
                                            "is_carousel_item": "true"})
                if not c["ok"]:
                    return {"success": False,
                            "error": f"carousel item: {c['error']}"}
                children.append(c["id"])
            time.sleep(5)
            c = self._container(token, {
                "media_type": "CAROUSEL",
                "children": ",".join(children),
                "caption": _caption(post),
            })
        else:
            c = self._container(token, {"image_url": post["image_url"],
                                        "caption": _caption(post)})
        if not c["ok"]:
            return {"success": False, "error": f"container: {c['error']}"}
        # brief wait for container processing
        time.sleep(5)
        r2 = requests.post(f"{self.IG_GRAPH}/me/media_publish", data={
            "creation_id": c["id"],
            "access_token": token,
        }, timeout=TIMEOUT)
        if r2.ok:
            return {"success": True, "post_id": r2.json().get("id")}
        return {"success": False, "error": f"publish: {r2.text}"}


class ThreadsPublisher:
    def publish(self, post: Dict[str, Any]) -> Dict[str, Any]:
        user_id = os.environ["THREADS_USER_ID"]
        token = os.environ["THREADS_ACCESS_TOKEN"]
        r = requests.post(f"{THREADS_GRAPH}/{user_id}/threads", data={
            "media_type": "TEXT",
            "text": _caption(post),
            "access_token": token,
        }, timeout=TIMEOUT)
        if not r.ok:
            return {"success": False, "error": f"container: {r.text}"}
        creation_id = r.json()["id"]
        time.sleep(5)
        r2 = requests.post(f"{THREADS_GRAPH}/{user_id}/threads_publish", data={
            "creation_id": creation_id,
            "access_token": token,
        }, timeout=TIMEOUT)
        if r2.ok:
            return {"success": True, "post_id": r2.json().get("id")}
        return {"success": False, "error": f"publish: {r2.text}"}


class GBPLivePublisher:
    """Publishes localPosts via the Google Business Profile v4 API."""

    def _access_token(self) -> str:
        r = requests.post("https://oauth2.googleapis.com/token", data={
            "client_id": os.environ["GOOGLE_CLIENT_ID"],
            "client_secret": os.environ["GOOGLE_CLIENT_SECRET"],
            "refresh_token": os.environ["GBP_REFRESH_TOKEN"],
            "grant_type": "refresh_token",
        }, timeout=TIMEOUT)
        r.raise_for_status()
        return r.json()["access_token"]

    def publish(self, post: Dict[str, Any]) -> Dict[str, Any]:
        account = os.environ["GBP_ACCOUNT_ID"]
        location = os.environ["GBP_LOCATION_ID"]
        try:
            token = self._access_token()
        except Exception as e:
            return {"success": False, "error": f"oauth: {e}"}

        body: Dict[str, Any] = {
            "languageCode": "en-US",
            "topicType": "STANDARD",
            "summary": post.get("body", ""),
            "callToAction": {
                "actionType": "LEARN_MORE",
                "url": post.get("cta_url")
                       or post.get("target_url")
                       or "https://milehighdnatesting.com/appointments",
            },
        }
        if post.get("image_url"):
            body["media"] = [{"mediaFormat": "PHOTO",
                              "sourceUrl": post["image_url"]}]

        r = requests.post(
            f"{GBP_API}/accounts/{account}/locations/{location}/localPosts",
            json=body,
            headers={"Authorization": f"Bearer {token}"},
            timeout=TIMEOUT,
        )
        if r.ok:
            return {"success": True, "post_id": r.json().get("name")}
        return {"success": False, "error": r.text}


PUBLISHERS = {
    "facebook": FacebookPublisher,
    "instagram": InstagramPublisher,
    "threads": ThreadsPublisher,
    "gbp": GBPLivePublisher,
}

REQUIRED_ENV = {
    "facebook": ["META_PAGE_ID", "META_PAGE_ACCESS_TOKEN"],
    "instagram": ["IG_ACCESS_TOKEN"],
    "threads": ["THREADS_USER_ID", "THREADS_ACCESS_TOKEN"],
    "gbp": ["GOOGLE_CLIENT_ID", "GOOGLE_CLIENT_SECRET", "GBP_REFRESH_TOKEN",
            "GBP_ACCOUNT_ID", "GBP_LOCATION_ID"],
}


def missing_env(platform: str) -> list:
    return [v for v in REQUIRED_ENV.get(platform, []) if not os.getenv(v)]
