import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'react-hot-toast'
import {
  createProject,
  deleteProject,
  updateProject,
  getProject,
} from '../api/project.api'
import { useNavigate, useParams } from 'react-router-dom'

export function ProjectFormPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm()

  const navigate = useNavigate()
  const params = useParams()

  const onSubmit = handleSubmit(async (data) => {
    if (params.id) {
      // hay otras formas de visualizar el toast (https://react-hot-toast.com/)
      await updateProject(params.id, data)
      toast.success('Proyecto actualizado!', {
        style: {
          borderRadius: '10px',
          background: '#333',
          color: '#fff',
        },
      })
    } else {
      // otra forma de usar el toast usando promise
      await toast.promise(createProject(data), {
        loading: 'Cargando...',
        success: <b>Proyecto creado!</b>,
        error: <b>No se ha podido crear</b>,
        style: {
          background: '#333',
          color: '#fff',
        },
      })
    }
    navigate('/projects')
  })

  useEffect(() => {
    async function loadProject() {
      if (params.id) {
        const res = await getProject(params.id)
        setValue('titulo', res.data.titulo)
        setValue('descripcion', res.data.descripcion)
      }
    }
    loadProject()
  }, [])

  return (
    <div class="max-w-xl mx-auto">
      <form onSubmit={onSubmit}>
        <label class="mb-3 block text-white/70 text-lg font-bold">Titulo</label>
        <input
          type="text"
          placeholder="Ingrese el titulo del proyecto"
          {...register('titulo', { required: true })}
          class="mb-3 py-4 text-white text-lg rounded-lg block w-full p-2.5 border border-gray-700 hover:border-emerald-500 transition-colors focus:border-emerald-500 focus:outline-none"
        />
        {errors.titulo && <span>Este campo es requerido</span>}
        <label class="mb-3 block text-white/70 text-lg font-bold">
          Descripcion
        </label>
        <textarea
          rows="3"
          placeholder="Ingrese la descripcion del proyecto"
          {...register('descripcion', { required: true })}
          class="mb-5 pb-4 text-white text-lg rounded-lg block w-full p-2.5 border border-gray-700 hover:border-emerald-500 transition-colors focus:border-emerald-500 focus:outline-none"
        ></textarea>
        <div class="flex justify-between mt-4">
          <button class="block text-[15px] text-white bg-indigo-700 hover:bg-indigo-800 focus:outline-none font-medium rounded-lg text-sm px-5 py-3 text-center me-2 mb-2 dark:bg-indigo-600 dark:hover:bg-indigo-700 cursor-pointer">
            Crear
          </button>
          {params.id && (
            <button
              class="text-white bg-red-700 hover:bg-red-800 focus:outline-none font-medium rounded-lg text-[15px] px-5 py-2.5 text-center me-2 mb-2 dark:bg-red-500 dark:hover:bg-red-600 cursor-pointer"
              onClick={async () => {
                const accepted = window.confirm(
                  '¿Estás seguro de eliminar este proyecto?'
                )
                if (accepted) {
                  await deleteProject(params.id)
                  toast('Eliminado!', {
                    icon: '🗑️',
                    style: {
                      borderRadius: '10px',
                      background: '#333',
                      color: '#fff',
                    },
                  })
                  navigate('/projects')
                }
              }}
            >
              Eliminar
            </button>
          )}
        </div>
      </form>
    </div>
  )
}
