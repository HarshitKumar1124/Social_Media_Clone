import React from 'react'
import './MessageCard.scss'

const MessageCard = ({messageOf,item}) => {
  return (
    <div className={messageOf=="sender"?"sender message":"receiver message"}>{item.content}</div>
  )
}

export default MessageCard