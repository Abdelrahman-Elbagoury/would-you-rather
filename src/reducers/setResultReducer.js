import {SET_RESULT} from '../actions/setResult'

export default function setResultReducer(state='', action) {
    switch(action.type) {
        case SET_RESULT:
            return action.id
        default:
            return state
    }
}