import React from "react";
import Product from "./ProductConnector";

const ProductList = ({products, catID}) => {
  return (
      <div className="container">
        <div className="row">
          {
            products.map((product, i) => (
            <Product product={product} key={i} catID={catID}/>
          ))}
        </div>
      </div>
  );
};

export default ProductList;
