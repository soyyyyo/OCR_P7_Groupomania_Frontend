import NewPost from "./NewPost";

const Publish = (data, image) => {
    const token = sessionStorage.getItem('token')
    const userId = sessionStorage.getItem('userId')
    var formData = new FormData();
    formData.append('post', JSON.stringify(data));
    formData.append('image', image);

    fetch('http://localhost:4200/api/posts', {
        method: 'POST',
        // headers: {
        //     "Accept": "application/json",
        //     "Content-Type": "application/json",
        // },
        headers: {
            // 'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
        },
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
                        // window.location.href = `http://localhost:3000/`;
                    }
                }
                catch (error) {
                    alert("Le serveur ne répond pas. Si le problème persiste, contactez-nous");
                };
            }
        )
}


export default Publish

