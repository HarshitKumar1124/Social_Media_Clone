import React from 'react'
import './MessageCard.scss'
import ActionMenu from './ActionMenu.jsx'



const MessageCard = ({messageOf,item}) => {


  
  
  return (
    <secttion className={messageOf=="sender"?"sender-row message-row":"receiver-row message-row"}>
      <div className={messageOf=="sender"?"sender message":"receiver message"}>
      <div >
        <div style={{display:"flex",justifyContent:"space-between"}}>
          <div>{item.content}</div>
          <span className='action-icon'><ActionMenu id = {item._id} /></span>
        </div>
        <p>22:20pm</p>
      </div>
     
    </div>
    
    </secttion>
  )
}

export default MessageCard