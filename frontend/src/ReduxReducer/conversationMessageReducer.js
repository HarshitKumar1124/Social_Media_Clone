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



// sendMessage


export const sendMessage = (state={},action)=>{

    switch(action.type)
    {
        case REQUEST_CREATE_CHAT_MESSAGES:
            return{
                loading:true,

            };
        case SUCCESS_CREATE_CHAT_MESSAGES:
            return{
                loading:false,
                createMessageStatus:action.payload
                
            }
        case FAIL_CREATE_CHAT_MESSAGES: 
            return{
                loading:false,
                createMessageStatus:action.payload
                
            }
        default:
            return state
    }
}



export const getConversations = (state={},action)=>{

    switch(action.type)
    {
        case REQUEST_GET_ALL_CONVERSATIONS:
            return{
                loading:true,

            };
        case SUCCESS_GET_ALL_CONVERSATIONS:
            return{
                loading:false,
                getConversationStatus:action.payload.getConversationStatus,
                AllConversations:action.payload.AllConversations,
                message:action.payload.message
                
            }
        case FAIL_GET_ALL_CONVERSATIONS: 
            return{
                loading:false,
                getConversationStatus:action.payload.getConversationStatus,
                message:action.payload.message,
                AllConversations:[]
                
            }
        default:
            return state
    }
}



export const getChat = (state={},action)=>{

    switch(action.type)
    {
        case REQUEST_GET_CHAT_MESSAGES:
            return{
                loading:true,

            };
        case SUCCESS_GET_CHAT_MESSAGES:
            return{
                loading:false,
                getChatsStatus:action.payload.getChatsStatus,
                chats:action.payload.chats,
                target_id:action.payload.target_id,
                message:action.payload.message,
                friendStatus:action.payload.friendStatus,
                
            }
        case FAIL_GET_CHAT_MESSAGES: 
            return{
                loading:false,
                getChatsStatus:action.payload.getChatsStatus,
                chats:null,
                message:action.payload,
                
            }
        default:
            return state
    }
}