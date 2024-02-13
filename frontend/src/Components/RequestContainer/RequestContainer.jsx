import React,{useEffect, useState} from 'react'
import './RequestContainer.scss'
import RequestCard from '../RequestCard/RequestCard'
import ConversationCard from "../ConversationCard/ConversationCard.jsx"
import { useDispatch, useSelector } from 'react-redux'
import {getSendRequests,getFriendRequests} from "../../ReduxActions/requestActions"
import { Button } from '@mui/material'
import List from '@mui/material/List';
import UserInfo from './Userinfo.jsx'
import Chatbox from './Chatbox.jsx'








const RequestContainer = ({containerName}) => {

    const {isAuth,user} = useSelector(state=>state.loadUser)
    const {loading,fetched,requests:Sentrequests} = useSelector(state=>state.getSendRequests)
    const {loading2,fetched2,Receivedrequests} = useSelector(state=>state.getFriendRequests)

  
    const dispatch = useDispatch()
  
    useEffect(() => {
  
      if(containerName==="requests")
      {
        dispatch(getSendRequests());
        dispatch(getFriendRequests())
      }
      else if(containerName==="messages")
      {
        // dispatch conversation
        // dispatch messages
      }
    
    }, [])

    const [ViewReceivedRequest,setViewRequest] = useState(true)

    const ToggleReqTab=()=>{
      
        setViewRequest(!ViewReceivedRequest)
    }
    
    
  return (
    
   <div className='req-container message-container'>
   
   <div className='req-main-container message-main-container'>
      <div className='toggle-request-tab message-tabs'>
        
        {
          containerName==="requests"?<>
          <span onClick={ToggleReqTab} className={ViewReceivedRequest?`active`:``}>Received Requests</span>
          <span onClick={ToggleReqTab} className={ViewReceivedRequest==false?`active`:``}>Sent Requests</span>
          </>:<span><Button disabled  style={{color:"grey"}} >Chat Options</Button></span>
        }
     
      </div>

      <div className='req-list-container message-list-container'>
        
        {
          containerName==="requests"?<>
              {loading==false && ViewReceivedRequest==false?(Sentrequests.length!=0?Sentrequests.map((items,idx)=>{
                return <RequestCard Req={items} key={idx} ReqType="Sent"/>
            }):<><p>No Friend Requests Sent!</p></>):<></>}



              {loading==false  && loading2===false &&  ViewReceivedRequest==true ?( Receivedrequests.length!=0?Receivedrequests.map((items,idx)=>{
                  return <RequestCard Req={items} key={idx} ReqType="Received"/>
              }):<><p>No Friend Requests Received!</p></>):<></>}
          </>:<>

              {
                // display messages conversations
                <List sx={{ width: '100%', height:"100%" }} style={{overflow:"hidden",background:"linear-gradient(to bottom,rgba(255, 173, 115,0.8),#FFC8A1)"}} >
                <ConversationCard/>
                <ConversationCard/>
                </List>
              }
          </>
        }

      </div>
      

    </div>
    <div className={containerName==='messages'?"chatting-area":"req-user-info-display"}>{containerName==='requests'?<UserInfo/>:<Chatbox/>}</div>
  </div>

  )
}

export default RequestContainer