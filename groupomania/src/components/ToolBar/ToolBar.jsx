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
                    <p>Veuillez vous connecter.</p>
                </Fragment>
            )}

        </section>
    )
}

export default ToolBar