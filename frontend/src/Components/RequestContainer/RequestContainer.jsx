import React,{useEffect, useState} from 'react'
import './RequestContainer.scss'
import RequestCard from '../RequestCard/RequestCard'
import ConversationCard from "../ConversationCard/ConversationCard.jsx"
import { useDispatch, useSelector } from 'react-redux'
import {getSendRequests,getFriendRequests} from "../../ReduxActions/requestActions"
import {getConversations,getChat} from "../../ReduxActions/conversationMessageActions.js"
import { Button } from '@mui/material'
import List from '@mui/material/List';
import UserInfo from './Userinfo.jsx'
import Chatbox from './Chatbox.jsx'








const RequestContainer = ({containerName}) => {

    const {isAuth,user} = useSelector(state=>state.User)
    const {loading,fetched,requests:Sentrequests} = useSelector(state=>state.getSendRequests)
    const {loading2,fetched2,Receivedrequests} = useSelector(state=>state.getFriendRequests)
    const {loading:loadingConversation,getConversationStatus,AllConversations} = useSelector(state=>state.getConversations)

    

  
    const dispatch = useDispatch()
  
    useEffect(() => {
  
      if(containerName==="requests")
      {
        dispatch(getSendRequests());
        dispatch(getFriendRequests())
      }
      else if(containerName==="messages")
      {
        dispatch(getConversations())
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
                loadingConversation==false && getConversationStatus ?(
                  AllConversations.length==0?<p>No Conversations Yet!</p>:<List sx={{ width: '100%', height:"100%" }} style={{overflow:"hidden",background:"linear-gradient(to bottom,rgba(255, 173, 115,0.8),#FFC8A1)"}} >
                   {AllConversations.map((item,idx)=>{
                    return <ConversationCard key={idx} item={item} 
                     user_id={item.participants[0]._id===user._id?item.participants[1]._id:item.participants[0]._id}/>
                   })}
                  </List>
                ) :<></>
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