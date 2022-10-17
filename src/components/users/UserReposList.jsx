import PropTypes from 'prop-types'
import { useAutoAnimate } from '@formkit/auto-animate/react'
import UserReposItem from './UserReposItem'

function UserReposList({ repos }) {
  const [animationParent] = useAutoAnimate()

  const delay = () => {
    return new Promise((res) => setTimeout(res, 200))
  }
  const delayedEntry = async (repo) => {
    await delay()
    return <UserReposItem key={repo.id} repo={repo} />
  }
  return (
    <>
      <div className="rounded-lg shadow-lg card bg-base-100">
        <div className="card-body" ref={animationParent}>
          <h2 className="text-3xl my-4 font-bold card-title">
            Lates repositories
          </h2>
          {repos.map((repo) => (
            <UserReposItem key={repo.id} repo={repo} />
          ))}
        </div>
      </div>
    </>
  )
}

UserReposList.propTypes = {
  repos: PropTypes.array.isRequired
}
export default UserReposList
