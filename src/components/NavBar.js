import React from "react";
import {NavLink} from "react-router-dom";

function NavBar(){
    return(
        <div>
            <NavLink
            to="/"
            exact
            >
                About
            </NavLink>

            <NavLink
            to="/vinyls"
            exact
            >
                Vinyls
            </NavLink>

            <NavLink
            to="/comments"
            exact
            >
                Comments
            </NavLink>
        </div>
    )
}

export default NavBar