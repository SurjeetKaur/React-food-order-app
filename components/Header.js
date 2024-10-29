import React from 'react'
import {Link} from "react-router-dom";
import {LOGO_IMG } from "../utils/Constants"; //By using curly braces {LOGO_IMG},JavaScript  import only the LOGO_IMG constant from imagesConstants file


const Header = () => {
    return (
        <div className="header">
            <div className="logo-container">
                <Link to="/"><img className="logo-img"
                    alt="app-logo"
                    src={LOGO_IMG} />
                </Link>
            </div>
            <div className="nav-container">
                <ul>
                    {/* <li><a href="#home">Home</a></li>
                    <li><a href="#about">About us</a></li>
                    <li><a href="#contact">Contact us</a></li>
                    <li><a href="#cart">Cart</a></li> */}

                    <li><Link to="/corporate" className='nav-link'><i className=" fa fa-briefcase"></i>Swiggy Corporate</Link></li>
                    <li><Link to="/search" className='nav-link'><i className="fa fa-search"></i>Search</Link></li>
                    <li><Link to="/offers" className='nav-link'><i className="fa fa-gift"></i>Offers</Link></li>
                    <li><Link to="/help" className='nav-link'><i className="fa fa-question-circle"></i>Help</Link></li>
                    <li><Link to="/signin" className='nav-link'><i className="fa fa-user"></i>Sign In</Link></li>
                    <li><Link to="/cart" className='nav-link'><i className="fa fa-shopping-cart"></i>Cart</Link></li>

                </ul>
            </div>
        </div>
    )
}

export default Header;

