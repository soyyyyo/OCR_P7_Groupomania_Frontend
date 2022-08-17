// import PropTypes from 'prop-types'
import DefaultPicture from '../../assets/profile.png'
import { useContext } from "react";
import { UidContext } from "../../components/AppContext/AppContext";
import axios from "axios";



function Post({ title, text, likes, dislikes, imageUrl, userId, postId, date }) {
    const uid = useContext(UidContext)

    let chouette = new Intl.DateTimeFormat('fr-FR', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
    }).format(date)

    const handleDelete = () => {
        const token = sessionStorage.getItem('token')
        console.log("post id is:", postId)
        axios({
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            method: "delete",
            url: `${process.env.REACT_APP_API_URL}api/posts/${postId}`,
            withCredentials: false,
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
                    <p>user id is: {userId}</p>
                </div>
            </div>

            {
                uid === userId ? (
                    <div className="Post__Config" onClick={handleDelete} >DELETE</div>
                ) : (
                    null
                )
            }

            <p>posté le {chouette}</p>

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