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
function App() {
  const [data, setData] = useState(false);
  const { setLoginData, logindata } = useContext(LoginContext);
  const RequireAuth = ({ children }) => {
    // Use logindata from context or localStorage to verify authentication
    const isUserLoggedIn = logindata || localStorage.getItem("user");
    return isUserLoggedIn ? children : <Navigate to="/" />;
  };
  // Check local storage for user data
  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user) {
      setLoginData(JSON.parse(user));
    }
    setData(true)
  }, [setLoginData]);
  return (
    <>
      {data ? (
        <>

          
          {/* Show Header only if user is logged in */}
          {logindata && <Header />}
          
          {logindata && <Sidebar />}
          
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/dash" element={
              <RequireAuth>
                {/* Passing logindata as a prop to Dashboard */}
                <Dashboard logindata1={logindata} />
              </RequireAuth>
            } />
            <Route path="/channel" element={
              <RequireAuth>
                <Channel />
              </RequireAuth>
            } />
            <Route path="*" element={<Error />} />
          </Routes>
        </>
      ) : (
        <h1>Loading...</h1>
      )}
      
    </>
  );
}
export default App;
