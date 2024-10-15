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
    DELETE_MESSAGE_FAIL,
    DELETE_MESSAGE_REQUEST,
    DELETE_MESSAGE_SUCCESS
   

} from "../ReduxConstants/conversationMessageConstants"
import axios from 'axios'

import CryptoJS from 'crypto-js'




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


        /* Decrypting messages */
        var encryptionkey = "SECRET_KEY_FOR_E2EE"

        data.AllConversations.forEach((item)=>{

            const decryptedData =   CryptoJS.AES.decrypt(item.lastMessage.message,encryptionkey).toString(CryptoJS.enc.Utf8);
            

            item.lastMessage.message = decryptedData

        })

         /* ******************************************************************************************** */

        

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

        

        /* Decrypting messages using crypto-js*/
       
        var encryptionkey = "SECRET_KEY_FOR_E2EE"

   

        data.chats.forEach((item)=>{

             
            const decryptedData =   CryptoJS.AES.decrypt(item.content,encryptionkey).toString(CryptoJS.enc.Utf8);
         
            item.content = decryptedData

        })

         /* ******************************************************************************************** */
        

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



export const deleteMessage =(id)=>async(dispatch)=>{

    try{
        dispatch({
            type:DELETE_MESSAGE_REQUEST
        })

      
        const {data} = await axios.delete(`http://localhost:4000/api/v1/user/delete/message/${id}`)

        dispatch({
            type:DELETE_MESSAGE_SUCCESS,
            payload:data
        })





    }catch(error){

        dispatch({
            type:DELETE_MESSAGE_FAIL,
            payload:error
        })
    }

}

