import React from "react";
import { NavLink } from "react-router-dom";
import 'E:/IVS/Learning/src/sidebar.css'

const Sidebar =  () => {

    return (
        <>
            <div className="col-auto min-vh-100 bg-dark">
            <ul>
                <li>
                    <NavLink className="nav-link px-2" to="/home">
                        <i className="bi-house"/><span className="ms-1 d-none d-dm-inline">Home</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink className="nav-link px-2" to="/speedometer">
                        <i className="bi-speedometer"/><span className="ms-1 d-none d-dm-inline">Speedometer</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink className="nav-link px-2" to="/other-link">
                        <i className="bi-home"/><span className="ms-1 d-none d-dm-inline">Other Link</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink className="nav-link px-2" to="/another-link">
                        <i className="bi-house"/><span className="ms-1 d-none d-dm-inline">Another Link</span>
                    </NavLink>
                </li>
            </ul>
        </div>
        </>
    )
}

export default Sidebar