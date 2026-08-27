#!/usr/bin/env python3
"""
Generate the refresh tokens the marketing report needs.

Run once per API. It prints a consent URL, you approve in a browser, paste the
code back, and it prints a refresh token to store as a GitHub secret.

    python agents/scripts/google_oauth_setup.py gsc
    python agents/scripts/google_oauth_setup.py ga4
    python agents/scripts/google_oauth_setup.py ads

Requires GOOGLE_CLIENT_ID and GOOGLE_CLIENT_SECRET in the environment (the same
OAuth client the GBP agents already use). In Google Cloud Console the client
must have "http://localhost" listed as an authorised redirect URI, and each
API below must be enabled on the project.

Nothing is written to disk — copy the token straight into GitHub secrets.
"""

import json
import os
import sys
import urllib.error
import urllib.parse
import urllib.request

SCOPES = {
    "gsc": (
        "https://www.googleapis.com/auth/webmasters.readonly",
        "GSC_REFRESH_TOKEN",
        "Search Console API",
    ),
    "ga4": (
        "https://www.googleapis.com/auth/analytics.readonly",
        "GA4_REFRESH_TOKEN",
        "Google Analytics Data API",
    ),
    "ads": (
        "https://www.googleapis.com/auth/adwords",
        "ADS_REFRESH_TOKEN",
        "Google Ads API (also needs an approved developer token)",
    ),
}

REDIRECT_URI = "http://localhost"
AUTH_ENDPOINT = "https://accounts.google.com/o/oauth2/v2/auth"
TOKEN_ENDPOINT = "https://oauth2.googleapis.com/token"


def main() -> int:
    if len(sys.argv) != 2 or sys.argv[1] not in SCOPES:
        print(f"Usage: {sys.argv[0]} {{{'|'.join(SCOPES)}}}", file=sys.stderr)
        return 2

    key = sys.argv[1]
    scope, secret_name, api_name = SCOPES[key]

    client_id = os.getenv("GOOGLE_CLIENT_ID")
    client_secret = os.getenv("GOOGLE_CLIENT_SECRET")
    if not (client_id and client_secret):
        print(
            "Set GOOGLE_CLIENT_ID and GOOGLE_CLIENT_SECRET first "
            "(the same values the GBP agents use).",
            file=sys.stderr,
        )
        return 1

    params = urllib.parse.urlencode(
        {
            "client_id": client_id,
            "redirect_uri": REDIRECT_URI,
            "response_type": "code",
            "scope": scope,
            "access_type": "offline",
            "prompt": "consent",  # force a refresh token even on re-auth
        }
    )

    print(f"\nEnable «{api_name}» on the Cloud project first, then:\n")
    print(f"1. Open this URL and approve:\n\n   {AUTH_ENDPOINT}?{params}\n")
    print(
        "2. Google redirects to http://localhost/?code=... — the page will fail\n"
        "   to load, that's fine. Copy the `code` value out of the address bar.\n"
    )
    code = input("Paste the code here: ").strip()
    if not code:
        print("No code supplied.", file=sys.stderr)
        return 1

    data = urllib.parse.urlencode(
        {
            "code": code,
            "client_id": client_id,
            "client_secret": client_secret,
            "redirect_uri": REDIRECT_URI,
            "grant_type": "authorization_code",
        }
    ).encode()

    try:
        with urllib.request.urlopen(
            urllib.request.Request(TOKEN_ENDPOINT, data=data, method="POST"), timeout=30
        ) as resp:
            payload = json.load(resp)
    except urllib.error.HTTPError as exc:
        print(f"Token exchange failed: {exc.code} {exc.read().decode()[:300]}", file=sys.stderr)
        return 1

    refresh = payload.get("refresh_token")
    if not refresh:
        print(
            "No refresh_token returned. This usually means the account has "
            "already granted consent — revoke it at "
            "https://myaccount.google.com/permissions and retry.",
            file=sys.stderr,
        )
        return 1

    print("\n" + "=" * 60)
    print(f"Store this as GitHub secret  {secret_name}")
    print("=" * 60)
    print(refresh)
    print("=" * 60 + "\n")
    return 0


if __name__ == "__main__":
    sys.exit(main())
