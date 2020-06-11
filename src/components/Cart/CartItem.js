import React from "react";
const CartItem = ({ categories, product, increaseProductQuantity, decreaseProductQuantity, clearCart, removeFromCart }) => {
  const { catID, prodID, prodName, prodPic, prodPrice, prodQuant } = product;
  const total = prodQuant * prodPrice;
  const quantity = categories.find(category => category.catID === catID).products.find(prod => prod.prodID === prodID).prodQuant;

  const increaseQuantity = (prodID) => {
    quantity < prodQuant + 1 ? alert('Out of Stock') : increaseProductQuantity(prodID);
  }

  return (
    <div className="row my-2 text-capitalize text-center border-bottom">
      <div className="col-10 mx-auto col-lg-2">
        <img
          src={prodPic}
          alt="product"
          style={{ width: "5rem", height: "5rem" }}
          className="img-fluid"
        />
      </div>
      <div className="col-10 mx-auto col-lg-2">
        <span className="d-lg-none">product: </span>
        {prodName}
      </div>
      <div className="col-10 mx-auto col-lg-2">
        <span className="d-lg-none">price: </span>&#8377; {prodPrice}
      </div>
      <div className="col-10 mx-auto col-lg-2 my-2 my-lg-0">
        <div className="d-flex justify-content-center">
          <span
            className="btn btn-black mx-1"
            onClick={() => decreaseProductQuantity(prodID)}
          >
            -
          </span>
          <span className="btn btn-black mx-1">{prodQuant}</span>
          <span
            className="btn btn-black mx-1"
            onClick={() => increaseQuantity(prodID)}
          >
            +
          </span>
        </div>
      </div>
      <div className="col-10 mx-auto col-lg-2">
        <div className="cart-icon" onClick={() => removeFromCart(prodID)}>
          <i className="fas fa-trash"></i>
        </div>
      </div>
      <div className="col-10 mx-auto col-lg-2">
        <strong>item total: &#8377; {total}</strong>
      </div>
    </div>
  );
};

export default CartItem;
