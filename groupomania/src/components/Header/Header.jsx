import React from "react"
import './Header.css'
import LightLogo from '../../assets/logos/icon-left-font-adj.png'
import { Link } from "react-router-dom"


function Header() {
    return (
        <header>
            <img className="MainLogo" src={LightLogo} alt="Logo de Groupomania" />
            <nav>
                <Link to="/Signup">Signup</Link> |{" "}
                <Link to="/">Accueil</Link> |{" "}
            </nav>
        </header>
    )
}

export default Header