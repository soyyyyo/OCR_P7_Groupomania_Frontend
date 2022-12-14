
const UpdatePost = (postId, data, image) => {
    console.log("is post id:", postId, "data", data, "image:", image)


    const token = sessionStorage.getItem('token')
    var formData = new FormData();
    formData.append('post', JSON.stringify(data)); // JSON.stringify
    formData.append('userId', "userId"); /// useless ????
    formData.append('image', image);

    fetch(`http://localhost:4200/api/posts/${postId}`, {
        method: 'PUT',
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
                        // Redirection vers la page d'acceuil pour recharger les data
                        // window.location.href = `http://localhost:3000/`;
                    }
                }
                catch (error) {
                    alert("Le serveur ne répond pas. Si le problème persiste, contactez-nous");
                };
            }
        )


}

export default UpdatePost