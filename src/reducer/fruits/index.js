import {combineAndWrapReducers} from '../combine-and-wrap-reducers';
import Fruits from '../../state/fruits';

import orders from './orders';
import tracking from './tracking';
import cart from './cart';
import categories from './categories';
import user from './user';
import status from './status';
import selectedCategory from './selectedCategory'

export function makeReducer() {
    const reducers = {
    	cart,
        categories,
        selectedCategory,
    	orders,
        tracking,
        user,
        status
    };

    return combineAndWrapReducers(reducers, Fruits);
}
