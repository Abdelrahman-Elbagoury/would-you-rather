import { SET_AUTHEDUSER, RESET_AUTHEDUSER } from '../actions/authedUser'

export function authedUserReducer(state='', action) {
    switch(action.type) {
        case SET_AUTHEDUSER:
            return {
                ...action.id
            }
        case RESET_AUTHEDUSER:
            return {
                undefined
            }
        default:
            return state
    }
}