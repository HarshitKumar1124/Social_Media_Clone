import React from 'react'
import './FeedWidgets.scss'
import {Button} from '@mui/material'
import UserDP from "../../assets/images/person_one.jpg"
import Avatar from '@mui/material/Avatar';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import GraphicEqIcon from '@mui/icons-material/GraphicEq';
import AttachFileIcon from '@mui/icons-material/AttachFile';

const MakePostWidget = () => {
  return (
    <div className='make-post-widget'>
      <div>
        <Avatar aria-label="recipe">
          <img style={{width:"100%"}}src={UserDP}/>
        </Avatar>

        <input type="text" placeholder='Write something today...' />
      </div>
      <div>
        <p><Button><AddPhotoAlternateIcon style={{margin:"0 0.2rem",fontSize:"1.5rem"}}/> Image</Button>
        <Button><GraphicEqIcon  style={{margin:"0 0.2rem",fontSize:"1.5rem"}}/> Audio</Button>
        <Button><AttachFileIcon style={{margin:"0 0.2rem",fontSize:"1.5rem"}}/> Attachment</Button>
        </p>
        <Button>POST</Button>
      </div>
    </div>
  )
}

export default MakePostWidget