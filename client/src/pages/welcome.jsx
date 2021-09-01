import React from 'react'
import { NavLink } from 'react-router-dom'
function Welcome(){

return <div className="welcome">
        <h1>Welcome to Track Day Cars</h1>
        <div className="para">
            Finding the best track day car for you can be very tough, 
            Track day Cars is here to offer informations you need it to 
            choose the perfect track day car for you!
    

        </div>
        <NavLink to="/home" className="navlink" activeClassName="activenavlink">Continue</NavLink>

</div>
}
export default Welcome