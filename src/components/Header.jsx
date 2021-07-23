import React from 'react';
import '../style/header.css'
import logo from '../images/Logo-personal.png'



function Header() {
    return (
        <div className="Header">
            <div className="header__img">
                <a href="/"><img src={logo} alt="" /></a>
            </div>
            <div className ="header__navBar">
                <nav>
                    <a href="/">Portfolio</a>
                    <a href="/">Galery</a>
                    <a href="/">RRSS</a>
                    <a href="/">Contact</a>
                    <a href="/">GitHub</a>
                </nav>


            </div>
            
        </div>
    )
}

export default Header
