#!/usr/bin/env python3
"""Print a markdown summary of pending_review posts in the newest queue.

First line: 'WEEK: <week-id>'. Remaining lines: issue body markdown.
Prints only the WEEK line if nothing is pending.
"""

import glob
import json
import os

queue_dir = os.path.join(os.path.dirname(__file__), "..", "state",
                         "social_queue")
files = sorted(glob.glob(os.path.join(queue_dir, "*.json")))
if not files:
    print("WEEK: none")
    raise SystemExit(0)

with open(files[-1]) as f:
    queue = json.load(f)

print(f"WEEK: {queue['week']}")

pending = [p for p in queue["posts"] if p.get("status") == "pending_review"]
if not pending:
    raise SystemExit(0)

rel_path = f"agents/state/social_queue/{queue['week']}.json"
print("These Google Business Profile posts are **pending review** and will "
      "NOT publish until approved.\n")
print(f"To approve: edit `{rel_path}` (change `pending_review` to "
      "`approved`), or run the **Social - Approve pending posts** "
      "workflow.\n")
for p in pending:
    print(f"### {p['id']} — scheduled {p['scheduled_date']}")
    print(f"**{p.get('title', '')}**\n")
    print(p.get("body", ""))
    print()
