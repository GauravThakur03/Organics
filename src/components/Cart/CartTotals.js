import React from "react";
import { Link } from "react-router-dom";
import { ButtonContainer } from "../Button";

const CartTotals = ({ values, history }) => {
  const { cartSubTotal, cartTax, cartTotal, clearCart } = values;
  return (
    <div className="container">
      <div className="row">
        <div className="col-10 mt-2 ml-sm-5 ml-md-auto col-sm-8 text-capitalize text-right">
          <h5>
            <span className="text-title">subtotal: &#8377;</span>
            <strong>{cartSubTotal}</strong>
          </h5>
          <h5>
            <span className="text-title">tax: &#8377;</span>
            <strong>{cartTax}</strong>
          </h5>
          <h5>
            <span className="text-title">total: &#8377;</span>
            <strong>{cartTotal}</strong>
          </h5>
          <Link to="/checkout">
            <button
              className="btn btn-outline-success text-uppercase mb-3 mt-2 px-5"
              type="button"
            >
              Checkout
            </button>
          </Link>
          <br />
          <Link to="/">
            <button
              className="btn btn-outline-danger text-uppercase mb-3 px-5"
              type="button"
              onClick={clearCart}
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
