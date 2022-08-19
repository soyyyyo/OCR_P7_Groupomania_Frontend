// import PropTypes from 'prop-types'
import DefaultPicture from '../../assets/profile.png'
import { useContext } from "react";
import { UidContext } from "../../components/AppContext/AppContext";
import axios from "axios";
import { useEffect } from 'react';
import { useRef } from 'react';
import './Post.css'




function Post({ title, text, likes, dislikes, imageUrl, userId, postId, date, usersLiked, usersDisliked }) {
    const uid = useContext(UidContext)
    let likeValueToSend = 0;
    let isLiked = false
    let isDisliked = false


    const allAccess = () => {
        if (uid === userId ||
            uid === "62fd100b4a0e8ffcebb652d1") { // cacher cette variable quelque part
            return true
        } else {
            return false ///
        }
    }

    let dateInFormat = new Intl.DateTimeFormat('fr-FR', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
    }).format(date)

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
        console.log("banana")
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
        if (isLiked === true) {
            // css rule to lighten up
            isLiked = false;
            document.querySelector(".like-btn").innerHTML = `${--likes}`
        } else if (isDisliked === true) {
            // css rule to lighten up
            isDisliked = false
            document.querySelector(".dislike-btn").innerHTML = `${--dislikes}`
        } else {
            // css rules to light nothing
            likeValueToSend = parseInt(likeValue)
            if (likeValueToSend === 1) {
                isLiked = true;
                document.querySelector(".like-btn").innerHTML = `${++likes}`
            } else {
                isDisliked = true;
                document.querySelector(".dislike-btn").innerHTML = `${++dislikes}`
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








    // useEffect(() => {
    //     alreadyLiked()
    // }, [])


    /*
    CHARGEMENT PAGE
    already liked ? > affichage css
    
    */

    return (
        <article className="Post">

            <div className="Post__Up">
                <div className="Post__Side">
                    <img class="Post__Profile-Pic" src={DefaultPicture} alt="" />
                    <div className="Likes">
                        <button value="1" onClick={e => handleLike(e.target.value)} className="fa-solid fa-thumbs-up like-btn">{likes}</button>
                        <button value="-1" onClick={e => handleLike(e.target.value)} className="fa-solid fa-thumbs-down dislike-btn">{dislikes}</button>
                    </div>
                </div>

                <div className="Post__Main">
                    <h2>{title}</h2>
                    <p>{text}</p>
                </div>
            </div>

            {
                allAccess() ? (
                    <div className="Post_Config">
                        <div className="Post__Delete" onClick={handleDelete} >SUPPRIMER</div>
                        <div className="Post__Edit" onClick={handleEdit} >EDITER</div>
                    </div>
                ) : (
                    null
                )
            }

            <p>posté le {dateInFormat}</p>

            <div className="Post__Down">
                <img class="Post__Picture" src={imageUrl} alt="the post" />
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

