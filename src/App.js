import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import configureStore from './configureStore';
import history from './utils/history';
import Home from './containers/HomeContainer';
import homeContainerReducer from './containers/HomeContainer/reducer';
import "./styling.css"

// Create redux store with history
const initialState = {};
const store = configureStore(initialState, history);

store.injectReducer('homeContainer', homeContainerReducer);

class App extends Component {
  render() {
    return (
      <div className='App'>
      <Provider store={store}>
        <Router class>
          <h1>Clic Counter </h1>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route component={() => (<h2>Page introuvable</h2>)} />
          </Switch>
        </Router>
      </Provider>
      </div>
    )
  }
}

export default App;
