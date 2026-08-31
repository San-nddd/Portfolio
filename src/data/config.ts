// ---------------------------------------------------------------------------
// SINGLE CONFIG FILE — ALL SITE CONTENT & ASSET PATHS
// Swap your own content here. The rest of the site reads everything from this
// file (re-exported as `data`).
//
// NOTE: Image paths use `import.meta.env.BASE_URL` so they resolve correctly
// whether you're running locally (`/`) or on GitHub Pages under a repo
// sub-path (e.g. `/My-porto/`). Just drop your files into /public and set the
// path below.
// ---------------------------------------------------------------------------

const base = import.meta.env.BASE_URL

export const logoPath = `${base}logo.svg`
export const portraitPhotoPath = `${base}portrait.svg`

export interface SocialLink {
  name: string
  url: string
}

export interface Skill {
  name: string
  icon: string
  category: string
}

export interface Service {
  num: string
  title: string
  description: string
  skills: string[]
}

export interface Project {
  id: number
  title: string
  category: string
  description: string
  techStack: string[]
  image: string
  demoUrl: string
  githubUrl: string
  highlight?: string
}

export interface PassionItem {
  id: number
  category: 'Photography' | 'Hobbies'
  title: string
  description: string
  image: string
}

export interface Trait {
  label: string
}

export interface Education {
  period: string
  school: string
  location: string
  description: string
  status: 'completed' | 'current' | 'plan'
  level: 'sd' | 'mts' | 'smk' | 'university'
}

export const personalInfo = {
  name: 'AHSAN',
  firstName: 'Ahsan',
  lastName: 'AHSAN',
  role: 'Full Stack Web App Developer',
  roleBadge: 'React.js  •  Laravel',
  focusText: 'I build full-stack web applications that are fast, accessible, and beautiful to interact with',
  headline: "I'm Ahsan — Full Stack Developer focused on React and Laravel",
  title: 'Full Stack Web App Developer',
  skills: ['React.js', 'Laravel'],
  bio: "I'm a full-stack web developer who lives at the intersection of engineering precision and visual storytelling. I believe great software feels inevitable — every transition, every micro-interaction, every pixel placed with intention. Over the years I've helped startups and studios ship products people genuinely love to use.",
  email: 'mahmudfauziyusri@gmail.com',
  resumeLink: `${base}resume.pdf`,
  socials: [
    { name: 'Email', url: 'mailto:mahmudfauziyusri@gmail.com' },
    { name: 'GitHub', url: 'https://github.com/San-nddd' },
    { name: 'Instagram', url: 'https://www.instagram.com/san_nddd?igsi=OHJ4cXI4MmZ3bHJ3' },
    { name: 'TikTok', url: 'https://www.tiktok.com/@publik_codm' },
  ] as SocialLink[],
}

export const coffeeLink = 'https://saweria.co/Sandda'

export const stats = {
  projectsCount: 3,
  yearsExperience: 3,
  certificatesCount: 1,
}

export const earthColor = '#3ce4a3'

export const skills = [
  { name: 'React', category: 'Frontend', icon: 'react' },
  { name: 'JavaScript', category: 'Frontend', icon: 'javascript' },
  { name: 'HTML', category: 'Frontend', icon: 'html' },
  { name: 'CSS', category: 'Frontend', icon: 'css' },
  { name: 'Laravel', category: 'Backend', icon: 'laravel' },
  { name: 'PHP', category: 'Backend', icon: 'php' },
  { name: 'Tailwind CSS', category: 'Frontend', icon: 'tailwind' },
  { name: 'Framer Motion', category: 'Frontend', icon: 'framer' },
  { name: 'MySQL', category: 'Backend', icon: 'mysql' },
  { name: 'Figma', category: 'Design', icon: 'figma' },
  { name: 'OpenCode', category: 'DevOps', icon: 'opencode' },
  { name: 'Git', category: 'DevOps', icon: 'git' },
  { name: 'REST API', category: 'Backend', icon: 'api' },
] as Skill[]

export const services = [
  {
    num: '01',
    title: 'Product Engineering',
    description:
      'End-to-end web applications built with performance, accessibility and maintainability as first-class concerns.',
    skills: ['React ', 'State Management', 'Testing & CI/CD'],
  },
  {
    num: '02',
    title: 'UI / Visual Design',
    description:
      'Editorial-grade interfaces with strong typography, cohesive design tokens and refined detail.',
    skills: ['Design Systems', 'Typography', 'Prototyping', 'Branding'],
  },
] as Service[]

export const traits = [
  { label: 'Problem Solver' },
  { label: 'Detail-Oriented' },
  { label: 'Organized' },
  { label: 'Product-Minded' },
  { label: 'Collaborative' },
  { label: 'Curious' },
  { label: 'Resilient' },
  { label: 'Creative' },
] as Trait[]

