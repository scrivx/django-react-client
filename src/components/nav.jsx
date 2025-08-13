import { Link } from 'react-router-dom'

export function Nav() {
  return (
    <div class="flex justify-between items-center py-3">
      <Link to="/projects">
        <h1 class="text-3xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-t from-emerald-500 via-teal-400 ">Proyectos</h1>
      </Link>

      <button
          class="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl border border-gray-700 hover:border-emerald-500 transition-colors text-gray-400 hover:text-green-300"
        >
              <Link to="/projects-create">Crear Proyecto</Link>
        </button>
    </div>
  )
}
