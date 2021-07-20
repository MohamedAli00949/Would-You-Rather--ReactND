import { getInitialData , saveQuestionAnswer, saveQuestion} from '../utils/API'
import { receiveUsers } from './users'
import { receiveQuestions } from './questions'
import { addAnswer, addQuestion } from './add'
import { showLoading, hideLoading } from "react-redux-loading"

export const handleInitialData = () => {
    return (dispatch) => {
        dispatch(showLoading())
        return getInitialData()
            .then(({ users, questions }) => {
                dispatch(receiveUsers(users))
                dispatch(receiveQuestions(questions))
                dispatch(hideLoading())
            })
    }
}

export const handleAddQuestionToAnswered = (authedUser, id, answer) => {
    return (dispatch) => {
        dispatch(showLoading())
        return saveQuestionAnswer({
            id,
            answer,
            authedUser
        })
            .then(() => {
                dispatch(addAnswer({id,authedUser,answer}))
                dispatch(hideLoading())
            })
    }
}

export const handleAddQuestion = (optionOne, optionTwo, authedUser) => {
    return (dispatch) => {
        dispatch(showLoading())
        return saveQuestion({
            optionOneText : optionOne,
            optionTwoText : optionTwo,
            author : authedUser
        })
            .then((question) => {
                dispatch(addQuestion(question))
                dispatch(hideLoading())
            })
    }
}