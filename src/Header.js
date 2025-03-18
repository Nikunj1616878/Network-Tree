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
            <div className='leftHeader'>
                <a href='/'>
                    <div className='logo'>
                        <img src={logo} alt='...' />
                        <h3> Network Tree </h3>
                    </div>
                </a>
            </div>
            <div className={`navBar ${isMenuOpen ? 'open' : ''}`}>
                <p> &nbsp; &nbsp; </p>
                <div className='dropDown'>
                    <a href='/'>
                    <span className="material-symbols-outlined">
                        home
                    </span>
                    </a>
                    <div className='dropDownContent'>
                        <p>Home</p>
                    </div>
                </div>
                <p> &nbsp; &nbsp; &nbsp; </p>
                <div className='dropDown'>
                    <a href='/'>
                    <span className="material-symbols-outlined">
                        diversity_3
                    </span>
                    </a>
                    <div className='dropDownContent'>
                        <p>Connections</p>
                    </div>
                </div>
                <p> &nbsp; &nbsp; &nbsp;</p>
                <div className='dropDown'>
                    <a href='/notifications'>
                        <span class="material-symbols-outlined">
                            notifications
                        </span>
                    </a>
                        <div className='dropDownContent'>
                            <p>Notifications</p>
                        </div>
                </div>
                <p> &nbsp; &nbsp; &nbsp;</p>
                {/* <a href='/#products'>Messenger</a> */}
                <div className='dropDown'>
                    <a href='/'>
                        <span class="material-symbols-outlined">
                            account_circle
                        </span>
                    </a>
                        <div className='dropDownContent'>
                            <p>Dashboard</p>
                        </div>
                </div>
                <p> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</p>
            </div>
            <div className="menu-icon" onClick={toggleMenu}>
                ☰
            </div>
        </div>
    )
}