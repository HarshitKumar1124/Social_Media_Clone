import { BrowserRouter as Router,Routes, Route } from "react-router-dom";
import DashBoard from "./Pages/DashBoard.js";
import Home from "./Pages/Home.js";
import CommunicateMenu from "./Components/CommunicateMenu/CommunicateMenu.jsx";
import FriendRequests from "./Pages/FriendRequests.js"
import Notifications from "./Pages/Notifications.js"
import Messages from "./Pages/Messages.js"
import { useEffect } from "react";
import ProtectedRoute from "./ProtectedRoute.js";
import { useDispatch, useSelector } from "react-redux";
import {loadUser} from "./ReduxActions/userActions.js"


function App() {

  const {loading,isAuth} = useSelector(state=> state.loadUser)
  const dispatch = useDispatch()


  useEffect(() => {

  dispatch(loadUser())
   
  }, [])
  


  return (
   <>
   {loading==false?
    <Router>

    {(isAuth )?<CommunicateMenu/>:<></>} 
    
    <Routes>
      <Route exact path="/" element={<Home />} />
      {/* Need to be protected route */}
      <Route exact path="/user/dashboard" element={<ProtectedRoute Component={DashBoard} />} />
      <Route exact path="/user/requests" element={<ProtectedRoute Component={FriendRequests}/>} />
      <Route exact path="/user/notifications" element={<Notifications />} />
      <Route exact path="/user/messages" element={<ProtectedRoute Component={Messages}/>} />
      

      
    </Routes>
    
  </Router>:<></>}
   </>
  );
}

export default App;
