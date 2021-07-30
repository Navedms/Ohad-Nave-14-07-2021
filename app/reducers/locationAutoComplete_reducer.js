import types from '../actions/types';

export default function (state = {}, action) {

    switch (action.type) {
        case types.GET_AUTO_COMPLETE:
            return { ...state, autoCompleteProp: action.payload }
        default:
            return state;
    }
}