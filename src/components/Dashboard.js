import React, { Component } from 'react';
import { connect } from "react-redux";
import Question from "./Question";

class Dashboard extends Component {
    state = {
        questionList : 'unanswered'
    }

    handleClick = (e) => {
        e.preventDefault();

        let myQuestion = e.target;

        if (myQuestion.getAttribute('data-questions')) {
            this.setState(() => ({
                questionList : myQuestion.getAttribute('data-questions'),
            }))
        }
    }

    render () {
        const { myAnsweredQuestions, myUnansweredQuestions} = this.props

        return (
            <div className='home'>
                <div>
                    <button type='button' data-questions='answered'
                        className='answer-q' onClick={this.handleClick}
                        disabled={this.state.questionList === 'answered'}
                        >
                            Answered <snap>{myAnsweredQuestions.length}</snap>
                    </button>
                </div>
                <div>
                    <button type='button' data-questions='unanswered' 
                        className='answer-q' onClick={this.handleClick}
                        disabled={this.state.questionList === 'unanswered'}
                    >Unanswered <span>{myUnansweredQuestions.length}</span></button>
                </div>
                <ul className='questions'>
                    <li className='question-list '>
                        {this.state.questionList === 'unanswered' && (
                            <div>
                                <h3>Unanswered Questions</h3>
                            {myUnansweredQuestions.length > 0 
                                ? (
                                    <ul className='unanswered-questions'>
                                        {myUnansweredQuestions.map((id) => <li key = {id}><Question id={id} /></li>)}
                                    </ul>
                                )
                                : (
                                    <div className='empty'>
                                        <h2>Very Good</h2>
                                        <p>You can make a new questions </p>
                                    </div>
                                )
                            }
                        </div>
                        )}
                    </li>
                    <li className='question-list'> 
                        {this.state.questionList === 'answered' && (
                            <div>
                                <h3>Answered Questions</h3>
                                {myAnsweredQuestions.length > 0 
                                    ? (
                                        <ul className='answered-questions'>
                                            {myAnsweredQuestions.map((id) => <li key = {id}><Question id={id} /></li>)}
                                        </ul>
                                    )
                                    : (
                                        <div className='empty'>
                                            <h2>Very Good</h2>
                                            <p>You can make a new questions </p>
                                        </div>
                                    )
                                }
                            </div>
                        )}
                    </li>
                </ul>
            </div>
        )
    }
}


const mapStateToProps = ({ authedUser, questions, users }) => {
    const myAuthedUser = users[authedUser]

    const myAnsweredQuestions = Object.keys(questions)
        .filter((id) => myAuthedUser.answers.hasOwnProperty(id))
        .sort((a,b) => questions[b].timestamp - questions[a].timestamp)

    const myUnansweredQuestions = Object.keys(questions)
        .filter((id) => !users[authedUser].answers.hasOwnProperty(id))
        .sort((a, b) => questions[b].timestamp - questions[a].timestamp)

    return {
        myAnsweredQuestions,
        myUnansweredQuestions
    }
}

export default connect(mapStateToProps)(Dashboard)


