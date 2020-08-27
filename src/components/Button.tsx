import * as React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import Button from '@material-ui/core/Button'

import  { showBlockAct }  from '../store/actions'



function ButtonComp(props) {

  return (
    <Button variant="contained" onClick={ () => {
        let value = '' 
        props.showBlock == 'true' ? value = 'false' : value = 'true'
        props.showBlockAct(value)
      }
    }>
      Показать / убрать
    </Button>
  )
}

const mapStateToProps = (state) => {
  return {showBlock: state.showBlock}
}

const mapDispatchYoProps = (dispatch) => {
  return { 
    showBlockAct: bindActionCreators(showBlockAct,dispatch)
  }
}


export default connect(mapStateToProps, mapDispatchYoProps)(ButtonComp)