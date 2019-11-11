import React from 'react';
import Login from './login'
import { connect } from 'react-redux'
import { getInitialData } from '../actions/shared'
import Selected from './selectedQuestion'
import NewQuestion from './newQuestion'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './home'


class App extends React.Component {
  componentDidMount() {
    this.props.dispatch(getInitialData())
  }
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            
            <Switch>
              <Route path="/home">
                <Home />
              </Route>
              <Route path="/selected">
                <Selected id={this.props.id} />
              </Route>
              <Route path="/newQuestion">
                <NewQuestion />
              </Route>
              <Route path="/">
                <Login />
              </Route>
            </Switch>
          </div>
        </Router>
      </div>
    )
  }
}

function mapStateToProps(setSelectedReducer) {
  return {
    id: setSelectedReducer
  }
}

export default connect(mapStateToProps)(App);

