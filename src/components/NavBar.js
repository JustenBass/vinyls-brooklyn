import React from "react";
import {NavLink} from "react-router-dom";

function NavBar(){

    const linkStyling = {
        display: "inline-block",
        width: "300px",
        padding: "40px",
        margin:"0 6px 6px",
        background: "black",
        textDecoration: "none",
        color: "white",
    }

    return(
        <div>
            <NavLink
            to="/"
            exact
            style={linkStyling}
            activeStyle={{
                background: 'pink'
            }}
            >
                About Brooklyn Vinyls
            </NavLink>

            <NavLink
            to="/vinyls"
            exact
            style={linkStyling}
            activeStyle={{
                background: 'pink'
            }}
            >
                New Vinyls For Sale
            </NavLink>

            <NavLink
            to="/add-vinyl"
            exact
            style={linkStyling}
            activeStyle={{
                background: 'pink'
            }}
            >
                Sell And Buy Used Vinyls
            </NavLink>
        </div>
    )
}

export default NavBar