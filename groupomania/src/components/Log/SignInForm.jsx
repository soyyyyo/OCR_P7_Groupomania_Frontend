import React, { useState } from "react";
import axios from "axios";

const SignInForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = (e) => {
        e.preventDefault();
        const emailError = document.querySelector(`.email-error`);
        // const passwordError = document.querySelector(`.password-error`);

        console.log("email:", email, "password:", password)

        axios({
            method: "post",
            url: `http://localhost:4200/api/auth/login`,
            withCredentials: false,
            data: {
                email: email,
                password: password,
            }
        })
            .then((res) => {
                if (res.data.error) {
                    console.log(res);
                    emailError.innerHTML = res.data.error;
                    // passwordError.innerHTML = res.data.error.email;
                    // need de creer des erreurs différentes via errors.utils.js et auth.controller.js du projet mern
                } else {
                    console.log("connexion page valide");
                    console.log(res);
                    sessionStorage.setItem('userId', res.data.userId);
                    sessionStorage.setItem('token', res.data.token);
                    sessionStorage.setItem('username', res.data.username);
                    sessionStorage.setItem('isAdmin', res.data.isAdmin);
                    window.location = `/`;
                    // history.push("/"); // mais ne veut pas changer uid

                }
            })
            .catch((err) => {
                console.log(err)
            });

    };



    return (

        <form action="" onSubmit={handleLogin} id="sign-up-form" className="log-form">

            <label htmlFor="email">Email</label>
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
            <input
                className="form-input submit-button"
                type="submit"
                value="Se connecter" />

        </form>



    )
}

export default SignInForm;