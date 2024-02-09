import {
    REQUEST_FRIEND_CONNECTION,
    SUCCESS_FRIEND_CONNECTION,
    FAIL_FRIEND_CONNECTION

} from "../ReduxConstants/requestConstants"

import axios from 'axios'

export const getSendRequests = ()=>async(dispatch)=>{

    try{

        dispatch({
            type:REQUEST_FRIEND_CONNECTION
        })

        const {data} = await axios.get('http://localhost:4000/api/v1/user/getsendfriendrequests');

        dispatch({
            type:SUCCESS_FRIEND_CONNECTION,
            payload:data
        })
    }catch(error)
    {
        dispatch({
            type:FAIL_FRIEND_CONNECTION,
            payload:error
        })
    }
}