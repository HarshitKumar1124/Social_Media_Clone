import React from 'react'
import "./Dashboard.scss"
import Navbar from '../Navbar/Navbar.jsx'
import ActivityContentMain from './ActivityMainContent.jsx'

const analyticContent = () => {

  return (<div className='activity-content-main'>
    <Navbar/>
    <ActivityContentMain/>

  </div>
  
  )
}

export default analyticContent