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



// Load User Information

export const loadUser = (state={Users:{}},action)=>{

    switch(action.type)
    {
        case REQUEST_LOAD_USER:
            return{
                loading:true,

            };
        case SUCCESS_LOAD_USER:
            return{
                loading:false,
                isAuth:action.payload.loadStatus,
                user:action.payload.user,
                message:"User Information Loaded!"
            }
        case FAIL_LOAD_USER: 
            return{
                loading:false,
                isAuth:false,
                user:null,
                message:action.payload

            }
        case clearError_User:
                return{
                   
                   Users:{}
                }
        default:
            return state
    }
}



// LOGOUT User 

export const userLogout = (state={Users:{}},action)=>{

    switch(action.type)
    {
        case REQUEST_LOGOUT_USER:
            return{
                loading:true,

            };
        case SUCCESS_LOGOUT_USER:
            return{
                loading:false,
                authStatus:action.payload.authStatus,
                logoutStatus:action.payload.logoutStatus,
                message:action.payload.message,

            }
        case FAIL_LOGOUT_USER: 
            return{
                loading:false,
                error:action.payload

            }
            case clearError_User:
                return {
                   
                   Users:{}
                }
        default:
            return state
    }
}


//login information
export const login = (state={},action)=>{

    switch(action.type)
    {
        case REQUEST_USER_LOGIN:
            return{
                loading:true,

            };
        case SUCCESS_USER_LOGIN:
            return{
                loading:false,
                isAuth:true,
                response:action.payload
                
            }
        case FAIL_USER_LOGIN:
            return{

                loading:false,
                isAuth:false,
                response:action.payload
               
            }
        default:
            return state
    }
}