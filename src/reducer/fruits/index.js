import {combineAndWrapReducers} from '../combine-and-wrap-reducers';
import Fruits from '../../state/fruits';

import products from './products';
import orders from './orders';
import tracking from './tracking';
import cart from './cart';
import categories from './categories';

export function makeReducer() {
    const reducers = {
    	cart,
    	categories,
    	orders,
        products,
        tracking
    };

    return combineAndWrapReducers(reducers, Fruits);
}
