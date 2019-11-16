import { combineReducers } from 'redux'
import {usersReducer} from './users'
import {questionsReducer} from './questions'
import {authedUserReducer} from './authedUserReducer'
import setSelectedReducer from './setSelectedReducer'
import setResultReducer from './setResultReducer'

export default combineReducers({
    usersReducer,
    questionsReducer,
    authedUserReducer,
    setSelectedReducer,
    setResultReducer
  })