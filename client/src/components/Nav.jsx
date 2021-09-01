import React from 'react'
import { NavLink } from 'react-router-dom'
function Nav() {
    return(
    <nav className="navbar">
        <div className="logo">Track Day Cars</div>
        <div className="navright">
        
        <NavLink to="/home" className="navlink" activeClassName="activenavlink" >Home</NavLink>
        
        <NavLink to="/postcar" className="navlink" activeClassName="activenavlink" >Post your car</NavLink>
        
        <NavLink to="/tracks"  className="navlink" activeClassName="activenavlink" >Tracks</NavLink>
        </div>
    </nav>
    )
}
export default Nav