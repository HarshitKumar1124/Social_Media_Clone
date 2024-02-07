import React from 'react'
import "./Dashboard.scss"
import ActivityContentTop from './ActivityTopContent'
import ActivityContentMain from './ActivityMainContent.jsx'

const analyticContent = () => {



  return (<div className='activity-content-main'>
    <ActivityContentTop/>
    <ActivityContentMain/>

  </div>
  
  )
}

export default analyticContent