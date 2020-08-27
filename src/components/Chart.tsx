import * as React from 'react'
import { connect } from 'react-redux'

import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'


function Chart(props) {

  return (
    <Card className={props.showBlock == 'true' ? 'showCard' : 'hiddenCard'}>
      <CardContent>
        Hello Kitty
      </CardContent>
    </Card>
  )
}

const mapStateToProps = (state) => {
  return {showBlock: state.showBlock}
}


export default connect(mapStateToProps)(Chart)