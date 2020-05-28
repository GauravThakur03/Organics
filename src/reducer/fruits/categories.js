const SET_CATEGORY = 'SET_CATEGORY';

const defaultState = [];

function setCategory(state, action) {
    return  action.category;
}

export default function (state = defaultState, action) {
    const actionHandlers = {
        [SET_CATEGORY]: setCategory
    };
    const reducer = actionHandlers[action.type];

    return reducer ? reducer(state, action) : state;
}
