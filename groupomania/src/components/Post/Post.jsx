// import PropTypes from 'prop-types'
import DefaultPicture from '../../assets/profile.png'
import { useContext } from "react";
import { UidContext } from "../../components/AppContext/AppContext";
import axios from "axios";



function Post({ title, text, likes, dislikes, imageUrl, userId, postId, date }) {
    const uid = useContext(UidContext)

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
                console.log(err.data)
                console.log(err.message)
            });
    }

    const handleEdit = () => {
        console.log("banana")
    }


    return (
        <article className="Post">

            <div className="Post__Up">
                <div className="Post__Side">
                    <img class="Post__Profile-Pic" src={DefaultPicture} alt="" />
                    <div className="Likes">
                        <i class="fa-solid fa-thumbs-up">{likes}</i>
                        <i class="fa-solid fa-thumbs-down">{dislikes}</i>
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



// const { theme } = useTheme()

// return (
//     <CardWrapper theme={theme}>
//         <CardLabel theme={theme}>{label}</CardLabel>
//         <CardImage src={picture} alt="freelance" />
//         <CardTitle theme={theme}>{title}</CardTitle>
//     </CardWrapper>
// )