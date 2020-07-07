import {combineAndWrapReducers} from '../combine-and-wrap-reducers';
import Fruits from '../../state/fruits';

import orders from './orders';
import tracking from './tracking';
import cart from './cart';
import categories from './categories';
import user from './user';
import status from './status';

export function makeReducer() {
    const reducers = {
    	cart,
    	categories,
    	orders,
        tracking,
        user,
        status
    };

    return combineAndWrapReducers(reducers, Fruits);
}
