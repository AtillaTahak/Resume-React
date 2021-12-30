import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import projectRedux from './Projects/ReduxProject';

const reducer = combineReducers({
    project:projectRedux,
})

const store = createStore(
    reducer,
    applyMiddleware(logger,thunk),
)

export default store;