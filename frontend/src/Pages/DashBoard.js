import React from 'react'
import Menubar from "../Components/Dashboard/menuBar.jsx"
import Content from "../Components/Dashboard/activityContent.jsx"
import "../Components/Dashboard/Dashboard.scss"

const DashBoard = () => {
  return (
    <div className='dashboard'>
      <Menubar/>
    
      <Content/>
    </div>
  )
}

export default DashBoard