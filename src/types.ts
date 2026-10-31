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

export type ProjectMedia =
  | {
      type: 'image'
      src: string
      thumb?: string
      caption: string
    }
  | {
      type: 'embed'
      src: string
      caption: string
    }

export type ProjectDetailAction = {
  label: string
  href: string
  primary?: boolean
}

export type ProjectDetailStat = {
  value: string
  label: string
}

export type ProjectTechItem = {
  name: string
  role: string
}

export type ProjectHighlight = {
  title: string
  text: string
}

export type ProjectLayer = {
  name: string
  detail: string
  accent?: boolean
}

export type ProjectDetailContent = {
  id: DetailId
  eyebrow: string
  title: string
  titleAccent?: string
  tagline: string
  tags: string[]
  badge?: string
  actions: ProjectDetailAction[]
  stats: ProjectDetailStat[]
  overviewTitle: string
  overview: string[]
  featuresTitle: string
  features: string[]
  sideTitle: string
  sideText: string[]
  layers?: ProjectLayer[]
  tech: ProjectTechItem[]
  highlights?: ProjectHighlight[]
  live?: {
    label: string
    url: string
    sub: string
    href: string
  }
  media: ProjectMedia[]
}
