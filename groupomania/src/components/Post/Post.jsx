// import PropTypes from 'prop-types'
import DefaultPicture from '../../assets/profile.png'
import { useContext } from "react";
import { UidContext } from "../../components/AppContext/AppContext";
import axios from "axios";
import './Post.css'
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import { useState } from 'react';
import UpdatePost from './Update';
import dateToFormat from '../../utils/DateToFormat';




function Post({ title, text, likes, dislikes, imageUrl, userId, username, postId, creationDate, modificationDate, usersLiked, usersDisliked, }) {
    const uid = useContext(UidContext)
    let likeValueToSend = 0;
    let isLiked = false
    let isDisliked = false
    const postIdHtml = "post" + postId
    const [isUpdate, setIsUpdate] = useState(false)
    const [userInputUpdate, setUserInputUpdate] = useState({ title: title, text: text, userId: uid, modificationDate: Date.now() })
    const [file, setFile] = useState(null)

    // uid === "62fd100b4a0e8ffcebb652d1"



    const allAccess = () => {
        if (
            sessionStorage.getItem('isAdmin') === "true" || uid === userId
        ) {
            return true
        } else {
            return false ///
        }
    }

    const handleDelete = () => {
        const token = sessionStorage.getItem('token')
        const userId = sessionStorage.getItem('userId')
        console.log("post id is:", postId)
        axios({
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
            },
            method: "delete",
            url: `${process.env.REACT_APP_API_URL}api/posts/${postId}`,
            withCredentials: false,
            data: {
                userId: userId
            }
        })
            .then((res) => {
                if (res.data.error) {
                    console.log(res);
                } else {
                    window.location.href = `http://localhost:3000/`;
                    console.log(res.data);
                }
            })
            .catch((err) => {
                console.log(err)
            });
    }


    // toggle du mode édition de post
    // si passé dans le HTML: génére une infinite loop (à gérer)
    const handleEdit = () => {
        setIsUpdate(!isUpdate)
    }




    const handleLike = (likeValue) => {
        likeValueUpdater(likeValue)

        const token = sessionStorage.getItem('token')
        const userId = sessionStorage.getItem('userId')

        axios({
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
            },
            method: "post",
            url: `${process.env.REACT_APP_API_URL}api/posts/${postId}/like`,
            withCredentials: false,
            data: {
                userId: userId,
                like: likeValueToSend
            }
        })
            .then((res) => {
                if (res.data.error) {
                    console.log(res);
                } else {
                    // window.location = `/`;
                    console.log(res.data);
                }
            })
            .catch((err) => {
                console.log(err)
            });
    }


    // vérifie si l'utilisateur à déja like/dislike le post (sous forme boolean)
    // décide alors de la valeur (-1, 0, 1) à envoyer au back
    // met à jour le front concernant le CSS, le like/dislike array
    const likeValueUpdater = (likeValue) => {
        // Chemin d'accés des boutons like/dislike dans le HTML
        let postIdHtmlId = "post" + postId;
        const likeDisplay = document.getElementById(postIdHtmlId).querySelector(".like-btn")
        const dislikeDisplay = document.getElementById(postIdHtmlId).querySelector(".dislike-btn")
        likeValueToSend = 0;
        // si le post est liké, on retire le like. (retour au neutre)
        if (isLiked === true) {
            isLiked = false;
            likeDisplay.innerHTML = `${--likes}`
            likeDisplay.classList.remove("active-like-button")
        } else if (isDisliked === true) {
            // si le post est disliké, on retire le dislike (retour au neutre)
            isDisliked = false
            dislikeDisplay.innerHTML = `${--dislikes}`
            dislikeDisplay.classList.remove("active-dislike-button")
        } else {
            likeValueToSend = parseInt(likeValue)
            if (likeValueToSend === 1) {
                // si la valeur est de 1, on rajoute un like
                isLiked = true;
                likeDisplay.innerHTML = `${++likes}`
                likeDisplay.classList.add("active-like-button")
            } else {
                // si la valeur est de -1, on rajoute un dislike
                isDisliked = true;
                dislikeDisplay.innerHTML = `${++dislikes}`
                dislikeDisplay.classList.add("active-dislike-button")
            }
        }
        console.log("value sent: ", likeValueToSend, "isLiked: ", isLiked, "isDisliked: ", isDisliked)
    }



    // défini de manière boolean si l'utilisateur a déja like/dislike ce post auparavant, et attribue le CSS approprié (via le return html)
    const isLikedFromBack = () => {
        if (usersLiked.includes(uid)) {
            isLiked = true
            // likeDisplay.classList.add("like-active-button");
        } else if (usersDisliked.includes(uid)) {
            isDisliked = true
            // dislikeDisplay.classList.add("dislike-active-button");
        } else {
            isLiked = false;
            isDisliked = false;
        }
    }
    isLikedFromBack()



    // variables contenant les nouvelles données du post à modifier
    const updateInput = (e) => {
        const { name, value } = e.target;
        setUserInputUpdate((userInput) => {
            return { ...userInput, [name]: value }
        })
        console.log("nouvel input is", userInputUpdate)
    }



    // gère la soumission du formulaire de modification d'un post
    // le faire via la HTML du return opérait un envoi api à chaque frappe...
    const transferToApi = () => {
        UpdatePost(postId, userInputUpdate, file)
    }



    // stock l'image avant le nouvel envoi API, si changement d'image.
    const handlePicture = (e) => {
        setFile(e.target.files[0]);
        console.log("Photo OK")
    }


    return (
        <article className="Post" id={postIdHtml}>

            <div className="Post__Side-Pannel">
                <img className="Post__Profile-Pic" src={DefaultPicture} alt="" />
                <div className="Likes Post__Config">
                    <button
                        value="1"
                        onClick={e => handleLike(e.target.value)}
                        className={isLiked ? "fa-solid fa-thumbs-up like-btn active-like-button" : "fa-solid fa-thumbs-up like-btn"}
                    // className="fa-solid fa-thumbs-up like-btn"
                    >{likes}</button>
                    <button value="-1"
                        onClick={e => handleLike(e.target.value)}
                        className={isDisliked ? "fa-solid fa-thumbs-down dislike-btn active-dislike-button" : "fa-solid fa-thumbs-down dislike-btn"}
                    >{dislikes}</button>
                </div>
                {
                    allAccess() ? (
                        <div className="Post__Config">
                            <Popup trigger=
                                {<button className='Post__Delete fa-solid fa-trash'></button>}
                                position="right center">
                                <div>
                                    <p>Etes vous sur de vouloir supprimer ce post ?</p>
                                    <p>Cette action est irreversible.</p>
                                    <button className="continueDelete" onClick={handleDelete}>OUI</button>
                                    <button className="cancelDelete">NON</button>
                                </div>
                            </Popup>
                            <button className='Post__Edit fa-solid fa-wrench' onClick={handleEdit}></button>
                        </div>
                    ) : (
                        null
                    )
                }
            </div>

            <div className="Post__Main-Pannel">
                <div className="Post__Header">
                    <p>{username}</p>
                    <div className="Post__Dates">
                        <p>posté le {dateToFormat(creationDate)}</p>
                        {modificationDate != null ? (
                            <p>dernière modification le {dateToFormat(modificationDate)}</p>) : (null)}
                    </div>
                </div>




                {isUpdate === true ? (
                    <div className="Post__Main">
                        <input
                            className="title-input"
                            type="text"
                            name="title"
                            defaultValue={title}
                            maxLength={70}
                            onChange={updateInput}
                        />
                        <br />
                        <textarea
                            defaultValue={text}
                            name="text"
                            maxLength={1000}
                            onChange={updateInput}
                            className="Fit-Hundred text-input"
                        />
                        <button className="publish-button" onClick={transferToApi}>Valider les modifications</button>
                    </div>

                ) : (
                    <div className="Post__Main">
                        <h2>{title}</h2>
                        <p style={{ whiteSpace: "pre-wrap" }}>{text}</p>
                    </div>
                )}


                {isUpdate === true ? (
                    <div className="Post__Image-Edit">
                        <div>
                            <label htmlFor="post_pic">Souhaitez vous modifier l'image ?</label>
                            <br></br>
                            <input type="file" id="file-upload" name="file"
                                accept=".jpg, .jpeg, .png" onChange={(e) => handlePicture(e)} />
                        </div>

                        <div className="Post__Image-Container Flex__Column">
                            <p>Image actuelle:</p>
                            <img className="Post__Picture__Small" src={imageUrl} alt="the post" />
                        </div>

                    </div>
                ) : (
                    imageUrl === null ? (null) : (
                        <div className="Post__Image-Container">
                            <img className="Post__Picture" src={imageUrl} alt="the post" />
                        </div>
                    )
                )}

            </div>
        </article>
    )
}

// Post.propTypes = {
//     label: PropTypes.string.isRequired,
//     title: PropTypes.string.isRequired,
//     picture: PropTypes.string.isRequired,
// }

// Post.defaultProps = {
//     label: '',
//     title: '',
//     picture: DefaultPicture,
// }

export default Post

