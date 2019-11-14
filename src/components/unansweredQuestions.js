import React from "react";
import { connect } from 'react-redux'
import UnansweredOne from './unansweredOne'
import { Link } from 'react-router-dom'

class UnansweredQuestions extends React.Component {

  render() {
    return (
      <div>
        <Link to="/">login</Link>
        <br />
        <Link to='/newQuestion'>new question</Link>
        <br />

        <div style={{ margin: '20px 0' }}>
          {
            this.props.authedUserReducer
              ? Object.values(this.props.authedUserReducer)
              : 'sign in please'
          }
          {
            this.props.authedUserReducer
            && <img style={{ width: '50px' }} alt='' src={this.props.user.avatarURL} />
          }
        </div>

        {this.props.questions.map((key) => {
          return (
            <UnansweredOne key={key} id={key} />
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
    user: usersReducer[Object.values(authedUserReducer).join('')]
  }
}

export default connect(mapStateToProps)(UnansweredQuestions)

