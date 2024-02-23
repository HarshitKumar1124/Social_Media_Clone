import React from 'react'
import './FeedWidgets.scss'
import PostUserLabel from './PostUserAvatarLabel.jsx'





const PostTemplate = () => {
  return (
    <div className='post-template'>
        <PostUserLabel label="header"/>
        <div className='post-content'>
            <p>Caption of the post</p>
            <div className="carousel-container">
               CAROUSEL
            </div>
        </div>
        <PostUserLabel label="footer"/>
       
    </div>
  )
}

export default PostTemplate