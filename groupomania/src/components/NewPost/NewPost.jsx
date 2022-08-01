import React from "react"


function NewPost() {
    return (
        <div className="cart__order">
            <form method="get" className="cart__order__form">
                <div className="cart__order__form__question">
                    <label for="title">Titre: </label>
                    <input type="text" name="title" id="title" required />
                    <p id="titleErrorMsg"></p>
                </div>
                <div className="cart__order__form__question">
                    <label for="text">Message: </label>
                    <input type="text" name="text" id="text" required />
                    <p id="textErrorMsg"></p>
                </div>
                <div className="cart__order__form__submit">
                    <input type="submit" value="Publier" id="publish" />
                </div>
            </form>
        </div>
    )
}


// document query selector
// validate
// const postToBeSent = {}
// publish

// dans le back: if actualLength > maxlength, return "nooope"
// same pour regex double verif

//// ESSAI 1

const title = document.querySelector("#title")
const text = document.querySelector("#text")
const publish = document.querySelector("#publish")
// image ?

title.maxLength = 30;
text.maxLength = 500;

export default NewPost