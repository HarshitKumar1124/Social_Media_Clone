import React, { useRef,useEffect, useState,useContext } from 'react'
import "../ConversationCard/ConversationCard.scss"
import MessageCard from '../MessageCard/MessageCard.jsx'
import {useDispatch,useSelector} from 'react-redux'
import { sendMessage } from '../../ReduxActions/conversationMessageActions.js'
import SocketContext from '../../utils/SocketContext.js'
import ChatMessageImage from "../../assets/images/Chatting Bg.jpg"

const Chatbox = () => {

  const dispatch = useDispatch()
  const {loading,getChatsStatus,chats,message,target_id} = useSelector(state=>state.getChat)
  


  const {isAuth,user} = useSelector(state=>state.User)

  const [messageContent,setMessageContent] = useState('')

  const {socket} = useContext(SocketContext)

  const [LoadChat,setLoadChat] = useState([])


  const ChatsPanel = useRef(null)

  useEffect(() => {

   
    setLoadChat(chats!=undefined?chats:LoadChat)
   
  }, [chats])

  useEffect(() => {

    ChatsPanel.current?.scrollIntoView({behaviour:"smooth"})

    if(socket){
      socket.on('newMessage',(messageInstance)=>{

          console.log('listening to newmEssage Aaaya',messageInstance)
          console.log('previous chats',chats,LoadChat)
          setLoadChat([...LoadChat,messageInstance])
    
      })
  }
    
  }, [LoadChat])
  
  

  const SendMessage =()=>{

    setLoadChat([...LoadChat,{sender:user._id,content:messageContent}])
    setMessageContent("")
    dispatch(sendMessage(target_id,{message:messageContent}))
    
  }

  const CheckKey=(e)=>{

    if(e.keyCode==13)
    {
      SendMessage()
      
    }

  }

  const HandleMessage=(e)=>{
    setMessageContent(e.target.value)
  }

 
  


  return (
    <div className='chatbox'>
        <div  className='display-chats' style={{height:(getChatsStatus?"90%":"100%")}}>
           {
            loading==false && getChatsStatus && isAuth==true ?(LoadChat.length==0?<p>No conversations yet with this person!</p>:(
              LoadChat.map((item,idx)=>{
                console.log(user._id==item.sender ?"sender":"receiver")
                return <MessageCard key={idx} messageOf={user._id==item.sender ?"sender":"receiver"} item={item}/>
              }
            ))):<>
            <img src ={ChatMessageImage} alt="image narrating to chat" title="Search or choose person you wish to chat with!"/>
            </>
           }
           
        </div>
        <div ref={ChatsPanel} className='input-message' style={{display:(getChatsStatus?"block":"none")}}>
            <div className='input-field'>
                <button onClick={SendMessage}>Send</button>
                <input type="text" placeholder='Type your message here...' onChange={HandleMessage}  value={messageContent} onKeyDown={CheckKey}/>
            </div>
        </div>
        
    </div>
  )
}

export default Chatbox