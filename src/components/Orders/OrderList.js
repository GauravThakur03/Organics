import React from "react";
import OrderItem from "./OrderItem";

const OrderList = ({ orders }) => {
  return (
    <div className="container-fluid">
      {orders.map((item) => {
        return <OrderItem key={item.orderID} order={item} />;
      })}
    </div>
  );
};

export default OrderList;
