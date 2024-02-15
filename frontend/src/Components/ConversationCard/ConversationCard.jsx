import React,{useContext} from 'react';
import "./ConversationCard.scss"
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Profile from '../../assets/images/person_two.jpg'
import { Badge } from '@mui/material';
import {useSelector,useDispatch} from 'react-redux'
import {getChat} from "../../ReduxActions/conversationMessageActions.js"
import SocketContext from '../../utils/SocketContext.js';




export default function ConversationCard({item,user_id}) {

  const {loading,isAuth,user,message} = useSelector(state=>state.loadUser)


  const dispatch = useDispatch()
  const {socket} = useContext(SocketContext)
  

  const OpenChatbox=()=>{
    dispatch(getChat(user_id))
  }



  return (<>
      <ListItem alignItems="flex-start" className='conversation-label' onClick={OpenChatbox} >
        <ListItemAvatar>
            
        <Badge
        overlap='circular'
        badgeContent=""
        anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right',
        }}

        color={socket==null?"":'success'}
        
        >

          <Avatar alt="Username" src={Profile}  />
        </Badge>
        </ListItemAvatar>
        <ListItemText
          style={{color:"black",fontWeight:"bold"}}
          
          primary={item.participants[0]._id===user._id?item.participants[1].firstName + " " + item.participants[1].lastName:item.participants[0].firstName + " " + item.participants[0].lastName}
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
                {item.lastMessage.message}
              </Typography>
             
          }
        />
      </ListItem>
      <Divider variant="middle" component="li" style={{border:'1px solid rgba(255,255,255,0.2)'}} />
    </>
  );
}