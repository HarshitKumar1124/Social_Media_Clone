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



