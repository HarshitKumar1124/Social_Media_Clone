import React, { useState,useContext,useEffect } from 'react'
import "./Navbar.scss"
import SearchIcon from '../../assets/icons/search.svg'
import NotificationIcon from '../../assets/icons/bell.svg'
import MenuIcon from '../../assets/icons/menu.svg'
import { useNavigate } from 'react-router-dom'
import {Badge} from '@mui/material'
import SocketContext from '../../utils/SocketContext'



export const Navbar =()=>{

  const Navigate = useNavigate()

  const {socket} = useContext(SocketContext)

  const [notificationCount,setNotificationCount] = useState(0)
  const [OpenNotification,setOpenNotification] = useState(false)
  const [AllNotification,setAllNotification] = useState([])


  const ReadNotification=()=>{
    setOpenNotification(true)
    setNotificationCount(0)

  }

  const HideNotiList=()=>{
    setOpenNotification(false)
  }


  useEffect(() => {

    if(socket!=null){
     

    socket.on('received_friend_request',(requestInstance)=>{

        console.log('Listening to Navbar received new friend requests',requestInstance)
        setAllNotification([...AllNotification,requestInstance])
        setNotificationCount(notificationCount+1);

    })


    socket.on('friend_request_accepted',(response)=>{

      console.log('Listening to Navbar friend_request_accepted ')
      setAllNotification([...AllNotification,response])
      setNotificationCount(notificationCount+1);

  })

  socket.on('delete_request',(response)=>{

    console.log('Listening to Navbar delete_request ')
    setAllNotification([...AllNotification,response])
    setNotificationCount(notificationCount+1);

})

  }


}, [])



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

        {OpenNotification?(

                <div className='notification-list'>
                {
                AllNotification.map((item,idx)=>{
                    return <div key={idx} className='notification-item' onClick={()=>Navigate('/user/requests')}>
                                <p>{item.notification}</p>
                            </div>
                })
                }
                </div>
        ):<></>}
       
      </button>


    </div>

   </div>
}

export default Navbar