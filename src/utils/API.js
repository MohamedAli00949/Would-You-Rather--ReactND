import { 
    _getUsers, 
    _getQuestions, 
    _saveQuestion, 
    _saveQuestionAnswer 
} from './_DATA.js'

/**
 * First, get data from the fake database at _DATA.js that I make by this function
 */

export const getInitialData = () => {
    return Promise.all([
        _getUsers(),
        _getQuestions(),
    ])
        .then(([users, questions]) => ({
            users,
            questions,
        }))
}

export const saveQuestion = (question) => {
    return _saveQuestion(question)
}

export const saveQuestionAnswer = (answer) => {
    return _saveQuestionAnswer(answer)
}


