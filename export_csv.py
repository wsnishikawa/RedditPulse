import json
import csv

def json_to_csv(json_path, csv_path):
    with open(json_path, 'r', encoding='utf-8') as f:
        data = json.load(f)
    if not data:
        return
    fieldnames = ['id', 'title', 'author', 'subreddit', 'score', 'num_comments', 'engagement', 'upvote_ratio', 'created_datetime', 'url']
    with open(csv_path, 'w', encoding='utf-8-sig', newline='') as f:
        writer = csv.DictWriter(f, fieldnames=fieldnames, extrasaction='ignore')
        writer.writeheader()
        for row in data:
            writer.writerow(row)

json_to_csv('posts_n8n_100.json', 'posts_n8n_100.csv')
json_to_csv('posts_automacao_100.json', 'posts_automacao_100.csv')
json_to_csv('posts_recentes_combinados_100.json', 'posts_recentes_combinados_100.csv')

print("CSVs gerados com sucesso!")
