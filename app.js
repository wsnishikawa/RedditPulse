/**
 * RedditPulse - Modern Analytics Dashboard
 * Interactive application logic for Reddit Automation & n8n pulse
 */

// =============================================================================
// CURATED TOP 5 DATASETS WITH RICH INSIGHTS & METRICS
// =============================================================================

const CURATED_TOP_5 = {
  n8n: [
    {
      id: "1wnwmlo",
      rank: 1,
      title: "Built an n8n Workflow to Automatically DM People Who Comment on Instagram Posts",
      author: "cuebicai",
      subreddit: "r/n8n",
      score: 71,
      num_comments: 38,
      engagement: 109,
      upvote_ratio: 0.98,
      created_datetime: "2026-09-23 02:03:44",
      url: "https://www.reddit.com/r/n8n/comments/1wnwmlo/built_an_n8n_workflow_to_automatically_dm_people/",
      tags: ["Instagram API", "Social Lead Gen", "Webhooks", "Rate Limiting"],
      analysis: `
        <strong>Caso de Uso:</strong> Automação de envio de mensagens diretas no Instagram acionada por comentários (ex: "comente QUERO para receber o link").<br>
        <strong>Destaques da Solução:</strong> Utiliza webhooks da Meta Graph API para escuta em tempo real, validação de tokens e controle de atraso inteligente (delay node) no n8n para prevenir bloqueios de spam por disparo em massa da Meta.<br>
        <strong>Impacto na Comunidade:</strong> Grande receptividade por substituir ferramentas pagas caras como ManyChat por uma infraestrutura open-source e autogerenciada.
      `,
      excerpt: "I wanted to automate one of those small repetitive tasks that gets annoying pretty quickly: sending a DM to people who comment on an Instagram post. When someone comments a trigger keyword, n8n grabs the user and sends the configured link directly.",
      selftext: `I wanted to automate one of those small repetitive tasks that gets annoying pretty quickly: sending a DM to people who comment on an Instagram post.

# The Problem
For example, you make a post and tell people:
> Comment "PAYMENT" and I'll send you the private link!

Doing that manually for 50 or 100 comments takes forever. Most SaaS tools charge $15-$50/month just for basic keyword DM automation.

# The Solution
I built a self-contained n8n workflow using:
1. Meta Webhook listener for Instagram comment events.
2. Filter node to check keyword matches and ignore bot comments.
3. Wait node with jitter (randomized 3-8s delay) to look natural and respect rate limits.
4. HTTP Request node sending the DM via Instagram Graph API.

Zero third-party SaaS fees, full control, and works like a charm!`
    },
    {
      id: "1wo3ded",
      rank: 2,
      title: "Built a fully local RAG PDF chatbot using n8n, Ollama, Qdrant and Llama 3.1",
      author: "Wise_Commission_6624",
      subreddit: "r/n8n",
      score: 69,
      num_comments: 5,
      engagement: 74,
      upvote_ratio: 1.0,
      created_datetime: "2026-09-23 08:29:23",
      url: "https://www.reddit.com/r/n8n/comments/1wo3ded/built_a_fully_local_rag_pdf_chatbot_using_n8n/",
      tags: ["RAG Local", "Ollama", "Qdrant", "Llama 3.1", "Privacidade"],
      analysis: `
        <strong>Caso de Uso:</strong> Consulta interativa em documentos PDF confidenciais sem enviar nenhum byte para a nuvem pública (OpenAI/Anthropic).<br>
        <strong>Destaques da Solução:</strong> Pipeline orquestrado pelo n8n que extrai texto de PDFs, gera embeddings locais via Ollama, armazena em vetores no Qdrant e sintetiza respostas precisas com Llama 3.1.<br>
        <strong>Impacto na Comunidade:</strong> Arquitetura de referência para empresas com conformidade estrita (LGPD/GDPR) e entusiastas de hardware local.
      `,
      excerpt: "I've been learning more about RAG, embeddings, vector databases, and local LLMs, so I built a local PDF question-answering system where I can upload a PDF and query it completely offline with n8n.",
      selftext: `I've been learning more about RAG, embeddings, vector databases, and local LLMs, so I decided to build a small project that connects all of these pieces together.

The result is a local PDF question-answering system where I can upload a PDF, chunk it, embed it, and chat with it completely offline without sending any data to OpenAI.

Stack:
- n8n (Docker self-hosted)
- Ollama (running nomic-embed-text for embeddings and Llama 3.1 8B for inference)
- Qdrant (vector database in Docker)
- Local Webhook / Chat interface

The latency is around 1.5s on an RTX 3080 and accuracy has been outstanding on 50-page financial statements.`
    },
    {
      id: "1wosknm",
      rank: 3,
      title: "Just got my first n8n workflow published 🎉",
      author: "Cultural-Box-3564",
      subreddit: "r/n8n",
      score: 31,
      num_comments: 11,
      engagement: 42,
      upvote_ratio: 0.96,
      created_datetime: "2026-09-24 01:59:52",
      url: "https://www.reddit.com/r/n8n/comments/1wosknm/just_got_my_first_n8n_workflow_published/",
      tags: ["Templates Oficiais", "Social Listening", "Claude AI", "Slack Alerts"],
      analysis: `
        <strong>Caso de Uso:</strong> Esteira de escuta social e inteligência competitiva no Reddit com triagem por IA.<br>
        <strong>Destaques da Solução:</strong> O fluxo monitora palavras-chave em novos posts, submete o conteúdo ao Claude para classificação de relevância e sentimento, registra dados no Google Sheets e envia notificações prioritárias para o time no Slack.<br>
        <strong>Impacto na Comunidade:</strong> Publicado na galeria oficial de templates do n8n (n8n.io), servindo de modelo prático para equipes de vendas e produto.
      `,
      excerpt: "I built this to monitor Reddit for brand mentions, use Claude to classify them, and send the useful ones to Slack. The template is now live on n8n.io community library!",
      selftext: `I built this workflow to monitor Reddit for brand and competitor mentions, use Claude 3.5 to classify them by buying intent and sentiment, and send the qualified leads directly to Slack.

It uses Scrapio.dev + Claude + Google Sheets + Slack.

The workflow template was officially reviewed and approved on n8n.io! Really happy with how cleanly n8n handles chaining LLM analysis with spreadsheet logging.`
    },
    {
      id: "1wp5gw3",
      rank: 4,
      title: "Need recommendation for advance N8n courses",
      author: "Dull-Bag-8314",
      subreddit: "r/n8n",
      score: 19,
      num_comments: 23,
      engagement: 42,
      upvote_ratio: 0.92,
      created_datetime: "2026-09-24 12:56:01",
      url: "https://www.reddit.com/r/n8n/comments/1wp5gw3/need_recommendation_for_advance_n8n_courses/",
      tags: ["Carreira", "Cursos Avançados", "Certificações", "Boas Práticas"],
      analysis: `
        <strong>Caso de Uso:</strong> Elevação de maturidade técnica de profissionais que já conhecem a interface básica do n8n e desejam dominar cenários de produção.<br>
        <strong>Destaques da Discussão:</strong> A comunidade indicou como tópicos cruciais: nós de código com JavaScript/Python, paginação de APIs REST, filas Redis para escalabilidade e arquitetura modular de sub-workflows.<br>
        <strong>Impacto na Comunidade:</strong> Mapeamento das melhores certificações oficiais e gratuitas disponíveis na n8n Academy.
      `,
      excerpt: "I want to learn n8n automation at a professional level. I have gone through basic parts, but now want to elevate my skills with advanced courses and recognized certifications.",
      selftext: `So I want to learn n8n automation on a professional level. I have gone through basics in an AI bootcamp, but now I want to further elevate my level.

I WOULD WANT YOU GUYS TO SUGGEST ME SOME USEFUL COURSES IN WHICH I CAN ALSO GET CERTIFICATES.
Preferably structured paths that cover:
- High scale queue management with Redis
- Writing complex JavaScript in Code Nodes
- Error trigger workflows and retry policies
- Handling massive JSON payloads without OOM crashes.`
    },
    {
      id: "1wlt4oh",
      rank: 5,
      title: "Complete beginner. Everyone gives me a different learning order. Which one was real for you?",
      author: "Free-Bonus1086",
      subreddit: "r/n8n",
      score: 11,
      num_comments: 19,
      engagement: 30,
      upvote_ratio: 0.88,
      created_datetime: "2026-09-20 18:13:31",
      url: "https://www.reddit.com/r/n8n/comments/1wlt4oh/complete_beginner_everyone_gives_me_a_different/",
      tags: ["Iniciantes", "Roteiro de Estudos", "JSON & APIs", "Fundamentos"],
      analysis: `
        <strong>Caso de Uso:</strong> Orientação de carreira para iniciantes que não sabem por onde começar seus estudos em automação no-code/low-code.<br>
        <strong>Destaques da Discussão:</strong> Veteranos desmistificaram a ideia de ir direto para agentes de IA complexos: o caminho mais sólido começa entendendo estrutura de dados JSON, status HTTP (200, 400, 500) e webhooks antes de montar fluxos com LLMs.<br>
        <strong>Impacto na Comunidade:</strong> Um dos tópicos mais acolhedores e didáticos sobre a curva de aprendizado em automações modernas.
      `,
      excerpt: "I am starting from zero. No coding, no IT background. My problem is that every source gives me a different order. Which learning path actually worked for you?",
      selftext: `I am starting from zero. No coding, no IT background, nothing. My problem is not motivation, it is that every tutorial gives me a conflicting order.

One person says: build workflows first. Another says: learn JavaScript first. Another says: learn APIs and Postman first.

What was the actual learning curve that unlocked understanding for you without getting overwhelmed?`
    }
  ],
  automation: [
    {
      id: "1wibcgg",
      rank: 1,
      title: "Are AI Agents Better Than Automation?",
      author: "Signal-Heron5805",
      subreddit: "r/automation",
      score: 36,
      num_comments: 39,
      engagement: 75,
      upvote_ratio: 0.89,
      created_datetime: "2026-09-16 19:04:24",
      url: "https://www.reddit.com/r/automation/comments/1wibcgg/are_ai_agents_better_than_automation/",
      tags: ["AI Agents vs RPA", "Arquitetura", "Confiabilidade", "Decisão Técnica"],
      analysis: `
        <strong>Caso de Uso:</strong> Debate fundamental da indústria sobre substituir fluxos determinísticos clássicos por agentes autônomos de IA.<br>
        <strong>Destaques da Discussão:</strong> O consenso dominante de engenheiros seniores é que processos com regras claras (mover dados entre bancos, atualizar CRMs, webhooks transacionais) são superiores quando feitos com automação tradicional (mais rápidos, 100% previsíveis e sem custo de tokens). Agentes devem ser restritos a etapas que exigem interpretação de ambiguidade humana.<br>
        <strong>Impacto na Comunidade:</strong> Considerado o debate mais lúcido do mês contra o "hype" desmedido de agentes de IA em tudo.
      `,
      excerpt: "I've been cleaning up automations we use for sales and something feels off with how everything is becoming an 'AI agent' now. A bunch of our workflows are just moving data. Are agents really better?",
      selftext: `I've been cleaning up some automations we use for sales and something feels off with how everything is becoming an "AI agent" now.

A bunch of our workflows are boring stuff like moving data, updating fields, or sending something when X happens. I don't need an LLM hallucinating a customer record when a basic SQL query or webhook does it in 4ms for $0.000001.

Where do AI agents actually outperform deterministic automation, and where are people just wasting compute for marketing buzzwords?`
    },
    {
      id: "1wp1op8",
      rank: 2,
      title: "Anyone automate action items from meetings via transcription?",
      author: "Scary-Cheek1733",
      subreddit: "r/automation",
      score: 20,
      num_comments: 35,
      engagement: 55,
      upvote_ratio: 0.94,
      created_datetime: "2026-09-24 10:29:47",
      url: "https://www.reddit.com/r/automation/comments/1wp1op8/anyone_automate_action_items_from_meetings_via/",
      tags: ["Transcrições", "Meeting AI", "Notion / Jira", "Produtividade"],
      analysis: `
        <strong>Caso de Uso:</strong> Esteira para transformar gravações de reuniões executivas e de produto em planos de ação executáveis automaticamente.<br>
        <strong>Destaques da Solução:</strong> O pipeline recebe a gravação do Zoom/Google Meet, aplica Whisper/Deepgram para transcrição com identificação de oradores (diarização) e envia para um prompt estruturado que cospe JSON com tarefas, donos e datas de entrega nos apps de gestão.<br>
        <strong>Impacto na Comunidade:</strong> Dezenas de profissionais compartilharam integrações funcionais com Notion, Todoist, Asana e Linear.
      `,
      excerpt: "I'd like any meeting that I ever have to be recorded and automatically add action items to my to-do list with due dates and owners. How are you setting this up?",
      selftext: `I'd like any meeting that I ever have to be recorded and automatically add my action items to my to-do list. Ideally with details like due date and who is responsible.

Also, I would like the notes from the meeting to be stored in the database associated with the client.

I've tested a few off-the-shelf bots like Fireflies, but I want a custom webhook that feeds our internal system so we can automate downstream sprint planning.`
    },
    {
      id: "1wmsjdq",
      rank: 3,
      title: "Help needed! (Building AI Voice Assistant for Dad's Business with n8n/Twilio)",
      author: "Hassieee",
      subreddit: "r/automation",
      score: 16,
      num_comments: 33,
      engagement: 49,
      upvote_ratio: 0.91,
      created_datetime: "2026-09-21 20:07:58",
      url: "https://www.reddit.com/r/automation/comments/1wmsjdq/help_needed/",
      tags: ["Voz & Telefonia", "Vapi / Twilio", "n8n Backend", "PMEs"],
      analysis: `
        <strong>Caso de Uso:</strong> Construção prática de uma secretária eletrônica inteligente por voz para uma empresa familiar.<br>
        <strong>Destaques da Solução:</strong> Conexão de números Twilio com plataformas de conversação em tempo real (Vapi / Retell AI), usando n8n como backend para checar disponibilidade de agenda no Google Calendar e gravar ordens de serviço.<br>
        <strong>Impacto na Comunidade:</strong> Um exemplo real e emocionante de aplicação de automação moderna para pequenos negócios, com orientações detalhadas sobre como reduzir a latência de voz para menos de 600ms.
      `,
      excerpt: "Guys, I'm trying to create an AI voice assistant for my dad's business but I'm kinda lost connecting Vapi, Retell AI, Twilio, and n8n. Need help stitching them together.",
      selftext: `Guys, I'm trying to create an AI assistant for my dad's business but I'm kinda lost.

I've created accounts with Vapi, Retell AI, n8n, Twilio, and OpenAI. I'm getting somewhere after some research, but I'm lost when it comes to having the voice bot take down appointment dates, check his calendar live via n8n, and confirm booking while still on the call.

Has anyone connected Twilio -> Vapi -> n8n Webhook -> Google Calendar? How do you return the tool result back to the caller without awkward silence?`
    },
    {
      id: "1wott9p",
      rank: 4,
      title: "the automation failures that hurt most never threw an error. they just stopped.",
      author: "arthaudm",
      subreddit: "r/automation",
      score: 6,
      num_comments: 27,
      engagement: 33,
      upvote_ratio: 0.85,
      created_datetime: "2026-09-24 03:09:48",
      url: "https://www.reddit.com/r/automation/comments/1wott9p/the_automation_failures_that_hurt_most_never/",
      tags: ["Engenharia de Falhas", "Monitoramento", "Heartbeats", "SRE"],
      analysis: `
        <strong>Caso de Uso:</strong> Lições sobre os riscos de falhas silenciosas em esteiras de automação de missão crítica.<br>
        <strong>Destaques da Solução:</strong> O post aborda cenários onde o código executa com status "sucesso 200", mas com lista de registros vazia porque o token OAuth upstream expirou ou o webhook foi desativado. Introduz o conceito de "Dead Man's Switch" (alerta se a automação NÃO rodar dentro do horário esperado) e validação de volume mínimo de dados processados.<br>
        <strong>Impacto na Comunidade:</strong> Considerado leitura obrigatória para quem mantém automações de cobrança, faturamento e CRM em produção.
      `,
      excerpt: "Errors get caught. The bad ones are silent: a cron that stopped firing, a webhook disabled upstream, an expired token where the job 'succeeded' with zero rows. Nothing alerted because nothing failed.",
      selftext: `Errors get caught by your Sentry or try/catch. The bad ones are silent:
- A cron that stopped firing after a worker restart.
- A webhook that got disabled upstream without warning.
- An OAuth token that expired so the endpoint returned 200 OK with {"items": []}. The job "succeeded" with zero rows processed.

Nothing alerted because nothing threw an error.

What we changed:
1. Dead man's switch on every hourly pipeline. If it doesn't ping BetterUptime within 70 minutes, PagerDuty wakes us up.
2. Anomaly detection on row counts. If standard processing is 150 items and today is 0, sound the alarm.`
    },
    {
      id: "1wn7275",
      rank: 5,
      title: "Agentic workflow automation vs plain RPA, where has the agent earned its keep for you?",
      author: "Powerful-Mixture-664",
      subreddit: "r/automation",
      score: 9,
      num_comments: 24,
      engagement: 33,
      upvote_ratio: 0.83,
      created_datetime: "2026-09-22 08:38:02",
      url: "https://www.reddit.com/r/automation/comments/1wn7275/agentic_workflow_automation_vs_plain_rpa_where/",
      tags: ["RPA Corporativo", "CoE", "Processos Complexos", "ROI"],
      analysis: `
        <strong>Caso de Uso:</strong> Análise de Retorno sobre Investimento (ROI) comparando ferramentas tradicionais de RPA (UiPath, Automation Anywhere) com orquestrações agênticas.<br>
        <strong>Destaques da Discussão:</strong> Profissionais de grandes empresas compartilharam onde os agentes se pagaram: leitura de faturas em formatos variados (eliminando modelos OCR rígidos que quebravam toda semana) e atendimento de chamados de TI com triagem semântica.<br>
        <strong>Impacto na Comunidade:</strong> Validação de que a união de RPA (para a execução no desktop) com agentes (para o raciocínio de exceção) é o padrão ouro moderno.
      `,
      excerpt: "Every conversation this year has been about agents, and I still can't get a straight answer on where one actually beats a well-built bot. Where has an agent earned its keep for you?",
      selftext: `Every executive conversation this year has been about AI agents, and I still can't get a straight answer on where one actually beats a well-built RPA bot in enterprise shared services.

We run an automation Center of Excellence with a decent RPA estate that mostly works. My instinct says agents add nondeterminism where businesses crave certainty.

Can anyone share a concrete, production use case where swapping/augmenting RPA with an agent delivered measurable ROI?`
    }
  ]
};

