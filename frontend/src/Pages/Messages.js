import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import "../Components/RequestCard/RequestCard.scss"
import MessageContainer from '../Components/RequestContainer/RequestContainer'
import { useSelector } from 'react-redux'
import CommunicateMenu from '../Components/CommunicateMenu/CommunicateMenu'


const Messages = () => {
  const {loading,isAuth} = useSelector((state)=>state.User)


  return (
    <div className="Messagesrequest">
        {(loading==false && isAuth)?<CommunicateMenu/>:<></>}
        <Navbar/>
        <MessageContainer containerName="messages"/>
    </div>
  )
}

export default Messages