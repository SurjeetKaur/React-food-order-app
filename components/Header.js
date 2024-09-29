import {LOGO_IMG } from "../utils/ImagesConstants"; //By using curly braces {LOGO_IMG},JavaScript  import only the LOGO_IMG constant from imagesConstants file

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
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">About us</a></li>
                    <li><a href="#contact">Contact us</a></li>
                    <li><a href="#cart">Cart</a></li>
                </ul>
            </div>
        </div>
    )
}

export default Header;

