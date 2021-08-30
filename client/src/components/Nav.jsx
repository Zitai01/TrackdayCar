import React from 'react'
import { NavLink } from 'react-router-dom'
function Nav() {
    return(
    <nav className="navbar">
        <div className="logo">Track Day Cars</div>
        <div className="navright">
            <NavLink to="/" ><div className="links">Home</div></NavLink>


        </div>
    </nav>
    )
}
export default Nav