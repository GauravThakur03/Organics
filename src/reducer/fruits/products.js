import { SET_PRODUCTS } from '../../actionTypes';

const defaultState = [];

function setSelection(state, action) {
    return  action.params;
}

export default function (state = defaultState, action) {
    const actionHandlers = {
        [SET_PRODUCTS]: setSelection
    };
    const reducer = actionHandlers[action.type];

    return reducer ? reducer(state, action) : state;
}
