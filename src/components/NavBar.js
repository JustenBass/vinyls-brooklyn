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
                About
            </NavLink>

            <NavLink
            to="/vinyls"
            exact
            style={linkStyling}
            activeStyle={{
                background: 'pink'
            }}
            >
                Vinyls For Sale
            </NavLink>

            <NavLink
            to="/comments"
            exact
            style={linkStyling}
            activeStyle={{
                background: 'pink'
            }}
            >
                Sell Your Vinyls
            </NavLink>
        </div>
    )
}

export default NavBar