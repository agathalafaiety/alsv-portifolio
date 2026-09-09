import type {
  Article,
  Experience,
  ToolGroup,
  VolunteerWork,
} from '@/features/portfolio/domain/types';

export type { Locale } from '@/features/portfolio/domain/types';

export const copy = {
  pt: {
    nav: {
      about: 'Sobre',
      tools: 'Ferramentas',
      experience: 'Experiências',
      articles: 'Artigos',
      talks: 'Palestras',
      projects: 'Projetos',
      contact: 'Contato',
    },
    contact: 'Vamos conversar',
    heroLabel: 'Engenheira de Software e IA',
    heroTitleA: 'Agatha',
    heroTitleB: 'Lafaiety',
    heroText:
      'Desenvolvo soluções na intersecção entre Backend, Cloud e Inteligência Artificial.',
    heroPrimary: 'Conheça minha trajetória',
    heroSecondary: 'Enviar e-mail',
    scroll: 'Descubra minha trajetória',
    aboutTitle: 'Construo tecnologia com clareza e propósito.',
    aboutBody:
      'Transformo desafios de negócio em produtos digitais e soluções de inteligência artificial, do entendimento do problema à implementação em produção. Minha experiência reúne mercado financeiro, projetos internacionais e ambientes que exigem escala, segurança e colaboração.',
    aboutPersonal:
      'Também compartilho conhecimento e participo de iniciativas educacionais para tornar a tecnologia mais acessível, humana e próxima de quem está começando.',
    toolsTitle: 'Ferramentas',
    toolsBody:
      'Tecnologias que conecto para transformar contexto em soluções reais.',
    experienceTitle: 'Onde eu trabalhei',
    experienceBody:
      'Do suporte técnico à engenharia de software e inteligência artificial: uma evolução construída na prática.',
    educationTitle: 'Formação, certificações e comunidade',
    articlesTitle: 'Escrevo para entender — e compartilhar.',
    articlesBody:
      'Reflexões práticas sobre inteligência artificial, contexto e engenharia.',
    readArticle: 'Ler artigo',
    allArticles: 'Ver todos no Medium',
    talksTitle: 'Palestras & materiais',
    talksBody:
      'Conteúdo preparado para transformar fundamentos complexos em conversas claras e aplicáveis.',
    talkType: 'Material de palestra · 2026',
    talkTitle: 'Minha trajetória em Inteligência Artificial',
    talkDescription:
      'Uma apresentação que conecta minha trajetória na tecnologia aos fundamentos de IA, LLMs, RAG, Prompt Engineering e uso responsável.',
    talkNotice:
      'Material atualizado em setembro de 2026. Produtos, modelos e disponibilidade podem mudar ao longo do tempo.',
    openMaterial: 'Abrir material',
    downloadPdf: 'Baixar PDF',
    inviteTalk: 'Convidar para uma palestra',
    contentTitle: 'Meu diário digital',
    contentBody:
      'Compartilho aprendizados, rotina, estudos e os bastidores de uma carreira em tecnologia — tentando deixar essa jornada um pouco mais leve.',
    contactTitle: 'Vamos conversar.',
    contactBody:
      'Aberta a novas oportunidades, parcerias, colaborações ou apenas uma boa conversa sobre tecnologia.',
    linkedin: 'Conecte-se comigo',
    current: 'Atual',
    footer: 'São Paulo, Brasil',
  },
  en: {
    nav: {
      about: 'About',
      tools: 'Tools',
      experience: 'Experience',
      articles: 'Articles',
      talks: 'Talks',
      projects: 'Projects',
      contact: 'Contact',
    },
    contact: 'Let’s talk',
    heroLabel: 'Software & AI Engineer',
    heroTitleA: 'Agatha',
    heroTitleB: 'Lafaiety',
    heroText:
      'I build solutions at the intersection of Backend, Cloud and Artificial Intelligence.',
    heroPrimary: 'Explore my journey',
    heroSecondary: 'Send an email',
    scroll: 'Discover my journey',
    aboutTitle: 'I build technology with clarity and purpose.',
    aboutBody:
      'I turn business challenges into digital products and artificial intelligence solutions, from understanding the problem to production implementation. My experience spans financial services, international projects and environments that demand scale, security and collaboration.',
    aboutPersonal:
      'I also share knowledge and contribute to educational initiatives that make technology more accessible, human and welcoming to people starting their journey.',
    toolsTitle: 'Tools',
    toolsBody: 'Technologies I connect to turn context into real solutions.',
    experienceTitle: 'Where I have worked',
    experienceBody:
      'From technical support to software and artificial intelligence engineering: a career built through hands-on experience.',
    educationTitle: 'Education, certifications & community',
    articlesTitle: 'I write to understand — and share.',
    articlesBody:
      'Practical thoughts on artificial intelligence, context and engineering.',
    readArticle: 'Read article',
    allArticles: 'View all on Medium',
    talksTitle: 'Talks & materials',
    talksBody:
      'Content designed to turn complex foundations into clear and applicable conversations.',
    talkType: 'Talk material · 2026',
    talkTitle: 'My journey in Artificial Intelligence',
    talkDescription:
      'A presentation connecting my technology journey with AI foundations, LLMs, RAG, prompt engineering and responsible use.',
    talkNotice:
      'Material updated in September 2026. Products, models and availability may change over time.',
    openMaterial: 'Open material',
    downloadPdf: 'Download PDF',
    inviteTalk: 'Invite me to speak',
    contentTitle: 'My digital journal',
    contentBody:
      'I share lessons, routines, studies and the behind-the-scenes of a career in technology — trying to make this journey a little lighter.',
    contactTitle: 'Let’s talk.',
    contactBody:
      'Open to new opportunities, partnerships, collaborations or simply a good conversation about technology.',
    linkedin: 'Connect with me',
    current: 'Present',
    footer: 'São Paulo, Brazil',
  },
} as const;

