import React, { useEffect } from "react";
import Navbar from "../Components/Navbar/Navbar";
import Authentication from "../Components/Authentication/Authentication.jsx";

const Authenticate = () => {
  return (
    <div>
      <Navbar />
      <Authentication />
    </div>
  );
};

export default Authenticate;
