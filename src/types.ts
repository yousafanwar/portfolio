export type DetailId =
  | 'authforge'
  | 'chatapp'
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
  desc: string
  tags: string[]
  repo: string | null
  link: string | null
  detail: DetailId | null
}
