import React from "react"
import Publish from "./Publish"
import Regex from "../../utils/Regex";
import { useEffect, useState } from "react";

function NewPost() {

    // useEffect(() => {
    //     first

    //     return () => {
    //         second
    //     }
    // }, [third])

    let titleInput = "";
    let textInput = "";
    let errorCount = []


    const handleSubmit = event => {
        event.preventDefault();
        let postInput = [titleInput, textInput];

        postInput.map((data, index) => (
            Regex(data, "text") ? (errorCount[index] = 0) : (errorCount[index] = 1)
        ));

        errorCount.reduce((previousValue, currentValue) => previousValue + currentValue, 0) === 0 ?
            (Publish(postInput))

            : (console.log("un champ regex n'est pas ok"));

        console.log(errorCount);
        console.log(postInput);


    }




    useEffect(() => {
        const toTitle = document.querySelector("#title").addEventListener("change", function (e) {
            titleInput = e.target.value
        })
        const toText = document.querySelector("#text").addEventListener("change", function (e) {
            textInput = e.target.value
        })
    })

    return (
        < div className="cart__order" >
            <form onSubmit={handleSubmit} method="get" className="cart__order__form">
                <div className="cart__order__form__question">
                    <label htmlFor="title">Titre: </label>
                    <input type="text" name="title" id="title" maxLength={10} required />
                    <p id="titleErrorMsg"></p>
                </div>
                <div className="cart__order__form__question">
                    <label htmlFor="text">Message: </label>
                    <input type="text" name="text" id="text" maxLength={100} required />
                    <p id="textErrorMsg"></p>
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