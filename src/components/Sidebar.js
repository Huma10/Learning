import React from "react";
import { Link, NavLink } from "react-router-dom";
import 'E:/IVS/Learning/src/sidebar.css'
import { BsCart3, BsCameraReelsFill, BsBoxFill, BsBoombox, BsBroadcast  } from 'react-icons/bs'

const Sidebar = ({openSidebarToggle, OpenSidebar}) => {

    return (
        // <div className="grid-container">
        <aside id='sidebar' className={openSidebarToggle ? "sidebar-responsive": ""}>
            <div className="sidebar-title">
                <div className="sidebar-brand text-white">
                    <BsCameraReelsFill className="icon-header" /> IVS
                </div>
                <span className="icon close-icon" onClick={OpenSidebar}>X</span>
            </div>
            <ul className="sidebar-list">
                <li className="sidebar-list-item">
                    <Link to='/dash'>
                        <BsBoxFill className="icon" />Dashboard
                    </Link>
                </li>
                <li className="sidebar-list-item">
                    <Link to='/channel'>
                        <BsBoombox className="icon" />Channels
                    </Link>
                </li>
                <li className="sidebar-list-item">
                    <Link to='/dash'>
                        <BsBroadcast  className="icon" />Live stream
                    </Link>
                </li>
            </ul>
        </aside>
        // </div>
    )
}

export default Sidebar