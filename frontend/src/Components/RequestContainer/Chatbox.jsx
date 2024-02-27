import React, { useRef,useEffect, useState,useContext } from 'react'
import "../ConversationCard/ConversationCard.scss"
import MessageCard from '../MessageCard/MessageCard.jsx'
import {useDispatch,useSelector} from 'react-redux'
import { getChat, sendMessage } from '../../ReduxActions/conversationMessageActions.js'
import SocketContext from '../../utils/SocketContext.js'
import ChatMessageImage from "../../assets/images/Chatting Bg.jpg"
import UserSearchChatContext from '../../utils/userSearchChatContext/userSearchCharContext.js'
import SendRequestBox from '../SendRequest/SendRequestBox.jsx'

/* For E2E Encryption */
import CryptoJS from "crypto-js"


/* using for emoji picker */
import data from '@emoji-mart/data'
import Picker from '@emoji-mart/react'
import SentimentSatisfiedAltOutlinedIcon from '@mui/icons-material/SentimentSatisfiedAltOutlined';
import InsertLinkOutlinedIcon from '@mui/icons-material/InsertLinkOutlined';
import { Box } from '@mui/material'






const Chatbox = () => {

  const dispatch = useDispatch()
  const {loading,getChatsStatus,chats,message,target_id,friendStatus} = useSelector(state=>state.getChat)
  
  const [OpenEmoji,setEmoji] = useState(false)
  const [AttachMenu,setAttachMenu] = useState(false)

  const {isAuth,user} = useSelector(state=>state.User)

  const [messageContent,setMessageContent] = useState('')

  const {socket} = useContext(SocketContext)

  const {userSearchChat,setuserSearchChat} = useContext(UserSearchChatContext)

  const [LoadChat,setLoadChat] = useState([])


  const InputRef = useRef(null)
  const lastEmptyMessage = useRef(null)

  useEffect(() => {

   
    setLoadChat(chats!=undefined?chats:LoadChat)
   
    if(userSearchChat!=="")
    setuserSearchChat("")
   
  }, [chats])

  useEffect(() => {

    lastEmptyMessage.current?.scrollIntoView({behaviour:"smooth"})

    if(socket){
      socket.on('newMessage',({messageInstance})=>{

          console.log('listening to newmEssage Aaaya',messageInstance)
          console.log('previous chats',chats,LoadChat)


          /*for socket.io reaaltime decrypting */

        var encryptionkey = "SECRET_KEY_FOR_E2EE"

        const decryptedData =   CryptoJS.AES.decrypt(messageInstance.content,encryptionkey).toString(CryptoJS.enc.Utf8);
        setLoadChat([...LoadChat,{...messageInstance,content:decryptedData}])
    
      })
  }
    
  }, [LoadChat])



  /*Appending Emoji in message */
  const AppendEmoji=(Obj)=>{
    
    InputRef.current.focus()
    // console.log(Obj)

    var start = messageContent.substring(0,InputRef.current.selectionStart);
    var end = messageContent.substring(InputRef.current.selectionStart)
 
    const text = start+Obj.native+end;
    console.log(text,InputRef.selectionStart)
    setMessageContent(text)


  }
  
  

  const SendMessage =()=>{

    setLoadChat([...LoadChat,{sender:user._id,content:messageContent}])
    setMessageContent("")

    /* Encryption of message */
    const encryptionkey = "SECRET_KEY_FOR_E2EE"
    console.log(encryptionkey)

    const encryptedData =  CryptoJS.AES.encrypt(messageContent,encryptionkey).toString()
    console.log('encrypted data - ',encryptedData)

   



    dispatch(sendMessage(target_id,{message:encryptedData}))

 
    
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

 
  const AttachFile =()=>{
    setAttachMenu(!AttachMenu)
  }
  


  return (
    <div className='chatbox'>
     
        <div  className='display-chats' style={{height:(getChatsStatus?"90%":"100%")}}>
           {
            loading==false && getChatsStatus && isAuth==true && friendStatus?(LoadChat.length==0?<p>No conversations yet with this person!</p>:(
              LoadChat.map((item,idx)=>{
                return <MessageCard key={idx} messageOf={user._id==item.sender ?"sender":"receiver"} item={item}/>
              }
            ))):(getChatsStatus && friendStatus!=true ?<SendRequestBox/>:<>
              <img src ={ChatMessageImage} alt="image narrating to chat" title="Search or choose person you wish to chat with!"/>
              </>)
           }
           <p ref={lastEmptyMessage}></p>
        </div>
        { loading==false && getChatsStatus && friendStatus?<div  className='input-message' style={{display:(getChatsStatus?"block":"none")}}>
        
            <div className='input-field'>
   
                <InsertLinkOutlinedIcon onClick={AttachFile}/>
               



                {/* Emoji Pallette */}
               
                <input type="text" placeholder='Type your message here...' ref={InputRef} onChange={HandleMessage}  value={messageContent} onKeyDown={CheckKey}/>

                <Box className="emoji-picker" style={{display: OpenEmoji?"block":"none"}}>
                <Picker data={data} onEmojiSelect={(item)=>AppendEmoji(item)} perLine={20} onClickOutside={()=>OpenEmoji?setEmoji(false):<></>}/>
                </Box>
                <SentimentSatisfiedAltOutlinedIcon onClick={()=>{setEmoji(!OpenEmoji)}}/>
                <button className='sendButton' onClick={SendMessage}>Send</button>

             

            </div>
        </div>:<></>}
        
    </div>
  )
}

export default Chatbox