import type {
  ContactChannel,
  Experience,
  Project,
  SkillCategory,
  Stat,
} from './types'

export const SITE = {
  name: 'Yousaf Anwar Ali',
  role: 'Backend Engineer',
  email: 'yousafanwar7777@gmail.com',
  phone: '+92 336 4407110',
  phoneDisplay: '+92 336 4407110',
  location: 'Lahore, Pakistan',
  availability: 'Open to remote contracts · Lahore, UTC+5',
  linkedin: 'https://www.linkedin.com/in/yousaf-anwar-ali-341195301/',
  linkedinLabel: 'linkedin.com/in/yousaf-anwar-ali',
  resume: 'https://drive.google.com/file/d/1S8LM8rQZReXQR0Lz5zKl98lWUb1huMb6/view?usp=sharing',
} as const

export const STATS: Stat[] = [
  {
    value: '3.5M+',
    label: 'Users on Mirex',
    detail: 'Notifications and reward integrity',
  },
  {
    value: '4+',
    label: 'Years in Production',
    detail: 'Django · NestJS · PostgreSQL',
  },
  {
    value: '5,000+',
    label: 'Workers Paid',
    detail: 'RecruitMe · check-in to payroll',
  },
]

export const SKILLS: SkillCategory[] = [
  {
    cat: 'Languages',
    items: ['Python', 'TypeScript', 'JavaScript', 'SQL'],
  },
  {
    cat: 'Backend',
    items: ['Django', 'NestJS', 'Node.js', 'FastAPI', 'PostgreSQL', 'Redis', 'Prisma', 'REST APIs'],
  },
  {
    cat: 'Delivery',
    items: ['BullMQ', 'Firebase Cloud Messaging', 'JWT', 'RBAC'],
  },
  {
    cat: 'Also shipped',
    items: ['C#', 'ASP.NET Core', 'SQL Server', 'Hangfire', 'SignalR', 'React', 'Next.js', 'Docker'],
  },
]

