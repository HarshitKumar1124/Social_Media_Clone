import React from 'react'
import UserDP from "../../assets/images/person_one.jpg"
import CardHeader from '@mui/material/CardHeader';
import Avatar from '@mui/material/Avatar';import IconButton from '@mui/material/IconButton';
import Card from '@mui/material/Card';
import PersonAddAltRoundedIcon from '@mui/icons-material/PersonAddAltRounded';
import MoreVertRoundedIcon from '@mui/icons-material/MoreVertRounded';
import './FeedWidgets.scss'
import CardActions from '@mui/material/CardActions';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';

const PostUserLabel = ({label}) => {
  return (
    label=='header'?<Card className='post-user-info' >
    <CardHeader
    className='post-user-info-badge'
      avatar={
        <Avatar aria-label="recipe">
         <img style={{width:"100%"}}src={UserDP}/>
        </Avatar>
      }
      title="USERNAME"
      subheader="location of the post | HomeTown"

      action={
        <CardActions disableSpacing>
        <IconButton aria-label="Add a friend">
          <PersonAddAltRoundedIcon style={{color:"white"}} />
        </IconButton>
        <IconButton aria-label="Edit Post">
          <MoreVertRoundedIcon style={{color:"white"}} />
        </IconButton>
       
      </CardActions>
      }
      
    />



  </Card>: <CardActions disableSpacing style={{boxShadow:"0 0 10px black"}}>
        <IconButton aria-label="Like a post">
          <FavoriteIcon style={{color:"white"}} />
        </IconButton>
        <IconButton aria-label="share post">
          <ShareIcon style={{color:"white"}} />
        </IconButton>
       
      </CardActions>
  )
}

export default PostUserLabel