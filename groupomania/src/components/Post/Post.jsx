// import PropTypes from 'prop-types'
import DefaultPicture from '../../assets/profile.png'


function Post({ title, text, likes, dislikes }) {
    return (
        <article className="Post">

            <div className="Post__Side">
                <img src={DefaultPicture} alt="" />
                <div className="Likes">
                    <i class="fa-solid fa-thumbs-up">{likes}</i>
                    <i class="fa-solid fa-thumbs-down">{dislikes}</i>
                </div>
            </div>

            <div className="Post__Main">
                <h2>{title}</h2>
                <p>{text}</p>
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