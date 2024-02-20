import React, { useState } from 'react'
import "./Navbar.scss"
import SearchIcon from '../../assets/icons/search.svg'
import NotificationIcon from '../../assets/icons/bell.svg'
import MenuIcon from '../../assets/icons/menu.svg'
import { useNavigate } from 'react-router-dom'
import {Badge} from '@mui/material'
import NotificationList from './NotificationList.js'

export const Navbar =()=>{

  const Navigate = useNavigate()

  const [notificationCount,setNotificationCount] = useState(4)
  const [OpenNotification,setOpenNotification] = useState(false)

  const ReadNotification=()=>{
    setOpenNotification(true)
    setNotificationCount(0)

  }

  const HideNotiList=()=>{
    setOpenNotification(false)
  }

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

      <button onClick={ReadNotification} id="Notification-button" onBlur={HideNotiList}>
        <Badge badgeContent={notificationCount} color="error" 
        >
        <img src={NotificationIcon} alt="Notification Icon" title="Notification"/>
        </Badge>

        {OpenNotification?<NotificationList/>:<></>}
       
      </button>


    </div>

   </div>
}

export default Navbar