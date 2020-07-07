import { SET_CATEGORY, SET_CART, INCREASE_QTY, DECREASE_QTY, CLEAR_CART, REMOVE_CART_ITEM, SET_ORDERS, SET_USER, SET_STATUS} from '../actionTypes';
import { loadCategories, loadOrders, loadUser, processOrder, loadStatus } from '../services/organic';

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

const defaultUserObject = {
    phone:"",
    name: '',
    address1: '',
    address2:'',
    landmark: '',
    pinCode:0,
	state: '',
	city:''
}
export function user() {
	return (dispatch) => {
	  return loadUser(arguments[1])
		.then((user) => {
		  dispatch({
			type: SET_USER,
			user: user || defaultUserObject,
		  });
		})
		.catch((error) => {
		  return Promise.reject(error);
		});
	};
  }

  export function generateOrder(order, phone) {
  	return (dispatch) => {
	  return processOrder(order, phone)
		.then((response) => {
		  dispatch(clearCart());
		  return response;
		})
		.catch((error) => {
		  return Promise.reject(error);
		});
	};

  }
  export function status() {
	return (dispatch) => {
	  return loadStatus(arguments[1])
		.then(({data}) => {
		  dispatch({
			type: SET_STATUS,
			status: data || [],
		  });
		})
		.catch((error) => {
		  return Promise.reject(error);
		});
	};
  }
