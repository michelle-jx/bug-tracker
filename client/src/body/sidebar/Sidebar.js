import React from 'react'
import './sidebar.css'
import img from '../../img/clement-helardot-95YRwf6CNw8-unsplash.jpg'
import { IoMdSpeedometer } from 'react-icons/io'
import { AiOutlineBug } from 'react-icons/ai'

const Sidebar = () => {
  return (
    <div className='sideBar grid'>
      <div className='logoDiv flex'>
        <img src={img} alt="coding bugs"></img>Sidebar
        <h2>Bug Tracker</h2>
      </div>

      <div className='menuDiv'>
        <h3 className='divTitle'>
          QUICK MENU
        </h3>
        <ul className='menuLists grid'>
          <li className='listItem'>
            <a href='#' className='menuLink'>
              <IoMdSpeedometer className='icon' />
              <span className='smallText'>Dashboard</span>
            </a>
          </li>

          <li className='listItem'>
            <a href='#' className='menuLink'>
              <AiOutlineBug className='icon' />
              <span className='smallText'>All Tickets</span>
            </a>
          </li>

        </ul>
      </div>
    </div>
  )
}

export default Sidebar