import React, { Component } from 'react'
import { connect } from 'react-redux'
import setUser from '../actions/authedUser'
import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap'
import images from '../assets/images.jpg'

class Login extends Component {
    handleChangeUser(e) {
        return (
            this.props.dispatch(setUser(e.target.value))
        )
    }
    render() {
        return (
            <div className='login'>
                <img style={{ width: '150px', marginTop: '140px' }} src={images} alt='game name' />
                <h1 className='game-title'>Would You Rather</h1>
                <select className='login-input' onChange={(e) => this.handleChangeUser(e)}>
                    <option style={{ opacity: '50%' }} value=''>Select user</option>
                    {this.props.users.map((user) => {
                        return (
                            <option key={user} value={user}>{user}</option>
                        )
                    })}
                </select><br />
                <Button variant="link">
                    <Link to={Object.values(this.props.authedUserReducer).join('') && '/unansweredQuestions'}>login</Link>
                </Button>
            </div>
        )
    }
}

function mapStateToProps({ usersReducer, authedUserReducer }) {
    return {
        users: Object.keys(usersReducer),
        user: usersReducer,
        authedUserReducer,
    }
}

export default connect(mapStateToProps)(Login)