// =============================================================================
// APPLICATION STATE
// =============================================================================

const state = {
  currentTopic: 'n8n', // 'n8n' | 'automation'
  viewMode: 'top5',    // 'top5' | 'all'
  searchTerm: '',
  sortBy: 'engagement', // 'engagement' | 'score' | 'comments' | 'recent'
  fullData: {
    n8n: [],
    automation: []
  },
  modalPost: null
};

// =============================================================================
// DOM ELEMENTS
// =============================================================================

const elements = {
  tabN8n: document.getElementById('tab-n8n'),
  tabAuto: document.getElementById('tab-automation'),
  searchInput: document.getElementById('search-input'),
  clearSearchBtn: document.getElementById('clear-search-btn'),
  sortSelect: document.getElementById('sort-select'),
  toggleViewBtn: document.getElementById('toggle-view-btn'),
  toggleViewText: document.getElementById('toggle-view-text'),
  postsContainer: document.getElementById('posts-container'),
  emptyState: document.getElementById('empty-state'),
  resetFilterBtn: document.getElementById('reset-filter-btn'),
  topicBanner: document.getElementById('topic-banner'),
  topicBadge: document.getElementById('topic-badge'),
  topicHeading: document.getElementById('topic-heading'),
  topicDesc: document.getElementById('topic-desc'),
  topicDownloadCsv: document.getElementById('topic-download-csv'),
  badgeN8nCount: document.getElementById('badge-n8n-count'),
  badgeAutoCount: document.getElementById('badge-auto-count'),
  // Modal Elements
  modal: document.getElementById('post-modal'),
  modalCloseBtn: document.getElementById('modal-close-btn'),
  modalRank: document.getElementById('modal-rank'),
  modalSubreddit: document.getElementById('modal-subreddit'),
  modalDate: document.getElementById('modal-date'),
  modalTitle: document.getElementById('modal-title'),
  modalAuthorName: document.getElementById('modal-author-name'),
  modalAvatar: document.getElementById('modal-avatar'),
  modalEngagement: document.getElementById('modal-engagement'),
  modalScore: document.getElementById('modal-score'),
  modalComments: document.getElementById('modal-comments'),
  modalRatio: document.getElementById('modal-ratio'),
  modalAnalysis: document.getElementById('modal-analysis'),
  modalContent: document.getElementById('modal-content'),
  modalCopyBtn: document.getElementById('modal-copy-link-btn'),
  modalRedditLink: document.getElementById('modal-reddit-link'),
  toast: document.getElementById('toast'),
  toastMessage: document.getElementById('toast-message')
};

