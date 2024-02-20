import {
    REQUEST_GET_CONNECTION_REQUEST,
    SUCCESS_GET_CONNECTION_REQUEST,
    FAIL_GET_CONNECTION_REQUEST,
    REQUEST_SEND_FRIEND_REQUEST,
    SUCCESS_SEND_FRIEND_REQUEST,
    FAIL_SEND_FRIEND_REQUEST,
   

} from "../ReduxConstants/requestConstants"

import axios from 'axios'


export const sendFriendRequest=(id)=>async(dispatch)=>{

    try{

        dispatch({
            type:REQUEST_SEND_FRIEND_REQUEST
        })

        const {data} = await axios.post(`http://localhost:4000/api/v1/user/friendrequest/${id}`)


        dispatch({
            type:SUCCESS_SEND_FRIEND_REQUEST,
            payload:data
        })
    }catch(error){


        dispatch({
            type:FAIL_SEND_FRIEND_REQUEST,
            payload:error
        })
    }
}




export const getConnectionRequests = ()=>async(dispatch)=>{

    try{

        dispatch({
            type:REQUEST_GET_CONNECTION_REQUEST
        })

        const {data} = await axios.get('http://localhost:4000/api/v1/user/getconnectionrequests');

        dispatch({
            type:SUCCESS_GET_CONNECTION_REQUEST,
            payload:data
        })
    }catch(error)
    {
        dispatch({
            type:FAIL_GET_CONNECTION_REQUEST,
            payload:error
        })
    }
}
