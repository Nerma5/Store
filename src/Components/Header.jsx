import React from "react";
import './header.css'
import { NavLink } from "react-router-dom";

// const Header = () =>{
//     return(
//         <>
//             <header>
//                 <h1>Store</h1>
//                 <nav>
//                     <ul>
//                         <li><NavLink to='/'>All products</NavLink></li>
//                         <li><NavLink to='woman'>Woman</NavLink></li>
//                         <li><NavLink to='men'>Men</NavLink></li>
//                     </ul>
//                 </nav>
//             </header>
//         </>
//     )
// }

// export default Header

const Header = () =>{
    return(
        <>
        <header>
            <h1>FakeStore</h1>
            <nav>
                <ul>
                    <li><NavLink to='/' style={({ isActive, isPending }) => {
                    return {
                            fontWeight: isActive ? "bold" : "",
                            color: isPending ? "red" : "black",
                                                            } } }>Home</NavLink></li>
                    <li><NavLink to= '/men' style={({ isActive, isPending }) => {
                    return {
                            fontWeight: isActive ? "bold" : "",
                            color: isPending ? "red" : "black",
                                                            } } }>Men</NavLink></li>
                    <li><NavLink to='/woman' style={({ isActive, isPending }) => {
                    return {
                            fontWeight: isActive ? "bold" : "",
                            color: isPending ? "red" : "black",
                                                            } } }>Woman</NavLink></li>
                    <li><NavLink to='/jewerly' style={({ isActive, isPending }) => {
                    return {
                            fontWeight: isActive ? "bold" : "",
                            color: isPending ? "red" : "black",
                                                            } } }>Jewerly</NavLink></li>
                </ul>
                </nav>
                </header>
        </>
    )
}

export default Header

