const githubReducer = (state, action) => {
  switch (action.type) {
    case `get_users`:
      return {
        ...state,
        users: action.payload,
        isLoading: false
      }
    case `get_user_and_repos`:
      return {
        ...state,
        user: action.payload.user,
        repos: action.payload.repos,
        isLoading: false
      }
    case `set_loading`:
      return {
        ...state,
        isLoading: true
      }
    case `clear_users`:
      return {
        ...state,
        users: []
      }
    default:
      return state
  }
}
export default githubReducer
