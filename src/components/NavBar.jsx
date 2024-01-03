import React from "react";
import './navBar.css';
import logo from '../assets/logo_200x200 (2).png';
import { Link } from "react-scroll";

function Navbar() {
    return(
        <nav className="navbar">
            <img src={logo} alt="logo" className="logo"/>
            <div className="menu">
                <Link className="ListItem">Home</Link>
                <Link className="ListItem">About</Link>
                <Link className="ListItem">Portfolio</Link>
                <Link className="ListItem">Client</Link>
            </div>
            <button className="menuBtn">
            <ion-icon name="chatbox-outline" className="icon"></ion-icon>Contact Me
            </button>
        </nav>
    )
}
export default Navbar