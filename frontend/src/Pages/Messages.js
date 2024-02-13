import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import "../Components/RequestCard/RequestCard.scss"
import MessageContainer from '../Components/RequestContainer/RequestContainer'


const Messages = () => {
  return (
    <div className="Messagesrequest">
        <Navbar/>
        <MessageContainer containerName="messages"/>
    </div>
  )
}

export default Messages