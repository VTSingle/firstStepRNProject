import * as types from '../../constants/numberConstants/numberConstants';

const initialState = {
    numbers: 1
};

const number = (state = initialState, action) => {
    switch (action.type) {
        case types.INCREMENT:
            return {numbers: state.numbers + 1};
        default:
            return state
    }
};
export default number