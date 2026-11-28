import type { DetailId, ProjectDetailContent, ProjectMedia } from './types'

import etmp01 from './assets/etmp/01-dashboard.png'
import etmp02 from './assets/etmp/02-projects.png'
import etmp03 from './assets/etmp/03-my-tasks.png'
import etmp04 from './assets/etmp/04-create-task.png'
import etmp05 from './assets/etmp/05-task-detail.png'
import etmp06 from './assets/etmp/06-team-users.png'
import etmp07 from './assets/etmp/07-member-actions.png'

import mira01 from './assets/mirex/01-lock-hub.jpeg'
import mira02 from './assets/mirex/02-mining-home.jpeg'
import mira03 from './assets/mirex/03-mining-team.jpeg'
import mira04 from './assets/mirex/04-tokenization-events.jpeg'
import mira05 from './assets/mirex/05-games-hub.jpeg'
import mira06 from './assets/mirex/06-spin-win.jpeg'
import mira07 from './assets/mirex/07-ecosystem.jpeg'
import mira08 from './assets/mirex/08-news.jpeg'
import mira09 from './assets/mirex/09-notifications.jpeg'
import mira10 from './assets/mirex/10-settings.jpeg'

import nook01 from './assets/nooktables/01-splash.jpeg'
import nook02 from './assets/nooktables/02-email-onboard.jpeg'
import nook03 from './assets/nooktables/03-otp-verify.jpeg'
import nook04 from './assets/nooktables/04-map-home.jpeg'
import nook05 from './assets/nooktables/05-pick-cafe.jpeg'
import nook06 from './assets/nooktables/06-seat-count.jpeg'
import nook07 from './assets/nooktables/07-vibe-topic.jpeg'
import nook08 from './assets/nooktables/08-bill-split.jpeg'
import nook09 from './assets/nooktables/09-bill-ill-pay.jpeg'
import nook10 from './assets/nooktables/10-table-live.jpeg'
import nook11 from './assets/nooktables/11-open-tables.jpeg'
import nook12 from './assets/nooktables/12-request-join.jpeg'
import nook13 from './assets/nooktables/13-table-detail.jpeg'
import nook14 from './assets/nooktables/14-accepted-chat.jpeg'
import nook15 from './assets/nooktables/15-pending-requests.jpeg'
import nook16 from './assets/nooktables/16-table-chat.jpeg'
import nook17 from './assets/nooktables/17-notifications.jpeg'
import nook18 from './assets/nooktables/18-profile.jpeg'

const ETMP_MEDIA: ProjectMedia[] = [
  { type: 'image', src: etmp01, caption: 'Dashboard — projects, metrics & urgent actions' },
  { type: 'image', src: etmp02, caption: 'Projects grid — status, progress & owners' },
  { type: 'image', src: etmp03, caption: 'My Tasks — assigned work list' },
  { type: 'image', src: etmp04, caption: 'Create task — AI Auto-Draft intake' },
  { type: 'image', src: etmp05, caption: 'Task detail — status, assignee & history' },
  { type: 'image', src: etmp06, caption: 'Team & Users directory' },
  { type: 'image', src: etmp07, caption: 'Member actions — roles, skills & access' },
]

const MIRA_MEDIA: ProjectMedia[] = [
  { type: 'image', src: mira09, caption: 'Notification center' },
  { type: 'image', src: mira10, caption: 'Settings — team and account' },
  { type: 'image', src: mira05, caption: 'Games hub — Unity titles' },
  { type: 'image', src: mira02, caption: 'Home — rate, team, and daily rewards' },
  { type: 'image', src: mira03, caption: 'Team — active and inactive members' },
  { type: 'image', src: mira06, caption: 'Daily rewards' },
  { type: 'image', src: mira04, caption: 'Events feed' },
  { type: 'image', src: mira08, caption: 'News and community updates' },
  { type: 'image', src: mira07, caption: 'Ecosystem' },
  { type: 'image', src: mira01, caption: 'Rewards hub' },
]

