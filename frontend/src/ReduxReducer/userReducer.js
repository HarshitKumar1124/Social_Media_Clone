import {

    REQUEST_LOAD_USER,
   SUCCESS_LOAD_USER,
    FAIL_LOAD_USER

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
        default:
            return state
    }
}