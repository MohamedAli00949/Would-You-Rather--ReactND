import React, { Component } from 'react'
import { connect } from 'react-redux'
import User from './User'

class LeaderBoard extends Component {
    render(){
        const {usersIds} = this.props
        return (
            <ul className='leader-board' >
                {usersIds.map((id) => (
                    <User id={id} key={id} />
                ))}
            </ul>
        )
    }
}

const mapStateToProps = ({users}) => {
    return {
        usersIds: Object.keys(users).sort((a,b) => 
            (Object.keys(users[b].answers).length + users[b].questions.length) - (Object.keys(users[a].answers).length + users[a].questions.length))
    }

}

export default connect(mapStateToProps)(LeaderBoard)