import React from "react";
import { useSelector } from "react-redux";
import ProductList from "./ProductList";

const CategoryProducts = () => {
  const selectedCategory = useSelector(
    (state) => state.fruits.selectedCategory
  );
  return (
    <div className="row">
      <div className="col-12 px-0">
        <ProductList
          products={selectedCategory.products}
          catID={selectedCategory.catID}
        />
      </div>
    </div>
  );
};

export default CategoryProducts;
