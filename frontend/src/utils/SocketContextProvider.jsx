import React, { useState } from 'react'
import SocketContext from './SocketContext';
import io from 'socket.io-client'

const SocketContextProvider = ({children}) => {



    const [socket,setSocket] = useState( null );

  return (
    <SocketContext.Provider value={{socket,setSocket}}>
        {children}
    </SocketContext.Provider>
  )
}

export default SocketContextProvider