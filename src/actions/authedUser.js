
export const SET_AUTHEDUSER = 'SET_AUTHEDUSER'
export const RESET_AUTHEDUSER = 'RESET_AUTHEDUSER'

export default function setUser(id) {
    return {
        type: SET_AUTHEDUSER,
        id
    }
}

export function resetUser() {
    return {
        type: RESET_AUTHEDUSER,
    }
}