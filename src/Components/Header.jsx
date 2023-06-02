import React from "react";
import './header.css'
// import { NavLink } from "react-router-dom";

// import axios from "axios";


const Header = () =>{
    return(
        <>
        <div className="header">
            <h1>FakeStore</h1>
                <ul>
                    <li>All products</li>
                    <li>Jewerly</li>
                    <li>Woman</li>
                    <li>Man</li>
                </ul>
        </div>
        </>
    )
}

export default Header

