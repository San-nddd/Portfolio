// ---------------------------------------------------------------------------
// LOCALIZATION — English (default) and Indonesian (Bahasa Indonesia)
//
// `en` and `id` share the same shape (`Locale`). All UI strings plus all
// translatable site content live here. Structural data (image paths, urls,
// ids, icons, numbers) lives in src/data.ts and is merged at render time.
// ---------------------------------------------------------------------------

export type Lang = 'en' | 'id'

export interface NavItem {
  id: string
  label: string
}

export interface LocaleSkill {
  name: string
  icon: string
}

export interface LocaleService {
  num: string
  title: string
  description: string
  skills: string[]
}

export interface LocaleTrait {
  label: string
}

export interface LocaleProject {
  id: number
  title: string
  category: string
  description: string
  techStack: string[]
}

export interface LocaleEducation {
  id: number
  period: string
  school: string
  location: string
  description: string
}

export interface LocalePassion {
  id: number
  category: 'Photography' | 'Hobbies'
  title: string
  description: string
}

export interface Locale {
  nav: NavItem[]
  ui: {
    resume: string
    featured: string
    toggleTheme: string
    toggleMenu: string
    toggleLang: string
  }
  preloader: string
  hero: {
    headline: string[][]
    portraitAlt: string
    projects: string
    years: string
  }
  work: {
    kicker: string
    title: string
    desc: string
    hint: string
    aria: string
  }
  capabilities: {
    kicker: string
    title: string
    desc: string
    what: string
  }
  about: {
    kicker: string
    title: string
    traitsLabel: string
    dragHint: string
  }
  journey: {
    kicker: string
    title: string
    titleHighlight: string
    desc: string
    statusLabels: Record<string, string>
  }
  passion: {
    kicker: string
    title: string
    desc: string
    hint: string
    aria: string
    photo: string
    hobby: string
  }
  contact: {
    kicker: string
    line1: string
    line2: string
    desc: string
  }
  footer: {
    built: string
    backToTop: string
  }
  coffee: string
  content: {
    role: string
    bio: string
    skills: LocaleSkill[]
    services: LocaleService[]
    traits: LocaleTrait[]
    projects: LocaleProject[]
    education: LocaleEducation[]
    passions: LocalePassion[]
  }
}
