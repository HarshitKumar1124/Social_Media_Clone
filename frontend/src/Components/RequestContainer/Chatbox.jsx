import React from 'react'
import "../ConversationCard/ConversationCard.scss"
import MessageCard from '../MessageCard/MessageCard.jsx'

const Chatbox = () => {
  return (
    <div className='chatbox'>
        <div className='display-chats'>
            <MessageCard messageOf="sender"/>
            <MessageCard messageOf = "receiver"/>
            <MessageCard messageOf = "receiver"/>
        </div>
        <div className='input-message'>
            <div className='input-field'>
                <button>Send</button>
                <input type="text" placeholder='Type your message here...' />
            </div>
        </div>
        
    </div>
  )
}

export default Chatbox