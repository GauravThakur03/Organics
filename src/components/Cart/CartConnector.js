import {connect as reduxConnect} from 'react-redux';

import Cart from './Cart';

import { addToCart, increaseQuantity, deacreaseQuantity, clearCart, removeFromCart } from '../../action-creator/organic';

function mapStateToProps(state) {
    return {
    	categories: state.fruits.categories,
        cart: state.fruits.cart
    };
}

function mapDispatchToProps(dispatch) {
	return {
		increaseProductQuantity: (prodID) => {
			dispatch(increaseQuantity(prodID));
		},
		decreaseProductQuantity: (prodID) => {
			dispatch(deacreaseQuantity(prodID));
		},
		clearCart: () => {
			dispatch(clearCart());
		},
		removeFromCart: (prodID) => {
			dispatch(removeFromCart(prodID));
		}
	}
}

export default reduxConnect(mapStateToProps, mapDispatchToProps)(Cart);
