import React from "react";
import CartItem from "./CartItem";

const CartList = ({ cartItems, ...props }) => {
  return (
    <div className="caontainer-fluid">
      {
      	cartItems.map((item) => {
        	return item.prodQuant ? <CartItem key={item.prodID} product={item} {...props}/> : null;
      	})
      }
    </div>
  );
};

export default CartList;
