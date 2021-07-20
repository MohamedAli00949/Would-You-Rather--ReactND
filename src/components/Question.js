import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { formatDate, formatQuestion } from "../utils/helper";

class Question extends  Component {
    render() {
		const { question } = this.props;

        const { id, optionOne, timestamp , name, avatar} = question
        // const {  name, avatarURL } = author

        return (
            <div className='question' key={id}>
                <div className='question-top'>
                    <h2>{name} asks :</h2>
                    <h3>{formatDate(timestamp)}</h3>
                </div>
                <div className='question-button'>
                    <img src={avatar} alt={`Avatar Of ${name}`} className='avatar' />
                    <h3>Whould You Rather ?</h3>
                    <p>... {optionOne.text} ...</p>

                    <Link to={`/questions/${id}`}><button>View Poll</button></Link>
                </div>

            </div>
        )
    }
}

const mapStateToProps = ({ users, questions }, { id }) => {
    const question = questions[id]

    return {
        question: question
            ? formatQuestion(question, users[question.author]) 
            : null,
    }
}

export default connect(mapStateToProps)(Question)



