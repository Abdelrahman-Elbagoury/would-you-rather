export let SET_RESULT = 'SET_RESULT'

export default function setResult(id) {
    return {
        type: SET_RESULT,
        id
    }
}