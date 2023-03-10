import React from "react";
import {NavLink} from "react-router-dom";
import "./style.css";
import Logo from "./Logo.png";


const Home =()=>{
    return <>
    <header>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <div className="container-fluid">
    <img src={Logo} alt="React" className="logo"/>
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
    <section className="body">
        <div className="img_banner">
            <div className="blur"></div>
        </div>
        <div className="bg-text">
            <h1 className="txt">PRACTICE.BETTER.LEARN.BETTER</h1>
            <ul className="ban_btn">
                <li className="btn_1"><button type="button" className="btn btn-light">Sign In</button></li>
                <li className="btn_1"><button type="button" className="btn btn-dark">Register</button></li>
            </ul>
        </div>
    </section>
    </>;
};

export default Home;