# Social Media Automation — Setup Guide

## Setup status (updated July 14, 2026)

| Item | Status |
|---|---|
| GBP APIs enabled in Cloud project `ai-agents-462010` (686553468274) | ✅ Done |
| OAuth app pushed to production (refresh tokens won't expire) | ✅ Done |
| OAuth Playground redirect URI added to client | ✅ Done |
| Refresh token with `business.manage` scope | ✅ Obtained (add as `GBP_REFRESH_TOKEN` GitHub secret) |
| GBP API allowlist (quota is 0 until approved) | ⏳ Pending — Google's application form was broken, support case **6-3978000041527** filed July 14, 2026. Watch kha.morris@gmail.com for their reply. |
| GBP_ACCOUNT_ID / GBP_LOCATION_ID | ⏳ Blocked until allowlist approval (fetch via OAuth Playground: GET mybusinessaccountmanagement.googleapis.com/v1/accounts) |
| Meta app "Mile High DNA Social" (App ID 1752519569256975) | ✅ Created under Khalid's dev account; Threads/Instagram/Pages use cases added |
| Page access for Khalid's profile (invite from Cynthia, full control) | ✅ Accepted July 14, 2026 |
| **Facebook**: permanent page token + page ID 664866596708872 | ✅ Done — in `agents/.env` (`META_PAGE_ID`, `META_PAGE_ACCESS_TOKEN`, `META_APP_ID`). Verified with live read. Add both as GitHub secrets. |
| **Instagram**: 60-day token via Instagram login | ✅ Done July 14, 2026 — `IG_ACCESS_TOKEN` + `IG_USER_ID` in `agents/.env`, verified live (@milehighdnatesting). Refresh every <60 days: `GET graph.instagram.com/refresh_access_token?grant_type=ig_refresh_token&access_token=<token>` |
| **Threads**: 60-day token via Threads tester | ✅ Done July 14, 2026 — `THREADS_ACCESS_TOKEN` + `THREADS_USER_ID` (28184334504483508) in `agents/.env`, verified live. Refresh: `GET graph.threads.net/refresh_access_token?grant_type=th_refresh_token&access_token=<token>` |
| Instagram image pool | ⏳ Not started — add branded 1080×1080 images to vite-milehighdna/public/social/, deploy, list URLs in social_platforms.yml |

Automated posting for Google Business Profile, Instagram, Facebook, and
Threads, driven by the `agents/` framework and GitHub Actions.

## How it works

```
Sunday 5pm MT   social-generate.yml
                └─ OpenAI writes 3 posts/platform for next week
                   (keyword clusters from agents/config/keyword_strategy.yml)
                └─ Queue committed to agents/state/social_queue/<week>.json
                └─ GitHub Issue opened listing GBP posts awaiting review

You             Approve GBP posts (Meta posts are auto-approved):
                • edit the queue file on GitHub: "pending_review" → "approved"
                • or run the "Social - Approve pending posts" workflow

Mon/Wed/Fri     social-publish.yml (9am MT)
                └─ Publishes today's approved posts
                └─ GBP posts still pending are skipped (never auto-posted)
                └─ Statuses committed back to the queue file
```

WhatsApp is **not** included: WhatsApp has no public API for Status or
Channel posts. If you want WhatsApp later, the option is the WhatsApp
Business Cloud API for template messages to opted-in customers — a
different (marketing/messaging) use case, happy to build separately.

## Voices per platform

Defined in `agents/config/social_platforms.yml`:
- **GBP** — factual, local, comparison-shopper tone. No emojis/hashtags/phone numbers. Review required.
- **Instagram** — warm, family-story oriented, hashtags, requires image. Auto.
- **Facebook** — community explainer, ends with a link. Auto.
- **Threads** — short, candid, one thought per post. Auto.

Keyword targeting comes from `agents/config/keyword_strategy.yml`
(built from SemRush data, July 2026 — striking-distance local keywords
and the prenatal-cost cluster are weighted highest). Refresh it
quarterly.

## Credentials you need to set up (one time)

Add all of these as **GitHub repo secrets** (Settings → Secrets and
variables → Actions).

### 1. OpenAI
- `OPENAI_API_KEY` — you already have this in `agents/.env`; copy the same value.

### 2. Meta (Facebook + Instagram) — one app covers both
1. Go to https://developers.facebook.com → Create App → type "Business".
2. Add the **Facebook Login for Business** and **Instagram Graph API** products.
3. Make sure your Instagram account is a **Business account** linked to
   your Facebook Page (Meta Business Suite → Settings → Linked accounts).
4. In Graph API Explorer (https://developers.facebook.com/tools/explorer):
   - Select your app, request permissions: `pages_manage_posts`,
     `pages_read_engagement`, `instagram_basic`, `instagram_content_publish`.
   - Generate a User token, then exchange it for a **long-lived Page
     access token** (Meta docs: "Get a Long-Lived Page Access Token").
     Page tokens derived from long-lived user tokens do not expire.
5. Secrets:
   - `META_PAGE_ID` — from your Facebook Page → About, or Graph Explorer `/me/accounts`
   - `META_PAGE_ACCESS_TOKEN` — the long-lived Page token
   - `IG_USER_ID` — Graph Explorer: `GET /{page-id}?fields=instagram_business_account`

Because you're posting to your **own** Page/account and you have a role on
the app, this works in Development mode — no Meta App Review needed.

### 3. Threads
Threads uses a separate API (graph.threads.net) and its own token:
1. In the same Meta app, add the **Threads API** product.
2. Request scopes `threads_basic`, `threads_content_publish`.
3. Generate a long-lived Threads token (60 days; the app can refresh it —
   see "Token refresh" below).
4. Secrets:
   - `THREADS_USER_ID` — `GET https://graph.threads.net/v1.0/me`
   - `THREADS_ACCESS_TOKEN`

### 4. Google Business Profile
GBP API access requires a one-time approval from Google:
1. In Google Cloud Console (same project as your existing OAuth client),
   fill out the **Business Profile API access request**:
   https://developers.google.com/my-business/content/prereqs
   (approval usually takes a few days).
2. Enable "Google My Business API" in the project.
3. Generate a refresh token with scope
   `https://www.googleapis.com/auth/business.manage` using the OAuth
   playground (https://developers.google.com/oauthplayground — gear icon →
   use your own credentials) with your existing
   `GOOGLE_CLIENT_ID`/`GOOGLE_CLIENT_SECRET`.
4. Get your IDs: `GET https://mybusinessaccountmanagement.googleapis.com/v1/accounts`
   then `GET .../v1/accounts/{id}/locations` (or grab the location id from
   the GBP dashboard URL).
5. Secrets:
   - `GOOGLE_CLIENT_ID`, `GOOGLE_CLIENT_SECRET` (same as in `vite-milehighdna/.env`)
   - `GBP_REFRESH_TOKEN` (the new one with business.manage scope)
   - `GBP_ACCOUNT_ID`, `GBP_LOCATION_ID` (numeric ids only)

### 5. Instagram images
The IG API requires every post to have an image, referenced by public URL.
1. Add 6–10 branded images (1080×1080) to `vite-milehighdna/public/social/`
   and deploy.
2. List their URLs under `image_pool:` in
   `agents/config/social_platforms.yml`.
Until the pool has images, Instagram posts are **skipped** (everything
else still publishes).

## Token refresh / maintenance

| Token | Lifetime | What to do |
|---|---|---|
| Meta Page token | Doesn't expire | Nothing (revalidate if you change your FB password) |
| Threads token | 60 days | Refresh: `GET https://graph.threads.net/refresh_access_token?grant_type=th_refresh_token&access_token=<token>` — update the secret. Calendar reminder every ~7 weeks. |
| Google refresh token | Indefinite | Nothing, unless revoked |
| OpenAI key | Indefinite | Nothing |

## Local commands

```bash
cd /Users/khalidmorris/dev/web/milehighdna
pip3 install -r agents/requirements.txt

# Preview a week of content without posting (uses OpenAI if key present)
python3 -m agents.run social.generate --live --yes     # writes queue file
python3 -m agents.run social.publish                    # dry-run: shows what would post
python3 -m agents.run social.approve                    # shows pending GBP posts
python3 -m agents.run social.approve --live --yes       # approves them
```

## Safety rails built in

- GBP posts are never published without approval.
- Generator hard-blocks: pricing, phone numbers (GBP auto-rejects those),
  "guaranteed"/"ensures", competitor mentions, medical/legal advice
  (validated with regex + prompt rules; failed posts are regenerated).
- One city per post, keyword worked in naturally, openings tracked to
  avoid repetitive posts.
- Missing credentials fail that platform only, not the whole run.
