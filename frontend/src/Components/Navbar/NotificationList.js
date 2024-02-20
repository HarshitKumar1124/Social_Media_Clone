import React,{useContext, useState,useEffect} from 'react'
import './Navbar.scss'
import SocketContext from '../../utils/SocketContext'


const NotificationList = () => {

    const {socket} = useContext(SocketContext)
    const [AllNotification,setAllNotification] = useState([])

    useEffect(() => {
     
        socket.on('received_friend_request',(requestInstance)=>{

            console.log('Listening to received new friend requests',requestInstance)
            setAllNotification([...AllNotification,requestInstance])

        })


    }, [socket])
    
  return (
    <div className='notification-list'>
       {
        AllNotification.map((item,idx)=>{
            return <div key={idx} className='notification-item'>
                        <p>{item.senderUsername} Sent you the friend request</p>
                    </div>
        })
       }
    </div>
  )
}

export default NotificationList