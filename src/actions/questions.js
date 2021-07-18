export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTION'

export const receiveQuestions = (questions) => {
    return {
        type: RECEIVE_QUESTIONS,
        questions,
    }
};