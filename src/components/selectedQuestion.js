import React, { Component } from 'react'
import { connect } from 'react-redux'
import { formatQuestion } from '../utils/_DATA'
import { handleSaveQuestionAnswer } from '../actions/shared'

class Selected extends Component {
    constructor(props) {
        super(props)
        this.state = {
            answer: '',
            id: this.props.id
        }
        this.getRadioValue = this.getRadioValue.bind(this)
    }
    componentDidMount() {
        console.log(this.props.id.setSelectedReducer)
        console.log(this.props.questions.id)
    }
    getRadioValue() {
        var rate_value
        if (document.getElementById('r1').checked) {
            rate_value = document.getElementById('r1').value;
        } else {
            rate_value = document.getElementById('r2').value;
        }
        this.setState(() => {
            return {
                answer: rate_value
            }
        })
        console.log(rate_value)
        console.log(this.state.id.setSelectedReducer)
        this.props.dispatch(handleSaveQuestionAnswer(this.state.id.setSelectedReducer, rate_value))

    }
    // handleAnswer() {
    //     let { id, answer } = this.state
    //     this.props.dispatch(handleSaveQuestionAnswer(id, answer))
    // }

    render() {
        return (
            <div>
                <div id='answer'>
                    <input id='r1' type='radio' name="gender" value={this.props.questions.optionOne.text} /> {this.props.questions.optionOne.text}  <br />
                    <input id='r2' type='radio' name="gender" value={this.props.questions.optionTwo.text} /> {this.props.questions.optionTwo.text}  <br />
                </div>
                <button onClick={() => this.getRadioValue()}>Submit answer</button>
            </div>
        )
    }
}


function mapStateToProps({ setSelectedReducer, questionsReducer }, { id }) {
    let question = questionsReducer[id.setSelectedReducer]
    console.log(question)
    return {
        questions: formatQuestion({
            optionOneText: question ? question.optionOne.text : '',
            optionTwoText: question ? question.optionTwo.text : '',
            author: question ? question.author : '',
            timestamp: question ? question.timestamp : '',
            ke: question ? question.id : ''
        }),
        setSelectedReducer
    }
}

export default connect(mapStateToProps)(Selected)