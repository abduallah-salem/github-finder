import axios from 'axios'
const URL = process.env.REACT_APP_GITHUB_URL
const token = process.env.REACT_APP_GITHUB_TOKEN

const newRequest = axios.create({
  baseURL: URL,
  headers: {
    Authorization: `token ${token}`
  }
})
export const searchUsers = async (userName) => {
  const response = await newRequest(`/search/users?q=${userName}`)
  return response.data.items
}

export const getUserData = async (login) => {
  const [user, repos] = await Promise.all([
    newRequest.get(`/users/${login}`),
    newRequest.get(`/users/${login}/repos?sort=created&per_page=10`)
  ])
  return { user: user.data, repos: repos.data }
}
