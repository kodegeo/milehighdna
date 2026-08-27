"""
Google OAuth helper.

Exchanges a long-lived refresh token for a short-lived access token using the
GOOGLE_CLIENT_ID / GOOGLE_CLIENT_SECRET pair already used by the GBP agents.

Each API needs its own refresh token because each needs a different scope:

    Search Console   https://www.googleapis.com/auth/webmasters.readonly
    GA4 Data API     https://www.googleapis.com/auth/analytics.readonly
    Google Ads       https://www.googleapis.com/auth/adwords

Generate one with agents/scripts/google_oauth_setup.py, then store it as
GSC_REFRESH_TOKEN / GA4_REFRESH_TOKEN / ADS_REFRESH_TOKEN.
"""

import json
import os
import urllib.error
import urllib.parse
import urllib.request
from typing import Optional

TOKEN_ENDPOINT = "https://oauth2.googleapis.com/token"


class GoogleAuthError(RuntimeError):
    """Raised when an access token cannot be obtained."""


def get_access_token(refresh_token_env: str) -> Optional[str]:
    """
    Return an access token, or None when this integration is not configured.

    Missing configuration is deliberately not an error: the weekly report must
    still run and render, showing the section as "not configured" rather than
    failing the whole job.
    """
    refresh_token = os.getenv(refresh_token_env)
    client_id = os.getenv("GOOGLE_CLIENT_ID")
    client_secret = os.getenv("GOOGLE_CLIENT_SECRET")

    if not (refresh_token and client_id and client_secret):
        return None

    data = urllib.parse.urlencode(
        {
            "client_id": client_id,
            "client_secret": client_secret,
            "refresh_token": refresh_token,
            "grant_type": "refresh_token",
        }
    ).encode()

    req = urllib.request.Request(TOKEN_ENDPOINT, data=data, method="POST")
    try:
        with urllib.request.urlopen(req, timeout=30) as resp:
            return json.load(resp).get("access_token")
    except urllib.error.HTTPError as exc:
        body = exc.read().decode()[:300]
        raise GoogleAuthError(
            f"{refresh_token_env}: token refresh failed ({exc.code}). {body}"
        ) from exc
    except urllib.error.URLError as exc:
        raise GoogleAuthError(f"{refresh_token_env}: {exc.reason}") from exc


def api_post(url: str, token: str, payload: dict, extra_headers: dict | None = None) -> dict:
    """POST JSON to a Google API and return the decoded response."""
    headers = {
        "Authorization": f"Bearer {token}",
        "Content-Type": "application/json",
    }
    if extra_headers:
        headers.update(extra_headers)

    req = urllib.request.Request(
        url, data=json.dumps(payload).encode(), headers=headers, method="POST"
    )
    with urllib.request.urlopen(req, timeout=60) as resp:
        return json.load(resp)
