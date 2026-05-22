/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Project, Service, CaseStudy, BlogPost, Testimonial, WorkflowStep } from './types';

export const HERO_STATS = [
  { value: '120+', label: 'Projects Completed' },
  { value: '8+', label: 'Years Experience' },
  { value: '99%', label: 'Success Rating' },
  { value: '0ms', label: 'Unnecessary Bloat' }
];

export const PROJECTS: Project[] = [
  {
    id: 'apex-dental',
    title: 'Apex Dental Specialists',
    description: 'Bespoke patient booking portal and medical theme tailored with zero structural bloat. Fast real-time scheduling alignment with patient CRM.',
    category: 'Clinic',
    image: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=800&q=80',
    tags: ['Custom Theme', 'Gutenberg Blocks', 'Intake CRM Integration', 'Speed Suite'],
    features: [
      'Interactive dental health assessment module',
      'HIPAA-compliant custom-form routing engine',
      'Gutenberg schema-optimized block styling',
      'Dynamic calendar API sync (Acuity/Mindbody)'
    ],
    specs: {
      speedBefore: 31,
      speedAfter: 99,
      customModules: 3,
      gutenbergBlocks: 12
    },
    demoUrl: '#',
    year: '2026'
  },
  {
    id: 'therapypulse',
    title: 'TherapyPulse Clinic Hub',
    description: 'A comprehensive multi-clinic intake platform and custom therapist profile visualizer. Built with direct mental-health provider client portal hooks.',
    category: 'Clinic',
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=800&q=80',
    tags: ['WordPress Plugin', 'React-Powered WP Grid', 'Redux Settings API', '99.9% Uptime'],
    features: [
      'Tailwind-compiled modern booking grids',
      'Automatic intake form PDF generation engine',
      'Secure clinician panel for notes editing',
      'Multisite hub configuration for 12 physical branches'
    ],
    specs: {
      speedBefore: 27,
      speedAfter: 98,
      customModules: 5,
      gutenbergBlocks: 8
    },
    demoUrl: '#',
    year: '2025'
  },
  {
    id: 'omniscent-commerce',
    title: 'OmniScent Luxury Perfumery',
    description: 'A high-converting WooCommerce storefront for an international luxury brand. Heavily optimized for instant product loads and customized checkout.',
    category: 'E-commerce',
    image: 'https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&w=800&q=80',
    tags: ['WooCommerce Engine', 'GraphQL API Proxy', 'Custom Checkout Plugin', 'Redis Cache'],
    features: [
      'Tailored Checkout workflow reduction (from 5 fields to 1)',
      'Headless WordPress-WooCommerce synchronization latency under 200ms',
      'Sleek scent-finder slider quiz built in custom React',
      'Global multi-currency integration and auto tax filing'
    ],
    specs: {
      speedBefore: 19,
      speedAfter: 97,
      customModules: 8,
      gutenbergBlocks: 16
    },
    demoUrl: '#',
    year: '2026'
  },
  {
    id: 'vanguard-asset',
    title: 'Vanguard Asset Management',
    description: 'Corporate multi-regional web presence providing high-security financial reporting, client file distribution, and rich infographics.',
    category: 'Business',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
    tags: ['Heavy Security WP', 'Custom Theme', 'Bespoke Infographics', '0% jQuery'],
    features: [
      'Secure PDF file locking custom WP plugin',
      'Real-time investment yield calculation blocks',
      'Multi-language WPML dynamic translator layer',
      'Strict server-side security policies and custom login obfuscator'
    ],
    specs: {
      speedBefore: 38,
      speedAfter: 99,
      customModules: 4,
      gutenbergBlocks: 15
    },
    demoUrl: '#',
    year: '2025'
  },
  {
    id: 'guten-blocks',
    title: 'Editorial layouts block pack',
    description: 'An open-source custom-compiled WordPress plugin bundle of React Gutenberg blocks targeting elite designers and publishers.',
    category: 'Gutenberg',
    image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=800&q=80',
    tags: ['React Gutenberg API', 'Metadata Attributes', 'Custom Fields Integration', 'Sleek UI'],
    features: [
      'Nested container blocks to bypass old column limitations',
      'Dynamic post masonry grids with client-side query variables',
      'Integrated CSS customizer directly inside the block settings panel',
      'CSS performance: zero CSS loaded unless the block resides on active post'
    ],
    specs: {
      speedBefore: 45,
      speedAfter: 100,
      customModules: 1,
      gutenbergBlocks: 24
    },
    demoUrl: '#',
    year: '2026'
  },
  {
    id: 'securesync-plugin',
    title: 'SecureSync OAuth Bridge',
    description: 'A bespoke enterprise-grade WordPress plugin connecting medical clinic records and scheduling systems securely through WP standard API custom points.',
    category: 'Plugins',
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=800&q=80',
    tags: ['Security Audited', 'Bespoke Controller', 'WP Settings API', 'REST API Hook'],
    features: [
      'Enterprise-grade symmetric authentication algorithms',
      'Custom admin dashboards mapping hook performance logs',
      'Self-healing automated DB optimization triggers on update',
      'Encrypted client data cache layer reducing external CRM API calls by 85%'
    ],
    specs: {
      speedBefore: 40,
      speedAfter: 98,
      customModules: 6,
      gutenbergBlocks: 0
    },
    demoUrl: '#',
    year: '2025'
  }
];

