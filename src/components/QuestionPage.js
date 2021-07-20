import React, { Component } from 'react'
import { connect } from 'react-redux'
import { formatQuestion } from '../utils/helper'
import { handleAddQuestionToAnswered } from '../actions/shared'

class QuestionPage extends Component {
    state = {
        myOption: '',
    }

    handleclick = (e) => {
        let myChoose = e.target.getAttribute('id');
        this.setState(() => ({
            myOption: myChoose
        }))
    }

    handleSubmit = (e) => {
        e.preventDefault()
        const {myOption} = this.state
        const { dispatch, authedUser, id } = this.props;
        dispatch(handleAddQuestionToAnswered(authedUser, id, myOption))
    }

    // At Styling : put progress bar for all answered question

    render () {
        const { question, authedUser, hasAnswered } = this.props
        const { id, optionOne, optionTwo, name, avatar} = question
        const solveOne = optionOne.votes.length;
        const solveTwo = optionTwo.votes.length;
        const solves = solveOne + solveTwo

        const {myOption} = this.state

        return (
            <div>
                {hasAnswered && (
                    <div className='answerded-question' key={id}>
                        <div><h2>Asked by {name}</h2></div>
                        <img src={avatar} alt={`Avatar Of ${name}`} className='avatarTwo'/>
                        <div className='results'>
                            <div className='optionOne'>
                                <h3>Would you rather {optionOne.text}</h3>
                                <h5>{optionOne.votes.includes(authedUser) && (<span>Your Answer</span>)}</h5>
                                <h4>{solveOne} out of {solves} </h4>
                            </div>
                            <div className='optionTwo'>
                                <h3>Would you rather {optionTwo.text}</h3>
                                <h5>{optionTwo.votes.includes(authedUser) && (<span>Your Answer</span>)}</h5>
                                <h4>{solveOne} out of {solves} </h4>
                            </div>
                        </div>
                    </div>
                )}
                {!hasAnswered && (
                    <form onSubmit={this.handleSubmit}>
                        <div><h3>{name} asks:</h3></div>
                        <h2>Would You Rather ...</h2>
                        <div className='option'>
                            <input type='radio' id='optionOne' name='answer' onChange={this.handleclick} checked={myOption === 'optionOne'} />
                            <label htmlFor='optionOne' >
                                {optionOne.text}
                            </label>
                        </div>
                        <div className='option'>
                            <input type='radio' id='optionTwo' name='answer' onChange={this.handleclick} checked={myOption === 'optionTwo'} />
                            <label htmlFor='optionTwo'>
                                {optionOne.text}
                            </label>
                        </div>
                        <button type='submit' className='submit-button' disabled={myOption === ''}>
                            Submit
                        </button>
                    </form>
                )}
            </div>
        )
    }
}

const mapStateToProps = ({ authedUser, questions, users }, props) => {
    const id = props.match.params.id;
    const question = questions[id]
    const myAuthor = users[question.author]
    const answers = users[authedUser].answers
    const hasAnswered = answers.hasOwnProperty(id) ? true : false

    return {
        question: question
        ? formatQuestion(question, myAuthor) 
        : null,
        authedUser,
        hasAnswered
    }
}

export default connect(mapStateToProps)(QuestionPage)

