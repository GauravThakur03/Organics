import React from "react";
import { Link } from "react-router-dom";
import { cartTotal } from "../../utils";
import { useSelector } from "react-redux";
import CheckDeliveryArea from "./CheckDeliveryArea";
import { default_delivery_location_value } from "../../state/defaultStates";

const CartTotals = ({
  values,
  history,
  items,
  clearCart,
  isServiceable,
  setIsServiceableArea,
}) => {
  const total = cartTotal(items);
  const deliveryLocation = useSelector(
    (state) => state.fruits.deliveryLocation
  );

  const isDeliveryLocation = () => {
    if (
      deliveryLocation == "" ||
      deliveryLocation === default_delivery_location_value
    ) {
      return false;
    }
    return true;
  };
  return (
    <div className="container">
      <div className="row flex-lg-row-reverse">
        <div className="col-lg-4 text-capitalize text-right d-lg-block d-flex flex-column align-items-center">
          <h5>
            <span className="text-title">subtotal: &#8377;</span>
            <strong>{total}</strong>
          </h5>
          <h5>
            <span className="text-title">total: &#8377;</span>
            <strong>{total}</strong>
          </h5>
          <Link to="/checkout">
            <button
              className={
                isDeliveryLocation()
                  ? "btn btn-outline-success text-uppercase mb-3 mt-2 px-5"
                  : "btn btn-outline-disabled border border-disabled text-uppercase mb-3 mt-2 px-5"
              }
              type="button"
              disabled={!isDeliveryLocation()}
            >
              Checkout
            </button>
          </Link>
          {!isDeliveryLocation() ? (
            <p className="text-decoration-none text-muted">
              {default_delivery_location_value}
            </p>
          ) : null}

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
        {/* <div className="col-lg-8">
          <CheckDeliveryArea setIsServiceableArea={setIsServiceableArea} f />
        </div> */}
      </div>
    </div>
  );
};

export default CartTotals;
