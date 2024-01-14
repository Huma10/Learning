import React, { useEffect, useContext, useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Header from "./components/Header";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import Error from "./components/Error";
import Register from "./components/Register";
import { LoginContext } from "./ContextProvider/context";
import './App.css';
function App() {
  const [data, setData] = useState(false);
  const { logindata } = useContext(LoginContext);
  const RequireAuth = ({ children }) => {
    return logindata ? children : <Navigate to="/" />;
  };
  useEffect(() => {
    setTimeout(() => {
      setData(true);
    }, 2000);
  }, []);
  return (
    <>
      {data ? (
        <>
          {/* Show Header only if user is logged in */}
          {logindata && <Header />}
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/dash" element={
              <RequireAuth>
                {/* Passing logindata as a prop to Dashboard */}
                <Dashboard logindata1={logindata}/>
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
