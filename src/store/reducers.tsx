import initialState from './initialstate'

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SHOW_BLOCK': 
      return {...state, showBlock: action.value}
  
    default:
      return state
  }
  
}

export default reducer