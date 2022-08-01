// import PropTypes from 'prop-types'
// import DefaultPicture from '../../assets/profile.png'


function Post({ title, text, likes, dislikes }) {
    console.log(title)
    return (
        <div className="post">
            <h2>{title}</h2>
            <p>{text}</p>
            <p>{likes}</p>
            <p>{dislikes}</p>
        </div>
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