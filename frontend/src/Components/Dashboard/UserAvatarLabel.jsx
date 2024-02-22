import React from 'react'
import "./Dashboard.scss"
import UserDP from "../../assets/images/person_one.jpg"
import WidgetsIcon from '@mui/icons-material/Widgets';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';

import CardHeader from '@mui/material/CardHeader';
import Avatar from '@mui/material/Avatar';import IconButton from '@mui/material/IconButton';
import Card from '@mui/material/Card';


const UserAvatarLabel = () => {
  return (
    <Card className='user-info' >
    <CardHeader
    className='user-info-badge'
      avatar={
        <Avatar aria-label="recipe">
         <img style={{width:"100%"}}src={UserDP}/>
        </Avatar>
      }
      action={
        <IconButton  aria-label="settings">
          <ManageAccountsIcon style={{color:"white"}}/>
        </IconButton>
      }
      title="USERNAME"
      
    />

  </Card>
  )
}

export default UserAvatarLabel