import Link from 'next/link'

function ProjectCard() {
  return (
    <div className="p-5 border shadow">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-bold">Example Project</h2>
        <div className="flex">
          <Link href="/">
            <a className="text-blue-600" title="Edit Project"> 
              <i className="fas fa-pencil-alt"></i> 
            </a>
          </Link>
          <div className="mx-2"></div>
          <Link href="/">
            <a className="text-red-600" title="Delete Project"> 
              <i className="fas fa-trash-alt"></i> 
            </a>
          </Link>
        </div>
      </div>
      <p className="text-blue-600 text-sm">https://example.com</p>
      <p>This is an example project and this is some description related to this project.</p>
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