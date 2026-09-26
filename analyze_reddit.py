import urllib.request
import json
import sys
from datetime import datetime

sys.stdout.reconfigure(encoding='utf-8')

def fetch_recent_posts(subreddit, limit=100):
    url = f"https://arctic-shift.photon-reddit.com/api/posts/search?subreddit={subreddit}&limit={limit}"
    req = urllib.request.Request(
        url,
        headers={"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) RedditAnalyzer/1.0"}
    )
    with urllib.request.urlopen(req, timeout=30) as resp:
        data = json.loads(resp.read().decode('utf-8'))
        return data.get('data', [])

print("Buscando 100 posts mais recentes de r/n8n...")
n8n_posts = fetch_recent_posts("n8n", 100)

print("Buscando 100 posts mais recentes de r/automation...")
auto_posts = fetch_recent_posts("automation", 100)

print(f"Total n8n obtidos: {len(n8n_posts)}")
print(f"Total automação obtidos: {len(auto_posts)}")

def process_post(p):
    score = p.get('score') or 0
    comments = p.get('num_comments') or 0
    engagement = score + comments
    created_ts = p.get('created_utc') or 0
    dt = datetime.fromtimestamp(created_ts) if created_ts else None
    dt_str = dt.strftime('%Y-%m-%d %H:%M:%S') if dt else 'N/A'
    
    permalink = p.get('permalink', '')
    if permalink and not permalink.startswith('http'):
        url = f"https://www.reddit.com{permalink}"
    else:
        url = p.get('url', '')

    return {
        'id': p.get('id'),
        'title': p.get('title', ''),
        'author': p.get('author', ''),
        'subreddit': p.get('subreddit', ''),
        'score': score,
        'num_comments': comments,
        'engagement': engagement,
        'upvote_ratio': p.get('upvote_ratio', 1.0),
        'created_utc': created_ts,
        'created_datetime': dt_str,
        'url': url,
        'selftext': (p.get('selftext') or '')[:300]
    }

processed_n8n = [process_post(p) for p in n8n_posts]
processed_auto = [process_post(p) for p in auto_posts]

# Ordenar por engajamento (score + num_comments) decrescente
top_5_n8n = sorted(processed_n8n, key=lambda x: (x['engagement'], x['score'], x['num_comments']), reverse=True)[:5]
top_5_auto = sorted(processed_auto, key=lambda x: (x['engagement'], x['score'], x['num_comments']), reverse=True)[:5]

print("\n=== TOP 5 POSTS DE n8n (MAIOR ENGAJAMENTO) ===")
for i, p in enumerate(top_5_n8n, 1):
    print(f"\n{i}. [{p['engagement']} engajamentos | {p['score']} upvotes | {p['num_comments']} comentários]")
    print(f"   Título: {p['title']}")
    print(f"   Autor: u/{p['author']} | Data: {p['created_datetime']}")
    print(f"   Link: {p['url']}")

print("\n=== TOP 5 POSTS DE AUTOMAÇÃO (MAIOR ENGAJAMENTO) ===")
for i, p in enumerate(top_5_auto, 1):
    print(f"\n{i}. [{p['engagement']} engajamentos | {p['score']} upvotes | {p['num_comments']} comentários]")
    print(f"   Título: {p['title']}")
    print(f"   Autor: u/{p['author']} | Data: {p['created_datetime']}")
    print(f"   Link: {p['url']}")

# Salvar arquivos JSON
with open('posts_n8n_100.json', 'w', encoding='utf-8') as f:
    json.dump(processed_n8n, f, ensure_ascii=False, indent=2)

with open('posts_automacao_100.json', 'w', encoding='utf-8') as f:
    json.dump(processed_auto, f, ensure_ascii=False, indent=2)

# Combinados e ordenados por data (100 mais recentes de ambos juntos)
combined_recent = sorted(processed_n8n + processed_auto, key=lambda x: x['created_utc'], reverse=True)[:100]
with open('posts_recentes_combinados_100.json', 'w', encoding='utf-8') as f:
    json.dump(combined_recent, f, ensure_ascii=False, indent=2)

print("\nArquivos JSON exportados com sucesso!")
