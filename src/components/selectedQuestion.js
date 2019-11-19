import React, { Component } from 'react'
import { connect } from 'react-redux'
import { formatQuestion } from '../utils/_DATA'
import { handleSaveQuestionAnswer } from '../actions/shared'
import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap'

class Selected extends Component {
    constructor(props) {
        super(props)
        this.state = {
            answer: '',
            id: this.props.id
        }
        this.getRadioValue = this.getRadioValue.bind(this)
    }

    getRadioValue() {
        var rate_value
        if (document.getElementById('r1').checked) {
            rate_value = document.getElementById('r1').value;
            this.props.dispatch(handleSaveQuestionAnswer(this.props.id.setSelectedReducer, rate_value))
        } else if (document.getElementById('r2').checked) {
            rate_value = document.getElementById('r2').value;
            this.props.dispatch(handleSaveQuestionAnswer(this.props.id.setSelectedReducer, rate_value))
        }
        this.setState(() => {
            return {
                answer: rate_value
            }
        })

        // this.props.dispatch(handleSaveQuestionAnswer(this.state.id.setSelectedReducer, rate_value)) 

    }

    render() {
        return (
            <div>
                <Link to='/unansweredQuestions'>Back To Home</Link>

                <div style={{ width: '50%', margin: 'auto', marginTop: '120px', textAlign: 'center', borderRadius: '3px', marginBottom: '20px', paddingBottom: '10px', backgroundColor: 'white' }}>
                    <div style={{ width: '100%', backgroundColor: '#343a40', padding: '40px', color: 'white' }}> {this.props.questions.author} </div>
                    <img style={{ width: '75px', marginTop: '-30px' }} alt='' src={this.props.user && this.props.user.avatarURL} />
                    <div id='answer'>
                        <input id='r1' type='radio' name="gender" value='optionOne' /> {this.props.questions.optionOne.text}  <br />
                        <input id='r2' type='radio' name="gender" value='optionTwo' /> {this.props.questions.optionTwo.text}  <br />
                    </div>

                    <Button variant="link" onClick={() => this.getRadioValue()}><Link to='/unansweredQuestions'>Submit answer</Link></Button>
                </div>
            </div>
        )
    }
}


function mapStateToProps({ setSelectedReducer, questionsReducer, usersReducer }, { id }) {
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
        setSelectedReducer,
        user: usersReducer[question.author]
    }
}

export default connect(mapStateToProps)(Selected)