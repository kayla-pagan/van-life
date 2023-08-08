import React from "react"
import { Link, NavLink } from "react-router-dom"
import loginIcon from "/assets/images/login-icon.svg"

export default function Header(){
    const activeStyle = {
        fontWeight: "bold",
        textDecoration: "underline",
        color: "#161616"
    }

    return (
        <header>
            <div className="header--content">
                <Link to="/">
                    <h2>#VANLIFE</h2>
                </Link>
                <nav>
                    <NavLink
                        to="/host" 
                        style={({isActive}) => isActive ? activeStyle : null}
                    >
                        Host
                    </NavLink>
                    <NavLink
                        to="/about"
                        style={({isActive}) => isActive ? activeStyle : null}
                    >
                        About
                    </NavLink>
                    <NavLink
                        to="/vans"
                        style={({isActive}) => isActive ? activeStyle : null}
                    >
                        Vans
                    </NavLink>
                    <NavLink
                        to="/login"
                        style={({isActive}) => isActive ? activeStyle : null}
                    >
                        <img src={loginIcon} />
                    </NavLink>
                </nav>
            </div>
      </header>
    )
}