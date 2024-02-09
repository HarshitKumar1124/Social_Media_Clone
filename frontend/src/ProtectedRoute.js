import React,{useEffect} from 'react'
import {useDispatch, useSelector} from "react-redux"
import { useNavigate} from 'react-router-dom'
import {loadUser} from "./ReduxActions/userActions.js"


const ProtectedRoute = ({Component}) => {

  const Navigate = useNavigate()
  const dispatch = useDispatch()
  
 const {loading,isAuth} = useSelector((state)=>state.loadUser)

 useEffect(() => {

  console.log('Protected Route check',isAuth)
   
  if(!loading && isAuth==false)
  {
  
    Navigate('/signinout')
  }
 
  
 }, [])
 

  return  <Component/>

    
  
}

export default ProtectedRoute