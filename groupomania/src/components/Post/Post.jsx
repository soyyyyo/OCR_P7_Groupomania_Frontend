// import PropTypes from 'prop-types'
import DefaultPicture from '../../assets/profile.png'
import { useContext } from "react";
import { UidContext } from "../../components/AppContext/AppContext";
import axios from "axios";
import { useEffect } from 'react';
import { useRef } from 'react';
import './Post.css'
import { Link } from 'react-router-dom';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import { useHistory } from "react-router-dom"
import { useState } from 'react';
import UpdatePost from './Update';




function Post({ title, text, likes, dislikes, imageUrl, userId, postId, creationDate, modificationDate, usersLiked, usersDisliked, }) {
    const uid = useContext(UidContext)
    let likeValueToSend = 0;
    let isLiked = false
    let isDisliked = false
    const postIdHtml = "post" + postId
    let history = useHistory();
    const [isUpdate, setIsUpdate] = useState(false)
    const [userInputUpdate, setUserInputUpdate] = useState({ title: title, text: text, userId: uid, modificationDate: Date.now() })
    const [file, setFile] = useState(null)




    const allAccess = () => {
        if (uid === userId ||
            uid === "62fd100b4a0e8ffcebb652d1") { // cacher cette variable quelque part
            return true
        } else {
            return false ///
        }
    }

    const dateToFormat = (date) => {
        return (
            new Intl.DateTimeFormat('fr-FR', {
                year: 'numeric',
                month: '2-digit',
                day: '2-digit',
                hour: '2-digit',
                minute: '2-digit',
                second: '2-digit'
            }).format(date)
        )
    }

    // const goToNextLign = (string) => {
    //     return string.replace(/(?:\r\n|\r|\n)/g, '<br></br>');
    // }

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
                    // window.location = `/`;
                    console.log(res.data);
                }
            })
            .catch((err) => {
                console.log(err)
            });
    }

    const handleEdit = () => {
        // history.push(`/EditPost/?id=${postId}&type=edit`)
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
        likeValueToSend = 0;

        let postIdHtmlId = "post" + postId;
        const likeDisplay = document.getElementById(postIdHtmlId).querySelector(".like-btn")
        const dislikeDisplay = document.getElementById(postIdHtmlId).querySelector(".dislike-btn")

        if (isLiked === true) {
            // css rule to lighten up
            isLiked = false;
            likeDisplay.innerHTML = `${--likes}`
        } else if (isDisliked === true) {
            // css rule to lighten up
            isDisliked = false
            dislikeDisplay.innerHTML = `${--dislikes}`
        } else {
            // css rules to light nothing
            likeValueToSend = parseInt(likeValue)
            if (likeValueToSend === 1) {
                isLiked = true;
                likeDisplay.innerHTML = `${++likes}`
            } else {
                isDisliked = true;
                dislikeDisplay.innerHTML = `${++dislikes}`
            }
        }
        console.log("value sent: ", likeValueToSend, "isLiked: ", isLiked, "isDisliked: ", isDisliked)
    }

    // défini de manière boolean si l'utilisateur a déja like/dislike ce post auparavant
    const isLikedFromBack = () => {
        if (usersLiked.includes(uid)) {
            isLiked = true
            // css style
        } else if (usersDisliked.includes(uid)) {
            isDisliked = true
            // css style
        } else {
            isLiked = false;
            isDisliked = false;
        }
    }
    isLikedFromBack()


    const updateInput = (e) => {
        const { name, value } = e.target;
        // setUserInput({ ...userInput, [name]: value })

        setUserInputUpdate((userInput) => {
            return { ...userInput, [name]: value }
        })
        console.log("nouvel input is", userInputUpdate)
    }

    const transferToApi = () => {
        // <UpdatePost
        // postId={postId}
        // data={userInputUpdate} />
        UpdatePost(postId, userInputUpdate, file)
    }



    const handlePicture = (e) => {
        // setPostPicture(URL.createObjectURL(e.target.files[0]))
        setFile(e.target.files[0]);
        console.log("Photo OK")
    }


    // useEffect(() => {
    //     alreadyLiked()
    // }, [])


    /*
    CHARGEMENT PAGE
    already liked ? > affichage css
    
    */

    return (
        <article className="Post" id={postIdHtml}>

            <div className="Post__Side-Pannel">
                <img className="Post__Profile-Pic" src={DefaultPicture} alt="" />
                <div className="Likes Post__Config">
                    <button value="1" onClick={e => handleLike(e.target.value)} className="fa-solid fa-thumbs-up like-btn">{likes}</button>
                    <button value="-1" onClick={e => handleLike(e.target.value)} className="fa-solid fa-thumbs-down dislike-btn">{dislikes}</button>
                </div>
                {
                    allAccess() ? (
                        <div className="Post__Config">


                            <Popup trigger={<button className='Post__Delete fa-solid fa-trash'></button>
                            } position="right center">
                                <div><p>Etes vous sur de vouloir supprimer ce post ?</p>
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
                    <p>Diego LeBeau</p>
                    <div className="Post__Dates">
                        <p>posté le {dateToFormat(creationDate)}</p>
                        {modificationDate != null ? (
                            <p>dernière modification le {dateToFormat(modificationDate)}</p>) : (null)}
                    </div>
                </div>




                {isUpdate === true ? (
                    <div className="Post__Main">
                        <input
                            type="text"
                            name="title"
                            defaultValue={title}
                            maxLength={50}
                            onChange={updateInput}

                        />
                        <textarea
                            defaultValue={text}
                            name="text"
                            maxLength={1000}
                            onChange={updateInput}
                            className="Fit-Hundred"
                        />
                        <button className="update-post" onClick={transferToApi}>Valider les modifications</button>
                    </div>

                ) : (
                    <div className="Post__Main">
                        <h2>{title}</h2>
                        <p style={{ whiteSpace: "pre-wrap" }}>{text}</p>
                    </div>
                )}

                {/* <p style={{ whiteSpace: "pre-wrap" }}>{text}</p> */}


                {isUpdate === true ? (
                    <div className="Post__Image-Edit">
                        <div>
                            <label htmlFor="post_pic">Sélectionnez le fichier à utiliser</label>
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

