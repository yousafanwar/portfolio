import type { DetailId, ProjectDetailContent, ProjectMedia } from './types'

function shots(id: string, captions: string[]): ProjectMedia[] {
  return captions.map((caption, i) => ({
    type: 'image' as const,
    src: `https://picsum.photos/seed/${id}${i + 1}/1280/720`,
    thumb: `https://picsum.photos/seed/${id}${i + 1}/480/270`,
    caption,
  }))
}

export const PROJECT_DETAILS_CONTENT: Record<DetailId, ProjectDetailContent> = {
  etmp: {
    id: 'etmp',
    eyebrow: 'Full-Stack · Enterprise Platform',
    title: 'ETMP',
    titleAccent: 'Enterprise Task Platform',
    tagline:
      'Clean Architecture .NET API + React SPA — skills-based assignment, AI feedback→task intake, WhatsApp Cloud API, Docker & CI/CD.',
    tags: [
      'ASP.NET Core',
      '.NET 10',
      'EF Core',
      'SQL Server',
      'React 19',
      'TypeScript',
      'JWT',
      'Gemini / OpenAI',
      'WhatsApp',
      'Docker',
    ],
    actions: [
      {
        label: 'Live Demo ↗',
        href: 'https://projectmanagementfrontend.omnisoft.info',
        primary: true,
      },
      {
        label: 'Backend GitHub',
        href: 'https://github.com/yousafanwar/EnterpriseTaskManagement',
      },
      {
        label: 'Frontend GitHub',
        href: 'https://github.com/yousafanwar/etmp_frontend',
      },
    ],
    stats: [
      { value: '6', label: 'Clean Architecture Projects' },
      { value: 'AI', label: 'Feedback → Task Intake' },
      { value: 'CI/CD', label: 'Build · Test · Deploy' },
    ],
    overviewTitle: 'What is ETMP?',
    overview: [
      'A production-style enterprise task system — projects, members, domain-enforced Pending → InProgress → Completed lifecycle, comments, and full audit history.',
      'Intake is the differentiator: free-text feedback (optional images) becomes a structured task via Gemini or OpenAI, then skill-overlap policy assigns the best member. The same flow runs over WhatsApp Cloud API with signed webhooks and idempotent handling.',
    ],
    featuresTitle: 'Engineering Highlights',
    features: [
      'Clean Architecture: API, Application, Domain, Infrastructure, Persistence, Tests',
      'Encapsulated TaskItem lifecycle — Start/Complete enforce assignee and status rules',
      'JWT access + hashed refresh in HttpOnly cookies with rotation',
      'AI intake: image validation → Cloudinary → analysis → skill filter → assignment',
      'WhatsApp: HMAC verify, list pagination, sessions, message idempotency',
      'GitHub Actions: restore → build → test → Docker Hub → SSH compose deploy',
    ],
    sideTitle: 'Architecture',
    sideText: [
      'Strict dependency flow: API → Infrastructure / Persistence → Application → Domain. Controllers stay thin; Application owns AI and WhatsApp workflows; Infrastructure swaps providers behind interfaces.',
    ],
    layers: [
      { name: 'API', detail: 'Controllers · Swagger · JWT · CORS · Feature flags', accent: true },
      { name: 'Application', detail: 'Services · DTOs · Policies · AI · WhatsApp' },
      { name: 'Domain', detail: 'Entities · Task lifecycle · Skills · Sessions' },
      { name: 'Infrastructure', detail: 'Gemini / OpenAI · Cloudinary · WhatsApp Graph' },
      { name: 'Persistence + Tests', detail: 'EF Core · Repos · Migrations · xUnit' },
    ],
    tech: [
      { name: 'ASP.NET Core', role: 'API' },
      { name: '.NET 10', role: 'Runtime' },
      { name: 'EF Core', role: 'ORM' },
      { name: 'SQL Server', role: 'Database' },
      { name: 'React 19', role: 'SPA' },
      { name: 'TypeScript', role: 'Language' },
      { name: 'JWT + BCrypt', role: 'Auth' },
      { name: 'Gemini / OpenAI', role: 'AI Intake' },
      { name: 'WhatsApp API', role: 'Messaging' },
      { name: 'Docker', role: 'Containers' },
    ],
    highlights: [
      {
        title: 'Assignment Policy',
        text: 'Pure policy picks members by skill overlap, then lowest user id — unit-tested without a database.',
      },
      {
        title: 'Null-Object Providers',
        text: 'Disabled AI, storage, and WhatsApp clients keep DI stable when feature flags are off.',
      },
      {
        title: 'Auth Refresh',
        text: 'Single shared refresh promise prevents concurrent token races; failed refresh clears the session.',
      },
    ],
    media: shots('etmp', [
      'Dashboard overview (placeholder)',
      'AI Copilot task intake (placeholder)',
      'Project board & assignments (placeholder)',
      'WhatsApp intake flow (placeholder)',
    ]),
  },

  nooktables: {
    id: 'nooktables',
    eyebrow: 'Client · Mobile-first Social',
    title: 'NookTables',
    tagline:
      'Mobile-first social app for meeting over coffee in Lahore — open a table, find nearby locals, join the conversation.',
    tags: ['Next.js', 'TypeScript', 'React', 'Mobile Web', 'PWA'],
    badge: 'Client Project',
    actions: [{ label: 'Live Demo ↗', href: 'https://nooktables.app/', primary: true }],
    stats: [
      { value: 'Live', label: 'Production Deployed' },
      { value: 'LHR', label: 'Launch City — Lahore' },
      { value: 'Mobile', label: 'Phone-First Experience' },
    ],
    overviewTitle: 'What is NookTables?',
    overview: [
      'NookTables helps people in Lahore share their next coffee. Open a table at a café and nearby people can join — real plans, not endless swiping.',
      'Built as a mobile-first Next.js web app. Desktop gets a landing with QR to open on phone; mobile runs the full installable experience.',
    ],
    featuresTitle: 'Features',
    features: [
      'Open a coffee table — set a place and invite others',
      'Discover nearby tables and join conversations',
      'Phone-first flow with QR landing for desktop',
      'Installable mobile web experience (PWA-ready)',
      'Designed around real local meetups in Lahore',
    ],
    sideTitle: 'Experience Flow',
    sideText: [
      'Someone opens a table, people nearby see it, and they join. Next.js powers a desktop landing that hands off to the mobile app via QR.',
    ],
    layers: [
      { name: 'Desktop Landing', detail: 'Brand, tagline, QR → open on phone', accent: true },
      { name: 'Mobile App', detail: 'Find tables · Open a table · Join' },
      { name: 'In Person', detail: 'Meet over coffee — real conversation' },
    ],
    tech: [
      { name: 'Next.js', role: 'App / Landing' },
      { name: 'React', role: 'UI' },
      { name: 'TypeScript', role: 'Language' },
      { name: 'Mobile Web', role: 'Primary Surface' },
      { name: 'nginx', role: 'Reverse Proxy' },
    ],
    live: {
      label: 'Live Product',
      url: 'nooktables.app',
      sub: 'Coffee meetups · Lahore · Open a table, join the conversation',
      href: 'https://nooktables.app/',
    },
    media: shots('nook', [
      'Mobile home feed (placeholder)',
      'Open a table flow (placeholder)',
      'Nearby tables map (placeholder)',
      'Desktop QR landing (placeholder)',
    ]),
  },

  ecp: {
    id: 'ecp',
    eyebrow: 'Client · E-commerce',
    title: 'BirdBuzz',
    titleAccent: 'ECP Store',
    tagline:
      'Full-stack e-commerce for bird supplies — catalog, cart, checkout, JWT auth. NestJS + Next.js monorepo at aytraders.com.',
    tags: ['NestJS', 'Next.js', 'TypeScript', 'PostgreSQL', 'Tailwind', 'Cloudinary', 'JWT'],
    badge: 'Private — Client Project',
    actions: [{ label: 'Live Demo ↗', href: 'https://aytraders.com/', primary: true }],
    stats: [
      { value: '2', label: 'Services (Monorepo)' },
      { value: 'Live', label: 'Production Deployed' },
      { value: 'Full', label: 'Auth + Cart + Orders' },
    ],
    overviewTitle: 'What is ECP Bird Buzz?',
    overview: [
      'E-commerce for bird products covering the full journey: browse with filters, cart, authenticate, and place orders.',
      'Monorepo with NestJS (auth, products, cart, orders) and a Next.js App Router storefront. Images via Cloudinary CDN.',
    ],
    featuresTitle: 'Features',
    features: [
      'Product catalog with category filtering and search',
      'Cart — add, update quantity, remove items',
      'JWT auth with access + refresh tokens',
      'Order management and payment flow',
      'Cloudinary uploads with CDN delivery',
      'Next.js App Router SSR storefront',
    ],
    sideTitle: 'Stack Split',
    sideText: [
      'NestJS owns domain APIs; Next.js renders a fast, SEO-friendly UI. Shared TypeScript types keep the contract honest across the monorepo.',
    ],
    layers: [
      { name: 'Next.js Storefront', detail: 'App Router · Tailwind · Cart UI', accent: true },
      { name: 'NestJS API', detail: 'Auth · Products · Cart · Orders' },
      { name: 'PostgreSQL', detail: 'Catalog · Users · Orders' },
      { name: 'Cloudinary', detail: 'Product images · CDN' },
    ],
    tech: [
      { name: 'NestJS', role: 'API' },
      { name: 'Next.js', role: 'Storefront' },
      { name: 'TypeScript', role: 'Language' },
      { name: 'PostgreSQL', role: 'Database' },
      { name: 'Cloudinary', role: 'Media' },
      { name: 'JWT', role: 'Auth' },
    ],
    live: {
      label: 'Live Store',
      url: 'aytraders.com',
      sub: 'Bird supplies · Catalog · Cart · Checkout',
      href: 'https://aytraders.com/',
    },
    media: shots('ecp', [
      'Storefront catalog (placeholder)',
      'Product detail page (placeholder)',
      'Cart & checkout (placeholder)',
      'Admin product upload (placeholder)',
    ]),
  },

  authforge: {
    id: 'authforge',
    eyebrow: 'Open Source · IAM / Security',
    title: 'AuthForge',
    titleAccent: 'API',
    tagline:
      'Production-grade NestJS + Prisma auth API — JWT, refresh rotation, RBAC, and full test coverage for drop-in SaaS auth.',
    tags: ['NestJS', 'TypeScript', 'Prisma', 'PostgreSQL', 'JWT', 'RBAC'],
    actions: [
      { label: 'Live Demo ↗', href: 'https://auth.aytraders.com/api/docs', primary: true },
      { label: 'View on GitHub', href: 'https://github.com/yousafanwar/AuthForge-API' },
    ],
    stats: [
      { value: '100%', label: 'Test Coverage' },
      { value: '3', label: 'Token Strategies' },
      { value: 'RBAC', label: 'Permission System' },
    ],
    overviewTitle: 'What is AuthForge?',
    overview: [
      'A production-ready authentication microservice designed to drop into any NestJS project — so you can focus on the product.',
      'Security-first: short-lived access tokens, rotating refresh tokens, and RBAC that controls what each role can touch.',
    ],
    featuresTitle: 'Key Features',
    features: [
      'JWT access tokens with configurable expiry and payload',
      'Rotating refresh tokens with reuse detection (RTR)',
      'Role-Based Access Control with guard decorators',
      'Prisma + PostgreSQL — fully typed data layer',
      'E2E and unit tests with Jest on critical paths',
      'Helmet, rate limiting, and input validation baked in',
    ],
    sideTitle: 'Why These Choices?',
    sideText: [
      'NestJS modules force clean separation; decorator guards make RBAC a one-liner. Prisma’s typed client eliminates an entire class of runtime bugs.',
      'Refresh token rotation detects theft: if a stolen token is used, the entire family is invalidated immediately.',
    ],
    tech: [
      { name: 'NestJS', role: 'Framework' },
      { name: 'TypeScript', role: 'Language' },
      { name: 'Prisma', role: 'ORM' },
      { name: 'PostgreSQL', role: 'Database' },
      { name: 'JWT', role: 'Auth Tokens' },
      { name: 'Jest', role: 'Testing' },
      { name: 'Docker', role: 'Dev Env' },
      { name: 'Passport', role: 'Strategies' },
    ],
    live: {
      label: 'Live API Docs',
      url: 'auth.aytraders.com/api/docs',
      sub: 'Swagger UI · Interactive endpoints · Always on',
      href: 'https://auth.aytraders.com/api/docs',
    },
    media: [
      {
        type: 'embed',
        src: 'https://www.loom.com/embed/9d04adce0c3044dea08c59f530ff89bc',
        caption: 'AuthForge demo walkthrough',
      },
      ...shots('auth', [
        'Swagger docs overview (placeholder)',
        'Login & token flow (placeholder)',
        'RBAC guard example (placeholder)',
      ]),
    ],
  },

  mira: {
    id: 'mira',
    eyebrow: 'Omnisoft · 3.5M+ Users',
    title: 'Mirex',
    titleAccent: 'Network Backend',
    tagline:
      'Real-time crypto mining & airdrop backend — Django, Celery, Redis, FCM topics, fraud detection at scale.',
    tags: ['Django', 'Python', 'PostgreSQL', 'Redis', 'Celery', 'Firebase FCM', 'WebSockets'],
    badge: 'Proprietary — Omnisoft',
    actions: [
      {
        label: 'Google Play ↗',
        href: 'https://play.google.com/store/apps/details?id=com.lumira_mobile',
        primary: true,
      },
    ],
    stats: [
      { value: '5min', label: 'Celery Task Cycle' },
      { value: 'FCM', label: 'Topic Notifications' },
      { value: 'R/W', label: 'DB Split Architecture' },
    ],
    overviewTitle: 'What is Mirex Network?',
    overview: [
      'Users mine virtual currency, join airdrops, earn referrals, and get real-time push — all on a Django backend built for concurrency.',
      'At Omnisoft I owned mining lifecycle, notification infrastructure, game reward integration, and auth flows on a R/W-split Postgres + Redis + Celery stack.',
    ],
    featuresTitle: 'Contributions',
    features: [
      'Fixed mining duration and rate calculations for accurate 24h cycles',
      'Rebuilt FCM to topic subscriptions — no more per-send token fan-out',
      'Service-to-service endpoint for Unity game reward winners',
      'Permission model, email verification webhooks, admin/staff auth',
      'Celery reliability — removed offset processing, cut deadlock risk',
      'Timezone-aware batch notifications and per-user targeting',
    ],
    sideTitle: 'Architecture',
    sideText: [
      'Django API on R/W-split PostgreSQL, Redis for cache and Celery broker, Firebase for JWT auth and push. Time-sensitive work runs on 5-minute Celery beat cycles.',
    ],
    layers: [
      { name: 'Django API', detail: 'REST · Firebase JWT · Rate limiting', accent: true },
      { name: 'Celery Workers', detail: 'Balances · Miners · Fraud — every 5 min' },
      { name: 'Redis', detail: 'Broker · Cache · Sessions' },
      { name: 'PostgreSQL R/W', detail: 'ReadWriteRouter · Split connections' },
      { name: 'Firebase', detail: 'JWT auth · Topic FCM · Tokens' },
    ],
    tech: [
      { name: 'Django', role: 'Framework' },
      { name: 'Python', role: 'Language' },
      { name: 'PostgreSQL', role: 'Database' },
      { name: 'Redis', role: 'Cache / Broker' },
      { name: 'Celery', role: 'Background Jobs' },
      { name: 'Firebase FCM', role: 'Push' },
    ],
    media: shots('mira', [
      'Mining session dashboard (placeholder)',
      'Airdrop campaign admin (placeholder)',
      'FCM topic architecture (placeholder)',
      'Fraud detection alerts (placeholder)',
    ]),
  },

  unitygames: {
    id: 'unitygames',
    eyebrow: 'Omnisoft · Real-time Game Ops',
    title: 'Unity Games',
    titleAccent: 'Backend',
    tagline:
      'Standalone NestJS service for Unity games in Mirex — players, event scoring, auto winners, top-10 leaderboards over REST.',
    tags: ['NestJS', 'TypeScript', 'Prisma', 'PostgreSQL', 'Swagger', 'Jest'],
    badge: 'Proprietary — Omnisoft',
    actions: [],
    stats: [
      { value: '6', label: 'DB Tables / Prisma' },
      { value: '10', label: 'API Endpoints' },
      { value: 'E2E', label: '+ Unit Test Suite' },
    ],
    overviewTitle: 'What is this service?',
    overview: [
      'Dedicated NestJS backend for Unity games earning ADT rewards — registration, scores, events, and leaderboards.',
      'Unity clients call REST directly. One getOrCreateUser on start; one updateUserScore on end — player, active event, and standings in the response.',
    ],
    featuresTitle: 'Key Features',
    features: [
      'Smart event priority — tournaments override the default event',
      'Dual score tracking — highest and total, per-event and global',
      'Auto winners when an event is marked COMPLETED',
      'Guards against deleting games/events that are active or default',
      'Swagger docs and Jest unit + E2E coverage',
    ],
    sideTitle: 'Client Contract',
    sideText: [
      'Thin, game-friendly endpoints keep Unity logic simple. Event state and leaderboard JSON live on the event record after completion.',
    ],
    layers: [
      { name: 'Unity Client', detail: 'REST consume · Score submit', accent: true },
      { name: 'NestJS API', detail: 'Players · Events · Leaderboards' },
      { name: 'Prisma / Postgres', detail: '6 tables · Typed queries' },
    ],
    tech: [
      { name: 'NestJS', role: 'Framework' },
      { name: 'TypeScript', role: 'Language' },
      { name: 'Prisma', role: 'ORM' },
      { name: 'PostgreSQL', role: 'Database' },
      { name: 'Swagger', role: 'Docs' },
      { name: 'Jest', role: 'Testing' },
    ],
    media: shots('unity', [
      'Leaderboard API response (placeholder)',
      'Event lifecycle admin (placeholder)',
      'Score update flow (placeholder)',
      'Swagger endpoint list (placeholder)',
    ]),
  },

  sterlinggrey: {
    id: 'sterlinggrey',
    eyebrow: 'Omnisoft · Fintech / Multi-tenant',
    title: 'Sterling Grey',
    titleAccent: 'Backend',
    tagline:
      'Accounting SaaS backend — multi-company, Stripe Connect, tiered subscriptions, PDF invoices, SSO, soft-delete recovery.',
    tags: ['Node.js', 'TypeScript', 'DynamoDB', 'Stripe Connect', 'JWT', 'AWS SES'],
    badge: 'Proprietary — Omnisoft',
    actions: [],
    stats: [
      { value: '3', label: 'Stripe Webhook Types' },
      { value: '9', label: 'DynamoDB Tables' },
      { value: '90d', label: 'Account Recovery Window' },
    ],
    overviewTitle: 'What is Sterling Grey?',
    overview: [
      'Accounting and invoicing SaaS for freelancers and SMBs — invoices, PDF generation, and Stripe Connect so funds go straight to the user’s account.',
      'Three tiers with per-cycle quotas on invoices/receipts. Quotas reset when Stripe fires a new billing-cycle webhook.',
    ],
    featuresTitle: 'Key Features',
    features: [
      'Stripe Connect payment links on invoices → user’s own Stripe account',
      'Tiered plans with quotas synced to Stripe billing periods',
      'Multi-company profiles per user account',
      'OTP email, Google/Apple SSO, password reset, bcrypt credentials',
      'Soft-delete with 90-day recovery before permanent purge',
    ],
    sideTitle: 'Billing Sync',
    sideText: [
      'Usage reality stays tied to Stripe webhooks — not calendar months — so quotas and subscriptions never drift from payment state.',
    ],
    layers: [
      { name: 'API Layer', detail: 'JWT · SSO · Invoice / Receipt APIs', accent: true },
      { name: 'Stripe', detail: 'Connect · Subscriptions · Webhooks' },
      { name: 'DynamoDB', detail: '9 tables · Multi-tenant keys' },
      { name: 'AWS SES', detail: 'OTP · Transactional email' },
    ],
    tech: [
      { name: 'Node.js', role: 'Runtime' },
      { name: 'TypeScript', role: 'Language' },
      { name: 'DynamoDB', role: 'Database' },
      { name: 'Stripe Connect', role: 'Payments' },
      { name: 'JWT', role: 'Auth' },
      { name: 'AWS SES', role: 'Email' },
    ],
    media: shots('sterling', [
      'Invoice PDF preview (placeholder)',
      'Multi-company switcher (placeholder)',
      'Subscription tiers (placeholder)',
      'Stripe Connect onboarding (placeholder)',
    ]),
  },

  recruitme: {
    id: 'recruitme',
    eyebrow: 'MB Services · SaaS Workforce',
    title: 'RecruitMe',
    tagline:
      'US staffing SaaS — 15+ microservices, 5k+ workers, automated payroll from mobile check-in/out. Up to 30% agency revenue lift.',
    tags: ['Node.js', 'Vue.js', 'PostgreSQL', 'Microservices', 'Express', 'React', 'MongoDB'],
    badge: 'Proprietary — MB Services',
    actions: [],
    stats: [
      { value: '15+', label: 'Microservices' },
      { value: '5k+', label: 'Workers on Platform' },
      { value: '30%', label: 'Revenue Increase' },
    ],
    overviewTitle: 'What is RecruitMe?',
    overview: [
      'SaaS for staffing agencies managing short-term event workers. Replaces manual outreach with automated job posting and self-assignment.',
      'Built from scratch in an agile team of 5 over 8 months — agencies post jobs, workers get notified, mobile check-in/out auto-calculates pay.',
    ],
    featuresTitle: 'Key Features',
    features: [
      'Salary from mobile check-in/out timestamps — no manual timesheets',
      'Worker pools self-assign to posted jobs',
      '15+ independently deployable domain services',
      '50+ businesses and 5,000+ workers across the US',
      'Vue dashboard + React mobile companion on Node/Express APIs',
    ],
    sideTitle: 'Microservices',
    sideText: [
      'Each service owns auth, workers, jobs, scheduling, notifications, or payments — own DB connection and deploy lifecycle, HTTP contracts between services.',
    ],
    layers: [
      { name: 'Auth & Users', detail: 'Identity · Sessions', accent: true },
      { name: 'Workers', detail: 'Pools · Profiles · Availability' },
      { name: 'Jobs & Scheduling', detail: 'Posting · Assignments' },
      { name: 'Check-in / Payroll', detail: 'Hours · Auto salary' },
      { name: 'Notifications', detail: 'Job alerts · Reminders' },
      { name: 'Payments', detail: 'Payroll · Settlements' },
    ],
    tech: [
      { name: 'Node.js', role: 'Runtime' },
      { name: 'Express', role: 'HTTP Layer' },
      { name: 'Vue.js', role: 'Dashboard' },
      { name: 'React', role: 'Mobile UI' },
      { name: 'PostgreSQL', role: 'Primary DB' },
      { name: 'MongoDB', role: 'Activity Logs' },
    ],
    media: shots('recruit', [
      'Agency dashboard (placeholder)',
      'Worker mobile check-in (placeholder)',
      'Job posting board (placeholder)',
      'Payroll summary (placeholder)',
    ]),
  },

  socialonehub: {
    id: 'socialonehub',
    eyebrow: 'Freelance · Social SaaS',
    title: 'SocialOneHub',
    tagline:
      'Social media management SaaS — Pexels search, Facebook/Instagram insights, Twitter posting, subscription-gated features.',
    tags: ['TypeScript', 'React', 'Next.js', 'Node.js', 'PostgreSQL', 'MUI', 'Graph API'],
    badge: 'Freelance — Client Project',
    actions: [],
    stats: [
      { value: '+40%', label: 'Media Search Efficiency' },
      { value: '−25%', label: 'Load Time (Infinite Scroll)' },
      { value: '4', label: 'Social Platforms' },
    ],
    overviewTitle: 'What is SocialOneHub?',
    overview: [
      'SaaS dashboard for managing Facebook, Instagram, Pinterest, and Twitter from one place — analytics, scheduling, and media tools.',
      'Full-stack work across backend APIs and frontend features, with plan-tier access control gating capabilities.',
    ],
    featuresTitle: 'Contributions',
    features: [
      'Pexels API stock search in-dashboard (+40% media workflow efficiency)',
      'Infinite scroll feeds (−25% perceived load time)',
      'Facebook/Instagram Graph API insights in the UI',
      'Twitter OAuth login and post management',
      'Subscription-based feature gating by plan',
      'Core APIs for media, analytics, subscriptions, integrations',
    ],
    sideTitle: 'Platform Surface',
    sideText: [
      'Next.js/React UI over Node APIs. Graph and Pexels integrations keep creators inside one workflow instead of hopping tools.',
    ],
    layers: [
      { name: 'Dashboard UI', detail: 'Next.js · React · MUI', accent: true },
      { name: 'API Layer', detail: 'Node · Auth · Subscriptions' },
      { name: 'Integrations', detail: 'Graph API · Twitter · Pexels' },
      { name: 'PostgreSQL', detail: 'Users · Plans · Content' },
    ],
    tech: [
      { name: 'Next.js', role: 'Frontend' },
      { name: 'React', role: 'UI' },
      { name: 'Node.js', role: 'API' },
      { name: 'TypeScript', role: 'Language' },
      { name: 'PostgreSQL', role: 'Database' },
      { name: 'Graph API', role: 'Insights' },
    ],
    media: shots('social', [
      'Unified social dashboard (placeholder)',
      'Pexels media search (placeholder)',
      'Insights charts (placeholder)',
      'Composer & scheduling (placeholder)',
    ]),
  },
}
