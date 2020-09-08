//import { createStore } from 'redux'
//import reducer from './reducers'
import * as React from 'react'
import { useContext } from 'react'
import { observable, action } from 'mobx'

const storeContext = React.createContext(  
  observable({
    show: false,
    changeName: action( async function(show) {
      let status = ''
      let prom = new Promise( (resolve) => {
        setTimeout( () => {
          status = show
          resolve(status)
        },3000)
      })
      
      this.show = await prom
    })
  })
)




export const storeFrom = () => useContext(storeContext)