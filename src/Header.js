import './Header.css';
import logo from './images/logo.png'
import React, { useState } from 'react';


export default function Header() {
    const [isMenuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen((prev) => !prev);
    };

    return (
        <div className="header fixed-top">
            <div className='logo'>
                <img src={logo} alt='...'/>
                <h3> Global Sales Corperation </h3>
            </div>
            <div className={`navBar ${isMenuOpen ? 'open' : ''}`}>
                <a href='/'>Home</a>
                <p> &nbsp; &nbsp; </p>
                <a href='/about'>About Us</a>
                <p> &nbsp; &nbsp; </p>
                <a href='/#products'>Our Products</a>
                <p> &nbsp; &nbsp; </p>
                <a href='/#contacts's>Contact Us</a>
            </div>
            <div className="menu-icon" onClick={toggleMenu}>
                ☰
            </div>
        </div>
    )
}