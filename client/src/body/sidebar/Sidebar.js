import React from 'react'
import './sidebar.css'
import img from '../../img/clement-helardot-95YRwf6CNw8-unsplash.jpg'
import { IoMdSpeedometer } from 'react-icons/io'
// import { AiOutlineBug } from 'react-icons/ai'
import { BsQuestionCircle, BsCardChecklist } from 'react-icons/bs'
import { Link } from 'react-router-dom'

const Sidebar = ({handleLogout}) => {
  return (
    <div className='sideBar grid'>
      <div className='logoDiv flex'>
        <h2>Bug Tracker</h2><br />
      </div>
        <img src={img} alt="coding bugs"></img>

      <div className='menuDiv'>
        <h3 className='divTitle'>
          QUICK MENU
        </h3>
        <ul className='menuLists grid'>
        <li className="listItem">
            <a href="#" className='menuLink flex'>
                <IoMdSpeedometer className="icon"/>
                <Link to="/dashboard"><span className="smallText">
                  Dashboard
                </span></Link>
            </a>
          </li>

          <li className='listItem'>
            <a href='#' className='menuLink flex'>
              {/* <AiOutlineBug className='icon' /> */}
              <BsCardChecklist className='icon'/>
              <Link to="/projects"><span className='smallText'>All Projects</span></Link>
            </a>
          </li>

        </ul>
      </div>

      <div className='sideBarCard'>
        <BsQuestionCircle className='icon' />
        <div className='cardContent'>
          <div className='circle1'></div>
          <div className='circle2'></div>

          <h3>Help center</h3>
          <p>Having trouble? Contact an admin <span>here</span></p>
          <button className='btn'>Go to help center</button>
        </div>
      </div>
      <Link to="/login"><button type="submit" class="btn" onClick={handleLogout}>Log Out</button></Link>
    </div>
  )
}

export default Sidebar