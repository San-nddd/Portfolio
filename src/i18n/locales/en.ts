import type { Locale } from '../types'

export const en: Locale = {
  nav: [
    { id: 'work', label: 'Work' },
    { id: 'capabilities', label: 'Capabilities' },
    { id: 'about', label: 'About' },
    { id: 'passion', label: 'Passion' },
    { id: 'contact', label: 'Contact' },
  ],
  ui: {
    resume: 'Resume',
    featured: 'Featured',
    toggleTheme: 'Toggle theme',
    toggleMenu: 'Toggle navigation menu',
    toggleLang: 'Switch language',
  },
  preloader: 'AHSAN MAHMUD FAUZI YUSRY',
  hero: {
    headline: [
      ['Hello,', "I'm", 'Ahsan'],
      ['Full', 'Stack', 'Developer', 'focus', 'on', 'React', 'and', 'Laravel'],
    ],
    portraitAlt: 'Portrait of Ahsan',
    projects: 'Projects',
    years: 'Years',
  },
  work: {
    kicker: 'Selected Work',
    title: "Things I've Built",
    desc: 'A living, convex showcase — drag or scroll and it wraps endlessly. Cards in the centre face you; edges angle away like a cylinder.',
    hint: '← Drag to explore →',
    aria: 'Selected projects carousel',
  },
  capabilities: {
    kicker: 'My Toolkit',
    title: 'Capabilities',
    desc: 'The technologies I reach for every day to bring ideas to life — hover for a closer look.',
    what: 'What I Can Do',
  },
  about: {
    kicker: 'About Me',
    title: 'A bit about who I am',
    traitsLabel: '— Traits I bring to every project',
    dragHint: '↕ Try dragging the badges around',
  },
  journey: {
    kicker: 'My Journey',
    title: 'Education',
    titleHighlight: 'timeline',
    desc: 'Dari bangku sekolah dasar hingga target kuliah — setiap langkah kecil membentuk cara saya berpikir dan berkarya.',
    statusLabels: {
      completed: 'Completed',
      current: 'In Progress',
      plan: 'Planned',
    },
  },
  passion: {
    kicker: 'Beyond the code',
    title: 'Passions & Hobbies',
    desc: "When I'm not shipping software, I'm out chasing light and the things that keep me curious — drag or scroll to keep going.",
    hint: '← Drag the camera lens →',
    aria: 'Passions and hobbies carousel',
    photo: 'Photography',
    hobby: 'Hobbies',
  },
  contact: {
    kicker: 'Got a project in mind?',
    line1: "LET'S WORK",
    line2: 'TOGETHER',
    desc: 'Open to freelance projects, collaborations and full-time opportunities. Reach out through any channel below.',
  },
  footer: {
    built: 'Built with React, Tailwind & Framer Motion.',
    backToTop: 'Back to top ↑',
  },
  coffee: 'Buy me a coffee',
  content: {
    role: 'Full Stack Web App Developer',
    bio: "I'm a full-stack web developer who lives at the intersection of engineering precision and visual storytelling. I believe great software feels inevitable — every transition, every micro-interaction, every pixel placed with intention. Over the years I've helped startups and studios ship products people genuinely love to use.",
    skills: [
      { name: 'React', icon: 'react' },
      { name: 'JavaScript', icon: 'javascript' },
      { name: 'HTML', icon: 'html' },
      { name: 'CSS', icon: 'css' },
      { name: 'Laravel', icon: 'laravel' },
      { name: 'PHP', icon: 'php' },
      { name: 'Tailwind CSS', icon: 'tailwind' },
      { name: 'Framer Motion', icon: 'framer' },
      { name: 'MySQL', icon: 'mysql' },
      { name: 'Figma', icon: 'figma' },
      { name: 'OpenCode', icon: 'opencode' },
      { name: 'Git', icon: 'git' },
      { name: 'GitHub', icon: 'github' },
      { name: 'REST API', icon: 'api' },
    ],
    services: [
      {
        num: '01',
        title: 'Product Engineering',
        description:
          'End-to-end web applications built with performance, accessibility and maintainability as first-class concerns.',
        skills: ['React', 'State Management', 'Testing & CI/CD'],
      },
      {
        num: '02',
        title: 'UI / Visual Design',
        description:
          'Editorial-grade interfaces with strong typography, cohesive design tokens and refined detail.',
        skills: ['Design Systems', 'Typography', 'Prototyping', 'Branding'],
      },
    ],
    traits: [
      { label: 'Problem Solver' },
      { label: 'Detail-Oriented' },
      { label: 'Organized' },
      { label: 'Product-Minded' },
      { label: 'Collaborative' },
      { label: 'Curious' },
      { label: 'Resilient' },
      { label: 'Creative' },
    ],
    projects: [
      {
        id: 1,
        title: 'Numogo Math Game',
        category: 'Mobile Game',
        description:
          'A simple yet addictive math game that helps kids practice arithmetic while having fun.',
        techStack: ['Flutter', 'Supabase', 'Rest API'],
      },
      {
        id: 2,
        title: 'Nebula E-commerce Platform',
        category: 'Commerce',
        description:
          'A headless storefront with lightning-fast product discovery and a checkout engineered for conversion.',
        techStack: ['Next.js', 'GraphQL', 'Stripe', 'Tailwind CSS'],
      },
      {
        id: 3,
        title: 'Orbit Design System',
        category: 'Design System',
        description:
          'A token-driven component library used across 9 product teams with 40+ accessible components.',
        techStack: ['React', 'Storybook', 'Radix UI', 'Figma'],
      },
      {
        id: 4,
        title: 'Pulse Real-time Chat',
        category: 'SaaS',
        description:
          'A collaborative workspace chat with optimistic UI, presence indicators and smooth message animations.',
        techStack: ['React', 'Node.js', 'WebSockets', 'Redis'],
      },
      {
        id: 5,
        title: 'Lumen Brand Website',
        category: 'Marketing',
        description:
          'An award-nominated marketing site with scroll-driven storytelling and editorial typography.',
        techStack: ['Next.js', 'Framer Motion', 'Three.js', 'Tailwind CSS'],
      },
      {
        id: 6,
        title: 'Terra Mobile App',
        category: 'Mobile',
        description:
          'A cross-platform app for sustainable living with delightful micro-interactions and offline-first sync.',
        techStack: ['React Native', 'TypeScript', 'Reanimated', 'Supabase'],
      },
    ],
    education: [
      {
        id: 1,
        period: '2015 — 2021',
        school: 'SDN Kamal',
        location: 'Kamal',
        description:
          'Elementary school — where my curiosity and love for learning first took root.',
      },
      {
        id: 2,
        period: '2021 — 2024',
        school: 'MTSS Darul Hikmah Sukawangi',
        location: 'Sukawangi',
        description:
          'Junior high school — deepening both religious studies and general knowledge.',
      },
      {
        id: 3,
        period: '2024 — Present',
        school: 'SMK Negeri 1 Sumedang',
        location: 'Sumedang',
        description:
          'Software Engineering (RPL) major — diving into programming, web development and software engineering.',
      },
      {
        id: 4,
        period: '2027 — 2030',
        school: 'Universitas Padjadjaran (UNPAD)',
        location: 'Jatinangor',
        description:
          'Next goal — continuing to university to sharpen skills and build a career.',
      },
    ],
    passions: [
      {
        id: 1,
        category: 'Photography',
        title: 'City After Rain',
        description: 'Street photography — reflections, neon and quiet corners of the city.',
      },
      {
        id: 2,
        category: 'Photography',
        title: 'Golden Hour Frames',
        description: 'Chasing warm light through landscapes and long city walks.',
      },
      {
        id: 3,
        category: 'Photography',
        title: 'Tiny Details',
        description: 'Macro close-ups of the small textures most people walk past.',
      },
      {
        id: 4,
        category: 'Hobbies',
        title: 'Weekend Coffee Ritual',
        description: 'Pour-over mornings and the slow joy of dialing in a new bean.',
      },
      {
        id: 5,
        category: 'Hobbies',
        title: 'On the Court',
        description: 'Badminton rallies with friends — fast footwork, faster laughs.',
      },
      {
        id: 6,
        category: 'Hobbies',
        title: 'Crates of Vinyl',
        description: 'Digging for records and losing an afternoon to new-old music.',
      },
    ],
  },
}
