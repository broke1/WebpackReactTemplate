import * as React from 'react'
import Button from '@material-ui/core/Button';
//import { connect } from 'react-redux'
//import { bindActionCreators } from 'redux'

//import  { improveCounter }  from '../store/actions'



function ButtonComp() {


  return (
    <Button variant="contained">
      Показать / убрать
    </Button>
  )
}

// const mapStateToProps = (state) => {
//   return {counter: state.counter}
// }

// const mapDispatchYoProps = (dispatch) => {
//   return { 
//     improveCounter: bindActionCreators(improveCounter,dispatch)
//   }
// }

 export default ButtonComp
//export default connect(mapStateToProps, mapDispatchYoProps)(App)