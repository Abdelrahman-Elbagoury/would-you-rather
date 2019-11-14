import { RECEIVE_USERS, ADD_QUESTION_TO_USER, SAVE_QUESTION_ANSWER_TO_AUTHED_USER } from '../actions/users'

export function usersReducer(state = {}, action) {
    switch (action.type) {
        case RECEIVE_USERS:
            return {
                ...state,
                ...action.users
            }
        case ADD_QUESTION_TO_USER:
            return {
                ...state,
                [action.user]: {
                    ...state[action.user],
                    questions: state[action.user].questions.concat(action.id)
                }
            }
        case SAVE_QUESTION_ANSWER_TO_AUTHED_USER:
            const { answer } = action;
            return {
                ...state,
                [action.authedUser]: {
                    ...state[action.authedUser],
                    answers: {
                        ...state[action.authedUser].answers,
                        [action.id]: answer
                    }
                }
            };
        default:
            return state
    }
}