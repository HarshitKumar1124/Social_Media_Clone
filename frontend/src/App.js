import { BrowserRouter as Router,Routes, Route } from "react-router-dom";
import DashBoard from "./Pages/DashBoard.js";
import Home from "./Pages/Home.js";

function App() {
  return (
    <Router>


      <Routes>
        <Route exact path="/" element={<Home />} />
        {/* Need to be protected route */}
        <Route exact path="/user/dashboard" element={<DashBoard />} />
      </Routes>
      
    </Router>
  );
}

export default App;
