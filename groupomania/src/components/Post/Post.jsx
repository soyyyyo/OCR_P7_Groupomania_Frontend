import PropTypes from 'prop-types'
import DefaultPicture from '../../assets/profile.png'


function Post({ label, title, picture }) {
    return (
        <div>
            <div>{label}</div>
            <img src={picture} alt="freelance" />
            <div>{title}</div>
        </div>
    )
}

Post.propTypes = {
    label: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    picture: PropTypes.string.isRequired,
}

Post.defaultProps = {
    label: '',
    title: '',
    picture: DefaultPicture,
}

export default Post



// const { theme } = useTheme()

// return (
//     <CardWrapper theme={theme}>
//         <CardLabel theme={theme}>{label}</CardLabel>
//         <CardImage src={picture} alt="freelance" />
//         <CardTitle theme={theme}>{title}</CardTitle>
//     </CardWrapper>
// )