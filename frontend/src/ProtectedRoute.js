import React,{useEffect} from 'react'
import {useDispatch, useSelector} from "react-redux"
import { useNavigate} from 'react-router-dom'



const ProtectedRoute = ({Component}) => {

  const Navigate = useNavigate()

  
 const {loading,isAuth} = useSelector((state)=>state.User)

 useEffect(() => {

  console.log('Protected Route check',isAuth)
   
  if(!loading && isAuth!=true)
  {
  
    Navigate('/authenticate')
  }
 
  
 }, [])
 

  return  <Component/>

    
  
}

export default ProtectedRoute