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
                        <li><NavLink to='/'>All products</NavLink></li>
                        <li><NavLink to='woman'>Woman</NavLink></li>
                        <li><NavLink to='men'>Men</NavLink></li>
                    </ul>
                </nav>
            </header>
        </>
    )
}

export default Header

