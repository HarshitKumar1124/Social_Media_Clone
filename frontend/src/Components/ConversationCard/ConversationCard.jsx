import * as React from 'react';
import "./ConversationCard.scss"
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Profile from '../../assets/images/person_two.jpg'
import { Badge } from '@mui/material';





export default function AlignItemsList() {



  return (<>
      <ListItem alignItems="flex-start" className='conversation-label' >
        <ListItemAvatar>
            
        <Badge
        overlap='circular'
        badgeContent=""
        anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right',
        }}
        color='success'
        
        >

          <Avatar alt="Username" src={Profile}  />
        </Badge>
        </ListItemAvatar>
        <ListItemText
          style={{color:"black",fontWeight:"bold"}}
          
          primary="Username"
          secondary={
           
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                // color="rgba(255,255,255,0.4)"
                color="black"
                fontStyle="normal"
              >
                <span style={{color:"red"}}>You/User: </span>
                Last Chat of the conversation will be displayed here
              </Typography>
             
          }
        />
      </ListItem>
      <Divider variant="middle" component="li" style={{border:'1px solid rgba(255,255,255,0.2)'}} />
    </>
  );
}