// =============================================================================
// INITIALIZATION & DATA LOADING
// =============================================================================

async function initApp() {
  setupEventListeners();
  
  // Try to load full 100 posts JSON files asynchronously
  await loadFullDatasets();

  // Initial render
  render();
}

/**
 * Loads the full 100 posts datasets if available
 */
async function loadFullDatasets() {
  try {
    const [resN8n, resAuto] = await Promise.all([
      fetch('posts_n8n_100.json').then(r => r.ok ? r.json() : null).catch(() => null),
      fetch('posts_automacao_100.json').then(r => r.ok ? r.json() : null).catch(() => null)
    ]);

    if (resN8n && Array.isArray(resN8n)) {
      state.fullData.n8n = resN8n;
    }
    if (resAuto && Array.isArray(resAuto)) {
      state.fullData.automation = resAuto;
    }
  } catch (err) {
    console.warn("Could not load external JSON files. Using curated dataset.", err);
  }
}

// =============================================================================
// EVENT LISTENERS
// =============================================================================

function setupEventListeners() {
  // Tabs
  elements.tabN8n.addEventListener('click', () => switchTab('n8n'));
  elements.tabAuto.addEventListener('click', () => switchTab('automation'));

  // Search input
  elements.searchInput.addEventListener('input', (e) => {
    state.searchTerm = e.target.value.trim().toLowerCase();
    elements.clearSearchBtn.style.display = state.searchTerm ? 'block' : 'none';
    render();
  });

  elements.clearSearchBtn.addEventListener('click', () => {
    elements.searchInput.value = '';
    state.searchTerm = '';
    elements.clearSearchBtn.style.display = 'none';
    render();
  });

  elements.resetFilterBtn.addEventListener('click', () => {
    elements.searchInput.value = '';
    state.searchTerm = '';
    elements.clearSearchBtn.style.display = 'none';
    state.sortBy = 'engagement';
    elements.sortSelect.value = 'engagement';
    render();
  });

  // Sort
  elements.sortSelect.addEventListener('change', (e) => {
    state.sortBy = e.target.value;
    render();
  });

  // View toggle: Top 5 vs All 100
  elements.toggleViewBtn.addEventListener('click', () => {
    if (state.viewMode === 'top5') {
      state.viewMode = 'all';
      elements.toggleViewText.textContent = 'Ver Top 5 Relevantes';
      elements.toggleViewBtn.setAttribute('data-mode', 'all');
    } else {
      state.viewMode = 'top5';
      elements.toggleViewText.textContent = 'Ver Todos (100)';
      elements.toggleViewBtn.setAttribute('data-mode', 'top5');
    }
    render();
  });

  // Modal close handlers
  elements.modalCloseBtn.addEventListener('click', closeModal);
  elements.modal.addEventListener('click', (e) => {
    if (e.target === elements.modal) closeModal();
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && elements.modal.classList.contains('open')) {
      closeModal();
    }
  });

  // Modal Copy button
  elements.modalCopyBtn.addEventListener('click', () => {
    if (state.modalPost && state.modalPost.url) {
      navigator.clipboard.writeText(state.modalPost.url).then(() => {
        showToast('Link do post copiado para a área de transferência!');
      });
    }
  });
}

