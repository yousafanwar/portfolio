import type {
  ContactChannel,
  Experience,
  Project,
  SkillCategory,
  Stat,
} from './types'

export const SITE = {
  name: 'Yousaf Anwar Ali',
  role: 'Backend-Focused Full Stack Developer',
  email: 'yousafanwar7777@gmail.com',
  phone: '+92 336 4407110',
  phoneDisplay: '+92 336 4407110',
  location: 'Lahore, Pakistan',
  availability: 'Available for Opportunities — Lahore, Pakistan (Remote / Hybrid)',
  github: 'https://github.com/yousafanwar',
  githubLabel: 'github.com/yousafanwar',
  linkedin: 'https://www.linkedin.com/in/yousaf-anwar-ali-341195301/',
  linkedinLabel: 'linkedin.com/in/yousaf-anwar-ali',
  resume: 'https://github.com/yousafanwar',
} as const

export const STATS: Stat[] = [
  {
    value: '4M+',
    label: 'Users Served',
    detail: 'Mirex Network Platform',
  },
  {
    value: '4+',
    label: 'Years Production',
    detail: 'Django · NestJS · Node.js',
  },
  {
    value: '15+',
    label: 'Microservices Shipped',
    detail: 'RecruitMe SaaS Platform',
  },
]

export const SKILLS: SkillCategory[] = [
  {
    cat: 'Languages & Frameworks',
    items: [
      'JavaScript',
      'TypeScript',
      'Node.js',
      'Express.js',
      'Nest.js',
      'Django',
      'Python',
      'C#',
      'ASP.NET Core',
      'React',
      'Next.js',
      'Vue.js',
      'FastAPI',
    ],
  },
  {
    cat: 'Backend & Architecture',
    items: [
      'RESTful APIs',
      'Microservices Architecture',
      'System Design',
      'Scalable Systems',
    ],
  },
  {
    cat: 'AI & Automation',
    items: [
      'Vision-LLM Integration',
      'Agent Architecture (Observe-Think-Act)',
      'Playwright',
      'PyAutoGUI',
    ],
  },
  {
    cat: 'Task Queues & Messaging',
    items: ['Celery', 'BullMQ', 'Apache Kafka', 'Redis', 'Hangfire'],
  },
  {
    cat: 'Database & Data Layer',
    items: [
      'PostgreSQL',
      'SQL Server',
      'MySQL',
      'MongoDB',
      'Prisma',
      'Django ORM',
      'Entity Framework Core',
    ],
  },
  {
    cat: 'Real-time, Security & DevOps',
    items: [
      'SignalR',
      'JWT Auth',
      'Passport.js',
      'GitHub Actions',
      'Nginx',
      'Docker',
      'Linux',
      'Firebase FCM',
    ],
  },
]

export const EXPERIENCE: Experience[] = [
  {
    role: 'Software Engineer',
    company: 'Omnisoft',
    location: 'Lahore',
    period: 'Nov 2025 — Present',
    projects: [
      {
        name: 'Mirex Network',
        summary:
          'Backend for a real-time crypto mining & airdrop platform serving millions of users — concurrent mining sessions, FCM topic notifications, and fraud detection at scale.',
        tags: ['Django', 'Celery', 'Redis', 'PostgreSQL', 'Firebase FCM'],
      },
      {
        name: 'ETMP — Enterprise Task Platform ==> Replace this with Carspot NL',
        summary:
          'Full-stack enterprise task platform with Clean Architecture .NET API + React SPA — skills-based auto-assignment, AI intake, and WhatsApp Cloud API.',
        tags: ['ASP.NET Core', 'C#', 'React', 'SQL Server', 'AI'],
      },
      {
        name: 'Sterling Grey',
        summary:
          'Accounting SaaS backend — multi-company support, Stripe Connect, tiered subscriptions, PDF invoices, and SSO.',
        tags: ['Node.js', 'TypeScript', 'DynamoDB', 'Stripe'],
      },
    ],
  },
  {
    role: 'Full Stack & Backend Engineer',
    company: 'Freelance',
    location: 'Lahore',
    period: 'Jun 2024 — Nov 2025',
    projects: [
      {
        name: 'SocialOneHub Platform',
        summary:
          'SaaS social media management — Pexels API, Facebook/Instagram Graph insights, subscription access control, and Twitter management.',
        tags: ['TypeScript', 'React', 'Next.js', 'Node.js', 'PostgreSQL'],
      },
      {
        name: 'NookTables',
        summary:
          'Mobile-first social web app for meeting over coffee in Lahore — open a table, find nearby locals, join the conversation.',
        tags: ['Next.js', 'TypeScript', 'React'],
      }
    ],
  },
  {
    role: 'Full Stack Developer',
    company: 'MB Services FZ LLC',
    location: 'Dubai',
    period: 'Sep 2022 — Jun 2024',
    projects: [
      {
        name: 'RecruitMe Workforce SaaS',
        summary:
          'US staffing SaaS built from scratch — 15+ microservices, 5k+ workers, automated payroll from mobile check-in/out. Increased agency revenue by up to 30%.',
        tags: ['Node.js', 'Vue.js', 'PostgreSQL', 'Apache Kafka', 'Redis'],
      },
    ],
  },
]

