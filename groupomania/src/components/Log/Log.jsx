import React, { useState } from "react";
import SignUpForm from "./SignUpForm";
import SignInForm from "./SignInForm";

const Log = (props) => {
    const [signUpModal, setSignUpModal] = useState(props.signup);
    const [signInModal, setSignInModal] = useState(props.signin);

    // défini l'affichage sign in ou up
    const handleModals = (e) => {
        if (e.target.id === "register") {
            setSignInModal(false);
            setSignUpModal(true);
        } else if (e.target.id === "login") {
            setSignInModal(true);
            setSignUpModal(false);
        }
    }

    //classname button active pour mettre en surbrillance le profil actif, a faire en css 

    return (
        <div className="connection-form">
            <div className="form-container">
                <ul>
                    <li onClick={handleModals} id="register" className={signUpModal ? "active-btn" : null}>S'inscrire</li>
                    <li onClick={handleModals} id="login" className={signUpModal ? "active-btn" : null}>Se connecter</li>
                </ul>
                {signUpModal && <SignUpForm />}
                {signInModal && <SignInForm />}
            </div>
        </div >
    );
};

export default Log;