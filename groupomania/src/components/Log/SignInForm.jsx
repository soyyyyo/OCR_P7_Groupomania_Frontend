import React, { useState } from "react";
import axios from "axios";
// import Auth from "./Headers"

const SignInForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    // const [userId, setUserId] = useState('');
    // const [token, setToken] = useState('');



    const handleLogin = (e) => {
        e.preventDefault();
        const emailError = document.querySelector(`.email-error`);
        // const passwordError = document.querySelector(`.password-error`);

        console.log("email:", email, "password:", password)

        axios({
            method: "post",
            url: `${process.env.REACT_APP_API_URL}api/auth/login`,
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
                    // window.location = `/`;
                    console.log("connexion page valide");
                    console.log(res);

                    console.log("token received:", res.data.token);

                    // <Headers tokenIs={res.data.token} />
                    // console.log(Headers());

                    // setUserId(res.data.userId);
                    // setToken(res.data.token);

                    // transmet le userId et token au local storage
                    sessionStorage.setItem('userId', res.data.userId);
                    sessionStorage.setItem('token', res.data.token);
                }
            })
            .catch((err) => {
                console.log(err)
            });

    };



    return (

        <form action="" onSubmit={handleLogin} id="sign-up-form">

            <label htmlFor="email">Email</label>
            <br />
            <input
                type="text"
                name="email"
                id="email"
                onChange={(e) => setEmail(e.target.value)}
                value={email} />
            <div className="email-error"></div>
            <br />
            <label htmlFor="password">Password</label>
            <br />
            <input
                type="password"
                name="password"
                id="password"
                onChange={(e) => setPassword(e.target.value)}
                value={password} />
            <div className="password-error"></div>
            <br />
            <input
                type="submit"
                value="Se connecter" />

        </form>



    )
}

export default SignInForm;