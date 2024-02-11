import React,{useEffect} from 'react'
import Navbar from '../Components/Navbar/Navbar'
import RequestContainer from '../Components/RequestContainer/RequestContainer'
import "../Components/RequestContainer/RequestContainer.scss"

const FriendRequests = () => {




  return (
    <div className='Friendrequests'>
    
        <Navbar/>
        <RequestContainer/>
   
    </div>
  )
}

export default FriendRequests