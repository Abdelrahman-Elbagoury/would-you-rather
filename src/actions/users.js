
export const RECEIVE_USERS = 'RECEIVE_USERS'
export const ADD_QUESTION_TO_USER = 'ADD_QUESTION_TO_USER'
export const SAVE_QUESTION_ANSWER_TO_AUTHED_USER = 'SAVE_QUESTION_ANSWER_TO_AUTHED_USER'

export default function receiveUsers(users) {
    return {
        type: RECEIVE_USERS,
        users
    }
}

export function addQuestionToUser(user, id) {
    return {
        type: ADD_QUESTION_TO_USER,
        user,
        id
    }
}

export function saveQuestionAnswerToAuthedUser(authedUser, id, answer) {
    return {
      type: SAVE_QUESTION_ANSWER_TO_AUTHED_USER,
      authedUser,
      id,
      answer
    };
  }