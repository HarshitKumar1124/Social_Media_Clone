import { useContext, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import SocketContext from "./SocketContext";

export const UserSocketEventListener=()=>{



    const {socket} = useContext(SocketContext)
    const {loading,getChatsStatus,chats,message,target_id} = useSelector(state=>state.getChat)


    // iska use nhi ho raha

    useEffect(() => {
        console.log('event trigger')
    
        if(socket){
            socket.on('newMessage',(messageInstance)=>{

                console.log('listening to newmEssage Aaaya',messageInstance)
                console.log('previous chats',chats)
          
            })

            socket.on('received_friend_request',(requestInstance)=>{

                console.log('Listening to received new friend requests',requestInstance)

            })
        }

       
    }, [socket])
    
}