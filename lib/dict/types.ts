export interface NavItem {
  label: string
  href: string
}

export interface HeroDict {
  greeting: string
  description: string
  cta: string
  ctaSecondary: string
}

export interface AboutDict {
  sectionNumber: string
  title: string
  paragraphs: string[]
}

export interface TechItem {
  name: string
  icon: string
  invert?: boolean
}

export interface TechCategory {
  category: string
  items: TechItem[]
}

export interface TechStackDict {
  sectionNumber: string
  title: string
  categories: TechCategory[]
  secondaryLabel: string
  secondaryStack: string[]
}

export interface ExperienceEntry {
  company: string
  role: string
  period: string
  summary: string
  bullets: string[]
  technologies: string[]
}

export interface ExperienceDict {
  sectionNumber: string
  title: string
  entries: ExperienceEntry[]
  ariaLabelPrev: string
  ariaLabelNext: string
  ariaLabelGoto: string
}

export interface ContactDict {
  sectionNumber: string
  tagline: string
  title: string
  description: string
  emailLabel: string
  calendlyLabel: string
}

export interface FooterDict {
  credit: string
}

export interface NavDict {
  items: NavItem[]
  cvLabel: string
  ariaLabelOpenMenu: string
  ariaLabelCloseMenu: string
}

export interface Dict {
  nav: NavDict
  hero: HeroDict
  about: AboutDict
  techStack: TechStackDict
  experience: ExperienceDict
  contact: ContactDict
  footer: FooterDict
}
