import React, { Fragment, useState } from "react";
import axios from "axios";
import Regex from "../../utils/Regex";


const SignUpForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');

    const [isSignedUp, setIsSignedUp] = useState(false)

    const handleLogin = (e) => {
        e.preventDefault();
        const emailError = document.querySelector(`.email-error`);
        const passwordError = document.querySelector(`.password-error`);

        emailError.innerHTML = null
        passwordError.innerHTML = null


        if (!Regex(email, "email")) {
            emailError.innerHTML = "Veuillez rentrer une adresse e-mail valide"
        } else if (password.length < 8) {
            passwordError.innerHTML = "Le mot de pass doit faire au minimum 8 caractères"
        } else {
            console.log("email:", email, "password:", password, "username:", username)

            axios({
                method: "post",
                url: `http://localhost:4200/api/auth/signup`,
                withCredentials: false,
                data: {
                    email: email,
                    password: password,
                    username: username
                }
            })
                .then((res) => {
                    if (res.data.error) {
                        console.log(res);
                        emailError.innerHTML = res.data.error;
                        // passwordError.innerHTML = res.data.error.email;
                        // need de creer des erreurs différentes via errors.utils.js et auth.controller.js du projet mern
                    } else {
                        // window.location = `/`;
                        setIsSignedUp(true);
                        console.log(res.data);

                    }
                })
                .catch((err) => {
                    // si la res contient un messsage, on l'affiche dans la page
                    if (err.response.data.message) {
                        // double check via le back des regex en cas d'altération du front par l'utilisateur
                        const error = err.response.data.message
                        error.includes("email") && (emailError.innerHTML = err.response.data.message)
                        error.includes("password") && (passwordError.innerHTML = err.response.data.message)
                        // unique validator prévoit son message d'erreur à un autre endroit, défini ci-dessus
                    } else if (err.response.data.error.message) {
                        emailError.innerHTML = "Cette adresse email est déja utilisée !"
                    } else {
                        console.log(err)
                    }
                });
        };
    }


    return (
        <Fragment>

            {isSignedUp === false ? (

                <form action="" onSubmit={handleLogin} id="sign-in-form" className="log-form">

                    <label htmlFor="email">Email</label>
                    <br />
                    <input
                        className="form-input"
                        type="text"
                        name="email"
                        id="email"
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                        required />
                    <br />
                    <div className="email-error"></div>
                    <br />
                    <label htmlFor="password">Password</label>
                    <br />
                    <input
                        className="form-input"
                        type="password"
                        name="password"
                        id="password"
                        onChange={(e) => setPassword(e.target.value)}
                        value={password}
                        required />
                    <br />
                    <div className="password-error"></div>
                    <br />
                    <label htmlFor="password">Nom d'utilisateur</label>
                    <br />
                    <input
                        className="form-input"
                        type="text"
                        name="username"
                        id="username"
                        onChange={(e) => setUsername(e.target.value)}
                        value={username}
                        required />
                    <br />
                    <div className="username-error"></div>
                    <br />
                    <input
                        className="form-input submit-button"
                        type="submit"
                        value="S'inscrire" />

                </form>

            ) : (

                <div className="signed-up">
                    <p>Votre compte a bien été crée !</p>
                    <p>Vous pouvez désormais vous connecter.</p>
                </div>

            )}


        </Fragment>
    )
}

export default SignUpForm;