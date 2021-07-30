import types from '../actions/types';

export default function (state = {}, action) {
    switch (action.type) {
        case types.GET_FIVE_DAYS:
            return { ...state, fiveDaysProp: action.payload }
        default:
            return state;
    }
}