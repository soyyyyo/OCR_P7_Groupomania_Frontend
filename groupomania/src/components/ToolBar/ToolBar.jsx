import React from "react"
import './ToolBar.css'


function ToolBar() {
    const username = sessionStorage.getItem('username')

    return (
        <section id="ToolBar">
            <p>Vous êtes connecté en tant que:</p>
            <h4>{username}</h4>
        </section>
    )
}

export default ToolBar