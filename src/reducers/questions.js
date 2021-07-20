import { RECEIVE_QUESTIONS } from "../actions/questions";
import { ADD_ANSWER, ADD_QUESTION } from "../actions/add";

const questions = (state = {}, action) => {
    switch (action.type) {
        case RECEIVE_QUESTIONS :
            return {
                ...state,
                ...action.questions,
            }
        case ADD_ANSWER :
            // const { qid, answer, authedUser } = action.answer

            return {
                ...state,
                [action.answer.qid] : {
                    ...state[action.answer.qid],
                    [action.answer.answer] : {
                        ...state[action.answer.qid][action.answer.answer],
                        votes: state[action.answer.qid][action.answer.answer].votes.concat([action.answer.authedUser])
                    }
                }
            }
            case ADD_QUESTION:
                return {
                    ...state,
                    [action.question.id]: action.question
                };
        default : 
            return state
    }
}

export default questions 
