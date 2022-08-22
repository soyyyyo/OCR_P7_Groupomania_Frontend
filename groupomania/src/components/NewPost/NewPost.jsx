import React from "react"
import Publish from "./Publish"
import Regex from "../../utils/Regex";
import { useEffect, useState } from "react";
import './NewPost.css'
import Error from "./Error"
import { useContext } from "react";
import { UidContext } from "../../components/AppContext/AppContext";


/*
props = parent vers enfant
string, objet...

state = donnée propre au composant SAUF si passé en props
*/

function NewPost() {
    const uid = sessionStorage.getItem("userId")
    const [userInput, setUserInput] = useState({ title: "", text: "", userId: uid, date: Date.now() })
    /// mettre un array
    const [errorInput, setErrorInput] = useState({ title: true, text: true })
    const [file, setFile] = useState(null)

    const onChange = (e) => {
        const { name, value } = e.target;
        // setUserInput({ ...userInput, [name]: value })

        setUserInput((userInput) => {
            return { ...userInput, [name]: value }
        })
    }

    const handlePicture = (e) => {
        // setPostPicture(URL.createObjectURL(e.target.files[0]))
        setFile(e.target.files[0]);
        console.log("Photo OK")
    }


    // itére userInput avec chaque clé de keysUserInput, pour définir si des erreurs de Regex existent.
    const keysUserInput = Object.keys(userInput);
    const checkRegex = async () => {
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
        return (
            console.log("Check Regex is OK")
        )
    }


    // force la mise à jour du useState de l'inuput utilisateur
    useEffect(() => {
        checkRegex()
    }, [userInput])



    const handleSubmit = event => {
        event.preventDefault();
        // const valuesUserInput = Object.values(userInput);
        let promise = new Promise((resolve, reject) => {
            checkRegex()
                .then((res) => {
                    if (errorInput.text === false &&
                        errorInput.title === false &&
                        file != null) {
                        Publish(userInput, file)
                    } else {
                        console.log("Can't publish with Regex error !")
                    }
                    resolve(res);
                    // errorInput.text === false && errorInput.title === false ? (Publish(userInput, file)) : (console.log("Can't publish with Regex error !"))
                    // resolve(res);
                })
                .catch((err) => {
                    reject(err);
                });
        });

        // errorInput === [0, 0] ?
        //     (Publish(titleInput, textInput))
        //     : (console.log("un champ regex n'est pas ok"));

        console.log("User Input", userInput)
        console.log("Error Input", errorInput)
    }

    // method was GET (all ok), now POST (??), enctype necessary ?


    return (
        <section id="PostContainer">
            <form method="post" encType="multipart/form-data" className="post__form" onSubmit={handleSubmit}>
                <div className="post__form__title">
                    <label htmlFor="title">Titre: </label>
                    <input type="text-area" name="title" id="title" maxLength={50} placeholder="Le titre de votre publication" className="infobulle" aria-label="texte à afficher" value={userInput.title} onChange={onChange} required />

                    <p id="titleErrorMsg"></p>
                    {/* <Error propsTitleInput={titleInput} /> */}
                </div>
                <div className="post__form__text">
                    <label htmlFor="text">Message: </label>
                    <input type="text-area" rows="5" cols="33" name="text" id="text" maxLength={1000} placeholder="Partagez votre expérience" value={userInput.text} onChange={onChange} required />
                    <p id="textErrorMsg"></p>
                    {/* <Error propsTextInput={textInput} /> */}
                </div>

                <div>
                    <label htmlFor="profile_pic">Sélectionnez le fichier à utiliser</label>
                    <input type="file" id="file-upload" name="file"
                        accept=".jpg, .jpeg, .png" onChange={(e) => handlePicture(e)} />
                </div>

                <div className="cart__order__form__submit">
                    <input type="submit" value="Publier" id="publish" />
                </div>
            </form>

        </section>
    )
}



export default NewPost