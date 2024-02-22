import React,{useEffect, useState,useContext} from 'react'
import './RequestContainer.scss'
import RequestCard from '../RequestCard/RequestCard'
import ConversationCard from "../ConversationCard/ConversationCard.jsx"
import { useDispatch, useSelector } from 'react-redux'
import {getConnectionRequests} from "../../ReduxActions/requestActions"
import {getConversations,getChat} from "../../ReduxActions/conversationMessageActions.js"
import List from '@mui/material/List';
import UserInfo from './Userinfo.jsx'
import Chatbox from './Chatbox.jsx'
import FriendSearchField from "../generalComponents/FriendSearchField.jsx"
import UserSearchChatContext from '../../utils/userSearchChatContext/userSearchCharContext.js'
import SocketContext from '../../utils/SocketContext.js'


/* For E2E Encryption */
import CryptoJS from "crypto-js"





const RequestContainer = ({containerName}) => {

    const {isAuth,user} = useSelector(state=>state.User)
    const {loading,fetched,requests} = useSelector(state=>state.getConnectionRequests)
    const {loading:loadingConversation,getConversationStatus,AllConversations} = useSelector(state=>state.getConversations)


    const {userSearchChat,setuserSearchChat} = useContext(UserSearchChatContext)
    const {socket} = useContext(SocketContext)

    const [LoadRequests,setLoadRequests] = useState(requests!=undefined?requests:[])
    const [LoadAllConversations,setLoadAllConversations] =  useState(AllConversations!=undefined?AllConversations:[])

  
    const dispatch = useDispatch()
  
    useEffect(() => {

      console.log(`usersearchchat with`,userSearchChat)
  
      if(containerName==="requests")
        dispatch(getConnectionRequests())
      else if(containerName==="messages")
      {
        dispatch(getConversations())
      }

     
    
    }, [])

    useEffect(() => {
      if(userSearchChat!="")
      {
        console.log('search chat for ',userSearchChat)
        dispatch(getChat(userSearchChat))
      }
    }, [userSearchChat])



    useEffect(() => {

      setLoadRequests(requests!=undefined?requests:LoadRequests)
     
      
    }, [requests])
    


    useEffect(() => {
      
      if(socket){



        socket.on('received_friend_request',(requestInstance)=>{

          console.log('Listening to Request Container received new friend requests',requestInstance)
          setLoadRequests([...LoadRequests,requestInstance])
      
      }) 

      socket.on('friend_request_accepted',(ResponseNoti)=>{

        console.log('Listening to Request Container friend_request_accepted RequestContainer')
        setLoadRequests(LoadRequests => {
          return LoadRequests.filter((item) => item._id!==ResponseNoti.requestId);
        });
        
    
    }) 

    socket.on('delete_request',(ResponseNoti)=>{

      console.log('Listening to Request Container delete_request RequestContainer')
      setLoadRequests(LoadRequests => {
        return LoadRequests.filter((item) => item._id!==ResponseNoti.requestId);
      });
      
  
    })





  }

}, [])


useEffect(() => {
  if(socket){

    socket.on('newMessage',({conversationInstance})=>{

          /*for socket.io realtime decrypting */

          var encryptionkey = "SECRET_KEY_FOR_E2EE"

          console.log('Conersation realtime')

          const decryptedData =   CryptoJS.AES.decrypt(conversationInstance.lastMessage.message,encryptionkey).toString(CryptoJS.enc.Utf8);
         
          var newObj = LoadAllConversations
          if(newObj!=undefined){

            newObj.forEach((item)=>{

              if(item._id===conversationInstance._id)
              item.lastMessage.message = decryptedData

            })
          } 

          console.log('Conersation realtime' ,decryptedData,newObj)
          
      setLoadAllConversations(newObj)
      
  
    })
  }
}, [LoadAllConversations])



useEffect(() => {

  setLoadAllConversations(AllConversations!=undefined?AllConversations:LoadAllConversations)
  
}, [AllConversations])

    
    

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
          </>:<FriendSearchField/>
        }
     
      </div>

      <div className='req-list-container message-list-container'>
        
        {
          containerName==="requests"?<>
              {loading==false && ViewReceivedRequest==false?(LoadRequests.length!=0?LoadRequests.map((items,idx)=>{
                if(items.sender===user._id)
                return <RequestCard Req={items} key={idx} ReqType="Sent"/>
            }):<><p>No Friend Requests Sent!</p></>):<></>}



              {loading==false  &&  ViewReceivedRequest==true ?( LoadRequests.length!=0?LoadRequests.map((items,idx)=>{
                  if(items.receiver===user._id)
                  return <RequestCard Req={items} key={idx} ReqType="Received"/>
              }):<><p>No Friend Requests Received!</p></>):<></>}
          </>:<>

              {
                // display messages conversations
                loadingConversation==false && getConversationStatus && LoadAllConversations!=undefined ?(
                  LoadAllConversations.length==0?<p>No Conversations Yet!</p>:<List sx={{ width: '100%', height:"100%" }} style={{overflow:"hidden",background:"linear-gradient(to bottom,rgba(255, 173, 115,0.8),#FFC8A1)"}} >
                   {LoadAllConversations!=undefined && LoadAllConversations.map((item,idx)=>{
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