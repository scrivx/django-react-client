import { useNavigate } from 'react-router-dom'

export function ProjectCard({ project }) {
  const navigate = useNavigate()
  return (
    <div
      class="px-5 py-3 rounded-lg bg-[#1d1e24] border border-gray-800 hover:border-emerald-900 cursor-pointer"
      onClick={() => {
        navigate(`/projects/${project.id}`)
      }}
    >
      <h1 class="text-2xl font-bold text-emerald-300 mb-2 mt-2">{project.titulo}</h1>
      <p class="text-lg text-gray-400 mb-2">{project.descripcion}</p>
    </div>
  )
}
