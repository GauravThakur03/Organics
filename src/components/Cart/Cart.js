import React from "react";
import CartColumns from "./CartColumns";
import EmptyCart from "./EmptyCart";
import CartList from "./CartList";
import CartTotals from "./CartTotals";
import CheckDeliveryArea from "./CheckDeliveryArea";
import { useState } from "react";

const Cart = ({cart, ...props}) => {
  const [isServiceableArea, setIsServiceableArea] = useState(false);
  return (
    <section className="container-fluid py-4">
      {cart.count ? (
        <>
          <CartColumns />
          <CartList cartItems={cart.cartItems} {...props}/>

          <CartTotals
            items={cart.cartItems}
            clearCart={props.clearCart}
            isServiceable={isServiceableArea}
          />
          <CheckDeliveryArea setIsServiceableArea={setIsServiceableArea}/>
        </>
      ) : (
        <EmptyCart/>
      )}
    </section>
  );
};

export default Cart;

