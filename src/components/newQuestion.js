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
        this.props.dispatch(handleAddQuestion(this.state.optionOneText, this.state.optionTwoText))
    }
    render() {
        return (
            <div>
                <Link to='/home'>home</Link><br />
                <input onChange={e =>
                    this.setState({ optionOneText: e.target.value })
                } />
                <br />
                or
                <br />
                <input onChange={e =>
                    this.setState({ optionTwoText: e.target.value })
                } /><br />
                <Link to='/home'>
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