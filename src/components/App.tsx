import * as React from 'react'
import Container from '@material-ui/core/Container'
import ButtonComp from './Button'
//import { connect } from 'react-redux'
//import { bindActionCreators } from 'redux'

//import  { improveCounter }  from '../store/actions'


import '../sass/app.sass'

function App() {

  let title : string = "Круговая диаграмма"
  return (
    <div className="our-app">
      <Container maxWidth="lg">
        <h1 className="title-app">{ title }</h1>
        <ButtonComp></ButtonComp>
      </Container>
    </div>
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

 export default App
//export default connect(mapStateToProps, mapDispatchYoProps)(App)