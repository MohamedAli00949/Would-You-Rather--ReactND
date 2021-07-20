import React, { Component } from 'react'
import {connect} from 'react-redux'

class User extends Component {
    render () {
        const {user} = this.props
        const { name, avatarURL, answers, qustions } = user
        return (
            <li>
                <h2>{name}</h2>
                <img src={avatarURL} alt={`Avatar Of ${name}`} />
                <p>Answered questions <span>{Object.keys(answers).length}</span></p>
                <p>Created questions <span>{Object.keys(qustions).length}</span></p>
                <div className='score'>Score <span>{Object.keys(answers).length + Object.keys(qustions).length}</span></div>
            </li>
        )
    }
}

const mapStateToProps = ({users}, {id}) => {
    return {
        user: users[id],
    }
}

export default connect(mapStateToProps)(User)





