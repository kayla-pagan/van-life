import React from "react"
import { Link } from "react-router-dom"

export default function Header(){
    return (
        <header>
            <div className="header--content">
                <Link to="/">
                    <h2>#VANLIFE</h2>
                </Link>
                <nav>
                    <Link to="/about">About</Link>
                    <Link to="/vans">Vans</Link>
                </nav>
            </div>
      </header>
    )
}