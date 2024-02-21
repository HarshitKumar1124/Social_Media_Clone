import {

    REQUEST_GET_ALL_CONVERSATIONS,
    SUCCESS_GET_ALL_CONVERSATIONS,
    FAIL_GET_ALL_CONVERSATIONS,
    REQUEST_GET_CHAT_MESSAGES,
    SUCCESS_GET_CHAT_MESSAGES,
    FAIL_GET_CHAT_MESSAGES,
    REQUEST_CREATE_CHAT_MESSAGES,
    SUCCESS_CREATE_CHAT_MESSAGES,
    FAIL_CREATE_CHAT_MESSAGES,
   

} from "../ReduxConstants/conversationMessageConstants"
import axios from 'axios'




export const sendMessage =(id,Object)=>async(dispatch)=>{

    console.log('Bhejo message ',Object)

    try{

        dispatch({
            type:REQUEST_CREATE_CHAT_MESSAGES
        })


        const {data} = await axios.post(`http://localhost:4000/api/v1/user/chat/send/message/${id}`,Object)

        dispatch({
            type:SUCCESS_CREATE_CHAT_MESSAGES,
            payload:data
        })




    }catch(error){

        dispatch({
            type:FAIL_CREATE_CHAT_MESSAGES,
            payload:error.response
        })
    }

}



export const getConversations =(id,Object)=>async(dispatch)=>{

    try{

        dispatch({
            type:REQUEST_GET_ALL_CONVERSATIONS
        })


        const {data} = await axios.get(`http://localhost:4000/api/v1/user/get/conversations`)

        dispatch({
            type:SUCCESS_GET_ALL_CONVERSATIONS,
            payload:data
        })




    }catch(error){

        dispatch({
            type:FAIL_GET_ALL_CONVERSATIONS,
            payload:error
        })
    }

}

export const getChat =(id)=>async(dispatch)=>{

    try{

        dispatch({
            type:REQUEST_GET_CHAT_MESSAGES
        })


        const {data} = await axios.get(`http://localhost:4000/api/v1/user/get/chats/${id}`)

        dispatch({
            type:SUCCESS_GET_CHAT_MESSAGES,
            payload:data
        })




    }catch(error){

        dispatch({
            type:FAIL_GET_CHAT_MESSAGES,
            payload:error
        })
    }

}

