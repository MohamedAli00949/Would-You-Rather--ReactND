import React, { Component } from 'react'
import { formatQuestion } from '../utils/helper'
import { connect } from 'react-redux'

class MyAnsweredQuestion extends Component {
    render () {
        const { question, authedUser } = this.props
        const { optionOne, optionTwo, name, avatar} = question
        const solves = optionOne.votes.length + optionTwo.votes.length;
        return (
            <div className='answerded-question' >
                <div><h2>Asked by {name}</h2></div>
                <img src={avatar} alt={`Avatar Of ${name}`} className='avatar'/>
                <div className='results'>
                    <div className='optionOne'>
                        <h3>Would you rather {optionOne.text}</h3>
                        <h5>{optionOne.votes.includes(authedUser) && (<span>--- Your Answer ---</span>)}</h5>
                        <h4>{optionOne.votes.length} out of {solves} users </h4>
                    </div>
                    <div className='optionTwo'>
                        <h3>Would you rather {optionTwo.text}</h3>
                        <h5>{optionTwo.votes.includes(authedUser) && (<span>--- Your Answer ---</span>)}</h5>
                        <h4>{optionTwo.votes.length} out of {solves} users </h4>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = ({ questions, users, authedUser }, { id }) => {
    const myQuestion = questions[id];

    return {
        question: myQuestion ? formatQuestion(myQuestion, users[myQuestion.author]) : null,
        authedUser
    }
}

export default connect(mapStateToProps)(MyAnsweredQuestion);


