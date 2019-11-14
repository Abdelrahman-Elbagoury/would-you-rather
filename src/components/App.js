import React from 'react';
import Login from './login'
import { connect } from 'react-redux'
import { getInitialData } from '../actions/shared'
import Selected from './selectedQuestion'
import NewQuestion from './newQuestion'
import AnsweredQuestion from '../components/answeredQuestions'
import UnansweredQuestions from '../components/unansweredQuestions'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
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
        <Link to='answeredQuestion'>answered</Link><br/>
        <Link to='unansweredQuestion'>unanswered</Link><br/>

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
              <Route path="/answeredQuestion">
                <AnsweredQuestion />
              </Route>
              <Route path="/unansweredQuestion">
                <UnansweredQuestions />
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

