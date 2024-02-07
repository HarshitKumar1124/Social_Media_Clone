import React from 'react'
import "./Dashboard.scss"
import Profile from "../../assets/images/Profile.jpg"

const ActivityMainContent = () => {
  return (
    <div className='main-content'>
      <div>
        <div>
        <div className="logoDate">1</div>
        <div className='StatsCount'>2</div>
        </div>
        <div>
          <div className='profile-box'>
                 <img src={Profile}alt = "Profile Pic" title="Profile Pic"/>
          </div>
        </div>
      </div>
      <div>
        <div className='graph'>
          grapgbox
        </div>
      </div>
 
    </div>
  )
}

export default ActivityMainContent