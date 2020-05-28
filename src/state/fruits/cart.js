import t from 'tcomb';

import Item from './item';

const Cart = t.struct({
    count: t.Number,
    cartItems: t.list(Item)
}, 'Cart');

export default Cart;
