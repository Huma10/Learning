import React, { useContext } from 'react'
import {  Link, NavLink, useNavigate } from 'react-router-dom';
import authService from '../service/auth.service';
import { LoginContext } from '../ContextProvider/context';
import { BsBoxArrowRight } 
  from 'react-icons/bs'
const LogoutUser = () => {
    const { setLoginData } = useContext(LoginContext)
    const history = useNavigate();
    const logoutUser = async (e) => {
        e.preventDefault();
      
        try {
            const data = await authService.logout();
            if (data.status === 200) {
            

                localStorage.clear();
                localStorage.removeItem('user');
                setLoginData(null)
                history('/')

            }
        } catch (error) {
            
        }
    }

    return (
        <>
            <Link to='/' onClick={logoutUser} className='text-dark'><BsBoxArrowRight className='icon' /></Link>
            {/* <NavLink to='/' onClick={logoutUser}><LogoutIcon>Logout</LogoutIcon></NavLink> */}
            </>
        
    )
}

export default LogoutUser
