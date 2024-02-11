import React, { useEffect, useContext, useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Header from "./components/Header";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import Error from "./components/Error";
import Register from "./components/Register";
import { LoginContext } from "./ContextProvider/context";
import './App.css';
import Channel from "./components/channels/channel";
import Sidebar from "./components/Sidebar";
import MyProfile from "./components/MyProfile";
import AddChannel from "./components/channels/addchannel";
function App() {
  const [data, setData] = useState(false);
   const [openSidebarToggle, setOpenSidebarToggle] = useState(false)
  const { setLoginData, logindata } = useContext(LoginContext);
  const RequireAuth = ({ children }) => {
    const isUserLoggedIn = logindata || localStorage.getItem("user");
    return isUserLoggedIn ? children : <Navigate to="/" />;
  };

 

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle)
  }

  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user) {
      setLoginData(JSON.parse(user));
    }
    setData(true);
  }, [setLoginData]);

  return (
    <>
      {data ? (
        <>
          {logindata &&  <Header OpenSidebar={OpenSidebar}/>}
          {logindata ? (
            <div className="grid-container">
              <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar}/>
              <Routes>
                <Route path="/dash" element={<RequireAuth><Dashboard logindata1={logindata} /></RequireAuth>} />
                <Route path="/channel" element={<RequireAuth><Channel /></RequireAuth>} />
                <Route path="/channel-add" element={<RequireAuth><AddChannel /></RequireAuth>} />
                <Route path="*" element={<Error />} />
                <Route path="/my-profile/:id" element={<RequireAuth><MyProfile logindata={logindata}/></RequireAuth>} />
              </Routes>
            </div>
          ) : (
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="*" element={<Error />} />
            </Routes>
          )}
        </>
      ) : (
        <h1>Loading...</h1>
      )}
    </>
  );
}
export default App;
