import React from "react";
import CartColumns from "./CartColumns";
import EmptyCart from "./EmptyCart";
import CartList from "./CartList";
import CartTotals from "./CartTotals";

const Cart = ({cart, ...props}) => {
  return (
    <section className="container-fluid py-4">
      {cart.count ? (
        <>
          <CartColumns />
          <CartList cartItems={cart.cartItems} {...props}/>
          <CartTotals
            items={cart.cartItems}
            clearCart={props.clearCart}
          />
        </>
      ) : (
        <EmptyCart/>
      )}
    </section>
  );
};

export default Cart;

