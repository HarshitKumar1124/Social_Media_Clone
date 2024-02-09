import React from 'react'
import "./Navbar.scss"
import SearchIcon from '../../assets/icons/search.svg'
import NotificationIcon from '../../assets/icons/bell.svg'
import MenuIcon from '../../assets/icons/menu.svg'
import { useNavigate } from 'react-router-dom'

export const Navbar =()=>{

  const Navigate = useNavigate()

    return  <div className='activity-content-top'>
    <div className='content-top-left'> 
      <button>
        <img src={MenuIcon} alt="Menu Icon" title="Menu" />
      </button>
      <h3 href="/">HOME</h3>
    </div>

    <div className='content-top-right'>
    <button>
        <img src={SearchIcon} alt="SearchBar Icon" title="Search" />
      </button>

      <button>
        <img src={NotificationIcon} alt="Notification Icon" title="Notification" onClick={()=>Navigate('/user/notifications')}/>
        <span></span>
      </button>


    </div>

   </div>
}

export default Navbar