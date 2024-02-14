import React from 'react';
import "./NavBar.css";
import { Link } from "react-router-dom"
function NavBar() {
    return ( 
        <div>
            <div className='nav'>
                <h1 id='title'>BB</h1>
                <div className='link1'>
                 <Link to="/" className="active">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/work">Projects</Link>
                <Link to="/Bookings">Bookings</Link>
                <Link to="/Profile">profile</Link> 
                <Link to="/contact">Contact</Link>
                <Link to="/services">Services</Link>
                <Link to="/login">Login</Link>
                

                
                </div>
            </div>
        </div>
     );
}

export default NavBar;