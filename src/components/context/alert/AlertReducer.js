const alertReducer = (state, action) => {
  switch (action.type) {
    case `create_alert`:
      return action.payload
    case `remove_alert`:
      return null
    default:
      return state
  }
}
export default alertReducer
