import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Table } from 'react-bootstrap'
import { Link } from 'react-router-dom'

class LeaderBoard extends Component {
    componentDidMount() {
        // console.log(this.props.ids)
        console.log(this.props.users)
    }
    render() {
        return (
            <div>
                <Link to='/unansweredQuestions'>Back To Home</Link>
                <Table style={{ textAlign: 'center' }} striped bordered hover size="sm">
                    <thead>
                        <tr>
                            <th>Profile Picture</th>
                            <th>Name</th>
                            <th>Asked</th>
                            <th>Answered</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.props.usersID.map((user, index) => {
                                return (
                                    <tr key={index}>
                                        <td>
                                            <img alt={this.props.users[user].name} style={{ width: '50px' }} src={this.props.users[user].avatarURL} />
                                        </td>
                                        <td style={{ paddingTop: '15px' }}>
                                            {this.props.users[user].name}
                                        </td>
                                        <td style={{ paddingTop: '15px' }}>
                                            {this.props.users[user].questions.length}</td>
                                        <td style={{ paddingTop: '15px' }}>
                                            {Object.keys(this.props.users[user].answers).length}</td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </Table>
            </div>
        )
    }
}

function mapStateToProps({ usersReducer }) {
    return {
        usersID: Object.keys(usersReducer),
        users: usersReducer
    }
}

export default connect(mapStateToProps)(LeaderBoard)