const NOOKTABLES_MEDIA: ProjectMedia[] = [
  { type: 'image', src: nook01, caption: 'Brand splash — Nook Tables' },
  { type: 'image', src: nook02, caption: 'Email onboarding' },
  { type: 'image', src: nook03, caption: 'Inbox OTP verification' },
  { type: 'image', src: nook04, caption: 'Map home — Lahore tables nearby' },
  { type: 'image', src: nook05, caption: 'Open a table — pick a café' },
  { type: 'image', src: nook06, caption: 'Seat count setup' },
  { type: 'image', src: nook07, caption: 'Choose the vibe / topic' },
  { type: 'image', src: nook08, caption: 'Coffee bill — split option' },
  { type: 'image', src: nook09, caption: 'Coffee bill — host pays' },
  { type: 'image', src: nook10, caption: 'Table is live confirmation' },
  { type: 'image', src: nook11, caption: 'Open tables feed with filters' },
  { type: 'image', src: nook12, caption: 'Request to join a table' },
  { type: 'image', src: nook13, caption: 'Table detail sheet' },
  { type: 'image', src: nook14, caption: 'Accepted — table chat preview' },
  { type: 'image', src: nook15, caption: 'Host view — pending join requests' },
  { type: 'image', src: nook16, caption: 'Table chat with quick replies' },
  { type: 'image', src: nook17, caption: 'Notifications feed' },
  { type: 'image', src: nook18, caption: 'Profile — drinks, time & stats' },
]

