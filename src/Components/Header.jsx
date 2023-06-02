import React from "react";
import './header.css'
// import { NavLink } from "react-router-dom";


const Header = () =>{
    return(
        <>
        <div className="header">
            <h1>FakeStore</h1>
                <ul>
                    <li>Jewerly</li>
                    <li>Men</li>
                    <li>Woman</li>
                    <li>Jacket</li>
                </ul>
        </div>
        </>
    )
}

export default Header

