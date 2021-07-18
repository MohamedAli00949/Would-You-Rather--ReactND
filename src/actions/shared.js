import { getInitialData } from '../utils/API'
import { receiveUsers } from './users'
import { setAuthedUser } from './authedUser'
import { receiveQuestions } from './questions'

const ATHED_ID = 'tylermcginnis'


export const handleInitialData = () => {
    return (dispatch) => {
        return getInitialData()
            .then(({ users, questions }) => {
                dispatch(receiveUsers(users))
                dispatch(receiveQuestions(questions))
                dispatch(setAuthedUser(ATHED_ID))
            })
    }
}