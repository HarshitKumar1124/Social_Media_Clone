import React from 'react'
import Menubar from "../Components/Dashboard/menuBar.jsx"
import Content from "../Components/Dashboard/activityContent.jsx"
import "../Components/Dashboard/Dashboard.scss"
import CommunicateMenu from '../Components/CommunicateMenu/CommunicateMenu'
import { useSelector } from 'react-redux'

const DashBoard = () => {

  const {loading,isAuth} = useSelector((state)=>state.User)

  
  return (
    <div className='dashboard'>
      {(loading==false && isAuth)?<CommunicateMenu/>:<></>}
      <Menubar/>
    
      <Content/>
    </div>
  )
}

export default DashBoard