import * as React from 'react'
//import { Provider } from 'react-redux'
//import store from '../store/store'



import Container from '@material-ui/core/Container'
import ButtonComp from './Button'
import Chart from './Chart'


import '../sass/app.sass'

function App() {
  let title = "Круговая диаграмма"
  return (
    <div className="our-app">
      <Container maxWidth="lg">
        <h1 className="title-app">{ title }</h1>
        <div className="container-app">
          {/* <Provider store = {store}><ButtonComp /></Provider> */}
          <ButtonComp />
          <Chart  />
        </div>
      </Container>
    </div>
  )
}

export default App