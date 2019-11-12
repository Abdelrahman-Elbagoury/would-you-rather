import { _getQuestions, _getUsers, _saveQuestion } from '../utils/_DATA'
import {receiveQuestions, addQuestion} from './questions'
import receiveUsers from './users'


export function getInitialData() {
    return ((dispatch) => {
        return ( _getQuestions().then((questions) => {
            dispatch(receiveQuestions(questions))
        }).then(_getUsers().then((users) => {
            dispatch(receiveUsers(users))
        }))
        )
    })
}

export function handleAddQuestion(optionOneText, optionTwoText) {
    return (dispatch, getState) => {
      const { authedUserReducer } = getState();
  
      return _saveQuestion({
        author: Object.values(authedUserReducer).join(''),
        optionOneText,
        optionTwoText
      }).then(question => {
        dispatch(addQuestion(question));
        // dispatch(addQuestionToAuthedUser(authedUser, question.id));
      });
    };
  }