export const SERVICES: Service[] = [
  {
    id: 'custom-wp',
    title: 'Custom WordPress Website Development',
    icon: 'Layout',
    description: 'High-end WordPress sites designed and coded from scratch. Zero builders, zero bloating themes, pure 100% hand-crafted speed.',
    longDesc: 'Unlike amateur agencies that stack generic themes with element-heavy builders (like Elementor/Divi) resulting in slow load times and security vulnerabilities, I code custom lightweight themes tailored specifically to your visual directives and SEO metrics. Your digital foundation remains pristine, secure, and lightning-fast.',
    startingPrice: '$4,800',
    deliveryTime: '3-4 Weeks',
    features: [
      'Bespoke hand-crafted theme (zero base framework bloat)',
      'Lighthouse performance score targeting 95+ out of the box',
      'Integrated rich schemas & semantic structures for instant SEO ranking',
      'Tailored admin layouts so client editing takes seconds'
    ],
    color: 'from-cyan-400 to-blue-600'
  },
  {
    id: 'custom-plugin',
    title: 'Bespoke Plugin Development',
    icon: 'Cpu',
    description: 'Solving complex custom workflows, external CRM data pulls, HIPAA databases, and automated back-office modules.',
    longDesc: 'When off-the-shelf plugins do not fit your custom workflow or pose severe security risks, custom plugin architectural solutions become necessary. I develop highly optimized, object-oriented WP plugins using WordPress APIs (Settings, REST API, Database hooks) engineered to fit into your infrastructure effortlessly.',
    startingPrice: '$2,500',
    deliveryTime: '2 Weeks',
    features: [
      'Rigorous object-oriented PSR coding standards',
      'Custom admin metrics Dashboard & performance reporting',
      'Comprehensive unit tests and manual security audits',
      'Full API integrations (Stripe, HubSpot, Salesforce, HIPAA CRMs)'
    ],
    color: 'from-violet-500 to-purple-700'
  },
  {
    id: 'gutenberg-blocks',
    title: 'Gutenberg Custom Blocks Suite',
    icon: 'Grid',
    description: 'Build native, reusable React blocks to let your editorial team create stunning landing pages seamlessly.',
    longDesc: 'Tired of forcing your team to work with visual page builders that break when update hits? Native Gutenberg blocks built using React let you edit components naturally inside the WP Core editor. I render custom React components that output pixel-perfect, highly-responsive frontend code without injecting unnecessary CSS or JS scripts.',
    startingPrice: '$1,800',
    deliveryTime: '10 Days',
    features: [
      'Fully native Gutenberg components using React WP API',
      'Stitch pixel-perfect designs with flexible style toggles inside the Gutenberg rail',
      'Integrated dynamic template setups and nested blocks support',
      'Optimized performance: zero layout shift (CLS) for end-users'
    ],
    color: 'from-pink-500 to-rose-600'
  },
  {
    id: 'speed-seo',
    title: 'WordPress Speed & Core Web Vitals Suite',
    icon: 'TrendingUp',
    description: 'Taking slow, bloated WordPress setups and pushing them to 99+ scores on Google mobile and desktop.',
    longDesc: 'For modern search engines, speed is directly linked with ranking and conversions. If your site takes longer than 2.5 seconds to open, you are bleeding valuable client prospects. I audit, refactor, compress, and cache databases, code structures, and media assets to secure under-1-second global page loads.',
    startingPrice: '$1,500',
    deliveryTime: '5 Days',
    features: [
      'Database queries optimization and redundant file purging',
      'Advanced CSS and JS splitting & prioritized asset loading',
      'Server-level optimizations (Redis cache, CDN edge proxies)',
      'Google Core Web Vitals guarantees (A-grade performance)'
    ],
    color: 'from-emerald-400 to-cyan-500'
  },
  {
    id: 'woo-commerce',
    title: 'WooCommerce Scaling & Checkout Optimization',
    icon: 'ShoppingBag',
    description: 'Engineered for conversion, supporting multi-currency, secure Stripe checkout pipelines, and CRM mappings.',
    longDesc: 'WooCommerce stores often crash due to bad DB indexing and heavy queries during discount sales. I engineer custom checkout pipelines, optimize relational product tables, and configure server-side caching so your store processes 10,000+ orders concurrently without missing a dollar.',
    startingPrice: '$3,800',
    deliveryTime: '3 Weeks',
    features: [
      'Ultra high-speed customized cart/checkout templates',
      'Product filter engines bypassing slow query loops',
      'Active integrations with external shipping calculators and payment systems',
      'Abandoned checkout triggers & automatic email/SMS alerts setup'
    ],
    color: 'from-amber-400 to-orange-600'
  },
  {
    id: 'maintenance-retainer',
    title: 'Premium Maintenance & SLA Code Advisory',
    icon: 'ShieldAlert',
    description: 'Peace of mind with 30-minute critical response SLA, daily clean updates, backups, dynamic firewalls, and active code audits.',
    longDesc: 'Stop waiting for an employee to figure out why your clinic site displays a critical database error. Under my retainer suite, you secure elite-developer access, active threat scanning, weekly updates on sandbox, and continuous SEO optimization routines.',
    startingPrice: '$450/mo',
    deliveryTime: 'Ongoing',
    features: [
      '30-minute emergency SLA (guaranteed instant site fixes)',
      'Fully automated daily remote backups (AWS S3 secured)',
      'Custom Web Application Firewall (WAF) blocking automated attacks',
      '1 dedicated engineering hour for minor edits/consultations monthly'
    ],
    color: 'from-indigo-400 to-blue-600'
  }
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'apex-dental-case',
    title: 'Scaling Apex Dental to 4,500 Monthly Patient Leads',
    client: 'Apex Dental Alliance',
    industry: 'Healthcare / Medical',
    summary: 'How a 29-speed old WordPress theme with broken Elementor modules was re-engineered into a bespoke, lightweight, HIPAA-aligned patient acquisition engine.',
    problem: 'Apex Dental suffered from high bounce rates (72%) on their mobile intake sheets. Patients spent up to 10 seconds waiting to select a dental appointment. Critical client medical credentials leaked via standard Contact Form 7 folders, prompting severe HIPAA concerns.',
    solution: 'I built a fully custom theme utilizing zero external styles and a custom React appointment booking plugin. This plugin interfaces securely with their patient CRM directly using high-end REST hooks, and files are protected with temporary symmetric keys on server.',
    measurableResults: [
      'Intake completion rates increased by 142%',
      'Lighthouse mobile score spiked from 29 to 98',
      'Patient booking processing and sync wait dropped from 8 seconds to 120ms',
      'Organic clinic appointments grew by 48% due to core speed SEO improvements'
    ],
    performance: {
      mobileLoading: { before: '9.2s', after: '1.1s' },
      desktopLoading: { before: '3.8s', after: '0.4s' },
      seoScore: { before: 52, after: 100 }
    },
    testimonial: {
      quote: 'This custom rebuild completely salvaged our online operations. Instead of dealing with slow schedulers and continuous bugs, our clinics operate with perfect automation. Our client conversion rates surged immediately.',
      author: 'Dr. Marcus Vance',
      role: 'Chief Medical Officer',
      image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=200&q=80'
    },
    duration: '22 Days'
  },
  {
    id: 'perfumery-case',
    title: 'Optimizing OmniScent checkout pipeline for Black Friday peak loads',
    client: 'OmniScent Luxury Inc',
    industry: 'High-End Retail E-Commerce',
    summary: 'Reducing checkout fields, redesigning the product search engine via relational indexes, and securing under-400ms TTFB globally.',
    problem: 'During high-traffic discount events, OmniScent website database tables locked up due to repetitive, slow WooCommerce metadata joins. Cart abandonment hovered at a painful 81% and page load speeds during load spikes were disastrous (12+ seconds).',
    solution: 'I refactored the checkout structure into a single-pane React component and optimized WooCommerce tables using customized SQL indexes. I set up an edge-cached Redis cloud cluster and mapped static items to bypass the core database during load swells.',
    measurableResults: [
      'Conversion rate grew from 1.8% to 4.5% during sales',
      'Database execution latency drop of 92%',
      'Handled 14,000 active concurrent shoppers with zero downtime during Black Friday',
      'Cart abandonment decreased by 39% matching field reduction efforts'
    ],
    performance: {
      mobileLoading: { before: '11.4s', after: '1.3s' },
      desktopLoading: { before: '5.1s', after: '0.3s' },
      seoScore: { before: 66, after: 98 }
    },
    testimonial: {
      quote: 'We spent $20k with two agencies telling us we had to move off WooCommerce to Shopify. This single developer re-indexed our database and optimized our code in weeks, saving us massive re-platforming costs and improving our speed past Shopify levels.',
      author: 'Sophia Chen',
      role: 'E-commerce Director',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80'
    },
    duration: '18 Days'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    name: 'Sarah Jenkins',
    role: 'CEO & Founder',
    company: 'Jenkins Medical Group',
    quote: 'Absolutely flawless execution. He built our custom clinics network portal using React Gutenberg blocks. Our editorial team can now spin up HIPAA-aligned medical offer pages in minutes without fear of breaking layouts. High-ticket investment that returned value instantly.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=150&q=80',
    projectType: 'Clinic'
  },
  {
    id: 't2',
    name: 'David Kojo',
    role: 'Operations Lead',
    company: 'Apex Orthodontics Partner',
    quote: 'Our old developer left us with a bloated WordPress theme that crashed continuously. He audited the security, cleaned visual code structures, set up edge proxies, and redesigned our schedulers. Patients can book in a split-second. The investment paid for itself in less than a month.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80',
    projectType: 'Clinic'
  },
  {
    id: 't3',
    name: 'Julian Vance',
    role: 'Director of Growth',
    company: 'Hesperia Apparel',
    quote: 'This was clean development at its absolute best. We needed WooCommerce to seamlessly synchronize product attributes with our custom ERP system. We received clean, PSR-standard plugin code with pristine documentation. Highly recommended for complex integrations.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80',
    projectType: 'E-commerce'
  }
];

