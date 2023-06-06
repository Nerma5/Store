import React from "react";
import './header.css'
import { NavLink } from "react-router-dom";

const Header = () =>{
    return(
        <>
            <header>
                <h1>Store</h1>
                <nav>
                    <ul>
                        <li><NavLink to='/'></NavLink>Home</li>
                        <li>Men</li>
                        <li>Woman</li>
                        <li></li>
                    </ul>
                </nav>
            </header>
        </>
    )
}

export default Header

