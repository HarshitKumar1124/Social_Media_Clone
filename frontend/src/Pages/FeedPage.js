import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import UserWidget from '../Components/FeedWidgets/userWidget.jsx'
import '../Components/FeedWidgets/FeedWidgets.scss'
import MakePostWidget from '../Components/FeedWidgets/MakePostWidget.jsx'
import PostsColumn from '../Components/FeedWidgets/PostsColumn.jsx'

const FeedPage = () => {
  return (
    <div className='feedpage'>
        <Navbar/>
        <div className='feed-page-container'>
          <div>
            <UserWidget/>
          </div>
          <div className='posts-column'>
              <MakePostWidget/>
              <PostsColumn/>
          </div>
          <div className='third-column'>

        </div>
        </div>
    </div>
  )
}

export default FeedPage