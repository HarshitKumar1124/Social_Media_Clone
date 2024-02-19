import {

    REQUEST_LOAD_USER,
   SUCCESS_LOAD_USER,
    FAIL_LOAD_USER,
    REQUEST_LOGOUT_USER,
    SUCCESS_LOGOUT_USER,
     FAIL_LOGOUT_USER,
   
     REQUEST_USER_LOGIN,
     SUCCESS_USER_LOGIN,
      FAIL_USER_LOGIN,

      REQUEST_ALL_USER,
    SUCCESS_ALL_USER,
     FAIL_ALL_USER,

} from "../ReduxConstants/userConstants"



// User Information

export const User = (state={},action)=>{

    switch(action.type)
    {
        case REQUEST_LOAD_USER:
        case REQUEST_USER_LOGIN:
        case REQUEST_LOGOUT_USER:
            return{
                loading:true,

            };
        case SUCCESS_LOAD_USER:
        case SUCCESS_USER_LOGIN:
        case SUCCESS_LOGOUT_USER:
            return{
                loading:false,
                isAuth:action.payload.authStatus,
                user:action.payload.user,
                message:action.payload.message
            }
        case FAIL_LOAD_USER: 
        case FAIL_USER_LOGIN:
        case FAIL_LOGOUT_USER: 
            return{
                loading:false,
                isAuth:false,
                user:null,
                message:action.payload

            }
        default:
            return state
    }
}





export const getAllUsers = (state={},action)=>{

    switch(action.type)
    {
        case REQUEST_ALL_USER:
            return{
                loading:true,

            };

        case SUCCESS_ALL_USER:
            return{
                loading:false,
               getUserStatus:action.payload.getUserStatus,
               users:action.payload.users
            }
        case FAIL_ALL_USER: 
            return{
                loading:false,
               getUserStatus:action.payload.getUserStatus,
               users:action.payload.users,
               message:action.payload.message

            }
        default:
            return state
    }
}



