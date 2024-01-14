import React, { useContext, useState } from 'react'
import { NavLink, useNavigate } from "react-router-dom"
import { ToastContainer, toast } from 'react-toastify';
import authService from '../service/auth.service';
import { LoginContext } from '../ContextProvider/context';
import 'react-toastify/dist/ReactToastify.css';
const Login = () => {

    const [passShow, setPassShow] = useState(false);
    const { setLoginData } = useContext(LoginContext)

    const [inpval, setInpval] = useState({
        email: "",
        password: "",
    });

    const history = useNavigate();

    const setVal = (e) => {
        // console.log(e.target.value);
        const { name, value } = e.target;

        setInpval(() => {
            return {
                ...inpval,
                [name]: value
            }
        })
    };


    const loginuser = async (e) => {
        e.preventDefault();

        const { email, password } = inpval;

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
        } else {
            const res = await authService.Login(inpval);
            console.log(res);
            if (res.status === 200) {
                setLoginData(res.records);
                // Store res data into localStorgae
                localStorage.setItem("user", JSON.stringify(res.records));
            
                history("/dash");
            }
            else {
                toast.error("Invalid Credentials!", {
                    position: "top-center"
                });


            }


        }
    }

    return (
        <>
            <section className='background-radial-gradient overflow-hidden'>
                <div className="container px-4 py-5 px-md-5 text-center text-lg-start my-5">
                    <div className="row gx-lg-5 align-items-center mb-5">
                        

                        <div className="col-lg-6 mb-5 mb-lg-0 position-relative">
                            <div id="radius-shape-1" className="position-absolute rounded-circle shadow-5-strong"></div>
                            <div id="radius-shape-2" className="position-absolute shadow-5-strong"></div>

                            <div className="card bg-glass">
                                <div className="card-body px-4 py-5 px-md-5">
                                    <form>
                                        

                                        {/* <!-- Email input --> */}
                                        <div className="form-outline mb-4">
                                            <input type="email" value={inpval.email} onChange={setVal} name="email" id="form3Example3" className="form-control" />
                                            <label className="form-label" for="form3Example3">Email address</label>
                                        </div>

                                        {/* <!-- Password input --> */}
                                        <div className="form-outline mb-4">
                                            <input  type={!passShow ? "password" : "text"} onChange={setVal} value={inpval.password} name="password" id="form3Example4" className="form-control" />
                                            
                                            <label className="form-label" for="form3Example4">Password</label>
                                            <div className="showpass btn btn-link btn-floating mx-1"  onClick={() => setPassShow(!passShow)}>
                                                {!passShow ? "Show" : "Hide"}
                                            </div>
                                        </div>



                                        {/* <!-- Submit button --> */}
                                        <div className="text-center">
                                        <button type="submit" onClick={loginuser} className="btn btn-primary btn-block mb-4 text-center">
                                            Login
                                        </button>
                                        </div>

                                        {/* <!-- Register buttons --> */}
                                        <div className="text-center">
                                            <p>or sign up with:</p>
                                            <NavLink to="/register"><button className='btn btn-primary btn-block mb-4 text-center'>Register</button></NavLink>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 mb-5 mb-lg-0" style={{zIndex:10}} >
                            <h1 className="my-5 display-5 fw-bold ls-tight heading" >
                                Amazon IVS <br />
                                <span>for coaching</span>
                            </h1>
                            <p className="mb-4 opacity-70 text-white" >
                            Amazon Interactive Video Service (Amazon IVS) is a managed live streaming solution that makes low-latency or real-time video available to viewers around the world, allowing you to create engaging live experiences.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <ToastContainer />

        </>
    )
}

export default Login