import NewPost from "./NewPost";


const Publish = (data, image) => {
    var formData = new FormData();
    formData.append('post', JSON.stringify(data));
    formData.append('image', image);
    fetch('http://localhost:4200/api/posts', {
        method: 'POST',
        // headers: {
        //     "Accept": "application/json",
        //     "Content-Type": "application/json",

        // },
        body: formData
    })
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
}




// "Content-Type": "multipart/form-data",

//"Content-Type": "application/json",



// const Publish = (dataToSend, fileToSend) => {


//     const sendOrder = {
//         method: "POST",
//         headers: {
//             "Accept": "application/json",
//             "Content-Type": "application/json",
//         },
//         body: JSON.stringify(dataToSend),
//         file: fileToSend
//     };

//     // const sendOrder = new FormData();
//     // sendOrder.append('post', JSON.stringify(dataToSend));
//     // sendOrder.append('image', fileToSend)

//     console.log("le string", JSON.stringify(dataToSend))
//     console.log("file", fileToSend)
//     console.log("body file", sendOrder.file)

//     fetch(`http://localhost:4200/api/posts`, sendOrder)
//         .then(
//             async (response) => {
//                 try {
//                     if (response.ok) {
//                         const data = await response.json();
//                         // Réponse envoyée par l'API contenant l'orderId
//                         console.log(data);
//                         // Redirection vers la page Confirmation
//                         // window.location.href = `http://localhost:3000/`;
//                     }
//                 }
//                 catch (error) {
//                     alert("Le serveur ne répond pas. Si le problème persiste, contactez-nous");
//                 };
//             }
//         )



//     console.log("Has been sent to API : ", dataToSend)
//     console.log("Has been sent to API : ", fileToSend)
// }

export default Publish