// =============================================================================
// TAB SWITCHING
// =============================================================================

function switchTab(topic) {
  if (state.currentTopic === topic) return;
  state.currentTopic = topic;

  if (topic === 'n8n') {
    elements.tabN8n.classList.add('active');
    elements.tabN8n.setAttribute('aria-selected', 'true');
    elements.tabAuto.classList.remove('active');
    elements.tabAuto.setAttribute('aria-selected', 'false');

    elements.topicBanner.classList.remove('topic-automation');
    elements.topicBadge.textContent = 'r/n8n Community';
    elements.topicHeading.textContent = state.viewMode === 'top5' 
      ? 'Top 5 Posts Mais Relevantes: n8n' 
      : 'Todos os 100 Posts Recentes: n8n';
    elements.topicDesc.textContent = 'Fluxos de trabalho práticos, automações com IA local, RAG sem custos de nuvem e integração com APIs externas.';
    elements.topicDownloadCsv.setAttribute('href', 'posts_n8n_100.csv');
  } else {
    elements.tabAuto.classList.add('active');
    elements.tabAuto.setAttribute('aria-selected', 'true');
    elements.tabN8n.classList.remove('active');
    elements.tabN8n.setAttribute('aria-selected', 'false');

    elements.topicBanner.classList.add('topic-automation');
    elements.topicBadge.textContent = 'r/automation Community';
    elements.topicHeading.textContent = state.viewMode === 'top5' 
      ? 'Top 5 Posts Mais Relevantes: Automação' 
      : 'Todos os 100 Posts Recentes: Automação';
    elements.topicDesc.textContent = 'Agentes de IA versus automação tradicional, extração de tarefas de reuniões e arquitetura de confiabilidade.';
    elements.topicDownloadCsv.setAttribute('href', 'posts_automacao_100.csv');
  }

  render();
}

