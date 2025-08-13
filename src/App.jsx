import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { ProjectPage } from './pages/ProjectPage'
import { ProjectFormPage } from './pages/ProjectFormPage'
import { Nav } from './components/nav'
import { Toaster } from 'react-hot-toast'

function App() {
  return (
    <BrowserRouter>
      <div className="container mx-auto w-7xl">
        <Nav />
        <Routes>
          <Route path="/" element={<Navigate to="/projects" />} />
          <Route path="/projects" element={<ProjectPage />} />
          <Route path="/projects-create" element={<ProjectFormPage />} />
          <Route path="/projects/:id" element={<ProjectFormPage />} />
        </Routes>
        <Toaster />
      </div>
    </BrowserRouter>
  )
}

export default App