export const experiences = [
  {
    company: 'Gerando Falcões International',
    logo: {
      src: '/company-logos/gerando-falcoes.png',
      tone: 'dark',
    },
    date: { pt: 'jun 2026 — atual', en: 'Jun 2026 — present' },
    role: {
      pt: 'Engenheira de Inteligência Artificial',
      en: 'Artificial Intelligence Engineer',
    },
    description: {
      pt: 'Liderança de capacitação técnica e adoção de LLMs e OpenAI Codex para equipes nos Estados Unidos e Inglaterra, além do desenvolvimento de soluções de IA para automação e produtividade.',
      en: 'Leading technical enablement and adoption of LLMs and OpenAI Codex for teams in the United States and England, while developing AI solutions for automation and productivity.',
    },
    tags: ['LLMs', 'OpenAI Codex', 'GenAI', 'AI Enablement'],
  },
  {
    company: 'XP Investimentos',
    logo: { src: '/company-logos/xp-investimentos.svg', tone: 'light' },
    date: { pt: 'jul 2024 — jan 2025', en: 'Jul 2024 — Jan 2025' },
    role: {
      pt: 'Engenheira de Machine Learning',
      en: 'Machine Learning Engineer',
    },
    description: {
      pt: 'Ciclo de vida de modelos de ML e IA Generativa, pipelines de MLOps, arquiteturas RAG com LangChain e Databricks, APIs REST em Python e infraestrutura Azure.',
      en: 'ML and Generative AI model lifecycle, MLOps pipelines, RAG architectures with LangChain and Databricks, Python REST APIs and Azure infrastructure.',
    },
    tags: ['RAG', 'MLOps', 'Python', 'Azure'],
  },
  {
    company: 'Itaú Unibanco',
    logo: { src: '/company-logos/itau-unibanco.svg', tone: 'light' },
    date: { pt: 'jun 2023 — jul 2024', en: 'Jun 2023 — Jul 2024' },
    role: {
      pt: 'Estagiária em Engenharia de Software · Dados & Analytics',
      en: 'Software Engineering Intern · Data & Analytics',
    },
    description: {
      pt: 'Microsserviços e APIs BFF com Python e AWS, automação de processos, observabilidade no Splunk, suporte a sistemas .NET e modelagem de dados.',
      en: 'Microservices and BFF APIs with Python and AWS, process automation, Splunk observability, .NET systems support and data modeling.',
    },
    tags: ['Python', 'AWS', 'BFF', 'Splunk'],
  },
  {
    company: 'AKM',
    logo: { src: '/company-logos/akm.svg', tone: 'light' },
    date: { pt: 'fev 2023 — abr 2023', en: 'Feb 2023 — Apr 2023' },
    role: {
      pt: 'Estagiária em Business Intelligence',
      en: 'Business Intelligence Intern',
    },
    description: {
      pt: 'Dashboards e relatórios em Power BI e Looker Studio, acompanhamento de KPIs e transformação de dados em insights para o negócio.',
      en: 'Dashboards and reports in Power BI and Looker Studio, KPI tracking and turning data into actionable business insights.',
    },
    tags: ['Power BI', 'Looker Studio', 'Analytics'],
  },
  {
    company: 'DocuSign',
    logo: { src: '/company-logos/docusign.png', tone: 'light' },
    date: { pt: 'fev 2022 — jan 2023', en: 'Feb 2022 — Jan 2023' },
    role: {
      pt: 'Aprendiz em Tecnologia da Informação',
      en: 'Information Technology Apprentice',
    },
    description: {
      pt: 'Suporte de hardware e software, controle de ativos, configuração de acessos, onboarding técnico, ServiceNow, JAMF, macOS e Windows.',
      en: 'Hardware and software support, asset control, access configuration, technical onboarding, ServiceNow, JAMF, macOS and Windows.',
    },
    tags: ['ServiceNow', 'JAMF', 'IT Support'],
  },
] as const satisfies readonly Experience[];

