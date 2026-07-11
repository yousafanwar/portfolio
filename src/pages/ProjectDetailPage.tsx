import { Navigate, useParams } from 'react-router-dom'
import { isDetailId, PROJECT_DETAILS } from '../projects/registry'

export default function ProjectDetailPage() {
  const { id } = useParams<{ id: string }>()

  if (!isDetailId(id)) {
    return <Navigate to="/404" replace />
  }

  const Detail = PROJECT_DETAILS[id]

  return (
    <div id="project-view">
      <Detail />
    </div>
  )
}
