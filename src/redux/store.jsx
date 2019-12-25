import {createStore,applyMiddleware} from 'redux';
import rootReducer from './roorReducers';
import logger from 'redux-logger';
// our store

const store = createStore(rootReducer,applyMiddleware(logger));

export default store;