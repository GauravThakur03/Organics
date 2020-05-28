import { SET_CART } from '../../actionTypes';

const defaultState = {
	count: 0,
	cartItems: []
};

function setCart(state, action) {
    return  action.cart;
}

export default function (state = defaultState, action) {
    const actionHandlers = {
        [SET_CART]: setCart
    };
    const reducer = actionHandlers[action.type];

    return reducer ? reducer(state, action) : state;
}
