import React, { Component } from 'react'
import {connect} from 'react-redux'

class User extends Component {
    render () {
        const { user } = this.props
        const { name, avatarURL, answers, questions } = user
        return (
            <li>
                <h2>{name}</h2>
                <img src={avatarURL} alt={`Avatar Of ${name}`} className='avatar' />
                <div className='user-details'>
                    <p>Answered questions: <span>{Object.keys(answers).length}</span></p>
                    <p>Created questions: <span>{Object.keys(questions).length}</span></p>
                    <div className='score'>Score: <span>{Object.keys(answers).length + Object.keys(questions).length}</span></div>
                </div>
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





