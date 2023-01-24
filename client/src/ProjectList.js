import {useState, useEffect} from 'react'
import ProjectItem from './ProjectItem'
import Sidebar from './body/sidebar/Sidebar'
import Body from './body/Body'

function ProjectList() {
    const [projects, setProjects] = useState([])
    useEffect(() => {
        fetch("/projects")
            .then(resp => resp.json())
            .then(data => setProjects(data))
    }, [])

    const projectList = projects.map((project) => <ProjectItem project={project}/>)
    console.log(projectList)
    return (
    <div className='container'>
      <div>
      {/* <h2>All Projects</h2> */}
      <Sidebar />
      </div>
      <div className='project-list'>{projectList}</div>
      </div>
  )
}

export default ProjectList