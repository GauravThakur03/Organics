import t from 'tcomb';

import Product from './product';
import Cart from './cart';
import Category from './category';
import Track from './track';
import Order from './order';

const Fruits = t.struct({
	cart: Cart,
    categories: t.list(Category),
    products: t.list(Product),
    tracking: t.list(Track),
    orders: t.list(Order)
}, 'Fruits');

export default Fruits;
