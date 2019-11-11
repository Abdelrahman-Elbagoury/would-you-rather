import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import {handleAddQuestion} from '../actions/shared'
import { connect } from 'react-redux'

class NewQuestion extends Component {
    state = {
        optionOneText:'',
        optionTwoText:'',
    }
    handleNewQuestion() {
        this.props.dispatch(handleAddQuestion(this.state.optionOneText, this.state.optionTwoText))
    }
    render() {
        return (
            <div>
                <Link to='/home'>home</Link><br/>
                <input onChange={e =>
                    this.setState({ optionOneText: e.target.value })
                  } />
                <br/>
                or
                <br/>
                <input onChange={e =>
                    this.setState({ optionTwoText: e.target.value })
                  } /><br/>
                <button onClick={() => this.handleNewQuestion() }>save question</button>
            </div>
        )
    }
}


export default connect()(NewQuestion)