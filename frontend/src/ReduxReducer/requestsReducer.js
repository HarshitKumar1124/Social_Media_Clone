import {
    REQUEST_SENT_FRIEND_CONNECTION,
    SUCCESS_SENT_FRIEND_CONNECTION,
    FAIL_SENT_FRIEND_CONNECTION,
    REQUEST_RECEIVED_FRIEND_CONNECTION,
    SUCCESS_RECEIVED_FRIEND_CONNECTION,
    FAIL_RECEIVED_FRIEND_CONNECTION

} from "../ReduxConstants/requestConstants"



// get Send Requests Information

export const getSendRequests = (state={},action)=>{

    switch(action.type)
    {
        case REQUEST_SENT_FRIEND_CONNECTION:
            return{
                loading:true,

            };
        case SUCCESS_SENT_FRIEND_CONNECTION:
            return{
                loading:false,
                fetched:action.payload.getSendRequestsStatus,
                requests:action.payload.requests,
                message:"Fetched User's Friend Request Sent!"
            }
        case FAIL_SENT_FRIEND_CONNECTION: 
            return{
                loading:false,
                fetched:false,
                requests:null,
                message:action.payload

            }
        default:
            return state
    }
}



// Get Received friend Requests


export const getFriendRequests = (state={},action)=>{

    switch(action.type)
    {
        case REQUEST_RECEIVED_FRIEND_CONNECTION:
            return{
                loading2:true,

            };
        case SUCCESS_RECEIVED_FRIEND_CONNECTION:
            return{
                loading2:false,
                fetched2:action.payload.getRequestsStatus,
                Receivedrequests:action.payload.requests,
                message:"Fetched User's Friend Request RECEIVED!"
            }
        case FAIL_RECEIVED_FRIEND_CONNECTION: 
            return{
                loading2:false,
                fetched2:false,
                Receivedrequests:null,
                message:action.payload

            }
        default:
            return state
    }
}