import ProjectCard from './ProjectCard'
import ProjectForm from './ProjectForm'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import {updateProject, removeProject} from '../../store/actions/projectActions'

function Project({project}) {
  let [openForm, setOpenForm] = useState(false)

  let dispatch = useDispatch()
  
  const handleEdit = () => {
    setOpenForm(true);
  }

  const handleCancel = () => {
    setOpenForm(false);
  }

  const handleSubmit = data => {
    const newData = {...data, id: project.id}
    dispatch(updateProject({project: newData}))
    setOpenForm(false)
  }

  const handleDelete = () => {
    dispatch(removeProject({id: project.id}))
  }

  return (
    <>
      { 
        openForm 
        ? <ProjectForm project={project} onCancel={handleCancel} onSubmit={handleSubmit}/>
        : <ProjectCard project={project} onEdit={handleEdit} onDelete={handleDelete}/>
      }
    </>
  )
}

export default Project;