import Post from '../../components/Post/Post'
import { Loader } from '../../utils/style/Atoms'
import { useFetch } from '../../utils/Hooks/Hooks'
import "./AllPosts.css"


const Allposts = () => {
  // fetch les data de l'API
  let { data, isLoading, error } = useFetch(
    `http://localhost:4200/api/posts`
  )

  console.log("les datas sont:", data)


  if (data.error) {
    return <span>Veuillez créer un compte ou vous connecter.</span>
  }

  // tri l'array d'objet en sens antichronologique
  data.sort(function (x, y) {
    var firstDate = x.creationDate,
      secondDate = y.creationDate;

    if (firstDate < secondDate) return 1;
    if (firstDate > secondDate) return -1;
    return 0;
  });


  return (

    <section id="AllPosts">

      {/* affichage si aucune donnée ou si l'api refuse l'accés faute d'authentification */}
      {data.length === 0 || data.length === undefined ? // ou === 0 pour dire qu'il n'existe aucun post
        <p>Aucune donnée à afficher, soyez le premier à publier !</p>
        :
        // itère les données reçues vers le modèle Post (props?). Défini ce qui est donc transvasé
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
            creationDate={post.creationDate}
            modificationDate={post.modificationDate}
            usersLiked={post.usersLiked}
            usersDisliked={post.usersDisliked}
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