import React from "react";
import CartItem from "./CartItem";

const CartList = ({ cartItems, ...props }) => {
  return (
    <div className="caontainer-fluid">
      {
      	cartItems.map((item) => {
        	return <CartItem key={item.prodID} product={item} {...props}/>;
      	})
      }
    </div>
  );
};

export default CartList;
