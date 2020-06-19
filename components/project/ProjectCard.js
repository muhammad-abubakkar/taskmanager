import Link from 'next/link'
import { useState } from 'react'

function CardActions({onEdit, onDelete}) {
  return (
    <div className="flex">
      <button className="text-blue-600" title="Edit Project" onClick={e => onEdit()}> 
        <i className="fas fa-pencil-alt"></i> 
      </button>
      <div className="mx-2"></div>
      <button className="text-red-600" title="Delete Project" onClick={e => onDelete()}> 
        <i className="fas fa-trash-alt"></i> 
      </button>
    </div>
  )
}

function DeletePrompt({onConfirm, onCancel}) {
  return (
    <div className="flex">
      <div className="text-red-600 mr-2">
        Delete ?
      </div>
      <button className="text-red-600" title="Edit Project" onClick={e => onConfirm()}> 
        Yes
      </button>
      <div className="mx-2"></div>
      <button className="text-blue-600" title="Delete Project" onClick={e => onCancel()}> 
        No
      </button>
    </div>
  )
}

function ProjectCard({project, onEdit, onDelete}) {

  let [showDeletePrompt, setShowDeletePrompt] = useState(false)

  const promptConfirm = () => {
    setShowDeletePrompt(true)
  }

  const handleCancel = () => {
    setShowDeletePrompt(false)
  }

  return (
    <div className="p-5 border shadow">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-bold">
          <Link href={`/project/${project.id}`}>
            <a>
              {project.name}
            </a>
          </Link>
        </h2>
        {
          showDeletePrompt 
            ? <DeletePrompt onConfirm={onDelete} onCancel={handleCancel}/>
            : <CardActions onEdit={onEdit} onDelete={promptConfirm}/>
        }
      </div>
      <p className="text-blue-600 text-sm">{project.url}</p>
      <p>{project.description}</p>
      <div className="flex justify-between mt-2">
        <Link href="/">
          <a title="Total Tasks"> 
            <i className="fas fa-list"></i> 36
          </a>
        </Link>
        <Link href="/">
          <a className="text-green-600" title="Done Tasks"> 
            <i className="fas fa-check-square"></i> 25
          </a>
        </Link>
        <Link href="/">
          <a className="text-yellow-600" title="Pending Tasks"> 
            <i className="fas fa-clock"></i> 11
          </a>
        </Link>
      </div>
    </div>
  )
}

export default ProjectCard