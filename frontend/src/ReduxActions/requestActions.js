import {
    REQUEST_SENT_FRIEND_CONNECTION,
    SUCCESS_SENT_FRIEND_CONNECTION,
    FAIL_SENT_FRIEND_CONNECTION,
    REQUEST_RECEIVED_FRIEND_CONNECTION,
    SUCCESS_RECEIVED_FRIEND_CONNECTION,
    FAIL_RECEIVED_FRIEND_CONNECTION

} from "../ReduxConstants/requestConstants"

import axios from 'axios'

export const getSendRequests = ()=>async(dispatch)=>{

    try{

        dispatch({
            type:REQUEST_SENT_FRIEND_CONNECTION
        })

        const {data} = await axios.get('http://localhost:4000/api/v1/user/getsendfriendrequests');

        dispatch({
            type:SUCCESS_SENT_FRIEND_CONNECTION,
            payload:data
        })
    }catch(error)
    {
        dispatch({
            type:FAIL_SENT_FRIEND_CONNECTION,
            payload:error
        })
    }
}


// Get user's Friend Requests (Received Requests) 

export const getFriendRequests =()=>async(dispatch)=>{

    
    try{

        dispatch({
            type:REQUEST_RECEIVED_FRIEND_CONNECTION
        })

        const {data} = await axios.get('http://localhost:4000/api/v1/user/getfriendrequests');

        dispatch({
            type:SUCCESS_RECEIVED_FRIEND_CONNECTION,
            payload:data
        })
    }catch(error)
    {
        dispatch({
            type:FAIL_RECEIVED_FRIEND_CONNECTION,
            payload:error
        })
    }

}