export const PROJECT_DETAILS_CONTENT: Record<DetailId, ProjectDetailContent> = {
  etmp: {
    id: 'etmp',
    eyebrow: 'Personal project · Task platform',
    title: 'ETMP',
    titleAccent: 'Enterprise Task Platform',
    tagline:
      'Personal project. .NET API and React SPA — skill-based assignment, AI intake from free-text feedback, WhatsApp Cloud API, Docker, and CI.',
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
    gallery: true,
    media: ETMP_MEDIA,
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
    // live: {
    //   label: 'Live Product',
    //   url: 'nooktables.app',
    //   sub: 'Coffee meetups · Lahore · Open a table, join the conversation',
    //   href: 'https://nooktables.app/',
    // },
    gallery: true,
    media: NOOKTABLES_MEDIA,
  },

  ecp: {
    id: 'ecp',
    eyebrow: 'Client · E-commerce',
    title: 'E-commerce Store',
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
    overviewTitle: '',
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
    // live: {
    //   label: 'Live Store',
    //   url: 'aytraders.com',
    //   sub: 'Bird supplies · Catalog · Cart · Checkout',
    //   href: 'https://aytraders.com/',
    // },
    gallery: false,
    media: [],
  },

  authforge: {
    id: 'authforge',
    eyebrow: 'Personal project · Auth API',
    title: 'AuthForge',
    titleAccent: 'API',
    tagline:
      'Personal NestJS and Prisma auth API. JWT access tokens, rotating refresh tokens, and role checks.',
    tags: ['NestJS', 'TypeScript', 'Prisma', 'PostgreSQL', 'JWT', 'RBAC'],
    actions: [
      { label: 'Live Demo ↗', href: 'https://auth.aytraders.com/api/docs', primary: true },
      { label: 'View on GitHub', href: 'https://github.com/yousafanwar/AuthForge-API' },
    ],
    stats: [
      { value: 'JWT', label: 'Access tokens' },
      { value: 'Refresh', label: 'Rotating refresh tokens' },
      { value: 'RBAC', label: 'Role checks' },
    ],
    overviewTitle: 'What is AuthForge?',
    overview: [
      'A personal authentication API: short-lived access tokens, rotating refresh tokens, and role checks on NestJS routes.',
      'Prisma and PostgreSQL hold users and tokens. The live docs are the Swagger page on auth.aytraders.com.',
    ],
    featuresTitle: 'Key Features',
    features: [
      'JWT access tokens with configurable expiry and payload',
      'Rotating refresh tokens with reuse detection (RTR)',
      'Role-Based Access Control with guard decorators',
      'Prisma + PostgreSQL — fully typed data layer',
      'Jest tests around login, refresh, and role checks',
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
    // live: {
    //   label: 'Live API Docs',
    //   url: 'auth.aytraders.com/api/docs',
    //   sub: 'Swagger UI · Interactive endpoints · Always on',
    //   href: 'https://auth.aytraders.com/api/docs',
    // },
    gallery: true,
    media: [
      {
        type: 'embed',
        src: 'https://www.loom.com/embed/9d04adce0c3044dea08c59f530ff89bc',
        caption: 'AuthForge demo walkthrough',
      },
    ],
  },

  mira: {
    id: 'mira',
    eyebrow: 'Omnisoft · 3.5M+ users',
    title: 'Mirex',
    titleAccent: 'Network Backend',
    tagline:
      'Consumer rewards backend for 3.5M+ users. FCM topic delivery, lazy inboxes, and reward caps enforced on the write path.',
    tags: ['Django', 'Python', 'PostgreSQL', 'Redis', 'BullMQ', 'Firebase FCM', 'NestJS'],
    badge: 'Proprietary — Omnisoft',
    actions: [
      {
        label: 'Google Play ↗',
        href: 'https://play.google.com/store/apps/details?id=com.lumira_mobile',
        primary: true,
      },
    ],
    stats: [
      { value: '3.5M+', label: 'Users on Platform' },
      { value: 'FCM', label: 'Topic Notifications' },
      { value: 'Top 100', label: 'Game Leaderboards' },
    ],
    overviewTitle: 'What I changed',
    overview: [
      'Mirex is a consumer rewards platform with 3.5M+ users. A broadcast used to look up every device token in PostgreSQL. It now publishes to FCM topics, after existing users were backfilled onto those topics.',
      'Inbox rows are created when someone opens the inbox. Reward cooldowns live on the write that grants the reward, which closed a multi-device bypass, and a compounding video-ad boost was replaced with a linear rate. A NestJS service takes Unity game events, and BullMQ refreshes the top-100 leaderboard off the score-submit path.',
    ],
    featuresTitle: 'Contributions',
    features: [
      'Moved FCM from per-user token queries to topic delivery so sends no longer filter the database',
      'Lazy notification inbox — rows are written when a user opens the inbox',
      'Added a granular is_staff role so admins can grant limited permissions',
      'Closed a multi-device ad-reward cooldown bypass by enforcing caps on the write path',
      'Replaced an exponential video-ad boost with a linear rate-boost',
      'NestJS + BullMQ sync Unity game events and keep top-100 leaderboards off the game-service path',
    ],
    sideTitle: 'Architecture',
    sideText: [
      'Django API on PostgreSQL, with Redis for cache and coordination. Firebase delivers push through FCM topics. Unity games call a NestJS service; BullMQ processes those events in the background.',
    ],
    layers: [
      { name: 'Django API', detail: 'Mining · Rewards · Permissions', accent: true },
      { name: 'Firebase FCM', detail: 'Topic push · No token fan-out' },
      { name: 'NestJS + BullMQ', detail: 'Unity events · Top-100 boards' },
      { name: 'PostgreSQL', detail: 'Users · Rewards · Inbox' },
      { name: 'Redis', detail: 'Cache · Coordination' },
    ],
    tech: [
      { name: 'Django', role: 'Framework' },
      { name: 'Python', role: 'Language' },
      { name: 'PostgreSQL', role: 'Database' },
      { name: 'Redis', role: 'Cache' },
      { name: 'Firebase FCM', role: 'Push' },
      { name: 'NestJS', role: 'Game Bridge' },
      { name: 'BullMQ', role: 'Event Processing' },
    ],
    gallery: true,
    media: MIRA_MEDIA,
  },

  unitygames: {
    id: 'unitygames',
    eyebrow: 'Omnisoft · Real-time Game Ops',
    title: 'Unity Games',
    titleAccent: 'Backend',
    tagline:
      'NestJS service for Unity games in Mirex — BullMQ event sync, scoring, auto winners, and top-100 leaderboards.',
    tags: ['NestJS', 'TypeScript', 'BullMQ', 'Prisma', 'PostgreSQL'],
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
      'BullMQ workers sync game events and refresh top-100 leaderboards without blocking score submits',
    ],
    sideTitle: 'Client Contract',
    sideText: [
      'Unity clients call REST directly. BullMQ takes event processing and leaderboard ranking off the request path so game throughput stays steady.',
    ],
    layers: [
      { name: 'Unity Client', detail: 'REST consume · Score submit', accent: true },
      { name: 'NestJS API', detail: 'Players · Events · Leaderboards' },
      { name: 'BullMQ', detail: 'Event sync · Top-100 ranking' },
      { name: 'Prisma / Postgres', detail: 'Typed queries · Standings' },
    ],
    tech: [
      { name: 'NestJS', role: 'Framework' },
      { name: 'TypeScript', role: 'Language' },
      { name: 'BullMQ', role: 'Event Processing' },
      { name: 'Prisma', role: 'ORM' },
      { name: 'PostgreSQL', role: 'Database' },
    ],
    gallery: false,
    media: [],
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
    gallery: false,
    media: [],
  },

  recruitme: {
    id: 'recruitme',
    eyebrow: 'MB Services · SaaS Workforce',
    title: 'RecruitMe',
    tagline:
      'US staffing product used by 50+ businesses and 5,000+ workers. Pay is calculated from mobile check-in and check-out.',
    tags: ['NestJS', 'Node.js', 'React.js', 'Vue.js', 'PostgreSQL', 'Apache Kafka', 'Redis'],
    badge: 'Proprietary — MB Services',
    actions: [],
    stats: [
      { value: '8 mo', label: 'First release' },
      { value: '5,000+', label: 'Workers' },
      { value: '50+', label: 'Businesses' },
    ],
    overviewTitle: 'What is RecruitMe?',
    overview: [
      'A staffing product for US agencies. Agencies post jobs, workers pick them up, and pay is calculated from mobile check-in and check-out instead of manual timesheets.',
      'I shipped the first release in eight months on a team of five. NestJS services sit on PostgreSQL. Kafka and Redis move work off the request path.',
    ],
    featuresTitle: 'What I built',
    features: [
      'Pay calculated from mobile check-in and check-out timestamps',
      'Workers pick up posted jobs from a pool',
      'NestJS services on PostgreSQL',
      'Kafka and Redis move work off the request path',
      'Used by 50+ businesses and 5,000+ workers',
    ],
    sideTitle: 'Request path',
    sideText: [
      'The API records check-in and check-out. Kafka and Redis carry the work that does not need to finish inside the HTTP request, including pay calculation and job alerts.',
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
      { name: 'NestJS', role: 'Services' },
      { name: 'Node.js', role: 'Runtime' },
      { name: 'React.js', role: 'Client' },
      { name: 'Vue.js', role: 'Dashboard' },
      { name: 'PostgreSQL', role: 'Database' },
      { name: 'Apache Kafka', role: 'Messaging' },
      { name: 'Redis', role: 'Cache' },
      { name: 'MaterializeCSS', role: 'UI' },
    ],
    gallery: false,
    media: [],
  },

  socialonehub: {
    id: 'socialonehub',
    eyebrow: 'Contract · Social publishing',
    title: 'SocialOneHub',
    tagline:
      'Social publishing SaaS — ASP.NET Core API, SQL Server, Hangfire jobs, SignalR updates, and a React/Next.js SPA.',
    tags: ['ASP.NET Core', 'C#', 'SQL Server', 'Hangfire', 'SignalR', 'React', 'Next.js', 'MUI'],
    badge: 'Contract — Client Project',
    actions: [],
    stats: [
      { value: 'Jobs', label: 'Hangfire publish queue' },
      { value: 'Live', label: 'SignalR publish status' },
      { value: '4', label: 'Social networks' },
    ],
    overviewTitle: 'What is SocialOneHub?',
    overview: [
      'SaaS dashboard for managing Facebook, Instagram, Pinterest, and Twitter from one place — analytics, scheduling, and media tools.',
      'ASP.NET Core 6 monolith with a React/Next.js SPA. Hangfire runs background publishing jobs; SignalR pushes status and analytics to the UI.',
    ],
    featuresTitle: 'Contributions',
    features: [
      'Pexels search in the client',
      'Facebook and Instagram insights via the Graph API',
      'Twitter OAuth login and post management',
      'Subscription-based access control with Hangfire background jobs',
      'SignalR updates for publishing status and analytics',
      'ASP.NET Core APIs for media, analytics, subscriptions, and social integrations',
    ],
    sideTitle: 'Platform Surface',
    sideText: [
      'Next.js/React UI (MUI) over an ASP.NET Core API and SQL Server. Hangfire processes jobs; SignalR delivers live publishing and analytics updates.',
    ],
    layers: [
      { name: 'Dashboard UI', detail: 'Next.js · React · MUI', accent: true },
      { name: 'ASP.NET Core API', detail: 'C# · Media · Subscriptions' },
      { name: 'Realtime & Jobs', detail: 'SignalR · Hangfire' },
      { name: 'SQL Server', detail: 'Users · Plans · Content' },
    ],
    tech: [
      { name: 'ASP.NET Core', role: 'API' },
      { name: 'C#', role: 'Language' },
      { name: 'SQL Server', role: 'Database' },
      { name: 'Hangfire', role: 'Background Jobs' },
      { name: 'SignalR', role: 'Realtime' },
      { name: 'Next.js', role: 'Frontend' },
      { name: 'React', role: 'UI' },
      { name: 'MUI', role: 'Components' },
    ],
    gallery: false,
    media: [],
  },

  aifiling: {
    id: 'aifiling',
    eyebrow: 'Omnisoft · AI Automation',
    title: 'AI Filing',
    titleAccent: 'Agent',
    tagline:
      'Vision-LLM agent that files multi-step government portal forms — Playwright first, vision fallback when the layout shifts.',
    tags: ['Python', 'Playwright', 'FastAPI', 'Vision-LLM', 'NestJS', 'Prisma', 'PostgreSQL'],
    badge: 'Proprietary — Omnisoft',
    actions: [],
    stats: [
      { value: 'DOM', label: 'Playwright selectors first' },
      { value: 'Vision', label: 'Fallback when the layout shifts' },
      { value: 'Jobs', label: 'FastAPI status polling' },
    ],
    overviewTitle: 'What is the filing agent?',
    overview: [
      'An agent walks a government web portal and submits multi-step forms. It tries DOM selectors first and falls back to a vision-capable LLM when the layout changes.',
      'FastAPI exposes the agent as async jobs with status polling. A NestJS service authenticates callers, enforces RBAC and rate limits, parses uploaded PDF/CSV files, and forwards structured payloads over HTTP.',
    ],
    featuresTitle: 'Contributions',
    features: [
      'Playwright walks the portal with DOM selectors first',
      'A vision model takes over when the layout changes',
      'FastAPI service with async job queuing and status polling',
      'NestJS API with JWT auth, RBAC, and rate limiting',
      'PDF/CSV parsing into structured payloads for the agent',
      'Prisma and PostgreSQL for the supporting backend',
    ],
    sideTitle: 'How a job runs',
    sideText: [
      'The NestJS API accepts a document, extracts fields, and hands a structured payload to FastAPI. Playwright fills the form, and the job reports status for polling.',
    ],
    layers: [
      { name: 'NestJS API', detail: 'JWT · RBAC · PDF/CSV intake', accent: true },
      { name: 'FastAPI', detail: 'Job queue · Status polling' },
      { name: 'Agent', detail: 'DOM selectors · Vision fallback' },
      { name: 'Playwright', detail: 'DOM first · Vision fallback' },
      { name: 'PostgreSQL', detail: 'Prisma · Users · Jobs' },
    ],
    tech: [
      { name: 'Python', role: 'Agent' },
      { name: 'Playwright', role: 'Browser Automation' },
      { name: 'FastAPI', role: 'Job API' },
      { name: 'NestJS', role: 'Backend' },
      { name: 'TypeScript', role: 'Language' },
      { name: 'Prisma', role: 'ORM' },
      { name: 'PostgreSQL', role: 'Database' },
    ],
    gallery: false,
    media: [],
  },
}
