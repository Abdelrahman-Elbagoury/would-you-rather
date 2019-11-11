import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import combineReducers from './reducers/index'
import thunk from 'redux-thunk'
import logger from './middleWare/logger'

export let store = createStore(combineReducers, applyMiddleware(thunk, logger))

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);

