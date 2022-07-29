import Post from '../../components/Post/Post'
import styled from 'styled-components'
import { Loader } from '../../utils/style/Atoms'
import { useFetch } from '../../utils/Hooks/Hooks'


function Allposts() {
  const { data, isLoading, error } = useFetch(
    `http://localhost:8000/freelances`
  )

  const freelancersList = data?.freelancersList

  if (error) {
    return <span>Il y a un problème</span>
  }

  return (
    <div>
      {isLoading ? (
        <div>
          <Loader />
        </div>
      ) : (
        <div>
          {freelancersList?.map((profile, index) => (
            <Post
              key={`${profile.name}-${index}`}
              label={profile.job}
              title={profile.name}
              picture={profile.picture}
            />
          ))}
        </div>
      )}
    </div>
  )
}

export default Allposts
