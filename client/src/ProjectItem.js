import { useState } from 'react'
import Switch, { Case, Default } from 'react-switch-case'
import { AiOutlineBug, AiFillHeart, AiOutlineHeart } from 'react-icons/ai'
import { BsCardChecklist, BsPatchQuestion, BsArrowRightShort } from 'react-icons/bs'
import img from './img/404.avif'

function ProjectItem({ project }) {
  // console.log(project)
  const [icon, setIcon] = useState("")

  function handleIcon() {
    switch (icon) {
      case 'bug':
        setIcon(<span><AiOutlineBug className='icon' /></span>)
        break;
      case 'feature':
        setIcon(<span><BsPatchQuestion className='icon' /></span>)
        break;
      case 'request':
        setIcon(<span><BsCardChecklist className='icon' /></span>)
        break;
      default:
        console.log("There's nothing here yet!")
    }
  }

  function handleClickProject() { }

  return (
    <div>
      <div className='listingSection'>

        <div className="heading flex">
          <h1>{project.title}</h1>
        </div>

        <li>{project.tickets}</li>
            <p>Devs: {project.contributors ? project.contributors : "None yet! Please contact an admin to be added to this project."}</p>
            <AiOutlineBug className="icon" />
        <div className="secContainer flex">
          <div className="singleItem">
            <img src={img} alt="404 on rainbow background with upside down smiley" />
            <p>Current Issues: {project.description ? project.description : "Add a description from Dashboard page"}</p>
          </div>
        </div>
      </div>


    </div>
  )
}

export default ProjectItem