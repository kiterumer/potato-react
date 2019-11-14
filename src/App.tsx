
import * as React from 'react';
// import {BrowserRouter as Router, Route} from 'react-router-dom'
import {Router} from 'react-router-dom'
import history from './config/history'


import { renderRoutes } from 'react-router-config'
import { Provider } from 'react-redux'
import routes from './routes'
import store from './store'

class App extends React.Component {
  public render() {
    return (
      <Provider store={store}>
        <div className="App">
          <Router history={history}>
            {renderRoutes(routes)}   
          </Router>
        </div>       
      </Provider>     
    )
  }
}

export default App
