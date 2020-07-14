import React from "react";
import { Link } from "react-router-dom";
import { cartTotal } from "../../utils";

const CartTotals = ({ values, history, items, clearCart, isServiceable }) => {
  const total = cartTotal(items);

  return (
    <div className="container">
      <div className="row">
        <div className="col-10 mt-2 ml-sm-5 ml-md-auto col-sm-8 text-capitalize text-right">
          <h5>
            <span className="text-title">subtotal: &#8377;</span>
            <strong>{total}</strong>
          </h5>
          <h5>
            <span className="text-title">total: &#8377;</span>
            <strong>{total}</strong>
          </h5>
          {!isServiceable ? (
            <><small className="text-muted mb-1 padding-delivery-10"><sup>*</sup>Check delivery area</small></>
          ) : null}
          <Link to="/checkout">
            <button
              className={
                isServiceable
                  ? "btn btn-outline-success text-uppercase mb-3 mt-2 px-5"
                  : "btn btn-outline-disabled border border-disabled text-uppercase mb-3 mt-2 px-5"
              }
              type="button"
              disabled={!isServiceable}
            >
              Checkout
            </button>
          </Link>

          <br />
          <Link to="/home">
            <button
              className="btn btn-outline-danger text-uppercase mb-3 px-5"
              type="button"
              onClick={() => clearCart()}
            >
              clear cart
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CartTotals;
