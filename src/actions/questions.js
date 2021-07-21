export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTION'
export const ADD_ANSWER = 'ADD_ANSWER'
export const ADD_QUESTION = 'ADD_QUESTION'

export const receiveQuestions = (questions) => {
    return {
        type: RECEIVE_QUESTIONS,
        questions,
    }
};

export const addAnswer = ({ qid, answer, authedUser }) => {
    return {
        type: ADD_ANSWER,
        answer : {
            qid,
            answer,
            authedUser
        }
    }
}
export const addQuestion = (question) => {
    return {
        type: ADD_QUESTION,
        question
    }
}