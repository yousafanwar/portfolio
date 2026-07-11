import type { Project, SkillCategory } from './types'

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
      'Vue.js',
      'React.js',
      'Next.js',
    ],
  },
  {
    cat: 'Backend & Architecture',
    items: [
      'RESTful API Development',
      'Microservices Architecture',
      'System Design',
      'Scalable Backend Systems',
    ],
  },
  {
    cat: 'AI & Automation',
    items: [
      'Vision-LLM Integration',
      'Agent Architecture (Observe-Think-Act)',
      'Playwright',
      'FastAPI',
    ],
  },
  {
    cat: 'Databases',
    items: ['PostgreSQL', 'SQL Server', 'MySQL', 'MongoDB'],
  },
  {
    cat: 'Task Queues & Messaging',
    items: ['Celery', 'BullMQ', 'Apache Kafka', 'Hangfire', 'Redis'],
  },
  {
    cat: 'Real-Time & Auth',
    items: ['SignalR', 'JWT Auth', 'Passport.js', 'Refresh Tokens', 'RBAC'],
  },
  {
    cat: 'DevOps & Tools',
    items: ['Docker', 'CI/CD', 'GitHub Actions', 'Firebase Cloud Messaging (FCM)'],
  },
  {
    cat: 'ORM / Query Builders',
    items: ['Prisma', 'Django ORM', 'Entity Framework Core'],
  },
  {
    cat: 'Version Control',
    items: ['Git', 'GitHub'],
  },
]

export const PROJECTS: Project[] = [
  {
    id: 'ecp',
    name: 'ECP — Bird Buzz',
    desc: 'Full-stack e-commerce platform for bird supplies — product catalog, filtering, cart, checkout, and JWT auth. Built as a client project with NestJS backend and Next.js storefront. Live at aytraders.com.',
    tags: ['Next.js', 'TypeScript', 'PostgreSQL', 'Node.js'],
    repo: null,
    link: 'https://aytraders.com/',
    detail: 'ecp',
  },
  {
    id: 'chatapp',
    name: 'ChatApp 2.0',
    desc: 'Real-time chat app with a microservices architecture — separate auth, chat, and user services orchestrated via Docker Compose.',
    tags: ['TypeScript', 'Microservices', 'Docker', 'WebSockets'],
    repo: 'https://github.com/yousafanwar/ChatApp2.0',
    link: 'https://chat.aytraders.com/login',
    detail: 'chatapp',
  },
  {
    id: 'authforge',
    name: 'AuthForge API',
    desc: 'Production-grade auth API with NestJS and Prisma. Implements JWT, refresh tokens, RBAC, and full test coverage.',
    tags: ['NestJS', 'TypeScript', 'Prisma', 'PostgreSQL'],
    repo: 'https://github.com/yousafanwar/AuthForge-API',
    link: 'https://auth.aytraders.com/api/docs',
    detail: 'authforge',
  },
  {
    id: 'mira',
    name: 'Mira Network',
    desc: 'Backend for a real-time crypto mining & airdrop platform. Django + Celery + Redis — handling concurrent mining sessions, FCM topic notifications, and fraud detection at scale. Built at Omnisoft.',
    tags: ['Django', 'Python', 'PostgreSQL', 'Redis', 'Celery', 'Firebase'],
    repo: null,
    link: null,
    detail: 'mira',
  },
  {
    id: 'unitygames',
    name: 'Unity Games Backend',
    desc: 'Standalone NestJS backend for Unity game integration inside Mira Network — player management, event-based scoring, auto winner calculation, and top-10 leaderboards. Built at Omnisoft.',
    tags: ['NestJS', 'TypeScript', 'Prisma', 'PostgreSQL'],
    repo: null,
    link: null,
    detail: 'unitygames',
  },
  {
    id: 'sterlinggrey',
    name: 'Sterling Grey',
    desc: 'Backend for a professional accounting and invoicing SaaS. Multi-company support, Stripe Connect payments, tiered subscriptions with usage quotas, PDF invoice generation, and SSO. Built at Omnisoft.',
    tags: ['Node.js', 'TypeScript', 'DynamoDB', 'Stripe'],
    repo: null,
    link: null,
    detail: 'sterlinggrey',
  },
  {
    id: 'recruitme',
    name: 'RecruitMe',
    desc: 'US-based SaaS workforce management system for staffing agencies — 15+ microservices, 5k+ workers, automated salary calculation from mobile check-in/out. Increased agency revenue by up to 30%. Built at MB Services.',
    tags: ['Node.js', 'Vue.js', 'PostgreSQL', 'Microservices'],
    repo: null,
    link: null,
    detail: 'recruitme',
  },
  {
    id: 'socialonehub',
    name: 'SocialOneHub',
    desc: 'SaaS social media management platform — Pexels API integration, Facebook/Instagram Graph API insights, subscription-based access control, and Twitter management. Freelance project.',
    tags: ['TypeScript', 'React', 'Next.js', 'Node.js', 'PostgreSQL'],
    repo: null,
    link: null,
    detail: 'socialonehub',
  },
]
