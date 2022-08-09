import NewPost from "./NewPost";

const Publish = (dataToSend) => {

    const sendOrder = {
        method: "POST",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json",
        },
        body: JSON.stringify(dataToSend)
    };


    console.log("le string", JSON.stringify(dataToSend))

    fetch(`http://localhost:4200/api/posts`, sendOrder)
        .then(
            async (response) => {
                try {
                    if (response.ok) {
                        const data = await response.json();
                        // Réponse envoyée par l'API contenant l'orderId
                        console.log(data);
                        // Redirection vers la page Confirmation
                        window.location.href = `http://localhost:3000/`;
                    }
                }
                catch (error) {
                    alert("Le serveur ne répond pas. Si le problème persiste, contactez-nous");
                };
            }
        )



    console.log("Has been sent to API : ", dataToSend)


}

export default Publish