export const CONTACT_CHANNELS: ContactChannel[] = [
  {
    id: 'email',
    label: 'Email',
    value: SITE.email,
    href: `mailto:${SITE.email}`,
    hint: 'Click to compose',
  },
  {
    id: 'phone',
    label: 'Phone / WhatsApp',
    value: SITE.phoneDisplay,
    href: `https://wa.me/923184667520`,
    hint: 'Lahore, Pakistan (GMT+5)',
  },
  {
    id: 'github',
    label: 'GitHub',
    value: SITE.githubLabel,
    href: SITE.github,
    hint: 'Repositories & Code',
  },
  {
    id: 'linkedin',
    label: 'LinkedIn',
    value: SITE.linkedinLabel,
    href: SITE.linkedin,
    hint: 'Connect on LinkedIn',
  },
]

export const PROJECTS: Project[] = [
  {
    id: 'etmp',
    name: 'ETMP',
    category: 'Enterprise Platform',
    desc: 'Full-stack enterprise task platform with Clean Architecture .NET API + React SPA — skills-based auto-assignment, AI intake, WhatsApp Cloud API, Docker & CI/CD.',
    tags: ['ASP.NET Core', 'C#', 'React', 'SQL Server', 'AI', 'WhatsApp'],
    highlightTags: ['ASP.NET Core'],
    repo: 'https://github.com/yousafanwar/EnterpriseTaskManagement',
    link: 'https://projectmanagementfrontend.omnisoft.info',
    detail: 'etmp',
  },
  {
    id: 'nooktables',
    name: 'NookTables',
    category: 'Mobile-first Social',
    desc: 'Mobile-first social app for meeting over coffee in Lahore — open a table, find nearby locals, and join the conversation. Live at nooktables.app.',
    tags: ['Next.js', 'TypeScript', 'React', 'Mobile Web'],
    highlightTags: ['Next.js'],
    repo: null,
    link: 'https://nooktables.app/',
    detail: 'nooktables',
  },
  {
    id: 'ecp',
    name: 'ECP — Bird Buzz',
    category: 'E-commerce',
    desc: 'Full-stack e-commerce for bird supplies — catalog, cart, checkout, and JWT auth. NestJS backend + Next.js storefront at aytraders.com.',
    tags: ['Next.js', 'TypeScript', 'PostgreSQL', 'Node.js'],
    highlightTags: ['Next.js'],
    repo: null,
    link: 'https://aytraders.com/',
    detail: 'ecp',
  },
  {
    id: 'authforge',
    name: 'AuthForge API',
    category: 'IAM / Security',
    desc: 'Production-grade auth API with NestJS and Prisma. JWT, refresh tokens, RBAC, and full test coverage.',
    tags: ['NestJS', 'TypeScript', 'Prisma', 'PostgreSQL'],
    highlightTags: ['NestJS'],
    repo: 'https://github.com/yousafanwar/AuthForge-API',
    link: 'https://auth.aytraders.com/api/docs',
    detail: 'authforge',
  },
  {
    id: 'mira',
    name: 'Mirex Network',
    category: '3.5M+ Users',
    desc: 'Backend for a real-time crypto mining & airdrop platform. Django + Celery + Redis — concurrent sessions, FCM notifications, and fraud detection at scale.',
    tags: ['Django', 'Python', 'PostgreSQL', 'Redis', 'Celery', 'Firebase'],
    highlightTags: ['Django'],
    repo: null,
    link: 'https://play.google.com/store/apps/details?id=com.lumira_mobile',
    detail: 'mira',
  },
  {
    id: 'unitygames',
    name: 'Unity Games Backend',
    category: 'Real-time Game Ops',
    desc: 'Standalone NestJS backend for Unity games inside Mirex — player management, event scoring, auto winners, and top-10 leaderboards.',
    tags: ['NestJS', 'TypeScript', 'Prisma', 'PostgreSQL'],
    highlightTags: ['NestJS'],
    repo: null,
    link: null,
    detail: 'unitygames',
  },
  {
    id: 'sterlinggrey',
    name: 'Sterling Grey',
    category: 'Fintech / Multi-tenant',
    desc: 'Accounting SaaS backend — multi-company support, Stripe Connect, tiered subscriptions, PDF invoices, and SSO.',
    tags: ['Node.js', 'TypeScript', 'DynamoDB', 'Stripe'],
    highlightTags: ['Node.js'],
    repo: null,
    link: null,
    detail: 'sterlinggrey',
  },
  {
    id: 'recruitme',
    name: 'RecruitMe',
    category: 'SaaS Workforce',
    desc: 'US staffing SaaS — 15+ microservices, 5k+ workers, automated payroll from mobile check-in/out. Increased agency revenue by up to 30%.',
    tags: ['Node.js', 'Vue.js', 'PostgreSQL', 'Microservices'],
    highlightTags: ['Node.js'],
    repo: null,
    link: null,
    detail: 'recruitme',
  },
  {
    id: 'socialonehub',
    name: 'SocialOneHub',
    category: 'Freelance SaaS',
    desc: 'Social media management SaaS — Pexels API, Facebook/Instagram Graph insights, subscription access control, and Twitter management.',
    tags: ['TypeScript', 'React', 'Next.js', 'Node.js', 'PostgreSQL'],
    highlightTags: ['Next.js'],
    repo: null,
    link: null,
    detail: 'socialonehub',
  },
]
