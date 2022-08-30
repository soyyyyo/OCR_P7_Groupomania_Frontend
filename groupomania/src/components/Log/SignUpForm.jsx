import React, { useState } from "react";
import axios from "axios";
import Regex from "../../utils/Regex";


const SignUpForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');

    const handleLogin = (e) => {
        e.preventDefault();
        const emailError = document.querySelector(`.email-error`);
        // const passwordError = document.querySelector(`.password-error`);

        if (!Regex(email, "email")) {
            emailError.innerHTML = "veuillez vérifier votre adresse e-mail"
        } else {
            console.log("email:", email, "password:", password, "username:", username)

            axios({
                method: "post",
                url: `${process.env.REACT_APP_API_URL}api/auth/signup`,
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
                        window.location = `/`;
                    }
                })
                .catch((err) => {
                    console.log(err)
                });
        };
    }


    return (

        <form action="" onSubmit={handleLogin} id="sign-in-form">

            <label htmlFor="email">Email</label>
            <br />
            <input
                type="text"
                name="email"
                id="email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                required />
            <div className="email-error"></div>
            <br />
            <label htmlFor="password">Password</label>
            <br />
            <input
                type="password"
                name="password"
                id="password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                required />
            <div className="password-error"></div>
            <br />
            <label htmlFor="password">Nom d'utilisateur</label>
            <br />
            <input
                type="text"
                name="username"
                id="username"
                onChange={(e) => setUsername(e.target.value)}
                value={username}
                required />
            <div className="username-error"></div>
            <br />
            <input
                type="submit"
                value="S'inscrire'" />

        </form>



    )
}

export default SignUpForm;