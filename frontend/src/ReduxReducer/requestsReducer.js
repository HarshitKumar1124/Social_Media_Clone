// import {
    
//     REQUEST_GET_CONNECTION_REQUEST,
//     SUCCESS_GET_CONNECTION_REQUEST,
//     FAIL_GET_CONNECTION_REQUEST,
//     REQUEST_SEND_FRIEND_REQUEST,
//     SUCCESS_SEND_FRIEND_REQUEST,
//     FAIL_SEND_FRIEND_REQUEST,
//     REQUEST_ACCEPT_REQUEST,
//     SUCCESS_ACCEPT_REQUEST,
//     FAIL_ACCEPT_REQUEST,
//     REQUEST_DELETE_REQUEST,
//     SUCCESS_DELETE_REQUEST,
//     FAIL_DELETE_REQUEST,
   

// } from "../ReduxConstants/requestConstants"



// /*Send Connection Requests */

// export const sendFriendRequest = (state={},action)=>{

//     switch(action.type)
//     {
//         case  REQUEST_SEND_FRIEND_REQUEST:
//             return{
//                 loading:true,

//             };
//         case SUCCESS_SEND_FRIEND_REQUEST:
//             return{
//                 loading:false,
//                requestStatus:action.payload.requestStatus,
//                 message:action.payload.message
//             }
//         case FAIL_SEND_FRIEND_REQUEST: 
//             return{
//                 loading:false,
//                 requestStatus:action.payload.requestStatus,
//                 message:action.payload.message

//             }
//         default:
//             return state
//     }
// }


// /*Get Connection Requests */

// export const getConnectionRequests = (state={},action)=>{

//     switch(action.type)
//     {
//         case REQUEST_GET_CONNECTION_REQUEST:
//             return{
//                 loading:true,

//             };
//         case SUCCESS_GET_CONNECTION_REQUEST:
//             return{
//                 loading:false,
//                 fetched:action.payload.getSendRequestsStatus,
//                 requests:action.payload.requests,
//                 getRequestsStatus:true,
//                 message:"Fetched User's Connection Request!"
//             }
//         case FAIL_GET_CONNECTION_REQUEST: 
//             return{
//                 loading:false,
//                 fetched:false,
//                 requests:[],
//                 getRequestsStatus:true,
//                 message:action.payload

//             }
//         default:
//             return state
//     }
// }



// export const acceptRequest = (state={},action)=>{

//     switch(action.type)
//     {
//         case REQUEST_ACCEPT_REQUEST:
//             return{
//                 loading:true,

//             };
//         case SUCCESS_ACCEPT_REQUEST:
//             return{
//                 loading:false,
//                 acceptRequest:action.payload.acceptRequest,
//                 message:action.payload.message
//             }
//         case FAIL_ACCEPT_REQUEST: 
//             return{
//                 loading:false,
//                 acceptRequest:action.payload.acceptRequest,
//                 message:action.payload

//             }
//         default:
//             return state
//     }
// }



// export const deleteRequest = (state={},action)=>{

//     switch(action.type)
//     {
//         case REQUEST_DELETE_REQUEST:
//             return{
//                 loading:true,

//             };
//         case SUCCESS_DELETE_REQUEST:
//             return{
//                 loading:false,
//                 deleteRequest:action.payload.deleteRequest,
//                 message:action.payload.message
//             }
//         case FAIL_DELETE_REQUEST: 
//             return{
//                 loading:false,
//                 deleteRequest:action.payload.deleteRequest,
//                 message:action.payload
//             }
//         default:
//             return state
//     }
// }


