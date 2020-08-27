
import { combineReducers } from 'redux'

import  chartReducer  from './chart/reducers'

import buttonReducer from './button/reducers'

export default combineReducers({
  chart: chartReducer,
  button: buttonReducer,
})


