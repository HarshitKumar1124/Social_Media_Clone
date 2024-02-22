import React from 'react'
import "./FeedWidgets.scss"
import LocationOnIcon from '@mui/icons-material/LocationOn';
import WorkOutlineOutlinedIcon from '@mui/icons-material/WorkOutlineOutlined';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import EditIcon from '@mui/icons-material/Edit';
import UserAvatarLabel from '../Dashboard/UserAvatarLabel'


const userWidget = () => {
  return (
   <div className='user-widget'>
    <UserAvatarLabel/>
    <div>
      <p><span><LocationOnIcon/></span> Location</p>
      <p><span><WorkOutlineOutlinedIcon/></span> Fake Occupation</p>
    </div>
    <div>
      <p style={{justifyContent:"space-between"}}>Who has viewed your profile <span>7869</span> </p>
      <p style={{justifyContent:"space-between"}}>Impressions on your post <span>9978</span> </p>
    </div>
    <div className='social-media-section'>
      <h3>Social Profiles</h3>
     
      <div className='media-link'>

        <span><TwitterIcon/></span>
     
        <div>
          <h5>Twitter</h5>
          <p>Link of my account</p>
        </div>
    
        <span><EditIcon/></span>

      </div>

      <div className='media-link'>

        <span><LinkedInIcon/></span>
     
        <div>
          <h5>LinkedIn</h5>
          <p>Link of my account</p>
        </div>
    
        <span><EditIcon/></span>

      </div>
      
      
    </div>
   </div>
  )
}

export default userWidget