import React, {useState, useRef, useEffect} from 'react'

let newProject = {name: '', url: '', description: ''};

function ProjectForm({project = newProject, onSubmit, onCancel}) {
  let focusRef = useRef();
  let [state, setState] = useState(project);

  useEffect(() => {
    focusRef.current.focus();
  }, [])

  const handleChange = event => {
    let {name, value} = event.target;
    setState({...state, [name]: value});
  }

  const handleSubmit = event => {
    event.preventDefault();
    onSubmit(state);
  }

  const handleCancel = e => onCancel()

  const labelClasses = 'text-sm font-bold text-gray-600'
  const controlClasses = 'px-2 py-1 w-full outline-none rounded-none border focus:border-blue-600'

  return (
    <form className="p-5 border bg-gray-100" onSubmit={handleSubmit}>
      <div className="mb-2">
        <label htmlFor="name" className={labelClasses}>Name:</label>
        <input 
          name="name"
          ref={focusRef}
          value={state.name}
          onChange={handleChange}
          className={controlClasses}
          placeholder="Project Name e.g Example (Website)"
        />
      </div>
      <div className="mb-2">
        <label htmlFor="url" className={labelClasses}>URl:</label>
        <input 
          name="url" 
          value={state.url}
          onChange={handleChange}
          className={controlClasses}
          placeholder="Project URL e.g https://example.com"
        />
      </div>
      <div className="mb-2">
        <label htmlFor="url" className={labelClasses}>Description:</label>
        <textarea 
          name="description" 
          rows={5}
          value={state.description}
          onChange={handleChange}
          className={controlClasses}
          placeholder="Any important detail..."
        />
      </div>
      <div className="mb-2 flex justify-between">
        <button type="submit" className="py-1 px-2 text-white bg-green-600 hover:bg-green-700">Save</button>
        <button type="button" className="py-1 px-2 text-yellow-700 bg-yellow-400 hover:bg-yellow-500" onClick={handleCancel}>
          Cancel
        </button>
      </div>
    </form>
  )
}

export default ProjectForm