const GET_ORDERS = 'GET_ORDERS';

const defaultState = [];

function setOrders(state, action) {
    return  action.orders;
}

export default function (state = defaultState, action) {
    const actionHandlers = {
        [GET_ORDERS]: setOrders
    };
    const reducer = actionHandlers[action.type];

    return reducer ? reducer(state, action) : state;
}
