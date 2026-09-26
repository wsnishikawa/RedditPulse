# Relatório de Mineração Reddit: n8n e Automação

**Data da Extração:** 26 de Setembro de 2026  
**Fonte:** Reddit API / Arctic Shift Archive (Tempo Real)  
**Total de Posts Analisados:** 200 posts (100 de `r/n8n` + 100 de `r/automation`)

---

## 📌 Resumo Executivo

Foram extraídos os **100 posts mais recentes** de cada uma das duas principais comunidades temáticas do Reddit:
1. **r/n8n**: Comunidade focada no ecossistema n8n, automação de fluxos, nós customizados, integração com LLMs/RAG e auto-hospedagem (*self-hosted*).
2. **r/automation**: Comunidade ampla focada em automação de processos, RPA, integração de negócios, agentes autônomos de IA e engenharia de confiabilidade de fluxos.

A métrica de **Engajamento Total** foi calculada pela soma de **Upvotes (Score)** + **Comentários Totais** gerados pela comunidade.

---

## 🏆 Top 5 Posts Mais Relevantes: n8n (`r/n8n`)

| # | Título | Autor | Upvotes | Comentários | Engajamento | Link |
|---|---|---|:---:|:---:|:---:|---|
| 1 | **Built an n8n Workflow to Automatically DM People Who Comment on Instagram Posts** | `u/cuebicai` | 71 | 38 | **109** | [Acessar Post](https://www.reddit.com/r/n8n/comments/1wnwmlo/built_an_n8n_workflow_to_automatically_dm_people/) |
| 2 | **Built a fully local RAG PDF chatbot using n8n, Ollama, Qdrant and Llama 3.1** | `u/Wise_Commission_6624` | 69 | 5 | **74** | [Acessar Post](https://www.reddit.com/r/n8n/comments/1wo3ded/built_a_fully_local_rag_pdf_chatbot_using_n8n/) |
| 3 | **Need recommendation for advance N8n courses** | `u/Dull-Bag-8314` | 19 | 23 | **42** | [Acessar Post](https://www.reddit.com/r/n8n/comments/1wp5gw3/need_recommendation_for_advance_n8n_courses/) |
| 4 | **Just got my first n8n workflow published 🎉** | `u/Cultural-Box-3564` | 31 | 11 | **42** | [Acessar Post](https://www.reddit.com/r/n8n/comments/1wosknm/just_got_my_first_n8n_workflow_published/) |
| 5 | **Complete beginner. Everyone gives me a different learning order. Which one was real for you?** | `u/Free-Bonus1086` | 11 | 19 | **30** | [Acessar Post](https://www.reddit.com/r/n8n/comments/1wlt4oh/complete_beginner_everyone_gives_me_a_different/) |

### 🔍 Detalhamento dos Posts de n8n:
1. **Automação de Direct Message no Instagram por Comentário:**  
   Resolve a dor comum de marketing de influenciadores e empresas que solicitam palavras-chave nos comentários para enviar links no direct. O autor compartilhou o fluxo e tratou rate limits da API da Meta.
2. **Chatbot RAG 100% Local (n8n + Ollama + Qdrant + Llama 3.1):**  
   Foco extremo em privacidade de dados e custo zero de API. Permite ingestão de PDFs e perguntas/respostas usando banco vetorial Qdrant e modelo Llama 3.1 rodando no Ollama orquestrado pelo n8n.
3. **Cursos e Certificações Avançadas em n8n:**  
   Discussão rica onde especialistas compartilham roteiros para ir além do básico, dominando nós de código (JavaScript/Python), webhooks reversos, sub-workflows e esteiras de produção.
4. **Workflow Oficial Publicado na Biblioteca do n8n:**  
   Pipeline de social listening que monitora menções no Reddit, classifica sentimentos via Claude (Anthropic), salva no Google Sheets e emite alertas em tempo real no Slack.
5. **Roteiro de Aprendizado para Iniciantes:**  
   Discussão sobre a melhor ordem de estudos para quem sai do absoluto zero (lógica de programação vs. nós prontos vs. APIs e JSON).

---

## 🏆 Top 5 Posts Mais Relevantes: Automação (`r/automation`)

| # | Título | Autor | Upvotes | Comentários | Engajamento | Link |
|---|---|---|:---:|:---:|:---:|---|
| 1 | **Are AI Agents Better Than Automation?** | `u/Signal-Heron5805` | 36 | 39 | **75** | [Acessar Post](https://www.reddit.com/r/automation/comments/1wibcgg/are_ai_agents_better_than_automation/) |
| 2 | **Anyone automate action items from meetings via transcription?** | `u/Scary-Cheek1733` | 20 | 35 | **55** | [Acessar Post](https://www.reddit.com/r/automation/comments/1wp1op8/anyone_automate_action_items_from_meetings_via/) |
| 3 | **Help needed! (Building AI Voice Assistant for Dad's Business with n8n/Twilio)** | `u/Hassieee` | 16 | 33 | **49** | [Acessar Post](https://www.reddit.com/r/automation/comments/1wmsjdq/help_needed/) |
| 4 | **the automation failures that hurt most never threw an error. they just stopped.** | `u/arthaudm` | 6 | 27 | **33** | [Acessar Post](https://www.reddit.com/r/automation/comments/1wott9p/the_automation_failures_that_hurt_most_never/) |
| 5 | **Agentic workflow automation vs plain RPA, where has the agent earned its keep for you?** | `u/Powerful-Mixture-664` | 9 | 24 | **33** | [Acessar Post](https://www.reddit.com/r/automation/comments/1wn7275/agentic_workflow_automation_vs_plain_rpa_where/) |

### 🔍 Detalhamento dos Posts de Automação:
1. **Agentes de IA vs. Automação Tradicional:**  
   Debate sobre a tendência de substituir fluxos determinísticos clássicos por agentes de IA. A conclusão dos profissionais é que tarefas mecânicas (ETL, envio de emails, sincronização de bancos) não devem usar IA por questões de custo e previsibilidade, reservando LLMs apenas para ambiguidade e raciocínio.
2. **Automação de Tarefas e Action Items a partir de Reuniões:**  
   Discussão sobre esteiras que recebem áudio/transcrição de reuniões (Zoom/Teams/Meet), extraem compromissos com prazos e criam itens automaticamente em softwares como Jira, Notion, Asana e Todoist.
3. **Assistente de Voz com IA para Pequenos Negócios:**  
   Montagem de uma solução de atendimento telefônico automatizado usando n8n integrado com Twilio, Vapi / Retell AI e ChatGPT para agendamentos e suporte.
4. **Falhas Silenciosas em Automações:**  
   Reflexão profunda sobre erros silenciosos: tokens OAuth expirados que retornam 200 OK vazio, webhooks desligados upstream ou rotinas cron pausadas sem disparar alertas, com estratégias de dead man's switch e monitoramento de batimento cardíaco (*heartbeat*).
5. **Automação Agêntica vs. RPA Tradicional:**  
   Comparativo pragmático em ambientes corporativos de quando agentes superam bots tradicionais (UiPath/Power Automate) e os casos onde RPA continua sendo muito mais estável.

---

## 📁 Arquivos Gerados no Projeto

Todos os dados brutos e planilhas foram organizados e exportados para o diretório de trabalho:
- [posts_n8n_100.json](file:///c:/Users/Aluno/Documents/wsnc/projeto2/posts_n8n_100.json): 100 posts mais recentes de n8n com todos os metadados.
- [posts_automacao_100.json](file:///c:/Users/Aluno/Documents/wsnc/projeto2/posts_automacao_100.json): 100 posts mais recentes de automação.
- [posts_recentes_combinados_100.json](file:///c:/Users/Aluno/Documents/wsnc/projeto2/posts_recentes_combinados_100.json): 100 posts mais recentes consolidados e ordenados cronologicamente.
- [posts_n8n_100.csv](file:///c:/Users/Aluno/Documents/wsnc/projeto2/posts_n8n_100.csv): Planilha CSV formatada dos posts de n8n.
- [posts_automacao_100.csv](file:///c:/Users/Aluno/Documents/wsnc/projeto2/posts_automacao_100.csv): Planilha CSV formatada dos posts de automação.
- [posts_recentes_combinados_100.csv](file:///c:/Users/Aluno/Documents/wsnc/projeto2/posts_recentes_combinados_100.csv): Planilha CSV consolidada pronta para importação no Excel / Google Sheets.
