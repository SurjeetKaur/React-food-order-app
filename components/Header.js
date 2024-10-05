import React from 'react'
import {LOGO_IMG } from "../utils/Constants"; //By using curly braces {LOGO_IMG},JavaScript  import only the LOGO_IMG constant from imagesConstants file

const Header = () => {
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo-img"
                    alt="app-logo"
                    src={LOGO_IMG} />
            </div>
            <div className="nav-container">
                <ul>
                    {/* <li><a href="#home">Home</a></li>
                    <li><a href="#about">About us</a></li>
                    <li><a href="#contact">Contact us</a></li>
                    <li><a href="#cart">Cart</a></li> */}
                    <li><a href="#corporate"><i className=" fa fa-briefcase"></i>Swiggy Corporate</a></li>
                    <li><a href="#search"><i className="fa fa-search"></i>Search</a></li>
                    <li><a href="#offers"><i className="fa fa-gift"></i>Offers</a></li>
                    <li><a href="#help"><i className="fa fa-question-circle"></i>Help</a></li>
                    <li><a href="#signin"><i className="fa fa-user"></i>Sign In</a></li>
                    <li><a href="#cart"><i className="fa fa-shopping-cart"></i>Cart</a></li>

                </ul>
            </div>
        </div>
    )
}

export default Header;

