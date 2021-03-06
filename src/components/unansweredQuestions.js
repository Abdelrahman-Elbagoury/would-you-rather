import React from "react";
import { connect } from 'react-redux'
import UnansweredOne from './unansweredOne'
import { Link } from 'react-router-dom'
import { resetUser } from '../actions/authedUser'
import { Navbar, NavDropdown, Nav } from 'react-bootstrap'

class UnansweredQuestions extends React.Component {
  constructor(props) {
    super(props)
    this.handleLogout = this.handleLogout.bind(this)
  }
  handleLogout() {
    this.props.dispatch(resetUser())
  }

  render() {
    return (
      <div>
        <Navbar bg="light" expand="lg">
          <Navbar.Brand href="#home">Would You Rather</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse
            style={{ justifyContent: "flex-end", marginRight: '100px', marginTop: '10px' }} id="basic-navbar-nav">
            <Nav className="">
              <Link style={{ marginTop: '5px', paddingRight: '20px' }} to="/leaderboard">Leader board</Link>
              <Link style={{ marginTop: '5px', paddingRight: '20px' }} to='/newQuestion'>new question</Link>
              <Link style={{ marginTop: '5px', paddingRight: '20px' }} to='answeredQuestions'>answered</Link>
              <Link style={{ marginTop: '5px', paddingRight: '20px' }} to='unansweredQuestions'>unanswered</Link>
              <img style={{ width: '30px', marginLeft: '20px' }} alt='' src={this.props.user.avatarURL} />
              <NavDropdown
                title={Object.values(this.props.user.name)}
                id="basic-nav-dropdown">
                <NavDropdown.Item href="/">
                  <button style={{ border: 'none', backgroundColor: 'transparent' }} onClick={this.handleLogout}>
                    logout
                    </button>
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Navbar>

        <br />
        <br />

        {this.props.questions.map((key) => {
          return (
            this.props.user && <UnansweredOne key={key} id={key} />
          )
        })}
      </div>
    );
  }
}

function mapStateToProps({ authedUserReducer, questionsReducer, usersReducer }) {
  return {
    authedUserReducer,
    questions: Object.keys(questionsReducer),
    user: usersReducer[Object.values(authedUserReducer).join('')],
  }
}

export default connect(mapStateToProps)(UnansweredQuestions)

