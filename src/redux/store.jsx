import {createStore} from 'redux';
import cakeReducer from './cake/cakeReducrs';

const store = createStore(cakeReducer);

export default store;