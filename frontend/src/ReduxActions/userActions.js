import {

    REQUEST_LOAD_USER,
   SUCCESS_LOAD_USER,
    FAIL_LOAD_USER,
    REQUEST_LOGOUT_USER,
    SUCCESS_LOGOUT_USER,
     FAIL_LOGOUT_USER,
     clearError_User,
     REQUEST_USER_LOGIN,
    SUCCESS_USER_LOGIN,
     FAIL_USER_LOGIN,
     

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


export const userLogout = ()=>async(dispatch)=>{

    try{

        dispatch({
            type:REQUEST_LOGOUT_USER
        })

        const {data} = await axios.post('http://localhost:4000/api/v1/user/logout');

        dispatch({
            type:SUCCESS_LOGOUT_USER,
            payload:data
        })

        dispatch({
            type:clearError_User,
            
        })


    }catch(error){

        dispatch({
            type:FAIL_LOGOUT_USER,
            message:error
        })
    }

}


// login user
export const loginUser = (Obj)=>async(dispatch)=>{

   
    dispatch({
        type:REQUEST_USER_LOGIN
    })

    try{

        const {data} = await axios.post(`http://localhost:4000/api/v1/user/login`,Obj);

        

        dispatch({
            type:SUCCESS_USER_LOGIN,
            payload:data
        })
    }catch(error)
    {
        console.log('login failed',error.message)
        dispatch({
            type:FAIL_USER_LOGIN,
            payload:error.response.data.message
        })
    }


}