import React from "react";
import { connect } from 'react-redux'
import Home from './home'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'
import NewQuestion from './newQuestion'

class FirstPage extends React.Component {

  render() {
    return (
      <div>
        <Router>
          <div>
            <Link to="/NewQuestion">NewQuestion</Link>
            <br />
            <Link to="/Home">home</Link>
            <br />
            <Switch>
              <Route path="/NewQuestion">
                <NewQuestion />
              </Route>
              <Route path="/home">
                <Home />
              </Route>
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default connect()(FirstPage)

