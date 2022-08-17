import React from "react";
import { useState } from "react";




const Auth = (send, userToDeclare, tokenToDeclare) => {
    const [userId, setUserId] = useState('');
    const [token, setToken] = useState('');

    if (send === true && userId != '' && token != '') {
        const headers = [userId, token]
        console.log("1headers:", headers)
        return (
            headers,
            console.log("2headers", headers)
        )
    } else if (send === false) {
        setUserId(userToDeclare);
        setToken(tokenToDeclare);
        console.log("1 users and token:", userId, token)
        return (
            console.log("2 users and token:", userId, token)
        )
    }

}

export default Auth;