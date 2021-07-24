import React from 'react';
import '../style/header.css'
import logo from '../images/Logo-personal.png'



function Header() {
    return (
        <div className="Header">
            <div className="header__img">
                <a className="header__logo" href="/">
                    <img src={logo} alt="logo" />
                </a>
            </div>
            <div className ="header__navBar">
                <nav>
                    <a href="/">Portfolio</a>
                    <a href="/">Galery</a>
                    <a href="/">GitHub</a>
                    <a href="/">Contact</a>
                </nav>


            </div>
            
        </div>
    )
}

export default Header
