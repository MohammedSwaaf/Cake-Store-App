import { combineReducers } from 'redux';
import cakeReducer from './cake/cakeReducrs';
import iceReducer from './iceCream/iceReducers';

const rootReducer = combineReducers({
    cake: cakeReducer,
    ice: iceReducer
})
export default rootReducer;