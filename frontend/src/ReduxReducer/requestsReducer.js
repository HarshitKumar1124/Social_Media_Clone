import {
    REQUEST_FRIEND_CONNECTION,
    SUCCESS_FRIEND_CONNECTION,
    FAIL_FRIEND_CONNECTION

} from "../ReduxConstants/requestConstants"



// get Send Requests Information

export const getSendRequests = (state={},action)=>{

    switch(action.type)
    {
        case REQUEST_FRIEND_CONNECTION:
            return{
                loading:true,

            };
        case SUCCESS_FRIEND_CONNECTION:
            return{
                loading:false,
                fetched:action.payload.getSendRequestsStatus,
                requests:action.payload.requests,
                message:"Fetched User's Friend Request Sent!"
            }
        case FAIL_FRIEND_CONNECTION: 
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