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
    const [titleInput, setTitleInput] = useState("")
    const [textInput, setTextInput] = useState("")
    const [errorInput, setErrorInput] = useState({ title: "truc", text: "chose" })


    const handleSubmit = event => {
        event.preventDefault();
        console.log(titleInput);
        console.log(textInput);
        console.log("error input :", errorInput)

        if (Regex(titleInput, "text")) {
            console.log("Regex TITLE OK")
            setErrorInput(prevState => ({
                ...prevState,
                title: "bite"
            }))
        } else {
            console.log("Regex TITLE NOT-OK")
        }

        console.log("error input :", errorInput)

        // Regex(titleInput, "text") ? setErrorInput("hihihi") : (console.log("Regex not valid"))
        // console.log("error input : ", errorInput);


        errorInput === [0, 0] ?
            (Publish(titleInput, textInput))
            : (console.log("un champ regex n'est pas ok"));
    }

    const updateTitleInput = (event) => {
        setTitleInput(event.target.value)
    }

    const updateTextInput = (event) => {
        setTextInput(event.target.value)
    }


    return (
        < div className="cart__order" >
            <form method="get" className="cart__order__form" onSubmit={handleSubmit}>
                <div className="cart__order__form__question">
                    <label htmlFor="title">Titre: </label>
                    <input type="text" name="title" id="title" maxLength={10} className="infobulle" aria-label="texte à afficher" title="je suis un titre" value={titleInput} onChange={updateTitleInput} required />
                    <p id="titleErrorMsg"></p>
                    {/* <Error propsTitleInput={titleInput} /> */}
                </div>
                <div className="cart__order__form__question">
                    <label htmlFor="text">Message: </label>
                    <input type="text" name="text" id="text" maxLength={100} title="je suis un titre" value={textInput} onChange={updateTextInput} required />
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


// document query selector
// validate
// const postToBeSent = {}
// publish

// dans le back: if actualLength > maxlength, return "nooope"
// same pour regex double verif


export default NewPost