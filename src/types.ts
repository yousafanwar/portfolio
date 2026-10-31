export type DetailId =
  | 'etmp'
  | 'nooktables'
  | 'authforge'
  | 'ecp'
  | 'mira'
  | 'unitygames'
  | 'sterlinggrey'
  | 'recruitme'
  | 'socialonehub'

export type SkillCategory = {
  cat: string
  items: string[]
}

export type Project = {
  id: string
  name: string
  category: string
  desc: string
  tags: string[]
  /** Tags rendered with solid lime fill (primary stack signal). */
  highlightTags?: string[]
  repo: string | null
  link: string | null
  detail: DetailId | null
}

export type ExperienceProject = {
  name: string
  summary: string
  tags: string[]
}

export type Experience = {
  role: string
  company: string
  location: string
  period: string
  projects: ExperienceProject[]
}

export type Stat = {
  value: string
  label: string
  detail: string
}

export type ContactChannel = {
  id: string
  label: string
  value: string
  href: string
  hint: string
}
