import t from 'tcomb';

import Cart from './cart';
import Category from './category';
import Track from './track';
import Order from './order';

const Fruits = t.struct({
	cart: Cart,
    categories: t.list(Category),
    tracking: t.list(Track),
    orders: t.list(Order)
}, 'Fruits');

export default Fruits;
