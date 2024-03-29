import { BrowserRouter as Router,Routes, Route } from "react-router-dom";
import DashBoard from "./Pages/DashBoard.js";
import Home from "./Pages/Home.js";
import { useEffect } from "react";
import ConnectionRequests from "./Pages/ConnectionRequests.js"
import Notifications from "./Pages/Notifications.js"
import Messages from "./Pages/Messages.js"
import Authenticate from './Pages/Authenticate.js'
import FeedPage from "./Pages/FeedPage.js";

import ProtectedRoute from "./ProtectedRoute.js";
import { useDispatch} from "react-redux";
import { loadUser } from "./ReduxActions/userActions.js"

import axios from 'axios'







function App() {

  const dispatch = useDispatch()
  


  useEffect(() => {
    
    dispatch(loadUser())
  
  }, [])
  
  



  
  return (
    <>
  <Router>



<Routes>
  <Route exact path="/" element={<Home />} />
  {/* Need to be protected route */}
  <Route exact path="/user/dashboard" element={<ProtectedRoute Component={DashBoard} />} />
  <Route exact path="/user/requests" element={<ProtectedRoute Component={ConnectionRequests}/>} />
  <Route exact path="/user/notifications" element={<Notifications />} />
  <Route exact path="/user/messages" element={<ProtectedRoute Component={Messages}/>} />
  <Route exact path="/authenticate" element={<Authenticate/>} />
  <Route exact path="/feed" element={<FeedPage/>} />
  

  
</Routes>

</Router>
   </>
  );
}

export default App;
