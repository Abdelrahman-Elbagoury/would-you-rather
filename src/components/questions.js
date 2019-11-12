import React, { Component } from 'react'
import { connect } from 'react-redux'
import { formatQuestion } from '../utils/_DATA'
import { Link } from "react-router-dom";
import setSelected from '../actions/selected'

class Questions extends Component {
    componentDidMount() {
        // console.log(this.props.questions.optionOne.votes.includes(this.props.loggedinUser.id))
    }
    handleChange(e) {
        this.props.dispatch(setSelected(e))
    }

    render() {
        return (
            <div>
                <hr />
                {
                    // this.props.questions.author === Object.values(this.props.authedUserReducer).join('')
                    // && 'hi'
                }

                <h3>Would you rather</h3>
                {
                    this.props.questions.optionOne.votes.includes(this.props.loggedinUser.id) || this.props.questions.optionTwo.votes.includes(this.props.loggedinUser.id) ? 'answered' : ''
                } <br/>
                {this.props.questions.optionOne.text}
                <span style={{ fontWeight: '700' }}> or </span>
                {this.props.questions.optionTwo.text}<br />
                <img style={{ width: '30px' }} alt='' src={this.props.user && this.props.user.avatarURL} />
                {this.props.questions.author} asked <br />
                {(this.props.questions.timestamp).toDateString()}
                <br />
                {this.props.questions.id}
                <button onClick={(e) => this.handleChange(this.props.questions.id)}><Link to='/selected'>Answer</Link></button>
            </div>
        )
    }
}

function mapStateToProps({ questionsReducer, authedUserReducer, setSelectedReducer, usersReducer }, { id }) {
    let question = questionsReducer[id]

    return {
        questions: formatQuestion({
            optionOneText: question.optionOne.text,
            optionTwoText: question.optionTwo.text,
            author: question.author,
            timestamp: question.timestamp,
            ke: id,
            optionOneVotes: question.optionOne.votes,
            optionTwoVotes: question.optionTwo.votes,
        }),
        loggedinUser: usersReducer[Object.values(authedUserReducer).join('')],
        setSelectedReducer,
        user: usersReducer[question.author]
    }
}

export default connect(mapStateToProps)(Questions)