// =============================================================================
// RENDERING PIPELINE
// =============================================================================

function getActiveDataset() {
  const isN8n = state.currentTopic === 'n8n';
  
  if (state.viewMode === 'top5') {
    return CURATED_TOP_5[isN8n ? 'n8n' : 'automation'];
  } else {
    // Return all 100 posts if available, fallback to curated
    const full = isN8n ? state.fullData.n8n : state.fullData.automation;
    return full && full.length > 0 ? full : CURATED_TOP_5[isN8n ? 'n8n' : 'automation'];
  }
}

function filterAndSortPosts(posts) {
  let list = [...posts];

  // Apply search filter
  if (state.searchTerm) {
    const q = state.searchTerm;
    list = list.filter(p => {
      const titleMatch = (p.title || '').toLowerCase().includes(q);
      const authorMatch = (p.author || '').toLowerCase().includes(q);
      const textMatch = (p.selftext || '').toLowerCase().includes(q);
      const tagMatch = p.tags ? p.tags.some(t => t.toLowerCase().includes(q)) : false;
      return titleMatch || authorMatch || textMatch || tagMatch;
    });
  }

  // Apply sort order
  list.sort((a, b) => {
    switch (state.sortBy) {
      case 'score':
        return (b.score || 0) - (a.score || 0);
      case 'comments':
        return (b.num_comments || 0) - (a.num_comments || 0);
      case 'recent':
        return (b.created_utc || 0) - (a.created_utc || 0);
      case 'engagement':
      default:
        return (b.engagement || (b.score + b.num_comments) || 0) - 
               (a.engagement || (a.score + a.num_comments) || 0);
    }
  });

  return list;
}

