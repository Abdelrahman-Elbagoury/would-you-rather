
export const SET_AUTHEDUSER = 'SET_AUTHEDUSER'

export default function setUser(id) {
    return {
        type: SET_AUTHEDUSER,
        id
    }
}