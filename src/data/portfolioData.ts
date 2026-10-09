export interface JourneyMilestone {
  id: string;
  role: string;
  company: string;
  subtitle: string;
  period: string;
  yearTag: string;
  location: string;
  regions: string;
  description: string;
  highlights: string[];
  stack: string[];
  mapPosition: { x: number; y: number };
  secondaryPins: { label: string; x: number; y: number }[];
  captainNote: string;
}

export interface SkillItem {
  name: string;
  category: string;
  productionNote: string;
  experienceYears: string;
}

export interface SkillCategory {
  id: string;
  title: string;
  headerBg: string;
  darkHeaderBg: string;
  iconName: 'cpu' | 'cloud' | 'database' | 'code' | 'layers' | 'users';
  skills: SkillItem[];
}

export interface FeaturedProject {
  id: string;
  number: string;
  title: string;
  tagline: string;
  period: string;
  status: string;
  reach: string;
  category: string;
  headerColor: string;
  summary: string;
  deepDive: string;
  architectureHighlights: string[];
  stack: string[];
  metrics: { label: string; value: string }[];
}

export interface ServiceOffering {
  num: string;
  category: string;
  title: string;
  description: string;
  ctaLabel: string;
  deliverables: string[];
}

export interface BlogArticle {
  slug: string;
  number: string;
  date: string;
  readTime: string;
  title: string;
  excerpt: string;
  tags: string[];
  sections: {
    heading: string;
    paragraphs: string[];
  }[];
}

export const ASHOK_IMAGES = {
  avatar: '/src/assets/images/ashok-original.png',
  pirateCaptain: '/src/assets/images/pirate_captain_guide_1791558093177.jpg',
  treasureMap: '/src/assets/images/vintage_treasure_map_bg_1791558106012.jpg',
};

