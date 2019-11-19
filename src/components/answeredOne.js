import React, { Component } from 'react'
import { connect } from 'react-redux'
import { formatQuestion } from '../utils/_DATA'
import { Link } from "react-router-dom";
import setResult from '../actions/setResult'
import { Button } from 'react-bootstrap'

class AnsweredOne extends Component {
    componentDidMount() {
        // console.log(this.props.questions.optionOne.votes.includes(this.props.loggedinUser.id))
    }
    handleCResult(e) {
        this.props.dispatch(setResult(e))
    }

    render() {
        return (
            <div>
                {
                    (this.props.questions.optionOne.votes && this.props.questions.optionTwo.votes) ? (this.props.questions.optionOne.votes.includes(this.props.loggedinUser.id) || this.props.questions.optionTwo.votes.includes(this.props.loggedinUser.id)
                        ? <div style={{ width: '50%', margin: 'auto', textAlign: 'center', borderRadius: '3px', marginBottom: '20px', paddingBottom: '10px', backgroundColor: 'white' }}>
                            <div style={{ width: '100%', backgroundColor: '#343a40', padding: '40px', color: 'white' }}> {this.props.user.name} </div>
                            <img style={{ width: '75px', marginTop: '-30px' }} alt='' src={this.props.user && this.props.user.avatarURL} />
                            <h3>Would you rather</h3>
                            <div style={{ marginBottom: '10px' }}>{this.props.questions.optionOne.text}</div>
                            <span style={{ fontWeight: '700', backgroundColor: '#343a40', color: 'white', padding: '5px', borderRadius: '3px', marginTop: '5px', marginBottom: '5px' }}> or </span><br />
                            <div style={{ marginTop: '10px' }}>{this.props.questions.optionTwo.text}</div>
                            <div style={{marginTop:'20px', fontSize:'13px', color:'gray'}}>
                                {(this.props.questions.timestamp).toDateString()}
                            </div>
                            <Button style={{ marginLeft: '390px' }} variant="link" onClick={(e) => this.handleCResult(this.props.questions.id)}><Link to={`/result/${this.props.id}`}>Show result</Link></Button>
                        </div>
                        : '') : ''
                }

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

export default connect(mapStateToProps)(AnsweredOne)