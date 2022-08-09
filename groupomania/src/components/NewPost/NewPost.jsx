import React from "react"
import Publish from "./Publish"
import Regex from "../../utils/Regex";
import { useEffect, useState } from "react";
import './NewPost.css'
import Error from "./Error"

/*
props = parent vers enfant
string, objet...

state = donnée propre au composant SAUF si passé en props
*/


function NewPost() {
    const [userInput, setUserInput] = useState({ title: "", text: "" })
    const [errorInput, setErrorInput] = useState({ title: false, text: false })

    const onChange = (e) => {
        const { name, value } = e.target;
        setUserInput({ ...userInput, [name]: value })
        console.log("L'input à changé !")
    }


    const handleSubmit = event => {
        event.preventDefault();

        const keysUserInput = Object.keys(userInput);
        const valuesUserInput = Object.values(userInput);


        // itére userInput avec chaque clé de keysUserInput, pour définir si des erreurs de Regex existent.
        keysUserInput.forEach(element => {
            if (Regex(userInput[element], "text")) {
                setErrorInput(prevState => ({
                    ...prevState,
                    [element]: false
                }))
            } else {
                setErrorInput(prevState => ({
                    ...prevState,
                    [element]: true
                }))
            }
            console.log("Error Input", errorInput)
        });

        // const leTrucCool = {
        //     title: "titreeuhh",
        //     text: "texteuuh"
        // }

        errorInput.text === false && errorInput.title === false ? (console.log("patati")) : (console.log("Can't publish with Regex error !"))
        // errorInput === [0, 0] ?
        //     (Publish(titleInput, textInput))
        //     : (console.log("un champ regex n'est pas ok"));

        console.log("User Input", userInput)
        console.log("Error Input", errorInput)
    }


    return (
        < div className="cart__order" >
            <form method="get" className="cart__order__form" onSubmit={handleSubmit}>
                <div className="cart__order__form__question">
                    <label htmlFor="title">Titre: </label>
                    <input type="text" name="title" id="title" maxLength={10} className="infobulle" aria-label="texte à afficher" value={userInput.title} onChange={onChange} required />
                    <p id="titleErrorMsg"></p>
                    {/* <Error propsTitleInput={titleInput} /> */}
                </div>
                <div className="cart__order__form__question">
                    <label htmlFor="text">Message: </label>
                    <input type="text" name="text" id="text" maxLength={100} value={userInput.text} onChange={onChange} required />
                    <p id="textErrorMsg"></p>
                    {/* <Error propsTextInput={textInput} /> */}
                </div>
                <div className="cart__order__form__submit">
                    <input type="submit" value="Publier" id="publish" />
                </div>
            </form>
        </div >
    )
}



export default NewPost