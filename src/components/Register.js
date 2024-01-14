import React, { useState } from 'react'
import authService from '../service/auth.service';
import { NavLink } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Register = () => {
    const [passShow, setPassShow] = useState(false);
    const [data, setData] = useState({
        email: "",
        password: "",
        userName: ""
    });

    function handleChange(e) {
        setData({ ...data, [e.target.name]: e.target.value })
        console.log(data);
    }

    const register = async (e) => {
        e.preventDefault();
        console.log(data);
        const { email, password, userName } = data;
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
        } else if (password === "") {
            toast.error("password is required!", {
                position: toast.POSITION.TOP_CENTER,
                className: "toast-message"
            });
        } else if (password.length < 6) {
            toast.error("password must be 6 char!", {
                position: toast.POSITION.TOP_CENTER,
                className: "toast-message"
            });
        } else if (userName === "") {
            toast.error("UserName is required!", {
                position: toast.POSITION.TOP_CENTER,
                className: "toast-message"
            });
        } else {

            const res = await authService.register(data);
            console.log(res);
            if (res.message === 'User created successfully') {
                toast.success("Registered Successfully", {
                    position: toast.POSITION.TOP_CENTER,
                    className: "toast-message"
                 } );
                setData({
                    email: "",
                    password: "",
                    userName: ""
                })
            }
            if (res.response.data.status === 400) {
                toast.success("User already exist", {
                    position: toast.POSITION.TOP_CENTER,
                    className: "toast-message"
                 } );
                setData({
                    email: "",
                    password: "",
                    userName: ""
                })
            }
        }
    }
    return (
        <div>
            <section className='background-radial-gradient overflow-hidden'>
                <div class="container px-4 py-5 px-md-5 text-center text-lg-start my-5">
                    <div class="row gx-lg-5 align-items-center mb-5">


                        <div class="col-lg-6 mb-5 mb-lg-0 position-relative">
                            <div id="radius-shape-1" class="position-absolute rounded-circle shadow-5-strong"></div>
                            <div id="radius-shape-2" class="position-absolute shadow-5-strong"></div>

                            <div class="card bg-glass">
                                <div class="card-body px-4 py-5 px-md-5">
                                    <form>

                                        {/* <!-- Username input --> */}
                                        <div class="form-outline mb-4">
                                            <input type="text" name="userName" onChange={handleChange} id="form3Example3" class="form-control" />
                                            <label class="form-label" for="form3Example3">Username</label>
                                        </div>
                                        {/* <!-- Email input --> */}
                                        <div class="form-outline mb-4">
                                            <input type="email" name="email" onChange={handleChange} id="form3Example3" class="form-control" />
                                            <label class="form-label" for="form3Example3">Email address</label>
                                        </div>

                                        {/* <!-- Password input --> */}
                                        <div class="form-outline mb-4">
                                            <input type={!passShow ? "password" : "text"} onChange={handleChange} name="password" id="form3Example4" class="form-control" />

                                            <label class="form-label" for="form3Example4">Password</label>
                                            <div className="showpass btn btn-link btn-floating mx-1" onClick={() => setPassShow(!passShow)}>
                                                {!passShow ? "Show" : "Hide"}
                                            </div>
                                        </div>



                                        {/* <!-- Submit button --> */}
                                        <div class="text-center">
                                            <button type="submit" onClick={register} class="btn btn-primary btn-block mb-4 text-center">
                                                Register
                                            </button>
                                        </div>

                                        {/* <!-- Login buttons --> */}
                                        <div class="text-center">
                                            <p>or login with:</p>
                                            <NavLink to="/"><button className='btn btn-primary btn-block mb-4 text-center'>Login</button></NavLink>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-6 mb-5 mb-lg-0" style={{ zIndex: 10 }} >
                            <h1 class="my-5 display-5 fw-bold ls-tight heading" >
                                Amazon IVS <br />
                                <span>for coaching</span>
                            </h1>
                            <p class="mb-4 opacity-70 text-white" >
                                Amazon Interactive Video Service (Amazon IVS) is a managed live streaming solution that makes low-latency or real-time video available to viewers around the world, allowing you to create engaging live experiences.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <ToastContainer/>
        </div>
    )
}

export default Register
