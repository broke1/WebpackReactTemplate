import * as React from 'react'
import * as ReactDOM from 'react-dom'
import store from './store/store'
import { Provider } from 'react-redux'

import App from "./components/App"

ReactDOM.render(<Provider store = {store}> <App /> </Provider>, document.getElementById("app"))

 
