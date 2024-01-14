import axios from "axios";
import authHeader from "./auth-header";

const URl = 'http://localhost:8080/api';

const Login = async ({email,password}) => { 
    const data = {
        email,
        password
    } 
    console.log(data);

    return axios.post(`${URl}/login`, data)
    .then(response => {
        if (response.data.accessToken) {
            localStorage.setItem("user", JSON.stringify(response.data));
        }
        return response.data;
    })
    .catch(error => {   
        return error;
    });    
}


const logout = () => {
    return axios.post(`${URl}/logout`, {} , {headers : authHeader().authorization})
    .then((response) => {
        return response;
    })
    .catch((err)=>{
        return err;
    })
}

const getCurrentUser = () => {   
    return JSON.parse(localStorage.getItem('user'));
}   

const register = (data) => {
   return axios.post(`${URl}/register`, data)
    .then(response => {
        return response.data;
    })
    .catch(error => {
        return error;
    })
}

const authService = {
    Login,
    logout,
    getCurrentUser,
    register

}

export default authService;