import React, { useState } from 'react'
import SocketContext from './SocketContext';
import io from 'socket.io-client'

const SocketContextProvider = ({children}) => {

    const [socket,setSocket] = useState( null );
    const [OnlineUsers,setOnlineUsers] = useState({});

  return (
    <SocketContext.Provider value={{socket,setSocket,OnlineUsers,setOnlineUsers}}>
        {children}
    </SocketContext.Provider>
  )
}

export default SocketContextProvider