export interface LocationPoint {
  id: 'hyderabad' | 'usa' | 'australia' | 'emea';
  name: string;
  shortLabel: string;
  coordinates: { x: number; y: number };
  eraLabel: string;
  headline: string;
  details: string;
}

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
  eraMarkerPosition: { x: number; y: number };
  locations: LocationPoint[];
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

export const ASHOK_IMAGES = {
  avatar: '/src/assets/images/ashok-original.png',
  pirateCaptain: '/src/assets/images/pirate_captain_exact_closeup_1791562916506.jpg',
  treasureMap: '/src/assets/images/clean_cartography_map_1791561042011.jpg',
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
      yearTag: '2024 – PRESENT',
      location: 'Hyderabad, India',
      regions: 'US · India · Australia',
      description:
        'Leading AI innovation and enterprise product strategy for 15+ clients across the US, India, and Australia. Designing RAG pipelines, Agentic AI systems, and cloud-native architectures on Azure AKS that run in production daily.',
      highlights: [
        'Architected document-type-aware RAG pipelines processing millions of legal depositions, contracts, and email threads.',
        'Engineered real-time ingestion on Azure Service Bus + Azure AI Search capable of indexing 60,000+ overnight documents by morning.',
      ],
      stack: ['Azure AKS', 'Agentic AI', 'RAG Architecture', 'Azure OpenAI', 'Azure AI Search', 'Azure Service Bus'],
      eraMarkerPosition: { x: 69.0, y: 46.0 },
      locations: [
        {
          id: 'hyderabad',
          name: 'Hyderabad, India (Anvesa HQ)',
          shortLabel: 'Hyderabad, India',
          coordinates: { x: 69.0, y: 46.0 },
          eraLabel: '2024 – Present · Anvesa HQ',
          headline: 'Head of Technology & Board Contributor — Hyderabad Practice',
          details:
            'Leading the entire engineering and AI architecture practice from Hyderabad — directing RAG pipelines, Agentic AI workflows, and Azure AKS infrastructure for 15+ global enterprise clients.',
        },
        {
          id: 'usa',
          name: 'United States (Enterprise Legal & eDiscovery Clients)',
          shortLabel: 'United States',
          coordinates: { x: 21.0, y: 34.0 },
          eraLabel: '2024 – Present · US Production Fleet',
          headline: 'US Enterprise eDiscovery & Production RAG Workloads',
          details:
            'Serving major US enterprise and legal clients daily on Anvesa — processing millions of depositions, contracts, and email threads with Azure OpenAI and Azure AI Search.',
        },
        {
          id: 'australia',
          name: 'Australia (APAC Enterprise Clients)',
          shortLabel: 'Australia',
          coordinates: { x: 83.0, y: 71.0 },
          eraLabel: '2024 – Present · Australia Region',
          headline: 'Australia Enterprise AI & eDiscovery Deployments',
          details:
            'Delivering production AI-native eDiscovery, multi-tenant Azure AKS clusters, and high-volume overnight document ingestion for enterprise clients across Australia.',
        },
      ],
    },
    {
      id: 'aureus-happiest-minds',
      role: 'Senior Software Engineer → Head of Technology',
      company: 'Aureus Tech Systems → Happiest Minds',
      subtitle: 'Founding Platform Engineer through Acquisition',
      period: '2017 – 2024',
      yearTag: '2017 – 2024',
      location: 'Hyderabad, India',
      regions: 'India · United States',
      description:
        'Joined as founding engineer on what became Anvesa. Built the platform from scratch across the full stack. Grew into leading the entire engineering function — architecture, R&D, QA, and production support. Led platform through the Aureus → Happiest Minds acquisition.',
      highlights: [
        'Built the core eDiscovery platform from line one across .NET Core, Angular, SQL Server, and Kubernetes.',
        'Led architecture, R&D, QA, and production support through the Aureus → Happiest Minds acquisition.',
      ],
      stack: ['.NET Core / C#', 'Angular', 'Kubernetes (AKS)', 'Docker', 'Bicep IaC', 'SQL Server'],
      eraMarkerPosition: { x: 69.0, y: 46.0 },
      locations: [
        {
          id: 'hyderabad',
          name: 'Hyderabad, India (Aureus → Happiest Minds)',
          shortLabel: 'Hyderabad, India',
          coordinates: { x: 69.0, y: 46.0 },
          eraLabel: '2017 – 2024 · Founding Engineer to Head of Tech',
          headline: 'Zero-to-One Platform Build & Acquisition Leadership',
          details:
            'Joined as founding engineer in Hyderabad and built the platform ground-up across .NET Core, Angular, SQL Server, and Kubernetes, guiding the engineering organization through the Happiest Minds acquisition.',
        },
        {
          id: 'usa',
          name: 'United States (Enterprise Rollouts)',
          shortLabel: 'United States',
          coordinates: { x: 21.0, y: 34.0 },
          eraLabel: '2017 – 2024 · US Client Adoption',
          headline: 'Scaling Cloud-Native eDiscovery for US Enterprises',
          details:
            'Architected containerized Docker & Azure AKS deployments and Bicep IaC provisioning to onboard and scale enterprise legal clients in the United States.',
        },
      ],
    },
    {
      id: 'cognizant-amex',
      role: 'Programmer Analyst → Associate',
      company: 'Cognizant Technology Solutions',
      subtitle: 'American Express · Global Decision Engine',
      period: '2014 – 2017',
      yearTag: '2014 – 2017',
      location: 'Hyderabad, India',
      regions: 'US · EMEA · APAC',
      description:
        "Started career as Batch Topper at Cognizant's Learning Academy. Worked on the American Express Global Decision Engine — led Mainframe-to-.NET migration delivering change requests across US, EMEA, APAC and other global markets. Awarded for delivery quality.",
      highlights: [
        "Graduated as Batch Topper at Cognizant's Learning Academy and received Delivery Excellence Awards.",
        'Led Mainframe-to-.NET migration for the American Express Global Decision Engine across US, EMEA, and APAC.',
      ],
      stack: ['.NET / C#', 'SQL Server', 'Enterprise Architecture', 'Mainframe Migration', 'Global Decision Engine'],
      eraMarkerPosition: { x: 49.0, y: 27.0 },
      locations: [
        {
          id: 'hyderabad',
          name: 'Hyderabad, India (Cognizant Academy Topper)',
          shortLabel: 'Hyderabad, India',
          coordinates: { x: 69.0, y: 46.0 },
          eraLabel: '2014 – 2017 · Cognizant Learning Academy',
          headline: 'Batch Topper & American Express Engineering Delivery',
          details:
            "Started career as Batch Topper at Cognizant's Learning Academy in Hyderabad. Engineered mission-critical Mainframe-to-.NET migrations and was awarded for delivery quality.",
        },
        {
          id: 'usa',
          name: 'United States (American Express Global Decision Engine)',
          shortLabel: 'United States (AmEx)',
          coordinates: { x: 21.0, y: 34.0 },
          eraLabel: '2014 – 2017 · US Financial Markets',
          headline: 'American Express Global Decision Engine — US Market',
          details:
            'Led Mainframe-to-.NET migration and delivered high-reliability credit & risk decisioning change requests for American Express in the United States.',
        },
        {
          id: 'emea',
          name: 'Europe (EMEA Financial Markets)',
          shortLabel: 'Europe (EMEA)',
          coordinates: { x: 49.0, y: 27.0 },
          eraLabel: '2014 – 2017 · EMEA Markets',
          headline: 'Global Decision Engine Delivery — Europe / EMEA',
          details:
            'Delivered cross-market decisioning rules and .NET migration releases across European (EMEA) regulatory markets for American Express.',
        },
        {
          id: 'australia',
          name: 'Australia & APAC Markets (AmEx Decision Engine)',
          shortLabel: 'Australia & APAC',
          coordinates: { x: 83.0, y: 71.0 },
          eraLabel: '2014 – 2017 · Australia & APAC Markets',
          headline: 'Global Decision Engine Delivery — Australia & APAC',
          details:
            'Executed production change requests and Mainframe-to-.NET modernization across Australian and Asia-Pacific financial markets for American Express.',
        },
      ],
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
          productionNote: 'Containerized microservice workloads, auto-scaling worker pools, and production deployment pipelines.',
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
