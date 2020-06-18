import {useState} from 'react'
import ProjectForm from './ProjectForm'

function AddProject() {
  let [openForm, setOpenForm] = useState(false);

  const handleCancel = e => setOpenForm(false);

  const handleAddProject = e => setOpenForm(true);

  const handleSubmit = project => {
    console.log(project)
    setOpenForm(false)
  }

  const AddProjectButton = (
    <button className="py-1 px-2 bg-green-400 hover:bg-green-500 text-green-900 rounded-none w-full font-bold" onClick={handleAddProject}>
      Add Project
    </button>
  )

  return (
    <>
      {
        openForm 
          ? (<ProjectForm onSubmit={handleSubmit} onCancel={handleCancel}/>)
          : (AddProjectButton)
      }
    </>
  );
}

export default AddProject;