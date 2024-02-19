import React,{useEffect} from 'react'
import Navbar from '../Components/Navbar/Navbar'
import "../Components/RequestCard/RequestCard.scss"
import MessageContainer from '../Components/RequestContainer/RequestContainer'
import { useDispatch, useSelector } from 'react-redux'
import CommunicateMenu from '../Components/CommunicateMenu/CommunicateMenu'
import { getAllUsers } from '../ReduxActions/userActions'


const Messages = () => {
  const {loading,isAuth} = useSelector((state)=>state.User)
  

  const dispatch = useDispatch()

  useEffect(() => {
    
    // fetch userlist for search query
    dispatch(getAllUsers())
   
  }, [])
  


  return (
    <div className="Messagesrequest">
        {(loading==false && isAuth)?<CommunicateMenu/>:<></>}
        <Navbar/>
        <MessageContainer containerName="messages"/>
    </div>
  )
}

export default Messages