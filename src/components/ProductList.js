import React from "react";
import Product from "./ProductConnector";

const ProductList = ({ products, catID }) => {
  const rows = [];
  const itemsPerRow = 4;
  if (products.lenght && products.length > itemsPerRow) {
    for (let i = 0, j = products.lenght; i < j; i += itemsPerRow) {
      rows.push(products.slice(i, i + itemsPerRow));
    }
  } else {
    rows.push(products);
  }

  return (
    <div className="container">
      {rows.map((row, i) => (
        <div className="row" key={i}>
          {row.map((product, i) => (
            <Product product={product} key={i} catID={catID} />
          ))}
        </div>
      ))}
    </div>
  );
};

export default ProductList;
