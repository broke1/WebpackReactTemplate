//import { createStore } from 'redux'
//import reducer from './reducers'
import * as React from 'react'
import { observable, action } from 'mobx'

const store =  observable({
    show: false,
    name: 'Kitty',
    action: "Hello",
    get credentinal () {
      return `${this.action} + ${this.name} = ${this.action+' '+this.name}`
    },
    changeCredential: action( function(action:string,name:string) {
      this.action = action
      this.name = name
    }),
    switchShow: action( async function(show:boolean) {
      let status = false
      let prom = new Promise( (resolve) => {
        setTimeout( () => {
          status = show
          resolve(status)
        },3000)
      })
      
      this.show = await prom
    })
  })





export default store