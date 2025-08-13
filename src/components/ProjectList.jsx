import { useEffect, useState } from 'react'
import { getAllProjects } from '../api/project.api'
import { ProjectCard } from './Card'

export function ProjectList() {
  const [projects, setProjects] = useState([])

  useEffect(() => {
    async function loadProjects() {
      const res = await getAllProjects()
      setProjects(res.data)
    }
    loadProjects()
  }, [])

  return (
    <section>
      <h1 class="text-3xl font-bold mb-8 text-center text-white/70">
        Lista de Proyectos
      </h1>
      <div class="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 ">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  )
}
