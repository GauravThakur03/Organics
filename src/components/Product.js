import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Product = ({ product, cart, catID, addToCart }) => {
  const {
    prodID,
    prodName,
    prodPic,
    prodPrice,
    prodDesc,
    prodAvailable,
  } = product;

  const inCart = cart.cartItems.some((product) => product.prodID === prodID);
  const cartItem = {
    catID,
    prodID,
    prodName,
    prodPic,
    prodPrice,
    prodDesc,
    prodQuant: 1,
  };

  return (
    <ProductWrapper className="col-9 col-md-6 col-lg-3 my-3 d-flex">
      <div className="card">
        <div className="img-container p-5">
          <Link to="/details">
            <img src={prodPic} alt={prodName} className="card-img-top" />
          </Link>
          {prodAvailable && prodAvailable === "yes" ? (
            <button
              className="cart-btn"
              disabled={inCart}
              onClick={() => addToCart(cartItem)}
            >
              {inCart ? (
                <p className="text-capitalize mb-0" disabled>
                  in cart
                </p>
              ) : (
                <i className="fas fa-cart-plus" />
              )}
            </button>
          ) : null}
        </div>
        {prodAvailable && prodAvailable === "yes" ? null : (
          <p
            className="text-capitalize mb-0 text-danger p-2 text-center border border-danger position-absolute out-of-stock"
            disabled
          >
            out of stock
          </p>
        )}
        {/* card footer */}
        <div className="card-footer d-flex justify-content-between">
          <p className="align-self-center mb-0">{prodName}</p>
          <h5 className="text-blue font-italic mb-0">
            <span className="mr-1">&#8377; {prodPrice}</span>
          </h5>
        </div>
      </div>
    </ProductWrapper>
  );
};

export default Product;

const ProductWrapper = styled.div`
  .card {
    border: transparent;
    transition: all 1s linear;
    position: relative;

    .out-of-stock {
      bottom: 15%;
      left: 50%;
      transform: translateX(-50%);
      font-size: 0.7rem;
      opacity: 0.6;
    }
  }
  .card-footer {
    background: transparent;
    border-top: transparent;
    transition: all 1s linear;
  }
  &:hover {
    .card {
      border: 0.04rem solid rgba(0, 0, 0, 0.2);
      box-shadow: 2px 2px 5px 0px rgba(0, 0, 0, 0.2);
    }
    .card-footer {
      background: regba(247, 247, 247);
    }
  }
  .img-container {
    position: relative;
    overflow: hidden;
  }
  .img-container:hover .card-img-top {
    transform: scale(1.2);
  }
  .card-img-top {
    transition: all 1s linear;
  }
  .cart-btn {
    position: absolute;
    bottom: 0;
    right: 0;
    padding: 0.2rem 0.4rem;
    background: var(--lightBlue);
    border: none;
    font-size: 1.4rem;
    color: rgba(33, 37, 41, 0.5);
    border-radius: 0.5rem 0 0 0;
    transition: all 1s linear;
  }
  .img-container:hover .cart-btn {
  }
  .cart-btn:hover {
    color: var(--mainBlue);
    cursor: pointer;
  }
`;
