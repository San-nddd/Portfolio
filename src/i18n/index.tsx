import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from 'react'
import { en } from './locales/en'
import { id } from './locales/id'
import type { Lang, Locale } from './types'
import {
  logoPath,
  portraitPhotoPath,
  personalInfo,
  coffeeLink,
  stats,
  projects as rawProjects,
  education as rawEducation,
  passions as rawPassions,
} from '../data'

export type { Lang }

interface DataShape {
  logo: string
  portrait: string
  fullName: string
  name: string
  firstName: string
  lastName: string
  role: string
  email: string
  resume: string
  socials: { name: string; url: string }[]
  coffee: string
  stats: typeof stats
  bio: string
  skills: { name: string; icon: string }[]
  services: Locale['content']['services']
  traits: Locale['content']['traits']
  projects: (Locale['content']['projects'][number] & {
    image: string
    demoUrl: string
    githubUrl: string
    highlight?: string
  })[]
  education: {
    id: number
    period: string
    school: string
    location: string
    description: string
    status: string
    level: string
  }[]
  passions: (Locale['content']['passions'][number] & { image: string })[]
}

interface I18nValue {
  lang: Lang
  locale: Locale
  data: DataShape
  setLang: (l: Lang) => void
  toggleLang: () => void
}

const I18nContext = createContext<I18nValue | null>(null)

const projectMeta = new Map(rawProjects.map((p) => [p.id, p]))
const educationMeta = new Map(rawEducation.map((e) => [e.id, e]))
const passionMeta = new Map(rawPassions.map((p) => [p.id, p]))

function resolveLocale(lang: Lang): DataShape {
  const c = lang === 'id' ? id : en
  const projects = c.content.projects.map((p) => {
    const meta = projectMeta.get(p.id)
    return {
      ...p,
      image: meta?.image ?? '',
      demoUrl: meta?.demoUrl ?? '',
      githubUrl: meta?.githubUrl ?? '',
      highlight: meta?.highlight,
    }
  })
  const education = c.content.education.map((e) => {
    const meta = educationMeta.get(e.id)
    return { ...e, status: meta?.status ?? '', level: meta?.level ?? '' }
  })
  const passions = c.content.passions.map((p) => ({
    ...p,
    image: passionMeta.get(p.id)?.image ?? '',
  }))
  return {
    logo: logoPath,
    portrait: portraitPhotoPath,
    fullName: personalInfo.fullName,
    name: personalInfo.name,
    firstName: personalInfo.firstName,
    lastName: personalInfo.lastName,
    role: c.content.role ?? personalInfo.role,
    email: personalInfo.email,
    resume: personalInfo.resumeLink,
    socials: personalInfo.socials,
    coffee: coffeeLink,
    stats,
    bio: c.content.bio,
    skills: c.content.skills,
    services: c.content.services,
    traits: c.content.traits,
    projects,
    education,
    passions,
  }
}

const LOCALES: Record<Lang, Locale> = { en, id }

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>('en')
  const locale = LOCALES[lang]
  const data = useMemo(() => resolveLocale(lang), [lang])

  const toggleLang = useCallback(
    () => setLang((prev) => (prev === 'en' ? 'id' : 'en')),
    [],
  )

  const value = useMemo<I18nValue>(
    () => ({ lang, locale, data, setLang, toggleLang }),
    [lang, locale, data, toggleLang],
  )

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>
}

export function useI18n() {
  const ctx = useContext(I18nContext)
  if (!ctx) throw new Error('useI18n must be used within I18nProvider')
  return ctx
}