export const toolGroups = [
  {
    title: { pt: 'Inteligência Artificial', en: 'Artificial Intelligence' },
    items: [
      'LLMs',
      'OpenAI Codex',
      'OpenAI API',
      'GenAI',
      'RAG',
      'Fine-Tuning',
      'Prompt Engineering',
      'Context Engineering',
      'LangChain',
      'Chroma DB',
    ],
  },
  {
    title: { pt: 'Backend & Engenharia', en: 'Backend & Engineering' },
    items: [
      'Python',
      'FastAPI',
      'Flask',
      'REST APIs',
      'SQL',
      'PySpark',
      'Microservices',
      'BFF',
    ],
  },
  {
    title: { pt: 'Cloud & MLOps', en: 'Cloud & MLOps' },
    items: [
      'AWS',
      'Azure',
      'MLOps',
      'Databricks',
      'Docker',
      'Git',
      'CI/CD',
      'Splunk',
    ],
  },
  {
    title: { pt: 'Dados & Analytics', en: 'Data & Analytics' },
    items: [
      'PostgreSQL',
      'SQL Server',
      'Pandas',
      'PowerDesigner',
      'Power BI',
      'Looker Studio',
    ],
  },
] as const satisfies readonly ToolGroup[];

export const articles = [
  {
    title: 'LLMs e Context Engineering',
    description: {
      pt: 'Por que construir contexto é uma das partes centrais de um sistema de IA.',
      en: 'Why building context is central to reliable AI systems.',
    },
    href: 'https://agathalafaiety.medium.com/artigo-1-llms-e-context-engineering-af9c63c7f561',
    index: '01',
  },
  {
    title: 'A Matemática da Semântica — Embeddings',
    description: {
      pt: 'A transformação da linguagem em representações matemáticas comparáveis.',
      en: 'Turning language into comparable mathematical representations.',
    },
    href: 'https://agathalafaiety.medium.com/artigo-2-a-matem%C3%A1tica-da-sem%C3%A2ntica-embeddings-99ed08a6605b',
    index: '02',
  },
  {
    title: 'Vector Databases: onde a IA encontra conhecimento',
    description: {
      pt: 'Como sistemas encontram informações por proximidade semântica.',
      en: 'How systems retrieve information through semantic proximity.',
    },
    href: 'https://agathalafaiety.medium.com/artigo-3-vector-databases-onde-a-ia-encontra-conhecimento-ba78e2586430',
    index: '03',
  },
  {
    title: 'RAG: como conectar LLMs aos seus próprios dados',
    description: {
      pt: 'Transformando busca em respostas contextualizadas e rastreáveis.',
      en: 'Turning retrieval into contextualized and traceable answers.',
    },
    href: 'https://agathalafaiety.medium.com/artigo-4-rag-como-conectar-llms-aos-seus-pr%C3%B3prios-dados-4a9b7c9f99c7',
    index: '04',
  },
  {
    title: 'Prompt Engineering para sistemas de IA',
    description: {
      pt: 'Como reduzir ambiguidades e deixar claro o que uma LLM precisa fazer.',
      en: 'How to reduce ambiguity and make the expected outcome clear to an LLM.',
    },
    href: 'https://agathalafaiety.medium.com/artigo-5-prompt-engineering-para-sistemas-de-ia-2b9bf66f58d2',
    index: '05',
  },
] as const satisfies readonly Article[];

export const expertise = [
  { pt: 'Backend & APIs', en: 'Backend & APIs' },
  { pt: 'Cloud & MLOps', en: 'Cloud & MLOps' },
  { pt: 'Engenharia de IA', en: 'AI Engineering' },
] as const;

export const talkTags = [
  { pt: 'Trajetória', en: 'Journey' },
  { pt: 'Fundamentos de IA', en: 'AI foundations' },
  { pt: 'LLMs', en: 'LLMs' },
  { pt: 'RAG', en: 'RAG' },
  { pt: 'Prompt Engineering', en: 'Prompt Engineering' },
  { pt: 'Uso responsável', en: 'Responsible use' },
] as const;

export const volunteerWork = [
  {
    organization: 'Technovation Girls Brazil',
    role: { pt: 'Embaixadora Local', en: 'Local Ambassador' },
  },
  {
    organization: 'DocuSign',
    role: {
      pt: 'Membro do Impact Committee',
      en: 'Impact Committee Member',
    },
  },
  {
    organization: 'Gerando Falcões',
    role: { pt: 'Voluntária Educacional', en: 'Educational Volunteer' },
  },
] as const satisfies readonly VolunteerWork[];
