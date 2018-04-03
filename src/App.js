import React, { Component } from 'react';
import './App.css';
import GoogleSpreadsheet from 'google-spreadsheet'
import { SheetsContext } from './state/sheets-context'
import { 
  BrowserRouter as Router, 
  Route 
} from 'react-router-dom'
import Test from './Test'

const doc = new GoogleSpreadsheet(process.env.REACT_APP_G_SHEETS)

class App extends Component {

  state = {
    sheets: []
  }

  async componentDidMount(){
    const sheets = await new Promise((resolve, reject) => 
      doc.getInfo((err, info) => {
        resolve(info.worksheets)
      })
    )
    this.setState({ sheets })
  }

  render() {
    return (
      <Router>
        <SheetsContext.Provider value={this.state.sheets}>
          <Route exact path="/" component={Test} />
        </SheetsContext.Provider>
      </Router>
    );
  }
}

export default App;