export const EXPERIENCE: Experience[] = [
  {
    role: 'Backend Developer',
    company: 'Omnisoft',
    location: 'Lahore',
    period: 'Nov 2025 — Present',
    projects: [
      {
        name: 'Mirex',
        summary:
          'Consumer rewards platform (3.5M+ users). Replaced per-user FCM token lookups with topic subscriptions and backfilled users before cutover. Inbox rows are written when the user opens the inbox. Reward cooldowns are enforced on the grant write, and a compounding video-ad boost was replaced with a linear rate.',
        tags: ['Django', 'PostgreSQL', 'Redis', 'Firebase FCM', 'NestJS', 'BullMQ'],
      },
      {
        name: 'AI filing agent',
        summary:
          'Automates multi-step portal forms. Playwright uses DOM selectors first, and a vision model takes over when the layout changes. FastAPI jobs with status polling. NestJS handles JWT, RBAC, rate limits, and PDF/CSV extraction.',
        tags: ['Python', 'Playwright', 'FastAPI', 'NestJS', 'Prisma', 'PostgreSQL'],
      },
    ],
  },
  {
    role: 'Contract Developer',
    company: 'Independent',
    location: 'Lahore',
    period: 'Jul 2024 — Nov 2025',
    projects: [
      {
        name: 'SocialOneHub',
        summary:
          'Social publishing product. APIs for media, analytics, subscriptions, and posting. Hangfire runs publish jobs. SignalR pushes live publish status. Facebook and Instagram insights via the Graph API, Twitter login and posting, and Pexels search in the client.',
        tags: ['ASP.NET Core', 'SQL Server', 'Hangfire', 'SignalR', 'React', 'Next.js'],
      },
      {
        name: 'NookTables',
        summary:
          'Mobile-first web app for meeting over coffee in Lahore. Open a table, find nearby people, and join the conversation. Live at nooktables.app.',
        tags: ['Next.js', 'TypeScript', 'React'],
      },
    ],
  },
  {
    role: 'Backend Developer',
    company: 'MB Services FZ LLC',
    location: 'Dubai',
    period: 'Sep 2022 — Jun 2024',
    projects: [
      {
        name: 'RecruitMe',
        summary:
          'US staffing product. First release in eight months on a team of five, used by 50+ businesses and 5,000+ workers. NestJS services on PostgreSQL. Kafka and Redis move work off the request path. Worker pay is calculated from mobile check-in and check-out.',
        tags: ['NestJS', 'PostgreSQL', 'Kafka', 'Redis'],
      },
    ],
  },
  {
    role: 'Front End Developer',
    company: 'Amerald (Pvt.) Ltd',
    location: 'Remote',
    period: 'Feb 2022 — Jul 2022',
    projects: [
      {
        name: 'Web applications',
        summary: 'Built client interfaces in React and Vue.',
        tags: ['React', 'Vue.js', 'JavaScript'],
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
    hint: 'Best way to reach me',
  },
  {
    id: 'phone',
    label: 'Phone / WhatsApp',
    value: SITE.phoneDisplay,
    href: 'https://wa.me/923364407110',
    hint: 'Lahore · UTC+5',
  },
  {
    id: 'linkedin',
    label: 'LinkedIn',
    value: SITE.linkedinLabel,
    href: SITE.linkedin,
    hint: 'yousaf-anwar-ali',
  },
  {
    id: 'resume',
    label: 'Resume',
    value: 'Backend Engineer · PDF',
    href: SITE.resume,
    hint: 'One page',
  },
]

export const PROJECTS: Project[] = [
  {
    id: 'mira',
    name: 'Mirex',
    category: '3.5M+ users',
    desc: 'Consumer rewards backend for 3.5M+ users. FCM topic delivery, lazy inboxes, reward caps on the write path, and a NestJS + BullMQ bridge for Unity games.',
    tags: ['Django', 'PostgreSQL', 'Redis', 'BullMQ', 'Firebase FCM', 'NestJS'],
    highlightTags: ['Django'],
    repo: null,
    link: 'https://play.google.com/store/apps/details?id=com.lumira_mobile',
    detail: 'mira',
  },
  {
    id: 'recruitme',
    name: 'RecruitMe',
    category: 'US staffing',
    desc: 'US staffing product used by 50+ businesses and 5,000+ workers. NestJS on PostgreSQL, with Kafka and Redis off the request path. Pay is calculated from mobile check-in and check-out.',
    tags: ['NestJS', 'PostgreSQL', 'Kafka', 'Redis'],
    highlightTags: ['NestJS'],
    repo: null,
    link: null,
    detail: 'recruitme',
  },
  {
    id: 'aifiling',
    name: 'AI Filing Agent',
    category: 'Portal automation',
    desc: 'Playwright fills multi-step portal forms with DOM selectors first, and a vision model takes over when the layout changes. FastAPI jobs; NestJS handles JWT, RBAC, and PDF/CSV extraction.',
    tags: ['Python', 'Playwright', 'FastAPI', 'NestJS', 'Prisma', 'PostgreSQL'],
    highlightTags: ['FastAPI'],
    repo: null,
    link: null,
    detail: 'aifiling',
  },
  {
    id: 'socialonehub',
    name: 'SocialOneHub',
    category: 'Contract · Social publishing',
    desc: 'Publishing APIs, Hangfire jobs, and SignalR status for Facebook, Instagram, and Twitter, with Pexels search in the client.',
    tags: ['ASP.NET Core', 'SQL Server', 'Hangfire', 'SignalR', 'React', 'Next.js'],
    highlightTags: ['ASP.NET Core'],
    repo: null,
    link: null,
    detail: 'socialonehub',
  },
  {
    id: 'unitygames',
    name: 'Unity Games Backend',
    category: 'Mirex · Game events',
    desc: 'NestJS service between Unity clients and the Django core. BullMQ refreshes the top-100 leaderboard off the score-submit path.',
    tags: ['NestJS', 'TypeScript', 'BullMQ', 'PostgreSQL', 'Prisma'],
    highlightTags: ['NestJS'],
    repo: null,
    link: null,
    detail: 'unitygames',
  },
  {
    id: 'nooktables',
    name: 'NookTables',
    category: 'Mobile web',
    desc: 'Mobile-first app for meeting over coffee in Lahore. Open a table, find nearby people, and join the conversation. Live at nooktables.app.',
    tags: ['Next.js', 'TypeScript', 'React'],
    highlightTags: ['Next.js'],
    repo: null,
    link: 'https://nooktables.app/',
    detail: 'nooktables',
  },
  {
    id: 'ecp',
    name: 'E-commerce Store',
    category: 'Client store',
    desc: 'Catalog, cart, checkout, and JWT auth for a bird-supplies store. NestJS API and a Next.js storefront at aytraders.com.',
    tags: ['NestJS', 'Next.js', 'TypeScript', 'PostgreSQL'],
    highlightTags: ['NestJS'],
    repo: null,
    link: 'https://aytraders.com/',
    detail: 'ecp',
  },
  {
    id: 'sterlinggrey',
    name: 'Sterling Grey',
    category: 'Accounting SaaS',
    desc: 'Accounting backend with multi-company profiles, Stripe Connect, tiered subscriptions, PDF invoices, and SSO.',
    tags: ['Node.js', 'TypeScript', 'DynamoDB', 'Stripe'],
    highlightTags: ['Node.js'],
    repo: null,
    link: null,
    detail: 'sterlinggrey',
  },
  {
    id: 'etmp',
    name: 'ETMP',
    category: 'Personal project',
    desc: 'Personal task platform. .NET API and React SPA with skill-based assignment, AI intake, WhatsApp, Docker, and CI.',
    tags: ['ASP.NET Core', 'C#', 'React', 'SQL Server'],
    highlightTags: ['ASP.NET Core'],
    repo: 'https://github.com/yousafanwar/EnterpriseTaskManagement',
    link: 'https://projectmanagementfrontend.omnisoft.info',
    detail: 'etmp',
  },
  {
    id: 'authforge',
    name: 'AuthForge API',
    category: 'Personal project',
    desc: 'Personal auth API in NestJS and Prisma. JWT access tokens, refresh tokens, and role checks.',
    tags: ['NestJS', 'TypeScript', 'Prisma', 'PostgreSQL'],
    highlightTags: ['NestJS'],
    repo: 'https://github.com/yousafanwar/AuthForge-API',
    link: 'https://auth.aytraders.com/api/docs',
    detail: 'authforge',
  },
]
