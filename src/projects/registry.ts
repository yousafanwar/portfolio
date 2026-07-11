import type { ComponentType } from 'react'
import AuthForge from '../components/details/AuthForge'
import ChatApp from '../components/details/ChatApp'
import Ecp from '../components/details/Ecp'
import Mira from '../components/details/Mira'
import UnityGames from '../components/details/UnityGames'
import SterlingGrey from '../components/details/SterlingGrey'
import RecruitMe from '../components/details/RecruitMe'
import SocialOneHub from '../components/details/SocialOneHub'
import type { DetailId } from '../types'

export const PROJECT_DETAILS: Record<DetailId, ComponentType> = {
  authforge: AuthForge,
  chatapp: ChatApp,
  ecp: Ecp,
  mira: Mira,
  unitygames: UnityGames,
  sterlinggrey: SterlingGrey,
  recruitme: RecruitMe,
  socialonehub: SocialOneHub,
}

const DETAIL_IDS = Object.keys(PROJECT_DETAILS) as DetailId[]

export function isDetailId(id: string | undefined): id is DetailId {
  return !!id && DETAIL_IDS.includes(id as DetailId)
}
