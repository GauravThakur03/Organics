import React from 'react';
import OrderColumns from './OrderColumns';
import OrderList from './OrderList';
const Orders = () => {
    return ( 
        <div className="container min-height py-4">
            <div className="row">
                <h4 className="text-center mx-auto my-3">Track orders</h4>
                <OrderColumns/>
                <OrderList orders={orders}/>
            </div>
        </div>
     );
}
 
export default Orders;

const orders = [
    {
      id: "3016 - 734428 - 7759",
      info: "Banganapalli Mango...",
      status: "Delivered",
      total: 330,
      address: "Raheja Mindspace Hyderabad",
    },
    {
      id: "3016 - 734428 - 7760",
      info: "Alphonso Mango...",
      status: "Out for delivery",
      total: 1253,
      address: "Raheja Mindspace Hyderabad",
    },
    {
      id: "3016 - 734428 - 7761",
      info: "Alphonso Mango...",
      status: "Order received",
      total: 965,
      address: "Raheja Mindspace Hyderabad",
    },
  ];