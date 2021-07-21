import React, { Component } from 'react'
import { connect } from 'react-redux'
import MyUnansweredQuestion from './MyUnansweredQuestion'
import MyAnsweredQuestion from './MyAnsweredQuestion'

class QuestionPage extends Component {
    // state = {
    //     myOption: '',
    // }

    // handleclick = (e) => {
    //     let myChoose = e.target.getAttribute('id');
    //     this.setState(() => ({
    //         myOption: myChoose
    //     }))
    // }

    // handleSubmit = (id, e) => {
    //     const answer = this.state.value;
    //     const { dispatch, authedUser } = this.props;
    //     e.preventDefault()
    //     if (answer !== '') {
    //         dispatch(handleAddQuestionToAnswered(authedUser, id, answer))
    //     }
    //     // const { dispatch, authedUser, id } = this.props;
    //     // dispatch(handleAddQuestionToAnswered(authedUser, id, myOption))
    // }

    // At Styling : put progress bar for all answered question

    render () {
        const { answers , match } = this.props
        const id = match.params.id
        const qAnswered = answers.hasOwnProperty(id) ? true : false;

        return (
            <div>
                {qAnswered && ( <MyAnsweredQuestion id={id} /> )}
                {!qAnswered && ( <MyUnansweredQuestion id={id} /> )}
            </div>
        )
    }
}

const mapStateToProps = ({ authedUser, users }) => {

    const answers = users[authedUser].answers

    return {
        answers
    }
}

export default connect(mapStateToProps)(QuestionPage)