function render() {
  const currentData = getActiveDataset();
  const processedPosts = filterAndSortPosts(currentData);

  // Update counter badges
  const n8nCount = state.viewMode === 'top5' ? '5 posts' : `${state.fullData.n8n.length || 100} posts`;
  const autoCount = state.viewMode === 'top5' ? '5 posts' : `${state.fullData.automation.length || 100} posts`;
  elements.badgeN8nCount.textContent = n8nCount;
  elements.badgeAutoCount.textContent = autoCount;

  // Render Grid
  elements.postsContainer.innerHTML = '';

  if (processedPosts.length === 0) {
    elements.postsContainer.style.display = 'none';
    elements.emptyState.style.display = 'block';
    return;
  }

  elements.postsContainer.style.display = 'grid';
  elements.emptyState.style.display = 'none';

  processedPosts.forEach((post, index) => {
    const card = createPostCard(post, index + 1);
    elements.postsContainer.appendChild(card);
  });
}

// =============================================================================
// CARD CREATION
// =============================================================================

function createPostCard(post, displayIndex) {
  const isN8n = state.currentTopic === 'n8n';
  const card = document.createElement('article');
  
  const rankClass = displayIndex <= 3 ? `rank-${displayIndex}` : 'rank-default';
  card.className = `post-card ${rankClass} topic-${state.currentTopic}`;

  const formattedDate = post.created_datetime 
    ? post.created_datetime.split(' ')[0] 
    : '2026-09-26';

  const defaultTags = isN8n 
    ? ['#n8n', '#Workflow', '#Automação'] 
    : ['#Automation', '#AI', '#Processos'];
  const tags = post.tags || defaultTags;

  const score = post.score || 0;
  const comments = post.num_comments || 0;
  const engagement = post.engagement || (score + comments);

  const excerptText = post.excerpt || (post.selftext ? post.selftext.slice(0, 180) + '...' : 'Sem descrição adicional.');

  card.innerHTML = `
    <div class="post-card-top-bar">
      <div class="rank-badge-group">
        <span class="rank-indicator">#${displayIndex}</span>
        <span class="subreddit-tag">${post.subreddit || (isN8n ? 'r/n8n' : 'r/automation')}</span>
      </div>
      <span class="post-date">${formattedDate}</span>
    </div>

    <h3 class="post-title" title="${escapeHtml(post.title)}">${escapeHtml(post.title)}</h3>

    <p class="post-excerpt">${escapeHtml(excerptText)}</p>

    <div class="card-tags">
      ${tags.map(t => `<span class="card-tag">${escapeHtml(t)}</span>`).join('')}
    </div>

    <div class="metrics-row">
      <div class="metric-pill metric-total" title="Engajamento Total (Upvotes + Comentários)">
        <span class="metric-label">Engajamento:</span>
        <span>${engagement}</span>
      </div>
      <div class="metric-pill metric-sub" title="Upvotes recebidos">
        <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2.5">
          <polyline points="18 15 12 9 6 15"></polyline>
        </svg>
        <span>${score}</span>
      </div>
      <div class="metric-pill metric-sub" title="Comentários na discussão">
        <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
        </svg>
        <span>${comments}</span>
      </div>
    </div>

    <div class="card-actions">
      <button class="btn-card-read" data-action="read">
        <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="2">
          <circle cx="12" cy="12" r="10"></circle>
          <line x1="12" y1="16" x2="12" y2="12"></line>
          <line x1="12" y1="8" x2="12.01" y2="8"></line>
        </svg>
        <span>Ver Resumo & Análise</span>
      </button>

      <a href="${post.url}" target="_blank" rel="noopener noreferrer" class="btn-card-reddit" title="Abrir no Reddit">
        <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
          <path d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.01 4.744c.688 0 1.25.561 1.25 1.249a1.25 1.25 0 0 1-2.498.056l-2.597-.547-.8 3.747c1.824.07 3.48.632 4.674 1.488.308-.309.73-.491 1.207-.491.968 0 1.754.786 1.754 1.754 0 .716-.435 1.333-1.01 1.614a3.111 3.111 0 0 1 .042.52c0 2.694-3.13 4.87-7.004 4.87-3.874 0-7.004-2.176-7.004-4.87 0-.183.015-.366.043-.534A1.748 1.748 0 0 1 4.028 12c0-.968.786-1.754 1.754-1.754.463 0 .898.196 1.207.49 1.207-.883 2.878-1.43 4.744-1.487l.885-4.182a.342.342 0 0 1 .14-.197.35.35 0 0 1 .238-.042l2.906.617a1.214 1.214 0 0 1 1.108-.701zM9.25 12C8.56 12 8 12.562 8 13.25c0 .687.561 1.248 1.25 1.248.687 0 1.248-.561 1.248-1.249 0-.688-.561-1.249-1.249-1.249zm5.5 0c-.687 0-1.248.561-1.248 1.25 0 .687.561 1.248 1.249 1.248.688 0 1.249-.561 1.249-1.249 0-.687-.562-1.249-1.25-1.249zm-5.466 3.99a.327.327 0 0 0-.231.094.33.33 0 0 0 0 .463c.842.842 2.484.913 2.961.913.477 0 2.105-.056 2.961-.913a.361.361 0 0 0 .029-.463.33.33 0 0 0-.464 0c-.547.533-1.684.73-2.512.73-.828 0-1.979-.196-2.512-.73a.326.326 0 0 0-.232-.095z"/>
        </svg>
      </a>

      <button class="btn-card-copy" data-action="copy" title="Copiar link do Reddit">
        <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2">
          <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
          <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
        </svg>
      </button>
    </div>
  `;

  // Attach button click handlers
  const readBtn = card.querySelector('[data-action="read"]');
  readBtn.addEventListener('click', () => openModal(post, displayIndex));

  const copyBtn = card.querySelector('[data-action="copy"]');
  copyBtn.addEventListener('click', () => {
    navigator.clipboard.writeText(post.url).then(() => {
      showToast('Link do Reddit copiado com sucesso!');
    });
  });

  return card;
}

