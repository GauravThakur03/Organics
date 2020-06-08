import { SET_CATEGORY, SET_CART, INCREASE_QTY, DECREASE_QTY, CLEAR_CART, REMOVE_CART_ITEM, SET_ORDERS, GET_ORDERS} from '../actionTypes';
import { loadCategories, loadOrders } from '../services/organic';

export function categories() {
	return (dispatch) => {
	    return loadCategories()
	        .then(({category}) => {
	            dispatch({
	            	type: SET_CATEGORY,
	            	category
	            })
	        })
	        .catch((error) => {
	            return Promise.reject(error);
	        });
	}
}

export function addToCart(cartItem) {	
	return {
	    cartItem,
	    type: SET_CART
	};
}

export function increaseQuantity(prodID) {	
	return {
	    prodID,
	    type: INCREASE_QTY
	};
}

export function deacreaseQuantity(prodID) {	
	return {
	    prodID,
	    type: DECREASE_QTY
	};
}

export function clearCart() {	
	return {
	    type: CLEAR_CART
	};
}

export function removeFromCart(prodID) {	
	return {
	    prodID,
	    type: REMOVE_CART_ITEM
	};
}

export function orders() {
  return (dispatch) => {
    return loadOrders()
      .then(({orders}) => {
        dispatch({
          type: SET_ORDERS,
          orders,
        });
      })
      .catch((error) => {
        return Promise.reject(error);
      });
  };
}