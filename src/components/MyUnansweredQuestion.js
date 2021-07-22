import React, { Component } from 'react';
import { connect } from 'react-redux';
import { formatQuestion } from '../utils/helper'
import { handleAddAnswer } from '../actions/shared'
import { Redirect } from 'react-router-dom'

class MyUnansweredQuestion extends Component {

    state = {
        myOption: '',
    }

    handleclick = (e) => {
        let myChoose = e.target.getAttribute('id');
        this.setState(() => ({
            myOption: myChoose
        }))
    }

    handleSubmit = (qid, e) => {
        const answer = this.state.myOption;
        const { dispatch, authedUser } = this.props;
        e.preventDefault()
        // const { dispatch, authedUser} = this.props;
        dispatch(handleAddAnswer( qid, answer, authedUser ))
    }
    render(){
        const { question } = this.props
        if(!question) {
            return <Redirect to='/404' />
        }
        const { id, optionOne, optionTwo, name, avatar} = question
        const {myOption} = this.state
        return(
            <form onSubmit={(e) => this.handleSubmit(id, e)} className='unanswered-q'>
                <div><h3>{name} asks:</h3></div>
                <img src={avatar} alt={`Avatar Of ${name}`} className='avatar'/>
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
                        {optionTwo.text}
                    </label>
                </div>
                <button type='submit' className='submit-button' disabled={myOption === ''}>
                    Submit
                </button>
            </form>
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

export default connect(mapStateToProps)(MyUnansweredQuestion);