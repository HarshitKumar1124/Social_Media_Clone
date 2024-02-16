import React,{useEffect} from 'react'
import CommunicateMenu from "../Components/CommunicateMenu/CommunicateMenu.jsx";
import { useSelector,useDispatch} from 'react-redux';
import { loadUser } from '../ReduxActions/userActions.js';


const Home = () => {

 const {loading,isAuth} = useSelector(state=>state.User)
  const dispatch = useDispatch()

  useEffect(() => {
   

  }, [])
  
  return (
    <>
     
     <div>
     {(loading==false && isAuth)?<CommunicateMenu/>:<></>}
     Home
     </div>
    </>
  )
}

export default Home