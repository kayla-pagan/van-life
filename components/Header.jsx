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
                        style={({isActive}) => isActive ? activeStyle : null} 
                        to="/host">
                            Host
                    </NavLink>
                    <NavLink 
                        style={({isActive}) => isActive ? activeStyle : null} 
                        to="/about">
                            About
                    </NavLink>
                    <NavLink 
                        style={({isActive}) => isActive ? activeStyle : null} 
                        to="/vans">
                            Vans
                    </NavLink>
                </nav>
            </div>
      </header>
    )
}