import {createStore} from 'redux';
import rootReducer from './roorReducers';


const store = createStore(rootReducer);

export default store;