export const education = [
  {
    period: '2015 — 2021',
    school: 'SDN Kamal',
    location: 'Kamal',
    description: 'Sekolah Dasar — tempat awal saya menumbuhkan rasa ingin tahu dan fondasi belajar.',
    status: 'completed',
    level: 'sd',
  },
  {
    period: '2021 — 2024',
    school: 'MTSS Darul Hikmah Sukawangi',
    location: 'Sukawangi',
    description: 'Madrasah Tsanawiyah — memperdalam ilmu agama sekaligus pengetahuan umum.',
    status: 'completed',
    level: 'mts',
  },
  {
    period: '2024 — Sekarang',
    school: 'SMK Negeri 1 Sumedang',
    location: 'Sumedang',
    description: 'Jurusan Rekayasa Perangkat Lunak (RPL) — mendalami pemrograman, web development, dan pengembangan perangkat lunak.',
    status: 'current',
    level: 'smk',
  },
  {
    period: '2027 — 2030',
    school: 'Universitas Padjadjaran (UNPAD)',
    location: 'Jatinangor',
    description: 'Target berikutnya — melanjutkan studi di perguruan tinggi untuk mengasah keterampilan dan membangun karier.',
    status: 'plan',
    level: 'university',
  },
] as Education[]

export const projects = [
  {
    id: 1,
    title: 'Numogo Math Game',
    category: 'Mobile Game',
    description:
      'A simple yet addictive math game that helps kids practice arithmetic while having fun.',
    techStack: ['Flutter', 'Supabase', 'Rest API'],
    image: `${base}numogo.png`,
    githubUrl: 'https://github.com/san-nddd',
    highlight: 'Featured',
  },
  {
    id: 2,
    title: 'Nebula E-commerce Platform',
    category: 'Commerce',
    description:
      'A headless storefront with lightning-fast product discovery and a checkout engineered for conversion.',
    techStack: ['Next.js', 'GraphQL', 'Stripe', 'Tailwind CSS'],
    image: `${base}projects/nebula.svg`,
    demoUrl: 'https://example.com/nebula',
    githubUrl: 'https://github.com/',
  },
  {
    id: 3,
    title: 'Orbit Design System',
    category: 'Design System',
    description:
      'A token-driven component library used across 9 product teams with 40+ accessible components.',
    techStack: ['React', 'Storybook', 'Radix UI', 'Figma'],
    image: `${base}projects/orbit.svg`,
    demoUrl: 'https://example.com/orbit',
    githubUrl: 'https://github.com/',
    highlight: 'Featured',
  },
  {
    id: 4,
    title: 'Pulse Real-time Chat',
    category: 'SaaS',
    description:
      'A collaborative workspace chat with optimistic UI, presence indicators and smooth message animations.',
    techStack: ['React', 'Node.js', 'WebSockets', 'Redis'],
    image: `${base}projects/pulse.svg`,
    demoUrl: 'https://example.com/pulse',
    githubUrl: 'https://github.com/',
  },
  {
    id: 5,
    title: 'Lumen Brand Website',
    category: 'Marketing',
    description:
      'An award-nominated marketing site with scroll-driven storytelling and editorial typography.',
    techStack: ['Next.js', 'Framer Motion', 'Three.js', 'Tailwind CSS'],
    image: `${base}projects/lumen.svg`,
    demoUrl: 'https://example.com/lumen',
    githubUrl: 'https://github.com/',
  },
  {
    id: 6,
    title: 'Terra Mobile App',
    category: 'Mobile',
    description:
      'A cross-platform app for sustainable living with delightful micro-interactions and offline-first sync.',
    techStack: ['React Native', 'TypeScript', 'Reanimated', 'Supabase'],
    image: `${base}projects/terra.svg`,
    demoUrl: 'https://example.com/terra',
    githubUrl: 'https://github.com/',
    highlight: 'Featured',
  },
] as Project[]


export const passions = [
  {
    id: 1,
    category: 'Photography',
    title: 'City After Rain',
    description: 'Street photography — reflections, neon and quiet corners of the city.',
    image: `${base}passion/photo-1.svg`,
  },
  {
    id: 2,
    category: 'Photography',
    title: 'Golden Hour Frames',
    description: 'Chasing warm light through landscapes and long city walks.',
    image: `${base}passion/photo-2.svg`,
  },
  {
    id: 3,
    category: 'Photography',
    title: 'Tiny Details',
    description: 'Macro close-ups of the small textures most people walk past.',
    image: `${base}passion/photo-3.svg`,
  },
  {
    id: 4,
    category: 'Hobbies',
    title: 'Weekend Coffee Ritual',
    description: 'Pour-over mornings and the slow joy of dialing in a new bean.',
    image: `${base}passion/hobby-1.svg`,
  },
  {
    id: 5,
    category: 'Hobbies',
    title: 'On the Court',
    description: 'Badminton rallies with friends — fast footwork, faster laughs.',
    image: `${base}passion/hobby-2.svg`,
  },
  {
    id: 6,
    category: 'Hobbies',
    title: 'Crates of Vinyl',
    description: 'Digging for records and losing an afternoon to new-old music.',
    image: `${base}passion/hobby-3.svg`,
  },
] as PassionItem[]

export const navLinks = ['Work', 'Capabilities', 'About', 'Passion', 'Contact']