export const WORKFLOW: WorkflowStep[] = [
  {
    phase: '01',
    title: 'Discovery & Audit',
    duration: '3 Days',
    description: 'We perform deep technical diagnostic tests to parse your current site speed bottlenecks, security vulnerabilities, or map out custom database schemas.',
    deliverables: [
      'Comprehensive Core Web Vitals diagnostic sheet',
      'WP codebase structural and security audit report',
      'Database query bottleneck profiling sheet',
      'Tailored technical architecture plan'
    ],
    icon: 'Search'
  },
  {
    phase: '02',
    title: 'Architectural Planning & Specs',
    duration: '4 Days',
    description: 'I lay down custom database schemas, design Gutenberg block hierarchies, map out REST hooks, and formulate a clear visual prototype without page builder baggage.',
    deliverables: [
      'Detailed API endpoint specifications layout',
      'Gutenberg component block list layout & attributes schema',
      'Visual interactive UI mockups mirroring Apple-level guidelines'
    ],
    icon: 'Map'
  },
  {
    phase: '03',
    title: 'Modern UI/UX Design System',
    duration: '5 Days',
    description: 'Visualizing of premium aesthetic pairings. No cookie-cutter ideas; only sleek layouts, custom dark themes, optimized typography, and pristine spacing.',
    deliverables: [
      'Figma/Interactive visual mockups of key view layers',
      'Custom typographic scales & color palette specs',
      'Asset performance routing plan'
    ],
    icon: 'Palette'
  },
  {
    phase: '04',
    title: 'Pristine Hand-Coded Development',
    duration: '10 Days',
    description: 'I write ultra-clean PHP, React, and modular Tailwind CSS code. Zero standard template frameworks, custom loops, and 100% responsive grid structures.',
    deliverables: [
      'Hand-crafted WordPress custom theme',
      'Modular custom plugins compiled to object-oriented PSR standards',
      'Custom React-Gutenberg block integration'
    ],
    icon: 'Code'
  },
  {
    phase: '05',
    title: 'Rigorous Sandbox Testing & Security',
    duration: '3 Days',
    description: 'Running page load speed tests under 100 simultaneous concurrent users, HIPAA validation review, regression tests, and sandbox deployment.',
    deliverables: [
      'Lighthouse mobile & desktop audits validating 95+ score',
      'Security payload injection proof testing report',
      'Cross-device mobile screen responsive matching audits'
    ],
    icon: 'ShieldCheck'
  },
  {
    phase: '06',
    title: 'Cinematic Launch & Training',
    duration: '2 Days',
    description: 'Migration to your actual live servers with zero downtime. Clean admin dashboards custom training walkthroughs to empower your editing team.',
    deliverables: [
      'Live server migration with zero uptime drop',
      '10-minute custom video walkthrough training tutorial',
      'WordPress security lockup activation & database caching suite live'
    ],
    icon: 'Rocket'
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'headless-wp-clinic',
    title: 'Headless WordPress for Medical Clinics: Enhancing HIPAA Compliance & Speed',
    summary: 'How separating your frontend via Next.js and utilizing WordPress as a headless content engine secures medical intake data and pushes speeds past standard criteria.',
    category: 'Security & Headless',
    date: 'May 12, 2026',
    readTime: '6 Min Read',
    tags: ['Headless WP', 'Security', 'Next.js', 'React', 'Medical REST API'],
    content: `
Medical clinic websites operate on tight security regulations. Traditional WordPress setups risk exposing database folders when bad plugins or builders are outdated.

### Why Separating the Core Solves Security
By decoupling the frontend (presenting text/images on an independent server like Vercel or Cloud Run) from the admin panel, hackers can never directly reach the backend database SQL ports. 

1. **Decoupled Security Layer**: Direct form intakes route directly to encrypted cloud microservices, never staying in standard SQL directories.
2. **Instant Visual Speed**: Zero page-reloads! The user navigates at 100ms speeds.
3. **No Database Heavy Queries**: Pre-compiled pages fetch layout details once, meaning traffic surges never trigger database lockups.
    `
  },
  {
    id: 'building-react-gutenberg',
    title: 'The Art of Development: Native React Gutenberg Blocks vs visual builder bloat',
    summary: 'A direct architectural study comparing native WordPress Gutenberg blocks build flow with visual builders like Elementor. Why code is superior.',
    category: 'Gutenberg Blocks',
    date: 'Apr 28, 2026',
    readTime: '8 Min Read',
    tags: ['React', 'Gutenberg Blocks', 'Core Web Vitals', 'WordPress Development'],
    content: `
Visual page builders have dominated WordPress for five years, but their architectural tax is high. An average page with short elements loads up to 10MB of unused dynamic styles and tracking files.

### The Gutenberg Solution
Native Gutenberg blocks use React under the hood. They save metadata attributes directly in pure, standard HTML comments.

- **Zero JS on Frontend**: If a block doesn't use client scripts, WordPress ships 0KB of JS on that layout.
- **Stable Themes**: Re-render blocks naturally with core templates. Core updates never break your site layout.
- **Client Empowerment**: You control high-end grids. Clients edit text but cannot ruin spacing standards.
    `
  },
  {
    id: 're-indexing-woocommerce-tables',
    title: 'Custom Relational Indexes: Preparing WooCommerce for 100k Concurrent Shoppers',
    summary: 'How standard WordPress databases break during checkout peaks, and the database re-indexing strategies that keep your site fast.',
    category: 'Database Optimization',
    date: 'Mar 15, 2026',
    readTime: '11 Min Read',
    tags: ['Database', 'WooCommerce', 'Redis', 'High Traffic Coding'],
    content: `
WooCommerce stores suffer from the "EAV (Entity-Attribute-Value)" catalog model. Every product attribute (color, size, price) requires a separate relational line inquiry, triggering massive JOIN requests when customers filter items.

### The Tactical Optimization Plan
1. **Relational MySQL Indexing**: Add custom indices to \`wp_postmeta\` for heavily searched properties.
2. **Transients Pre-edge Compilation**: Save dynamic calculations of complex variations into Redis.
3. **Checkout Bypass API**: Routing orders to a custom callback plugin that bypasses 70% of redundant plugin validation checks. This handles checkout operations under 100ms.
    `
  }
];
