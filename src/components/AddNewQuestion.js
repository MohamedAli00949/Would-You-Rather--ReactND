import React, { Component } from 'react';
import { connect } from 'react-redux';
import { handleAddQuestion } from '../actions/shared'

class AddNewQuestion extends Component {
    state = {
        optionOne: '',
        optionTwo: '',
    }

    handleChange = (e) => {
        e.preventDefault();
        this.setState({ [e.target.id] : e.target.value, });
    }

    handleSubmit = (e) =>{
        e.preventDefault();
        const { optionOne, optionTwo } = this.state;
        const { dispatch, authedUser } = this.props;
        this.setState({optionOne: '', optionTwo: ''});
        dispatch(handleAddQuestion(optionOne, optionTwo, authedUser));
    }

    render () {
        const { optionOne, optionTwo } = this.state
        return (
            <form className='new-question' onSubmit={this.handleSubmit}>
                <div className='top'><h2>Create New Question</h2></div>
                <p>Complete the question:</p>
                <h3>Would you rather ...</h3>
                <input type='text' id='optionOne' onChange={this.handleChange} value={optionOne} placeholder='Enter Option One Text Hear' />
                <input type='text' id='optionTwo' onChange={this.handleChange} value={optionTwo} placeholder='Enter Option Two Text Hear' />
                <button type='submit' disabled={optionOne === '' || optionTwo === ''} />
            </form>
        )
    }
}

const mapStateToProps = ({authedUser}) => {
    return {
        authedUser,
    }
}

export default connect(mapStateToProps)(AddNewQuestion)




