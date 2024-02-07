import { BrowserRouter as Router,Routes, Route } from "react-router-dom";
import DashBoard from "./Pages/DashBoard.js";
import Home from "./Pages/Home.js";
import CommunicateMenu from "./Components/CommunicateMenu/CommunicateMenu.jsx";
import FriendRequests from "./Pages/FriendRequests.js"
import Notifications from "./Pages/Notifications.js"
import Messages from "./Pages/Messages.js"


function App() {
  return (
    <Router>

       <CommunicateMenu/>
      
      <Routes>
        <Route exact path="/" element={<Home />} />
        {/* Need to be protected route */}
        <Route exact path="/user/dashboard" element={<DashBoard />} />
        <Route exact path="/user/requests" element={<FriendRequests />} />
        <Route exact path="/user/notifications" element={<Notifications />} />
        <Route exact path="/user/messages" element={<Messages />} />

        
      </Routes>
      
    </Router>
  );
}

export default App;
