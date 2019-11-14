import React, { Component } from 'react'
import { connect } from 'react-redux'
import setUser from '../actions/authedUser'
import { Link } from 'react-router-dom'

class Login extends Component {

    handleChangeUser(e) {
        return (
            this.props.dispatch(setUser(e.target.value))
        )
    }

    render() {
        return (
            <div>
                <select onChange={(e) => this.handleChangeUser(e)}>
                    <option value=''></option>
                    {this.props.users.map((user) => {
                        return (
                            <option key={user} value={user}>{user}</option>
                        )
                    })}
                </select><br />
                <button><Link to='/answeredQuestion'>login</Link></button>
            </div>
        )
    }
}

function mapStateToProps({ usersReducer, authedUserReducer }) {
    return {
        users: Object.keys(usersReducer),
        authedUserReducer
    }
}

export default connect(mapStateToProps)(Login)