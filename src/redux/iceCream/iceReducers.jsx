import { BUY_ICE } from './iceTypes'
const INITIAL_STATE = {
    numOfIce: 30
};

const iceReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case BUY_ICE:
            return {
                ...state,
                numOfIce: state.numOfIce - 1
            }
        default:
            return state
    }
}
export default iceReducer;