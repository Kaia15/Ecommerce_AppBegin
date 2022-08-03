import React from 'react';
import NavbarStyle from './Navbar.module.css'

export default function Navbar() {
    return (
        <div className={NavbarStyle.nav_container}>
            <div className='navbar-header'>
                <h1> BeU </h1>
            </div>
            <div className='navbar-options' style = {{display: "flex", flexDirection: "row", listStyleType: "none", marginLeft: "60vw"}}>
                <button className={NavbarStyle.navbar_option}> Login </button>
                <button className={NavbarStyle.navbar_option}> Register </button>
                <button className={NavbarStyle.navbar_option}> Cart </button>
            </div>
        </div>
    )
}