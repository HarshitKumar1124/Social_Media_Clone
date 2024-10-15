import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DashBoard from "./Pages/DashBoard.js";
import Home from "./Pages/Home.js";
import { useEffect } from "react";
import ConnectionRequests from "./Pages/ConnectionRequests.js";
import Notifications from "./Pages/Notifications.js";
import Messages from "./Pages/Messages.js";
import Authenticate from "./Pages/Authenticate.js";
import FeedPage from "./Pages/FeedPage.js";
// import ProtectedRoute from "./ProtectedRoute.js";
// import { useDispatch } from "react-redux";
// import { loadUser } from "./ReduxActions/userActions.js";

// import axios from "axios";

function App() {
  // const dispatch = useDispatch()

  // useEffect(() => {

  //   dispatch(loadUser())

  // }, [])

  return (
    <>
      <Router>
        <Routes>
          <Route exact path='/' element={<Home/>}/>
          <Route exact path="/authenticate" element={<Authenticate/>} />

          {/* This Route is needed to be Protected Route */}
          <Route exact path="/user/dashboard" element={<DashBoard/>} />
          <Route exact path="/user/budget" element={<DashBoard/>} />
          <Route exact path="/user/transaction" element={<DashBoard/>} />
          <Route exact path="/user/loans" element={<DashBoard/>} />
          <Route exact path="/user/reports" element={<DashBoard/>} />
          <Route exact path="/user/savings" element={<DashBoard/>} />
          <Route exact path="/feed" element={<FeedPage/>} />

          <Route exact path="/user/messages" element={<Messages/>} />
          <Route exact path="/user/requests" element={<ConnectionRequests/>} />

          <Route exact path="/user/notifications" element={<Notifications />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;



