import React from 'react'
import {  NavLink, useNavigate } from 'react-router-dom';
import authService from '../service/auth.service';
import LogoutIcon from '@mui/icons-material/Logout';

const LogoutUser = () => {

    const history = useNavigate();
    const logoutUser = async (e) => {
        e.preventDefault();
        console.log('logout');
        try {
            const data = await authService.logout();
            if (data.status === 200) {
                console.log(data);

                localStorage.clear();
                localStorage.removeItem('user');
                history('/')

            }
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div>
            <NavLink to='/' onClick={logoutUser}><LogoutIcon>Logout</LogoutIcon></NavLink>

        </div>
    )
}

export default LogoutUser
