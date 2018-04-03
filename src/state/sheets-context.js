import React from 'react'

export const SheetsContext = React.createContext()

export function withSheets(Component){
  return function sheetsComponent(props){
    return(
      <SheetsContext.Consumer>
        {sheets => <Component {...props} sheets={sheets} />}
      </SheetsContext.Consumer>
    )
  }
}