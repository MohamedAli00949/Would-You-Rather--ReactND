export const RECEIVE_QUESTION = 'RECEIVE_QUESTION'

export const receiveQuestions = (questions) => {
    return {
        type: RECEIVE_QUESTION,
        questions,
    }
}