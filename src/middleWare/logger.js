import {store} from '../index'

export default function logger({ getState }) {
    return next => action => {
        console.group('will dispatch', action)

        // Call the next dispatch method in the middleware chain.
        const returnValue = next(action)

        console.log('state after dispatch', store.getState())
        console.groupEnd()

        // This will likely be the action itself, unless
        // a middleware further in chain changed it.
        return returnValue
    }
}