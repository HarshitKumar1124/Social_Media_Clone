import React from 'react'
import './MessageCard.scss'

const MessageCard = ({messageOf}) => {
  return (
    <div className={messageOf=="sender"?"sender message":"receiver message"}>MessageCard</div>
  )
}

export default MessageCard