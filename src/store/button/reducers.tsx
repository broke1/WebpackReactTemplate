import initialState from './initialstate'

const buttonReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SHOW_CHART': 
      return {...state, showChart: action.value}
  
    default:
      return state
  }
  
}

export default buttonReducer