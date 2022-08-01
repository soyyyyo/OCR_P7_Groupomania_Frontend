import Post from '../../components/Post/Post'
import { Loader } from '../../utils/style/Atoms'
import { useFetch } from '../../utils/Hooks/Hooks'


const Allposts = () => {
  const { data, isLoading, error } = useFetch(
    `http://localhost:4200/api/posts`
  )

  console.log("jerem le boss", data)

  if (error) {
    return <span>Il y a un problème</span>
  }

  return (

    <div>
      {data.length === 0 ?
        <p>Il n'y a aucun post à afficher, commencez le partage !</p>
        :
        data?.map((machin, index) => (
          <Post
            key={`${machin.userId}-${index}`}
            title={machin.title}
            text={machin.text}
            likes={machin.likes}
            dislikes={machin.dislikes}
          />
        ))
      }
    </div>
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