import { SET_ORDERS } from '../../actionTypes';

const defaultState = [];

function setOrders(state, action) {
    return  action.orders;
}

export default function (state = defaultState, action) {
    const actionHandlers = {
        [SET_ORDERS]: setOrders
    };
    const reducer = actionHandlers[action.type];
    return reducer ? reducer(state, action) : state;
}
