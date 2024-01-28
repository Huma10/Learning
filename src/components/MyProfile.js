import React, { useContext, useEffect, useState } from "react";
import AuthService from "../service/auth.service";
import { useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import authService from '../service/auth.service';


const MyProfile = () => {

    const { id } = useParams();    
    const [data, setData] = useState({
        email: "",
        password: "",
        userName: ""
    });
    useEffect(() => {
        async function fetchData() {
            const userData = await AuthService.findUserById(id);
           
            setData(userData.data.records)
        }
        fetchData();

    }, [id])

    const handleChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value })
      
    }

    const updateprofile = async (e) => {
        e.preventDefault();
       
        const { email, userName } = data;
        if (email === "") {
            toast.error("email is required!", {
                position: toast.POSITION.TOP_CENTER,
                className: "toast-message"
            });
        } else if (!email.includes("@")) {
            toast.warning("includes @ in your email!", {
                position: toast.POSITION.TOP_CENTER,
                className: "toast-message"
            });
        } else if (userName === "") {
            toast.error("UserName is required!", {
                position: toast.POSITION.TOP_CENTER,
                className: "toast-message"
            });
        } else {
           
            const userData = {
                email: data.email,
                userName: data.userName
            }
            const res = await authService.updateProfile(id, userData);
         
            if (res.message === 'User profile updated successfully') {
                toast.success("User profile updated successfully", {
                    position: toast.POSITION.TOP_CENTER,
                    className: "toast-message"
                 } );
                setData({
                    email: userData.email,
                    userName: userData.userName
                })
            }
            
        }
    }

    return (

        <main className="main-container">
            <div className='main-title'>
                <h3>MY PROFILE</h3>
            </div>
            <div class="container  px-md-5 text-center text-lg-start my-5">
                <div class="row gx-lg-5 align-items-center mb-5">


                    <div class="col-lg-6 mb-5 mb-lg-0 position-relative">
                        <div id="radius-shape-1" class="position-absolute rounded-circle shadow-5-strong"></div>
                        <div id="radius-shape-2" class="position-absolute shadow-5-strong"></div>

                        <div class="card bg-glass">
                            <div class="card-body px-4 py-5 px-md-5">
                                <form>

                                    {/* <!-- Username input --> */}
                                    <div class="form-outline mb-4">
                                        <input type="text" name="userName" value={data.userName} onChange={handleChange} id="form3Example3" class="form-control" />
                                        <label class="form-label" for="form3Example3">Username</label>
                                    </div>
                                    {/* <!-- Email input --> */}
                                    <div class="form-outline mb-4">
                                        <input type="email" name="email" value={data.email} onChange={handleChange} id="form3Example3" class="form-control" />
                                        <label class="form-label" for="form3Example3">Email address</label>
                                    </div>

                                   


                                    {/* <!-- Submit button --> */}
                                    <div class="text-center">
                                        <button type="submit" onClick={updateprofile} class="btn btn-primary btn-block mb-4 text-center">
                                            Save
                                        </button>
                                    </div>


                                </form>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <ToastContainer/>
        </main>

    )
}

export default MyProfile;