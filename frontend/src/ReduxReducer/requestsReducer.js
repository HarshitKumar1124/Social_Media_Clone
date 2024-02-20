import {
    
    REQUEST_GET_CONNECTION_REQUEST,
    SUCCESS_GET_CONNECTION_REQUEST,
    FAIL_GET_CONNECTION_REQUEST,

} from "../ReduxConstants/requestConstants"



/*Get Connection Requests */

export const getConnectionRequests = (state={},action)=>{

    switch(action.type)
    {
        case REQUEST_GET_CONNECTION_REQUEST:
            return{
                loading:true,

            };
        case SUCCESS_GET_CONNECTION_REQUEST:
            return{
                loading:false,
                fetched:action.payload.getSendRequestsStatus,
                requests:action.payload.requests,
                getRequestsStatus:true,
                message:"Fetched User's Connection Request!"
            }
        case FAIL_GET_CONNECTION_REQUEST: 
            return{
                loading:false,
                fetched:false,
                requests:[],
                getRequestsStatus:true,
                message:action.payload

            }
        default:
            return state
    }
}
