import { getInitialData , saveQuestionAnswer, saveQuestion} from '../utils/API'
import { receiveUsers } from './users'
import { receiveQuestions, addAnswer, addQuestion } from './questions'
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

export function handleAddAnswer(qid, answer, authedUser) {
	return (dispatch, getState) => {
		// const { authedUser } = getState();

		dispatch(showLoading());

		return saveQuestionAnswer({
			qid,
			answer,
			authedUser
		})
			.then(() =>
				dispatch(
					addAnswer({
						qid,
						answer,
						authedUser
					})
				)
			)
			.then(() => dispatch(hideLoading()));
	};
}

export const handleAddQuestion = (optionOne, optionTwo, authedUser) => {
    return (dispatch) => {
        dispatch(showLoading())
        return saveQuestion({
            optionOneText : optionOne,
            optionTwoText : optionTwo,
            author : authedUser
        })
            .then((question) => dispatch(addQuestion(question)))
            .then (() => dispatch(hideLoading()))
    }
}