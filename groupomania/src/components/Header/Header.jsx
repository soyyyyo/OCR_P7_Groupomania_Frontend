import React from "react"
import './Header.css'
import LightLogo from '../../assets/logos/icon-left-font-adj.png'
import { Link } from "react-router-dom"
import { useContext } from "react";
import { UidContext } from "../../components/AppContext/AppContext";
import Signout from "../Log/Signout";

function Header() {
    const uid = useContext(UidContext)

    return (
        <header>
            <img className="MainLogo" src={LightLogo} alt="Logo de Groupomania" />
            {uid ? (
                <nav>
                    <Link to="/" onClick={Signout}>Déconnexion</Link> |{" "}
                    <Link to="/Profil">Profil</Link> |{" "}
                    <Link to="/">Accueil</Link>
                </nav>
            ) : (
                null)}

        </header>
    )
}

export default Header