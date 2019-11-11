import { SET_AUTHEDUSER } from '../actions/authedUser'

export function authedUserReducer(state='', action) {
    switch(action.type) {
        case SET_AUTHEDUSER:
            return {
                ...action.id
            }
        default:
            return state
    }
}