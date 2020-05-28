import { GET_TRACK } from '../../actionTypes';

const defaultState = [];

function setTracking(state, action) {
    return  action.tracking;
}

export default function (state = defaultState, action) {
    const actionHandlers = {
        [GET_TRACK]: setTracking
    };
    const reducer = actionHandlers[action.type];

    return reducer ? reducer(state, action) : state;
}
