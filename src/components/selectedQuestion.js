import React, { Component } from 'react'
import { connect } from 'react-redux'
import { formatQuestion } from '../utils/_DATA'

class Selected extends Component {
    componentDidMount() {
        console.log(this.props.id.setSelectedReducer)
        console.log(this.props.questions.id)
    }

    render() {
        return (
            <div>
                <input type='radio' name="gender" value="male" /> {this.props.questions.optionOne.text}  <br />
                <input type='radio' name="gender" value="male" /> {this.props.questions.optionTwo.text}  <br />

                <button>Submit answer</button>
            </div>
        )
    }
}


function mapStateToProps({ setSelectedReducer, questionsReducer }, { id }) {
    let question = questionsReducer[id.setSelectedReducer]
    console.log(question)
    return {
        questions: formatQuestion({
            optionOneText: question ? question.optionOne.text : '' ,
            optionTwoText: question ? question.optionTwo.text : '' ,
            author: question ? question.author : '' ,
            timestamp: question ? question.timestamp : '',
            ke: question ? question.id : ''
        }),
        setSelectedReducer
    }
}

export default connect(mapStateToProps)(Selected)