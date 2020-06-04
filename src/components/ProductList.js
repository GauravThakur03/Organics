import React from "react";
import Product from "./ProductConnector";

const ProductList = ({products}) => {
  return (
      <div className="container">
        <div className="row">
          {
            products.map((product, i) => (
            <Product product={product} key={i} />
          ))}
        </div>
      </div>
  );
};

export default ProductList;
