import React, { Component } from 'react'
import { formatQuestion } from '../utils/helper'
import { connect } from 'react-redux'

class MyAnsweredQuestion extends Component {
    render () {
        const { question, authedUser } = this.props
        const { optionOne, optionTwo, name, avatar} = question
        const optionOneSolve = optionOne.votes.length
        const optionTwoSolve = optionTwo.votes.length
        const solves = optionOneSolve + optionTwoSolve;
        const optionOnePercent = Math.round((optionOneSolve / solves) * 100 )
        const optionTwoPercent = Math.round((optionTwoSolve / solves) * 100 )
        return (
            <div className='answerded-question' >
                <div><h2>Asked by {name}</h2></div>
                <img src={avatar} alt={`Avatar Of ${name}`} className='avatar'/>
                <div className='results'>
                    <div className='optionOne'>
                        <h3>Would you rather {optionOne.text}</h3>
                        <div className='percent'>
                            <div className='percent-bar' style={{width:`${optionOnePercent}%`, borderRadius: "20px",backgroundColor: 'aqua',}}>{optionOnePercent}%</div>
                        </div>
                        <h5>{optionOne.votes.includes(authedUser) && (<mark>--- Your Answer ---</mark>)}</h5>
                        <h4>This solve choosen {optionOneSolve} out of {solves} users </h4>

                    </div>
                    <div className='optionTwo'>
                        <h3>Would you rather {optionTwo.text}</h3>
                        <div className='percent'>
                            <div className='percent-bar' style={{width:`${optionTwoPercent}%`, borderRadius: "20px",backgroundColor: 'aqua'}}>{optionTwoPercent}%</div>
                        </div>
                        <h5>{optionTwo.votes.includes(authedUser) && (<mark>--- Your Answer ---</mark>)}</h5>
                        <h4>{optionTwoSolve} out of {solves} users </h4>
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


