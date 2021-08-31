import React from 'react'
import { NavLink } from 'react-router-dom'
function Nav() {
    return(
    <nav className="navbar">
        <div className="logo">Track Day Cars</div>
        <div className="navright">
        <NavLink to="/" >Home</NavLink>
        <div className="links"> </div>
        <NavLink to="/postcar" >Post your car</NavLink>


        </div>
    </nav>
    )
}
export default Nav