import React, { useEffect } from "react";
import OrderColumns from "./OrderColumns";
import OrderList from "./OrderList";
import EmptyOrders from "./EmptyOrders";
import { status, orders } from "../../action-creator/organic";
import { useSelector, useDispatch } from "react-redux";

const Orders = () => {
  const dispatch = useDispatch();
  const orderList = useSelector((state) => state.fruits.orders);
  const user = useSelector((state) => state.fruits.user);

  useEffect(() => {
    dispatch(orders(user.phone));
  }, []);
  return (
    <div className="container min-height py-4">
      <div className="row">
        <h4 className="text-center mx-auto my-3">Track orders</h4>
      </div>
      <div className="row">
        <OrderColumns />
        {orderList.length ? <OrderList orders={orderList} /> : <EmptyOrders />}
      </div>
    </div>
  );
};

export default Orders;
