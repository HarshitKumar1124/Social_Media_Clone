import React,{useEffect} from 'react'
import Navbar from '../Components/Navbar/Navbar'
import RequestContainer from '../Components/RequestContainer/RequestContainer'
import "../Components/RequestContainer/RequestContainer.scss"
// import { useSelector } from 'react-redux'
// import CommunicateMenu from '../Components/CommunicateMenu/CommunicateMenu'

const ConnectionRequests = () => {

  // const {loading,isAuth} = useSelector((state)=>state.User)


  return (
    <div className='Friendrequests'>
        {/* {(loading==false && isAuth)?<CommunicateMenu/>:<></>} */}
        <Navbar/>
        <RequestContainer containerName="requests"/>
   
    </div>
  )
}

export default ConnectionRequests