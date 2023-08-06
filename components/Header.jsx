import React from "react"
import { Link, NavLink } from "react-router-dom"

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
                </nav>
            </div>
      </header>
    )
}