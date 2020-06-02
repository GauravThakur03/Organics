import React from "react";
const OrderItem = ({ order }) => {
  const { id, info, status, total, address } = order;

  return (
    <div className="row my-2 text-capitalize text-center border-bottom">
      <div className="col-10 mx-auto col-lg-2">
        <span className="d-lg-none">order id: </span>
        {id}
      </div>
      <div className="col-10 mx-auto col-lg-2">
        <span className="d-lg-none">total: </span>&#8377; {total}
      </div>

      <div className="col-10 mx-auto col-lg-2">{address}</div>
      <div className="col-10 mx-auto col-lg-2">
        <strong>status: &#8377; {status}</strong>
      </div>

      <div className="col-10 mx-auto col-lg-2">{info}</div>
      <div className="col-10 mx-auto col-lg-2">
        <div className="cart-icon" onClick={() => console.log(`remove ${id}`)}>
          <button className="btn btn-danger text-center text-capitalize">cancel</button>
        </div>
      </div>
    </div>
    
  );
};

export default OrderItem;
