import React from "react"
import './Header.css'
import LightLogo from '../../assets/logos/icon-left-font-adj.png'


function Header() {
    return (
        <header>
            <img className="MainLogo" src={LightLogo} alt="Logo de Groupomania" />
            <nav>
                <a href="http://localhost:3000/">Se connecter</a>
                <a href="http://localhost:3000/">Les posts</a>
            </nav>
        </header>
    )
}

export default Header