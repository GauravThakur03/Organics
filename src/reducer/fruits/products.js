const SET_PARAMS = 'SET_PARAMS';

const defaultState = [];

function setSelection(state, action) {
    return  action.params;
}

export default function (state = defaultState, action) {
    const actionHandlers = {
        [SET_PARAMS]: setSelection
    };
    const reducer = actionHandlers[action.type];

    return reducer ? reducer(state, action) : state;
}
