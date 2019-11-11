export let SET_SELECTED = 'SET_SELECTED'

export default function setSelected(id) {
    return {
        type: SET_SELECTED,
        id
    }
}