import initialState from './initialstate'

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'IMPROVE_COUNTER': 
      return {...state, counter: action.value}
  
    default:
      return state
  }
  
}

export default reducer