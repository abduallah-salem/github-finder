import PropTypes from 'prop-types'
import {
  GoLink,
  GoEye,
  GoStar,
  GoIssueOpened,
  GoRepoForked
} from 'react-icons/go'

function UserReposItem({ repo }) {
  return (
    <div className="mb-2 rounded-md card bg-gray-800 hover:bg-gray-900 transition ease-in-out duration-150">
      <div className="card-body">
        <h3 className="mb-2 text-xl font-semibold">
          <a href={repo.html_url} target="_blank" rel="noreferrer">
            <GoLink className="inline mr-1" />
            {repo.name}
          </a>
        </h3>
        <p className="mb-3">{repo.description}</p>
        <div>
          <div className="mr-2 badge badge-info badge-lg">
            <GoEye className="mr-2" />
            {repo.watchers_count}
          </div>
          <div className="mr-2 badge badge-success badge-lg">
            <GoStar className="mr-2" />
            {repo.stargazers_count}
          </div>
          <div className="mr-2 badge badge-error badge-lg">
            <GoIssueOpened className="mr-2" />
            {repo.open_issues}
          </div>
          <div className="mr-2 badge badge-warning badge-lg">
            <GoRepoForked className="mr-2" />
            {repo.forks}
          </div>
        </div>
      </div>
    </div>
  )
}

UserReposItem.propTypes = {
  repo: PropTypes.object.isRequired
}
export default UserReposItem
