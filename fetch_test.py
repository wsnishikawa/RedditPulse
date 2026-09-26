import urllib.request
import json
from datetime import datetime

def fetch_subreddit_posts(subreddit, limit=100):
    url = f"https://arctic-shift.photon-reddit.com/api/posts/search?subreddit={subreddit}&limit={limit}"
    req = urllib.request.Request(
        url,
        headers={"User-Agent": "reddit-analyzer/1.0"}
    )
    with urllib.request.urlopen(req, timeout=30) as response:
        data = json.loads(response.read().decode('utf-8'))
        return data.get('data', [])

print("Testing n8n fetch...")
n8n_posts = fetch_subreddit_posts("n8n", 100)
print(f"n8n posts fetched: {len(n8n_posts)}")

print("Testing automation fetch...")
auto_posts = fetch_subreddit_posts("automation", 100)
print(f"automation posts fetched: {len(auto_posts)}")
 