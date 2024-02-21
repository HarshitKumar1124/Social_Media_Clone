import {
    REQUEST_GET_CONNECTION_REQUEST,
    SUCCESS_GET_CONNECTION_REQUEST,
    FAIL_GET_CONNECTION_REQUEST,
    REQUEST_SEND_FRIEND_REQUEST,
    SUCCESS_SEND_FRIEND_REQUEST,
    FAIL_SEND_FRIEND_REQUEST,
    REQUEST_ACCEPT_REQUEST,
    SUCCESS_ACCEPT_REQUEST,
    FAIL_ACCEPT_REQUEST,
    REQUEST_DELETE_REQUEST,
    SUCCESS_DELETE_REQUEST,
    FAIL_DELETE_REQUEST,
   

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


export const acceptRequest=(id)=>async(dispatch)=>{

    try{

        dispatch({
            type:REQUEST_ACCEPT_REQUEST
        })

        const {data} = await axios.patch(`http://localhost:4000/api/v1/user/acceptrequest/${id}`)


        dispatch({
            type:SUCCESS_ACCEPT_REQUEST,
            payload:data
        })
    }catch(error){


        dispatch({
            type:FAIL_ACCEPT_REQUEST,
            payload:error.response
        })
    }
}


export const deleteRequest=(id,Obj)=>async(dispatch)=>{

    console.log('deleting ',Obj)

    try{

        dispatch({
            type:REQUEST_DELETE_REQUEST
        })

        const {data} = await axios.post(`http://localhost:4000/api/v1/user/deleterequest/${id}`,Obj)
        /* Unlike methods such as POST or PUT, DELETE does not typically involve sending a request body with data, as the operation is straightforward and focused on resource deletion. Thus, we se here Post rather than delete*/


        dispatch({
            type:SUCCESS_DELETE_REQUEST,
            payload:data
        })
    }catch(error){


        dispatch({
            type:FAIL_DELETE_REQUEST,
            payload:error.response
        })
    }
}