import React, { PureComponent} from 'react'
import { withSheets } from './state/sheets-context'

class Test extends PureComponent {
  render(){
    console.log(this.props)
    return(
      <div />
    )
  }
}

export default withSheets(Test)

