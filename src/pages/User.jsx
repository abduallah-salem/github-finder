import {
  FaMapMarkerAlt,
  FaLink,
  FaUserFriends,
  FaUsers,
  FaGithub,
  FaTwitter
} from 'react-icons/fa'
import { GoRepo, GoGist } from 'react-icons/go'
import { useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import GitHubContext from '../components/context/github/GithubContext'
import { Link } from 'react-router-dom'
import Loader from '../components/shared/Loader'
import UserReposList from '../components/users/UserReposList'
import { getUserData } from '../components/context/github/GithubActions'

function User() {
  const { user, repos, isLoading, dispatch } = useContext(GitHubContext)
  const params = useParams()
  useEffect(() => {
    dispatch({
      type: 'set_loading'
    })
    const userData = async () => {
      const data = await getUserData(params.login)
      dispatch({
        type: 'get_user_and_repos',
        payload: data
      })
    }
    userData()
  }, [dispatch, params.login])
  if (isLoading) {
    return <Loader isLoading="true" inColor="#ffffff" />
  }
  return (
    <>
      <div className="w-full mx-auto lg:w-11/12">
        <div className="mb-4">
          <Link to="/" className="btn btn-ghost">
            Back to search
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 mb-8 md:gap-0 max-w-full min-w-[320px]">
          <div className="rounded-lg overflow-hidden shadow-xl card image-full before:!rounded-lg before:!opacity-50 max-w-sm w-full md:max-w-none">
            <figure className="w-full  ">
              <img className="w-full" src={user.avatar_url} alt="" />
            </figure>
            <div className="card-body justify-end gap-y-0 p-4">
              <h2 className="card-title mb-0">{user.name}</h2>
              <p className="!max-h-6">{user.login}</p>
            </div>
          </div>
          <div className="col-span-2 m-4">
            <div className="mb-6">
              <h1 className="text-3xl card-title">
                {user.name}
                <div className="ml-2 mr-1 badge badge-success">{user.type}</div>
                {user.hireable && (
                  <div className="mx-1 badge badge-info">Hireable</div>
                )}
              </h1>
              <p>{user.bio}</p>
              <div className="mt-4 card-actions">
                <a
                  href={user.html_url}
                  target="_blank"
                  rel="noreferrer"
                  className="btn"
                >
                  <FaGithub className="w-6 h-6 mr-3" />
                  Visit Github profile
                </a>
              </div>
            </div>
            <div className="w-full rounded-lg shadow-md bg-base-100 stats flex flex-col md:flex-row">
              {user.location && (
                <div className="stat">
                  <div className="stat-title text-md">
                    <FaMapMarkerAlt className="inline mr-2 mb-1" />
                    Location
                  </div>
                  <div className="text-lg stat-value">{user.location}</div>
                </div>
              )}
              {user.blog && (
                <div className="stat">
                  <div className="stat-title text-md">
                    <FaLink className="inline mr-2 mb-1" />
                    Website
                  </div>
                  <div className="text-lg stat-value">
                    <a
                      href={`https://${user.blog}`}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {user.blog}
                    </a>
                  </div>
                </div>
              )}
              {user.twitter_username && (
                <div className="stat">
                  <div className="stat-title text-md">
                    <FaTwitter className="inline mr-2 mb-1" />
                    Twitter
                  </div>
                  <div className="text-lg stat-value">
                    <a
                      href={`https://twitter.com/${user.twitter_username}`}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {user.twitter_username}
                    </a>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="w-full py-5 mb-6 rounded-lg shadow-md bg-base-100 stats">
          <div className="stat">
            <div className="stat-figure text-secondary">
              <FaUsers className="text-3xl md:text-5xl" />
            </div>
            <div className="stat-title pr-5">Followers</div>
            <div className="stat-value pr-5 text-3xl md:text-4xl">
              {user.followers}
            </div>
          </div>
          <div className="stat">
            <div className="stat-figure text-secondary">
              <FaUserFriends className="text-3xl md:text-5xl" />
            </div>
            <div className="stat-title pr-5">Following</div>
            <div className="stat-value pr-5 text-3xl md:text-4xl">
              {user.following}
            </div>
          </div>
          <div className="stat">
            <div className="stat-figure text-secondary">
              <GoRepo className="text-3xl md:text-5xl" />
            </div>
            <div className="stat-title pr-5">Repositories</div>
            <div className="stat-value pr-5 text-3xl md:text-4xl">
              {user.public_repos}
            </div>
          </div>
          <div className="stat">
            <div className="stat-figure text-secondary">
              <GoGist className="text-3xl md:text-5xl" />
            </div>
            <div className="stat-title pr-5">Gists</div>
            <div className="stat-value pr-5 text-3xl md:text-4xl">
              {user.public_gists}
            </div>
          </div>
        </div>
        <UserReposList repos={repos} />
      </div>
    </>
  )
}
export default User
