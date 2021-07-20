export const ADD_ANSWER = 'ADD_ANSWER'
export const ADD_QUESTION = 'ADD_QUESTION'

export const addAnswer = ({ qid, authedUser, answer }) => {
    return {
        type: ADD_ANSWER,
        answer : {
            qid,
            authedUser,
            answer
        }
    }
}
export const addQuestion = (question) => {
    return {
        type: ADD_QUESTION,
        question
    }
}


