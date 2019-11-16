import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { formatQuestion } from '../utils/_DATA'

class Result extends Component {

    render() {
        return (
            <div>
                <div id='answer'>
                   {this.props.questions.optionOne.votes.length} 
                   ({this.props.questions.optionOne.text}) 
                   <br/>
                   {this.props.questions.optionTwo.votes.length} 
                   ({this.props.questions.optionTwo.text} )
                </div>
                <Link to='/unansweredQuestion'>
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
            optionOneVotes: question.optionOne.votes ,
            optionTwoVotes: question.optionTwo.votes ,
        }),
        setSelectedReducer
    }
}

export default connect(mapStateToProps)(Result)