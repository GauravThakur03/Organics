import React from "react";
import CheckoutItem from "./CheckoutItem";
import CheckoutTotal from "./CheckoutTotal";
const ItemsAndTotal = ({cart, total}) => {
  return (
    <>
      <div className="col-md-4 order-md-2 mb-4">
        <h4 className="d-flex justify-content-between align-items-center mb-3">
          <span className="text-muted">Your cart</span>
          <span className="badge badge-secondary badge-pill">
            {cart.count}
          </span>
        </h4>
        <ul className="list-group mb-3">
          {cart.cartItems.length &&
            cart.cartItems.map((item, index) => (
              <CheckoutItem key={index} item={item} />
            ))}
          <CheckoutTotal subTotal={total} />
        </ul>
      </div>
    </>
  );
};

export default ItemsAndTotal;
