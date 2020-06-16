import t from 'tcomb';

import Cart from './cart';
import Category from './category';
import Track from './track';
import Order from './order';
import User from './user';
const Fruits = t.struct({
	cart: Cart,
    categories: t.list(Category),
    tracking: t.list(Track),
    orders: t.list(Order),
    user:User
}, 'Fruits');

export default Fruits;
