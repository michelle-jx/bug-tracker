import {useState, useEffect} from 'react'
import ProjectItem from './ProjectItem'

function ProjectList() {
    const [projects, setProjects] = useState([])
    useEffect(() => {
        fetch("/projects")
            .then(resp => resp.json())
            .then(data => setProjects(data))
    }, [])

    const projectList = projects.map((project) => <ProjectItem project={project}/>)
    return (
    <div>{projectList}</div>
  )
}

export default ProjectList