import t from 'tcomb';

import Cart from './cart';
import Category from './category';
import Track from './track';
import Order from './order';
import User from './user';
import Status from './status';
import DeliveryLocation from './deliverylocation';
const Fruits = t.struct({
	cart: Cart,
    categories: t.list(Category),
    selectedCategory: Category,
    tracking: t.list(Track),
    orders: t.list(Order),
    user:User,
    status:t.list(Status),
    deliveryLocation:DeliveryLocation
}, 'Fruits');

export default Fruits;
