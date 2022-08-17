import Post from '../../components/Post/Post'
import { Loader } from '../../utils/style/Atoms'
import { useFetch } from '../../utils/Hooks/Hooks'
import "./AllPosts.css"


const Allposts = () => {
  const { data, isLoading, error } = useFetch(
    `http://localhost:4200/api/posts`
  )

  console.log("data from fetch allpost : ", data)

  if (error) {
    return <span>Il y a un problème</span>
  }

  return (

    <section id="AllPosts">


      {data.length === undefined ? // ou === 0 pour dire qu'il n'existe aucun post
        <p>Veuillez créer un compte ou vous connecter.</p>
        :
        data?.map((post, index) => (
          <Post
            key={`${post.userId}-${index}`}
            title={post.title}
            text={post.text}
            likes={post.likes}
            dislikes={post.dislikes}
            imageUrl={post.imageUrl}
            userId={post.userId}
            postId={post._id}
            date={post.date}
          />
        ))
      }


    </section>
  )

}

export default Allposts


/*
      {isLoading ? (
        <div>
          <Loader />
        </div>
      ) : (


        <div>
          {postsList?.map((profile, index) => (
            <Post
              key={`${profile.name}-${index}`}
              label={profile.job}
              title={profile.name}
              picture={profile.picture}
            />
          ))}
        </div>
      
      
        )}

*/