import { SET_CART, INCREASE_QTY, DECREASE_QTY, CLEAR_CART, REMOVE_CART_ITEM } from '../../actionTypes';

const defaultState = {
	count: 0,
	cartItems: []
};

function addItem(state, action) {
    return  {
      ...state,
      count: state.count + 1,
      cartItems: [...state.cartItems, action.cartItem]
    };
}

function removeItem(state, action) {
    const cartItems = state.cartItems.filter(item => item.prodID !== action.prodID);
    const quantity = state.cartItems.find(item => item.prodID === action.prodID).prodQuant;

    return  {
      ...state,
      count: state.count - quantity,
      cartItems
    };
}

function increaseQuantity(state, action) {
  return {
        ...state,
        count: state.count + 1,
        cartItems: state.cartItems.map(item => item.prodID === action.prodID ? { ...item, prodQuant: item.prodQuant + 1 } : item) 
    };  
}

function decreaseQuantity(state, action) {
  const product = state.cartItems.find(item => item.prodID === action.prodID);
  
  if (product.prodQuant > 1) {
    return {
        ...state,
        count: state.count - 1,
        cartItems: state.cartItems.map(item => item.prodID === action.prodID ? { ...item, prodQuant: item.prodQuant - 1 } : item) 
    };
  } else {
    return removeItem(state, action)
  }
}

function clearCart() {
  return defaultState;
}

export default function (state = defaultState, action) {
    const actionHandlers = {
        [SET_CART]: addItem,
        [INCREASE_QTY]: increaseQuantity,
        [DECREASE_QTY]: decreaseQuantity,
        [CLEAR_CART]: clearCart,
        [REMOVE_CART_ITEM]: removeItem
    };
    const reducer = actionHandlers[action.type];

    return reducer ? reducer(state, action) : state;
}
