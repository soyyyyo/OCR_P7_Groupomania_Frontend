import React, { Fragment } from "react"
import './ToolBar.css'
import { useContext } from "react";
import { UidContext } from "../../components/AppContext/AppContext";


function ToolBar() {
    const uid = useContext(UidContext)
    const username = sessionStorage.getItem('username')

    return (
        <section id="ToolBar">

            {uid ? (
                <Fragment>
                    <p>Vous êtes connecté en tant que:</p>
                    <h4>{username}</h4>
                </Fragment>
            ) : (
                <Fragment>
                    <p>Bienvenu sur votre réseau d'entreprise.</p>
                    <br />
                    <p>Cette plateforme est uniquement à destination des emloyé(e)s.</p>
                    <br />
                    <p>Veuillez vous connecter afin d'accéder aux contenus.</p>
                </Fragment>
            )}

        </section>
    )
}

export default ToolBar