export const PORTFOLIO_DATA = {
  name: 'Ashok Kumar Kunchala',
  shortName: 'Ashok Kunchala',
  monogram: 'AK',
  roleTitle: 'Head of Technology & Enterprise AI Architect',
  badgeRole: 'Head of Technology · Board Contributor · Anvesa',
  location: 'Hyderabad, India · Practising Globally',
  established: 'Est. 2013',
  email: 'ashok@ashokkunchala.com',
  linkedin: 'https://linkedin.com/in/ashok-kumar-kunchala',
  linkedinDisplay: 'linkedin.com/in/ashok-kumar-kunchala',
  formspreeEndpoint: 'https://formspree.io/f/xlgonjal',
  replySla: 'Twenty-four hours, typically',
  heroHeadline: "I'm Ashok Kunchala.",
  heroLead:
    "Based in Hyderabad, India and practising globally, I'm Head of Technology at Anvesa and an Enterprise AI Architect with 13+ years of experience. I design and run production-grade Agentic AI systems, RAG pipelines, and cloud-native distributed architectures on Azure AKS that hold up under real enterprise load — not just demos.",
  kpis: [
    { id: '01', value: '13+', label: 'Years in practice', detail: 'From .NET foundations at Cognizant to Enterprise AI Architecture' },
    { id: '02', value: '15+', label: 'Enterprise clients', detail: 'Daily production workloads across legal & enterprise eDiscovery' },
    { id: '03', value: '3', label: 'Continents served', detail: 'Active deployments across the United States, India, and Australia' },
    { id: '04', value: '1', label: 'Platform built ground-up', detail: 'Anvesa — AI-native eDiscovery platform architected zero-to-one' },
  ],
  marqueeTech: [
    'Azure AKS',
    'RAG Architecture',
    'Agentic AI',
    'Azure OpenAI',
    '.NET Core / C#',
    'Kubernetes',
    'Angular',
    'Docker',
    'Bicep IaC',
    'Azure AI Search',
    'Azure Service Bus',
    'SQL Server',
  ],
  registerMetadata: [
    { label: 'Title', value: 'Head of Technology' },
    { label: 'Role', value: 'Board Contributor' },
    { label: 'At', value: 'Anvesa' },
    { label: 'Based', value: 'Hyderabad, IN (Global)' },
  ],
  journey: [
    {
      id: 'anvesa-hot',
      role: 'Head of Technology',
      company: 'Anvesa',
      subtitle: 'Independent Entity · Enterprise AI eDiscovery Platform',
      period: '2024 – Present',
      yearTag: '2024 – NOW',
      location: 'Hyderabad, India',
      regions: 'US · India · Australia',
      description:
        'Leading AI innovation and enterprise product strategy for 15+ clients across the US, India, and Australia. Designing RAG pipelines, Agentic AI systems, and cloud-native architectures on Azure AKS that run in production daily.',
      highlights: [
        'Architected document-type-aware RAG pipelines processing millions of legal depositions, contracts, and email threads.',
        'Engineered real-time ingestion on Azure Service Bus + Azure AI Search capable of indexing 60,000+ overnight documents by morning.',
        'Established end-to-end LLM observability tracing retrieval chunks, similarity scores, and context windows in under 2 minutes.',
        'Optimized embedding unit economics using Azure text-embedding-3-large with intelligent caching layers and off-peak batching.',
      ],
      stack: ['Azure AKS', 'Agentic AI', 'RAG Architecture', 'Azure OpenAI', 'Azure AI Search', 'Azure Service Bus'],
      mapPosition: { x: 68.5, y: 47.5 }, // India (Hyderabad HQ)
      secondaryPins: [
        { label: 'US Clients', x: 23.5, y: 36.0 },
        { label: 'Australia Clients', x: 82.0, y: 71.0 },
      ],
      captainNote: 'Current Flagship Command: Steering Anvesa across 3 continents with 15+ enterprise fleets running daily AI workloads!',
    },
    {
      id: 'aureus-happiest-minds',
      role: 'Senior Software Engineer → Head of Technology',
      company: 'Aureus Tech Systems → Happiest Minds',
      subtitle: 'Founding Platform Engineer through Acquisition',
      period: '2017 – 2024',
      yearTag: '2017 – 2024',
      location: 'Hyderabad, India',
      regions: 'Global Enterprise Delivery',
      description:
        'Joined as founding engineer on what became Anvesa. Built the platform from scratch across the full stack. Grew into leading the entire engineering function — architecture, R&D, QA, and production support. Led platform through the Aureus → Happiest Minds acquisition.',
      highlights: [
        'Built the core eDiscovery platform from line one across .NET Core, Angular, SQL Server, and Kubernetes.',
        'Scaled engineering organization across architecture, R&D, quality assurance, and 24/7 enterprise production support.',
        'Successfully led technical due diligence, platform continuity, and integration through the Happiest Minds acquisition.',
        'Pioneered cloud-native containerization with Docker, Kubernetes (AKS), and Bicep Infrastructure-as-Code.',
      ],
      stack: ['.NET Core / C#', 'Angular', 'Kubernetes (AKS)', 'Docker', 'Bicep IaC', 'SQL Server'],
      mapPosition: { x: 67.0, y: 45.0 },
      secondaryPins: [
        { label: 'US Legal Tech', x: 25.0, y: 38.0 },
      ],
      captainNote: 'Seven-Year Voyage: Forged the platform from a blank chart into an acquisition-proven enterprise vessel!',
    },
    {
      id: 'cognizant-amex',
      role: 'Programmer Analyst → Associate',
      company: 'Cognizant Technology Solutions',
      subtitle: 'American Express · Global Decision Engine',
      period: '2014 – 2017',
      yearTag: '2014 – 2017',
      location: 'Hyderabad, India · Global Delivery',
      regions: 'US · EMEA · APAC',
      description:
        "Started career as Batch Topper at Cognizant's Learning Academy. Worked on the American Express Global Decision Engine — led Mainframe-to-.NET migration delivering change requests across US, EMEA, APAC and other global markets. Awarded for delivery quality.",
      highlights: [
        "Graduated as Batch Topper at Cognizant's Learning Academy with top honors in software engineering.",
        'Engineered critical modules for the American Express Global Decision Engine serving international credit & risk workflows.',
        'Led Mainframe-to-.NET migration initiatives across US, EMEA, and APAC markets with zero production disruption.',
        'Recognized with Delivery Excellence Awards for code reliability and cross-market execution.',
      ],
      stack: ['.NET / C#', 'SQL Server', 'Enterprise Architecture', 'Mainframe Migration', 'Global Decision Engine'],
      mapPosition: { x: 54.5, y: 31.5 }, // Europe / EMEA + Global route
      secondaryPins: [
        { label: 'AmEx US', x: 22.0, y: 34.0 },
        { label: 'Hyderabad Academy', x: 68.5, y: 47.5 },
        { label: 'APAC Markets', x: 78.0, y: 52.0 },
      ],
      captainNote: 'First Expedition: Top of the Academy class, charting global routes across US, Europe, and APAC for American Express!',
    },
  ] as JourneyMilestone[],
  skillCategories: [
    {
      id: 'intelligence',
      title: 'AI & INTELLIGENCE',
      headerBg: 'bg-[#67E8F9]',
      darkHeaderBg: 'bg-[#06B6D4] text-zinc-950',
      iconName: 'cpu',
      skills: [
        {
          name: 'Agentic AI Systems',
          category: 'AI & Intelligence',
          productionNote: 'Autonomous multi-step legal & eDiscovery workflows running in daily enterprise production at Anvesa.',
          experienceYears: 'Production Live',
        },
        {
          name: 'RAG Architecture',
          category: 'AI & Intelligence',
          productionNote: 'Document-type-aware chunking (speaker turns for depositions, clauses for contracts, header-preserved emails).',
          experienceYears: 'Production Live',
        },
        {
          name: 'Large Language Models',
          category: 'AI & Intelligence',
          productionNote: 'End-to-end prompt engineering, context window instrumentation, and hallucination guardrails.',
          experienceYears: 'Production Live',
        },
        {
          name: 'Azure OpenAI',
          category: 'AI & Intelligence',
          productionNote: 'Enterprise GPT & text-embedding-3-large deployments with caching and off-peak batch scheduling.',
          experienceYears: 'Production Live',
        },
        {
          name: 'Azure AI Search',
          category: 'AI & Intelligence',
          productionNote: 'High-scale vector + hybrid retrieval indexing millions of enterprise documents across 15+ clients.',
          experienceYears: 'Production Live',
        },
        {
          name: 'Enterprise AI Observability',
          category: 'AI & Intelligence',
          productionNote: 'Full query-to-chunk similarity tracing enabling root-cause retrieval debugging in under 2 minutes.',
          experienceYears: 'Production Live',
        },
      ],
    },
    {
      id: 'infrastructure',
      title: 'CLOUD & DEVOPS',
      headerBg: 'bg-[#FDE047]',
      darkHeaderBg: 'bg-[#FACC15] text-zinc-950',
      iconName: 'cloud',
      skills: [
        {
          name: 'Azure Cloud (AKS)',
          category: 'Cloud & Infrastructure',
          productionNote: 'Multi-region Azure Kubernetes Service clusters powering Anvesa across US, India, and Australia.',
          experienceYears: '8+ yrs',
        },
        {
          name: 'Cloud-Native Architecture',
          category: 'Cloud & Infrastructure',
          productionNote: 'Resilient distributed systems built for high-throughput legal document ingestion and zero-downtime upgrades.',
          experienceYears: '9+ yrs',
        },
        {
          name: 'Docker & Kubernetes',
          category: 'Cloud & Infrastructure',
          productionNote: 'Containerized microservice workloads, auto-scaling worker pools, and production helm/deployment pipelines.',
          experienceYears: '7+ yrs',
        },
        {
          name: 'Bicep IaC',
          category: 'Cloud & Infrastructure',
          productionNote: 'Declarative Azure Infrastructure-as-Code for repeatable, auditable enterprise tenant provisioning.',
          experienceYears: '5+ yrs',
        },
        {
          name: 'Azure Service Bus',
          category: 'Cloud & Infrastructure',
          productionNote: 'Event-driven ingestion pipelines processing 60,000+ overnight email/document drops with queue depth alerting.',
          experienceYears: '7+ yrs',
        },
        {
          name: 'Cloud Cost Optimization',
          category: 'Cloud & Infrastructure',
          productionNote: 'Unit-economics engineering across compute, storage, embedding caching, and scheduled index rebuilds.',
          experienceYears: '8+ yrs',
        },
      ],
    },
    {
      id: 'backend',
      title: 'BACKEND & DATA',
      headerBg: 'bg-[#F472B6]',
      darkHeaderBg: 'bg-[#EC4899] text-zinc-950',
      iconName: 'database',
      skills: [
        {
          name: '.NET Core / C#',
          category: 'Backend & Data',
          productionNote: '13+ years of deep C# and .NET engineering from AmEx Decision Engine to Anvesa distributed backends.',
          experienceYears: '13+ yrs',
        },
        {
          name: 'SQL Server',
          category: 'Backend & Data',
          productionNote: 'High-concurrency relational schema design, query optimization, and multi-million record indexing.',
          experienceYears: '13+ yrs',
        },
        {
          name: 'Distributed Ingestion',
          category: 'Backend & Data',
          productionNote: 'Parallel parsing pipelines for PDFs, Word docs, PST/emails, spreadsheets, and legal transcripts.',
          experienceYears: '7+ yrs',
        },
        {
          name: 'Embedding Cache Layers',
          category: 'Backend & Data',
          productionNote: 'Custom deduplication & vector caching preventing redundant API re-embedding costs at 4M+ doc scale.',
          experienceYears: '4+ yrs',
        },
        {
          name: 'REST & Async Event APIs',
          category: 'Backend & Data',
          productionNote: 'Low-latency API gateways and webhook/queue orchestration for enterprise integrations.',
          experienceYears: '11+ yrs',
        },
        {
          name: 'Mainframe-to-.NET Migration',
          category: 'Backend & Data',
          productionNote: 'Legacy modernization of critical financial decision engines across US, EMEA, and APAC at Cognizant.',
          experienceYears: '3+ yrs',
        },
      ],
    },
    {
      id: 'frontend',
      title: 'FRONTEND & PRODUCT',
      headerBg: 'bg-[#93C5FD]',
      darkHeaderBg: 'bg-[#60A5FA] text-zinc-950',
      iconName: 'code',
      skills: [
        {
          name: 'Angular',
          category: 'Frontend & Product',
          productionNote: 'Enterprise-grade single-page application architecture for complex eDiscovery review & analytics.',
          experienceYears: '8+ yrs',
        },
        {
          name: 'TypeScript / JavaScript',
          category: 'Frontend & Product',
          productionNote: 'Type-safe frontend & full-stack tooling powering interactive data exploration workflows.',
          experienceYears: '9+ yrs',
        },
        {
          name: 'Product Engineering',
          category: 'Frontend & Product',
          productionNote: 'End-to-end ownership from customer workflow discovery to production telemetry and UX refinement.',
          experienceYears: '10+ yrs',
        },
        {
          name: 'eDiscovery Review UI',
          category: 'Frontend & Product',
          productionNote: 'High-density document viewers, AI citation highlighting, and legal search builders.',
          experienceYears: '7+ yrs',
        },
      ],
    },
    {
      id: 'architecture',
      title: 'ARCHITECTURE',
      headerBg: 'bg-[#FCD34D]',
      darkHeaderBg: 'bg-[#FBBF24] text-zinc-950',
      iconName: 'layers',
      skills: [
        {
          name: 'Zero-to-One Platform Build',
          category: 'Architecture',
          productionNote: 'Architected Anvesa from founding line of code to multi-continent enterprise AI platform.',
          experienceYears: '7+ yrs',
        },
        {
          name: 'Multi-Tenant SaaS',
          category: 'Architecture',
          productionNote: 'Strict data isolation, compliance, and regional residency across US, India, and Australian clients.',
          experienceYears: '7+ yrs',
        },
        {
          name: 'Document-Aware Chunking',
          category: 'Architecture',
          productionNote: 'Domain-specific segmentation for depositions, contracts, and email threads that dramatically lifts recall.',
          experienceYears: '3+ yrs',
        },
        {
          name: 'System Reliability & SLAs',
          category: 'Architecture',
          productionNote: 'Proactive 2am queue-depth monitoring, dead-letter recovery, and fault-isolated worker topologies.',
          experienceYears: '10+ yrs',
        },
      ],
    },
    {
      id: 'leadership',
      title: 'LEADERSHIP & ADVISORY',
      headerBg: 'bg-[#86EFAC]',
      darkHeaderBg: 'bg-[#4ADE80] text-zinc-950',
      iconName: 'users',
      skills: [
        {
          name: 'Engineering Leadership',
          category: 'Leadership & Advisory',
          productionNote: 'Leading full technology function — Architecture, R&D, QA, and Production Support.',
          experienceYears: '8+ yrs',
        },
        {
          name: 'Board & Executive Advisory',
          category: 'Leadership & Advisory',
          productionNote: 'Board contributor at Anvesa; strategic counsel for CTOs adopting enterprise AI with clear ROI.',
          experienceYears: '5+ yrs',
        },
        {
          name: 'M&A Technical Leadership',
          category: 'Leadership & Advisory',
          productionNote: 'Guided platform and engineering organization through the Aureus → Happiest Minds acquisition.',
          experienceYears: 'Proven',
        },
        {
          name: 'Unit Economics & Strategy',
          category: 'Leadership & Advisory',
          productionNote: 'Aligning LLM inference/embedding spend with enterprise contract margins before shipping.',
          experienceYears: '6+ yrs',
        },
      ],
    },
  ] as SkillCategory[],
  featuredProjects: [
    {
      id: 'anvesa-platform',
      number: 'Project № 01',
      title: 'Anvesa — AI-Native eDiscovery Platform',
      tagline: 'Built ground-up from zero to multi-continent enterprise production.',
      period: '2017 – Present',
      status: 'In Production',
      reach: '15+ Enterprise Clients · US, India & Australia',
      category: 'Enterprise AI Platform · eDiscovery',
      headerColor: 'bg-[#FDE047]',
      summary:
        'Built from zero to production over seven years. Now serves 15+ enterprise clients across three continents, processing millions of legal documents daily on Azure AKS.',
      deepDive:
        'Architected AKS-based distributed systems, RAG pipelines, and Agentic AI workflows. Led every layer — from the cloud infrastructure that holds it up, to the product strategy that decides where it is going next. Evolved the platform from founding engineer at Aureus Tech Systems through the Happiest Minds acquisition into an independent AI-native entity.',
      architectureHighlights: [
        'Distributed Kubernetes (Azure AKS) microservices orchestrating high-volume legal document parsing and indexing.',
        'Agentic AI workflows automating legal review, privilege log generation, and multi-document cross-examination.',
        'Strict multi-tenant security and regional compliance serving law firms and corporate legal departments across US, India, and Australia.',
      ],
      stack: ['Azure AKS', 'RAG', 'Agentic AI', '.NET Core', 'Angular', 'Kubernetes', 'Azure OpenAI', 'SQL Server'],
      metrics: [
        { label: 'Enterprise Clients', value: '15+' },
        { label: 'Continents Active', value: '3' },
        { label: 'Documents Scaled', value: '4M+' },
        { label: 'Years in Production', value: '7+' },
      ],
    },
    {
      id: 'production-rag-engine',
      number: 'System № 02',
      title: 'Document-Aware Production RAG & Ingestion Engine',
      tagline: 'Speaker-turn deposition chunking, clause-level contracts & near-real-time Azure AI Search indexing.',
      period: '2024 – Present',
      status: 'In Production',
      reach: '60,000+ Overnight Docs Indexed · <2 Min Traceability',
      category: 'RAG Infrastructure · Observability',
      headerColor: 'bg-[#67E8F9]',
      summary:
        'Custom enterprise RAG architecture replacing naive fixed-token splitting with structural document-type-aware chunking, embedding caching, and full query-to-chunk telemetry.',
      deepDive:
        'In eDiscovery, splitting Q&A deposition pairs or separating email thread headers destroys retrieval accuracy. We engineered specialized parsers for PDFs, Word docs, emails, and spreadsheets alongside an Azure Service Bus ingestion pipeline that indexes 60,000+ overnight documents before morning.',
      architectureHighlights: [
        'Speaker-turn chunking for legal depositions, clause/sub-clause segmentation for contracts, and header-attached email thread chunking.',
        'Azure text-embedding-3-large integration with custom caching layer and off-peak scheduled index rebuilds to control 4M+ doc costs.',
        'End-to-end RAG observability logging incoming query, retrieved chunk IDs, similarity scores, and exact LLM context window.',
      ],
      stack: ['Azure OpenAI', 'text-embedding-3-large', 'Azure AI Search', 'Azure Service Bus', '.NET Core', 'Observability'],
      metrics: [
        { label: 'Overnight Ingestion', value: '60K+ docs' },
        { label: 'Root-Cause Trace', value: '< 2 min' },
        { label: 'Retrieval Attribution', value: '70% lift' },
        { label: 'Embedding Scale', value: '4M+ docs' },
      ],
    },
    {
      id: 'amex-decision-engine',
      number: 'System № 03',
      title: 'American Express Global Decision Engine Migration',
      tagline: 'Mainframe-to-.NET modernization across US, EMEA, and APAC financial markets.',
      period: '2014 – 2017',
      status: 'Delivered & Awarded',
      reach: 'Global Markets · US, EMEA, APAC',
      category: 'Financial Infrastructure · Cognizant',
      headerColor: 'bg-[#F472B6]',
      summary:
        'Led Mainframe-to-.NET migration and global change delivery for the American Express Global Decision Engine, earning Delivery Quality recognition.',
      deepDive:
        'Following graduation as Batch Topper at Cognizant Learning Academy, engineered mission-critical decisioning logic and led cross-region migration initiatives from legacy Mainframe systems to modern .NET architectures across international markets.',
      architectureHighlights: [
        'Zero-defect migration of high-stakes financial decisioning rules from legacy Mainframe routines to .NET.',
        'Multi-market rule customization and release coordination across US, EMEA, and APAC regulatory zones.',
      ],
      stack: ['.NET / C#', 'SQL Server', 'Mainframe Migration', 'Global Decision Engine', 'Enterprise QA'],
      metrics: [
        { label: 'Academy Rank', value: 'Batch Topper' },
        { label: 'Global Regions', value: 'US · EMEA · APAC' },
        { label: 'Recognition', value: 'Delivery Award' },
        { label: 'Tenure', value: '2014 – 2017' },
      ],
    },
  ] as FeaturedProject[],
  services: [
    {
      num: '01',
      category: 'Architecture & Build',
      title: 'AI systems, designed and shipped to production.',
      description:
        'Design and build production-grade RAG pipelines, Agentic AI workflows, and LLM-powered enterprise applications on Azure. From architecture to deployment — the whole stack, hand-led.',
      ctaLabel: 'Discuss a project',
      deliverables: [
        'Document-type-aware RAG & hybrid vector search on Azure',
        'Multi-agent workflows with deterministic guardrails',
        'AKS cloud-native backend & Bicep IaC provisioning',
      ],
    },
    {
      num: '02',
      category: 'Audit & Improvement',
      title: 'Already-running systems, made faster, cheaper, more reliable.',
      description:
        'Audit, optimize, and scale existing AI infrastructure. Performance bottlenecks. Cost overruns. Reliability gaps. Brought from "works in demo" to "holds up under enterprise load."',
      ctaLabel: 'Request an audit',
      deliverables: [
        'Retrieval vs. generation root-cause telemetry audit',
        'Embedding & inference unit-economics cost reduction',
        'Ingestion queue resiliency & dead-letter observability',
      ],
    },
    {
      num: '03',
      category: 'Advisory',
      title: 'Strategic counsel for technology leaders.',
      description:
        'For CTOs and engineering leaders adopting enterprise AI — architecture reviews, team guidance, and roadmap planning. Pragmatic, board-aware, grounded in production reality.',
      ctaLabel: 'Begin a conversation',
      deliverables: [
        'Executive & board-level AI roadmap & build-vs-buy strategy',
        'Architecture reviews & engineering org scaling guidance',
        'Vendor, model, and cloud commit evaluation',
      ],
    },
  ] as ServiceOffering[],
  blogArticle: {
    slug: 'rag-in-production',
    number: '№ 01',
    date: 'March 31, 2026',
    readTime: '5 min read',
    title: 'What Nobody Tells You About Building RAG Systems in Production',
    excerpt:
      'Real lessons from shipping a RAG pipeline for enterprise eDiscovery — what the tutorials skip over.',
    tags: ['RAG', 'AI', 'Azure', 'Production', 'eDiscovery'],
    sections: [
      {
        heading: 'Introduction',
        paragraphs: [
          "Everybody's building RAG systems right now. Most of them work great in demos.",
          "Here's what the tutorials don't cover — from someone who's been running one in production for enterprise eDiscovery clients across three countries.",
        ],
      },
      {
        heading: '1. Chunking Is Everything, and Nobody Gets It Right the First Time',
        paragraphs: [
          'The first version of our chunking strategy was logical: fixed-size chunks, 500 tokens, 100-token overlap. Clean. Predictable. Wrong.',
          "In eDiscovery, documents aren't blog posts. You're processing contracts, depositions, emails, spreadsheets — sometimes all in the same case. A deposition transcript has a rhythm to it. Q&A pairs lose all meaning when you split them down the middle. An email thread makes no sense if you separate the header from the body.",
          'We spent two months getting chunking right. The result was document-type-aware logic that handles PDFs, Word docs, emails, and spreadsheets differently. For legal depositions, we chunk by speaker turn. For contracts, by clause and sub-clause. For emails, we keep the thread header with every reply chunk.',
          'The difference in retrieval quality was not incremental. It was dramatic.',
        ],
      },
      {
        heading: '2. Retrieval Quality and Generation Quality Are Completely Separate Problems',
        paragraphs: [
          'When the system gives a bad answer, the instinct is to blame the LLM. In my experience, 70% of the time the problem is retrieval, not generation.',
          'Wrong chunks → wrong context → wrong answer. The LLM is just doing its job.',
          "We now instrument every RAG call end-to-end: what query came in, which chunks were retrieved, what similarity scores they carried, what the model actually saw in its context window. When something goes wrong in production, I can trace the failure in under two minutes. If you're not doing this, you're debugging blind in the dark.",
        ],
      },
      {
        heading: '3. Cost at Scale Is Not an Afterthought',
        paragraphs: [
          "Embedding four million documents with a commercial API costs real money. Then there's retrieval cost, LLM inference cost, and — the one people forget — reprocessing cost when you change your chunking strategy (and you will change it).",
          "We moved our embedding workload to Azure's text-embedding-3-large early and built a caching layer on top of it. Batch processing runs during off-peak hours. Index rebuilds are scheduled events, not on-demand emergencies.",
          'Model the costs before you ship. "We\'ll optimize later" is how you end up in an uncomfortable call with a client about an unexpected bill.',
        ],
      },
      {
        heading: '4. Index Freshness Is an Ops Problem, Not a Dev Problem',
        paragraphs: [
          'In eDiscovery, documents arrive continuously. A new set of 60,000 emails might drop overnight. The system needs those indexed and searchable by morning.',
          'We built our ingestion pipeline on Azure Service Bus — new documents trigger chunking and embedding jobs, which feed into Azure AI Search in near real-time. Queue depth, processing latency, and failure rates are all monitored. When the ingestion pipeline backs up at 2am, someone knows before the client does.',
          "The mistake I see most often: engineering teams build a beautiful RAG system with zero plan for keeping the index current. That's not a RAG system. That's a snapshot.",
        ],
      },
      {
        heading: '5. The Part Nobody Puts in the Tutorial',
        paragraphs: [
          "RAG is not a library you install. It's a system — made of chunking logic, embedding models, retrieval infrastructure, prompt design, and observability that holds it together in production.",
          "Get each layer right independently. Instrument everything. Design for the failure modes you haven't encountered yet — because you will encounter them.",
          "That's what it takes to ship something that actually works when a client's legal team is relying on it.",
        ],
      },
    ],
  } as BlogArticle,
  credentials: [
    {
      title: 'Batch Topper — Cognizant Learning Academy',
      org: 'Cognizant Technology Solutions · Delivery Excellence Awardee',
      period: '2014 – 2017',
      detail: 'Graduated top of batch; led Mainframe-to-.NET migration for the American Express Global Decision Engine.',
    },
    {
      title: 'Founding Platform Engineer → Head of Technology',
      org: 'Aureus Tech Systems → Happiest Minds → Anvesa',
      period: '2017 – Present',
      detail: 'Built Anvesa ground-up, steered engineering through M&A acquisition, and now serve as Head of Technology & Board Contributor.',
    },
  ],
  globalReachBars: [
    { label: 'India (Hyderabad HQ — Architecture, R&D & Engineering)', percent: 100, color: 'bg-[#67E8F9]' },
    { label: 'United States (Enterprise eDiscovery & Financial Clients)', percent: 95, color: 'bg-[#FDE047]' },
    { label: 'Australia & APAC (Production Legal & Enterprise Deployments)', percent: 88, color: 'bg-[#F472B6]' },
    { label: 'EMEA Markets (Global Decision Engine Delivery)', percent: 80, color: 'bg-[#86EFAC]' },
  ],
  spokenLanguages: [
    { label: 'English (Full Professional Executive Fluency)', percent: 100 },
    { label: 'Telugu (Native Proficiency)', percent: 100 },
    { label: 'Hindi (Professional Working Proficiency)', percent: 90 },
  ],
};

