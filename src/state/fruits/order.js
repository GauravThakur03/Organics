import t from 'tcomb';

import Item from './item';

const Order = t.struct({
    address1: t.String,
    address2: t.String,
    amount: t.Number,
    city: t.String,
    items: t.list(Item),
    landmark: t.String,
    orderDate: t.String,
    orderID: t.String,
    pinCode: t.Number,
    state: t.String,
    status: t.String
}, 'Order');

export default Order;
