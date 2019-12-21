// The Reducers
import { BUY_CAKE } from './cakeTypes';
const INITIAL_STATE = {
    numOfCake: 20
};

const cakeReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case BUY_CAKE:
            return {
                ...state,
                numOfCake: state.numOfCake - 1,
            }
        default:
            return state
    }
}
export default cakeReducer;