export function generateStandaloneHtml(data = PORTFOLIO_DATA): string {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>${data.name} — ${data.roleTitle}</title>
  <script src="https://cdn.tailwindcss.com"></script>
  <link href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:wght@600;700;800&family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap" rel="stylesheet">
  <style>
    body { font-family: 'Plus Jakarta Sans', sans-serif; background: #FFFDF7; color: #18181b; }
    h1, h2, h3 { font-family: 'Bricolage Grotesque', sans-serif; }
  </style>
</head>
<body class="p-6 md:p-12 max-w-6xl mx-auto">
  <header class="bg-[#FDE047] border-2 border-zinc-900 shadow-[4px_4px_0px_0px_#18181b] p-6 mb-10 flex flex-wrap justify-between items-center gap-4">
    <div class="text-xl font-extrabold tracking-tight">${data.monogram} · ${data.name}</div>
    <a href="mailto:${data.email}" class="bg-[#67E8F9] border-2 border-zinc-900 shadow-[3px_3px_0px_0px_#18181b] px-4 py-2 font-bold text-sm">Get in Touch (${data.email})</a>
  </header>
  <section class="bg-white border-2 border-zinc-900 shadow-[6px_6px_0px_0px_#18181b] p-8 mb-10">
    <p class="text-teal-600 font-bold mb-2">Hi there! 👋</p>
    <h1 class="text-4xl md:text-6xl font-extrabold mb-4">${data.heroHeadline}</h1>
    <p class="text-lg text-zinc-700 leading-relaxed mb-6">${data.heroLead}</p>
    <div class="grid grid-cols-2 md:grid-cols-4 gap-4 pt-6 border-t-2 border-zinc-900">
      ${data.kpis.map((k) => `<div><div class="text-3xl font-extrabold">${k.value}</div><div class="text-sm text-zinc-600">${k.label}</div></div>`).join('')}
    </div>
  </section>
  <section class="bg-white border-2 border-zinc-900 shadow-[6px_6px_0px_0px_#18181b] p-8 mb-10">
    <h2 class="inline-block bg-[#FDE047] border-2 border-zinc-900 px-4 py-1 text-2xl font-extrabold mb-6">Career Journey</h2>
    <div class="space-y-6">
      ${data.journey.map((j) => `<div class="border-2 border-zinc-900 p-5 bg-[#FFFDF7]"><div class="font-bold text-lg">${j.role} @ ${j.company}</div><div class="text-sm text-zinc-600 mb-2">${j.period} · ${j.location}</div><p class="text-zinc-800">${j.description}</p></div>`).join('')}
    </div>
  </section>
  <section class="bg-white border-2 border-zinc-900 shadow-[6px_6px_0px_0px_#18181b] p-8">
    <h2 class="inline-block bg-[#FDE047] border-2 border-zinc-900 px-4 py-1 text-2xl font-extrabold mb-4">Correspondence</h2>
    <p class="mb-2"><strong>Email:</strong> <a href="mailto:${data.email}" class="underline">${data.email}</a></p>
    <p class="mb-2"><strong>LinkedIn:</strong> <a href="${data.linkedin}" class="underline">${data.linkedin}</a></p>
    <p><strong>Location:</strong> ${data.location}</p>
  </section>
</body>
</html>`;
}
