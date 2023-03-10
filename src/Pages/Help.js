import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "./Logo.png";
import "./style.css";
const Help =()=>{
    return <><header>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <div className="container-fluid">
    <img src={Logo} alt="React" />
    </div>
    <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav">
        <li className="nav-item"><NavLink to="/">Home</NavLink></li>
        <li className="nav-item"><NavLink to="/about">About us</NavLink></li>
        <li className="nav-item"><NavLink to="/contact">Contact US</NavLink></li>
        <li className="nav-item"><NavLink to="/service">Service</NavLink></li> 
        <li className="nav-item"><NavLink to="/help">Help</NavLink></li>
        <li className="nav-item"><button type="button" className="btn btn-light">Sign In</button></li>
        <li className="nav-item"><button type="button" className="btn btn-dark">Register</button></li>
    </ul>
    </div>
        
    </nav>
</header>
<section><h1>Help</h1></section></>
};

export default Help;