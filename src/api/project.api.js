import axios from 'axios'

const projectApi = axios.create({
  baseURL: 'http://localhost:8000/projects/api/v1/projects/',
})

export const getAllProjects = () => projectApi.get('/')

export const getProject = (id) => projectApi.get(`/${id}/`)

export const createProject = (project) => projectApi.post('/', project)

export const deleteProject = (id) => projectApi.delete(`/${id}/`)

export const updateProject = (id, project) => projectApi.put(`/${id}/`, project)
