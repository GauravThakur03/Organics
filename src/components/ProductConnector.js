import {connect as reduxConnect} from 'react-redux';

import Product from './Product';
import { addToCart } from '../action-creator/organic';

function mapStateToProps(state) {
    return {
        cart: state.fruits.cart
    };
}

function mapDispatchToProps(dispatch) {
	return {
		addToCart: (cartItem) => {
			dispatch(addToCart(cartItem));
		}
	}
}

export default reduxConnect(mapStateToProps, mapDispatchToProps)(Product);
