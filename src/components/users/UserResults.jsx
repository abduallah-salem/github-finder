import { useContext } from 'react'
import Loader from '../shared/Loader'
import UserItem from './UserItem'
import GitHubContext from '../context/github/GithubContext'
import { useAutoAnimate } from '@formkit/auto-animate/react'

function UserResults() {
  const { users, isLoading } = useContext(GitHubContext)
  const [parent] = useAutoAnimate({ duration: 500 })

  return isLoading ? (
    <Loader isLoading="true" inColor="#ffffff" />
  ) : (
    <div
      ref={parent}
      className="grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2"
    >
      {users.map((user) => (
        <UserItem key={user.id} user={user} />
      ))}
    </div>
  )
}
export default UserResults
