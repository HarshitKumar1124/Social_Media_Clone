import {

    REQUEST_LOAD_USER,
   SUCCESS_LOAD_USER,
    FAIL_LOAD_USER

} from "../ReduxConstants/userConstants"

import axios from 'axios'



export const loadUser = ()=>async(dispatch)=>{

    try{

        dispatch({
            type:REQUEST_LOAD_USER
        })

        const {data} = await axios.get('http://localhost:4000/api/v1/user/load');

        dispatch({
            type:SUCCESS_LOAD_USER,
            payload:data
        })


    }catch(error){

        dispatch({
            type:FAIL_LOAD_USER,
            message:error
        })
    }

}