import React, { Component } from 'react'
import { connect } from 'react-redux'

class LeaderBoard extends Component{
    componentDidMount() {
        console.log(this.props.ids)
    }
    render(){
        return (
            <div>
                {
                    // this.props.users
                }
            </div>
        )
    }
}
function mapStateToProps(userReducer) {
    return {
        ids: Object.keys(userReducer.usersReducer),
    }
}

export default connect (mapStateToProps)(LeaderBoard)