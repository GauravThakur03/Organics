import React from "react";
const OrderItem = ({ order }) => {
  const { id, prodName, status, amount, address1, address2, city } = order;

  return (
    <div className="row my-2 text-capitalize text-center border-bottom">
      <div className="col-10 mx-auto col-lg-2">
        <span className="d-lg-none">order id: </span>
        {id}
      </div>
      <div className="col-10 mx-auto col-lg-2">{prodName}</div>
      <div className="col-10 mx-auto col-lg-2">
        <span className="d-lg-none">total: </span>&#8377; {amount}
      </div>

      <div className="col-10 mx-auto col-lg-2">
        <span>{address1}</span>
        <span className="ml-1">{city}</span>
      </div>
      <div className="col-10 mx-auto col-lg-2">
        <strong>status: &#8377; {status}</strong>
      </div>

      
    </div>
  );
};

export default OrderItem;
