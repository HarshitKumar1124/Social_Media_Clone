import React,{useEffect} from 'react'
import Navbar from '../Components/Navbar/Navbar'
import RequestCard from '../Components/RequestCard/RequestCard'
import { useDispatch, useSelector } from 'react-redux'
import {getSendRequests} from "../ReduxActions/requestActions"

const FriendRequests = () => {

  const {loading,isAuth,user} = useSelector(state=>state.loadUser)
  const dispatch = useDispatch()

  useEffect(() => {

    dispatch(getSendRequests());
  
  }, [])
  
  


  return (
    <>
    {loading==false?<div>
        <Navbar/>
        <RequestCard/>
    </div>:<></>}
    </>
  )
}

export default FriendRequests