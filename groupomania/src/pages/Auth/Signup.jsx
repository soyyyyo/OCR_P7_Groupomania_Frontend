import "./Signup.css"
import React from "react"
import Regex from "../../utils/Regex";
import { useEffect, useState } from "react";

const Signup = () => {

    const [loginInput, setLoginInput] = useState({ user: "", password: "" })
    /// mettre un array
    const [errorInput, setErrorInput] = useState({ title: true, text: true })


    const onChange = (e) => {
        const { name, value } = e.target;
        // setUserInput({ ...userInput, [name]: value })

        setLoginInput((loginInput) => {
            return { ...loginInput, [name]: value }
        })
    }

    const handleSubmit = event => {
        event.preventDefault();
        console.log("caca");
    }


    return (

        <section id="Signup-in">
            <form method="post" enctype="multipart/form-data" className="post__form" onSubmit={handleSubmit}>

                <div className="post__form__title">
                    <label htmlFor="user">Adresse e-mail </label>
                    <input type="text" name="user" id="user" maxLength={10} placeholder="Votre adresse e-mail" className="infobulle" aria-label="texte à afficher" value={loginInput.user} onChange={onChange} required />

                    <p id="titleErrorMsg"></p>
                </div>

                <div className="post__form__text">
                    <label htmlFor="password">Mot de passe </label>
                    <input type="text" name="password" id="password" maxLength={100} placeholder="Votre mot de passe" value={loginInput.password} onChange={onChange} required />
                    <p id="textErrorMsg"></p>
                </div>

                <div className="cart__order__form__submit">
                    <input type="submit" value="Publier" id="publish" />
                </div>
            </form>
        </section>

    )
}

export default Signup