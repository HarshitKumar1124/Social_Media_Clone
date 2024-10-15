import React, { useEffect } from "react";
// import CommunicateMenu from "../Components/CommunicateMenu/CommunicateMenu.jsx";
// import { useSelector, useDispatch } from "react-redux";
import Navbar from "../Components/Navbar/Navbar.jsx";
import HomeContent from "../Components/HomeContent/HomeContent.jsx";

const Home = () => {
  // const { loading, isAuth } = useSelector((state) => state.User);
  // const dispatch = useDispatch();

  // useEffect(() => {}, []);

  return (
    <>
      <div>
        {/* {loading == false && isAuth ? <CommunicateMenu /> : <></>} */}
        <Navbar />
        <HomeContent />
      </div>
    </>
  );
};

export default Home;
