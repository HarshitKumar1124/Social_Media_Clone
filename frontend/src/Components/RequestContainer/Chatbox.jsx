import React, { useRef,useEffect } from 'react'
import "../ConversationCard/ConversationCard.scss"
import MessageCard from '../MessageCard/MessageCard.jsx'
import {useDispatch,useSelector} from 'react-redux'
import { sendMessage } from '../../ReduxActions/conversationMessageActions.js'
import ReactScrollToBottom from 'react-scroll-to-bottom'

const Chatbox = () => {

  const dispatch = useDispatch()
  const {loading,getChatsStatus,chats,message} = useSelector(state=>state.getChat)
  const {isAuth,user} = useSelector(state=>state.loadUser)


  const ChatsPanel = useRef(null)

  useEffect(() => {

    ChatsPanel.current?.scrollIntoView({behaviour:"smooth"})
   
  }, [chats])
  

  const SendMessage =()=>{

    // dispatch(sendMessage())
    
  }

 
  


  return (
    <div className='chatbox'>
        <div  className='display-chats'>
           {
            loading==false && getChatsStatus && isAuth==true ?(chats.length==0?<p></p>:(
              chats.map((item,idx)=>{
                return <MessageCard key={idx} messageOf={user._id==item.sender ?"sender":"receiver"} item={item}/>
              }
            ))):<></>
           }
           <div  ref={ChatsPanel}></div>
        </div>
        <div className='input-message'>
            <div className='input-field'>
                <button onClick={SendMessage}>Send</button>
                <input type="text" placeholder='Type your message here...' />
            </div>
        </div>
        
    </div>
  )
}

export default Chatbox