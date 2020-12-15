import React from "react";
import OrderItem from "./OrderItem";

const OrderList = ({ orders }) => {
  return (
    <div className="container-fluid">
      {orders.map((item, i) => {
        return <OrderItem key={i + item.orderID} order={item} />;
      })}
    </div>
  );
};

export default OrderList;
