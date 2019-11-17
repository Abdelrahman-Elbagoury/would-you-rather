import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { handleAddQuestion } from '../actions/shared'
import { connect } from 'react-redux'

class NewQuestion extends Component {
    constructor(props) {
        super(props)
        this.state = {
            optionOneText: '',
            optionTwoText: '',
        }
        this.handleNewQuestion = this.handleNewQuestion.bind(this)
    }
    handleNewQuestion() {
        if(this.state.optionOneText.length > 0 && this.state.optionTwoText.length) {
            this.props.dispatch(handleAddQuestion(this.state.optionOneText, this.state.optionTwoText))
        }
    }
    render() {
        return (
            <div style={{ width: '40%', margin: 'auto', textAlign: 'center', borderRadius: '3px', marginTop: '150px', padding: '40px', backgroundColor: 'white' }}>
                <Link to='/unansweredQuestions'>return to home</Link>
                <br/>
                <br/>
                <input onChange={e =>
                    this.setState({ optionOneText: e.target.value })
                } />
                <br />
                or
                <br />
                <input onChange={e =>
                    this.setState({ optionTwoText: e.target.value })
                } /><br />
                <br/>
                <Link to={(this.state.optionOneText.length > 0 && this.state.optionTwoText.length) ? '/unansweredQuestions' : 'newQuestion'}>
                    <button onClick={() => this.handleNewQuestion()}>save question</button>
                </Link>
            </div>
        )
    }
}

// function mapStateToProps(authedUserReducer) {
//     return {
//         user: usersReducer[Object.values(authedUserReducer).join('')]
//     }
// }

export default connect()(NewQuestion)