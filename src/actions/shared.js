import { _getQuestions, _getUsers, _saveQuestion, _saveQuestionAnswer } from '../utils/_DATA'
import {receiveQuestions, addQuestion, saveQuestionAnswer} from './questions'
import receiveUsers from './users'
import {addQuestionToUser, saveQuestionAnswerToAuthedUser} from './users'



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
        dispatch(addQuestionToUser(Object.values(authedUserReducer).join(''), question.id));
      });
    };
  }

  export function handleSaveQuestionAnswer(id, answer) {
    return (dispatch, getState) => {
      const { authedUserReducer } = getState();
  
      return _saveQuestionAnswer({
        authedUserReducer: Object.values(authedUserReducer).join(''),
        qid: id,
        answer
      })
        .then(dispatch(saveQuestionAnswer(id, answer, Object.values(authedUserReducer).join(''))))
        .then(dispatch(saveQuestionAnswerToAuthedUser(Object.values(authedUserReducer).join(''), id, answer)));
    };
  }