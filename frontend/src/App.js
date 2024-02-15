import { BrowserRouter as Router,Routes, Route } from "react-router-dom";
import DashBoard from "./Pages/DashBoard.js";
import Home from "./Pages/Home.js";
import CommunicateMenu from "./Components/CommunicateMenu/CommunicateMenu.jsx";
import FriendRequests from "./Pages/FriendRequests.js"
import Notifications from "./Pages/Notifications.js"
import Messages from "./Pages/Messages.js"
import Authenticate from './Pages/Authenticate.js'
import { useContext, useEffect } from "react";
import ProtectedRoute from "./ProtectedRoute.js";
import { useDispatch, useSelector } from "react-redux";
import {loadUser} from "./ReduxActions/userActions.js"
import SocketContext from './utils/SocketContext.js'
import io from 'socket.io-client'



function App() {

  const {loading,isAuth,user} = useSelector(state=> state.loadUser)
  const dispatch = useDispatch()

 /* created the contextAPI to make socket available global scoped in application */
 const {socket,setSocket} = useContext(SocketContext)



  useEffect(() => {

  dispatch(loadUser())

  },[])

  useEffect(() => {

    if(isAuth)
     {

      let socket_temp = io('http://localhost:4000',{
        query:{
          user_id:user?._id
        }
      })

      setSocket(socket_temp)

      console.log('user is logged in and socket created!')
     }
     else if(isAuth==false)
     console.log('user disconnected and socket terminated!')



  }, [isAuth])
  


  
  return (
    <>
   {loading==false?
    <Router>

    {(isAuth==true)?<CommunicateMenu/>:<></>} 
    
    <Routes>
      <Route exact path="/" element={<Home />} />
      {/* Need to be protected route */}
      <Route exact path="/user/dashboard" element={<ProtectedRoute Component={DashBoard} />} />
      <Route exact path="/user/requests" element={<ProtectedRoute Component={FriendRequests}/>} />
      <Route exact path="/user/notifications" element={<Notifications />} />
      <Route exact path="/user/messages" element={<ProtectedRoute Component={Messages}/>} />
      <Route exact path="/authenticate" element={<Authenticate/>} />
      

      
    </Routes>
    
  </Router>:<></>}
   </>
  );
}

export default App;
