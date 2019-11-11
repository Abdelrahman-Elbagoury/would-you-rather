import {SET_SELECTED} from '../actions/selected'

export default function setSelectedReducer(state='', action) {
    switch(action.type) {
        case SET_SELECTED:
            return action.id
        default:
            return state
    }
}