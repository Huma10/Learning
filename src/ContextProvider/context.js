import React, { createContext, useState } from 'react'


export const LoginContext = createContext("");

const Context = ({children}) => {

    const [logindata,setLoginData] = useState("");

  return (
    <>
    <LoginContext.Provider value={{logindata,setLoginData}}>
        {children}
    </LoginContext.Provider>
    </>
  )
}

// 1. create context
// 2. create provider
// 3. 

export default Context