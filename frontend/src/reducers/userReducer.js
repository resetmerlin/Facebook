export function useReducer(state = null, action) {
  switch (action.type) {
    case "Login":
      return action.payload;

    default:
      return state;
  }
}