// =============================================================================
// MODAL FUNCTIONALITY
// =============================================================================

function openModal(post, rank) {
  state.modalPost = post;

  elements.modalRank.textContent = `#${rank}`;
  elements.modalSubreddit.textContent = post.subreddit || (state.currentTopic === 'n8n' ? 'r/n8n' : 'r/automation');
  elements.modalDate.textContent = post.created_datetime || '2026-09-26';
  elements.modalTitle.textContent = post.title;
  elements.modalAuthorName.textContent = `u/${post.author || 'anônimo'}`;
  elements.modalAvatar.textContent = (post.author || 'U').charAt(0).toUpperCase();

  const score = post.score || 0;
  const comments = post.num_comments || 0;
  const engagement = post.engagement || (score + comments);
  const ratio = Math.round((post.upvote_ratio || 0.95) * 100);

  elements.modalEngagement.textContent = engagement;
  elements.modalScore.textContent = score;
  elements.modalComments.textContent = comments;
  elements.modalRatio.textContent = `${ratio}%`;

  // Analysis block
  if (post.analysis) {
    elements.modalAnalysis.innerHTML = post.analysis;
    elements.modalAnalysis.style.display = 'block';
  } else {
    elements.modalAnalysis.innerHTML = `
      <strong>Resumo Rápido:</strong> Post em destaque na comunidade com alto índice de interações e comentários técnicos.<br>
      <strong>Tema Central:</strong> Discute implementação prática e recomendações operacionais no ecossistema de ${state.currentTopic}.
    `;
    elements.modalAnalysis.style.display = 'block';
  }

  if (state.currentTopic === 'automation') {
    elements.modalAnalysis.classList.add('analysis-auto');
  } else {
    elements.modalAnalysis.classList.remove('analysis-auto');
  }

  // Full body content
  elements.modalContent.textContent = post.selftext || 'Nenhum texto adicional foi publicado no corpo desta postagem.';

  // Reddit external link
  elements.modalRedditLink.setAttribute('href', post.url);

  // Open modal
  elements.modal.classList.add('open');
  elements.modal.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  elements.modal.classList.remove('open');
  elements.modal.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
  state.modalPost = null;
}

// =============================================================================
// TOAST NOTIFICATION
// =============================================================================

let toastTimeout = null;

function showToast(message) {
  if (toastTimeout) clearTimeout(toastTimeout);

  elements.toastMessage.textContent = message;
  elements.toast.classList.add('show');

  toastTimeout = setTimeout(() => {
    elements.toast.classList.remove('show');
  }, 3200);
}

// =============================================================================
// UTILITIES
// =============================================================================

function escapeHtml(str) {
  if (!str) return '';
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

// =============================================================================
// RUN APPLICATION
// =============================================================================

document.addEventListener('DOMContentLoaded', initApp);
