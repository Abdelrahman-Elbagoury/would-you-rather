import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { formatQuestion } from '../utils/_DATA'
import { ProgressBar } from 'react-bootstrap'

class Result extends Component {

    render() {
        let rateOne = this.props.questions.optionOne.votes.length
        let rateTwo = this.props.questions.optionTwo.votes.length
        let total = rateOne + rateTwo
        let averageOne = rateOne*100 / total
        let averageTwo = rateTwo*100 / total
        return (
            <div>
                <div id='answer' style={{ width: '50%', margin: 'auto', textAlign: 'center', borderRadius: '3px', marginTop: '150px', padding: '30px', backgroundColor: 'white' }}>
                    <ProgressBar now={averageOne}  label={`${averageOne}%`} />
                    {rateOne} person answered  <span> </span>
                    { this.props.questions.optionOne.text}
                   <br />
                   <br />
                   <ProgressBar now={averageTwo}  label={`${averageTwo}%`} />
                    {rateTwo} person answered <span> </span>
                    { this.props.questions.optionTwo.text}
                </div>
                <Link style={{marginLeft: '46%'}} to='/unansweredQuestions'>
                    return to home
                </Link>
            </div>
        )
    }
}


function mapStateToProps({ setSelectedReducer, questionsReducer, setResultReducer }) {
    let question = questionsReducer[setResultReducer]
    console.log(question)
    return {
        questions: formatQuestion({
            optionOneText: question ? question.optionOne.text : '',
            optionTwoText: question ? question.optionTwo.text : '',
            author: question ? question.author : '',
            timestamp: question ? question.timestamp : '',
            ke: question ? question.id : '',
            optionOneVotes: question.optionOne.votes,
            optionTwoVotes: question.optionTwo.votes,
        }),
        setSelectedReducer
    }
}

export default connect(mapStateToProps)(Result)