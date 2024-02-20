import React, { useState } from 'react'
import userSearchChatContext from './userSearchCharContext'


const UserSearchChatContextProvider = ({children}) => {

    const [userSearchChat,setuserSearchChat] = useState('');
    /* stored the user that was searched for chat */

  return (
    <userSearchChatContext.Provider value={{userSearchChat,setuserSearchChat}}>
        {children}
    </userSearchChatContext.Provider>
  )
}

export default UserSearchChatContextProvider