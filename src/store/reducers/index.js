
const initialState = {
    favorites: [],
    player: [],
    search: ''
  }
  
  const mainReducer = (state = initialState, action) => {
    console.log(action, state)
  
    const { type, payload } = action
  
    switch (type) {
      case 'ADD_TO_FAV':
        return {
          ...state,
          favorites: [...state.favorites, payload],
        }
      case 'REMOVE_FROM_FAV':
        return {
          ...state,
          favorites: state.favorites.filter((album) => album !== payload),
        }
        case 'ADD_TO_PLAYER':
          return {
            ...state,
            player: payload
        }
        case 'SEARCH':
          return {
            ...state,
            search: payload
        }
      default:
        return state
    }
  }
  
  export default mainReducer