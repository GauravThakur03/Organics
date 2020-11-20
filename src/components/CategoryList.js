import React from "react";
import Category from "./Category";

const CategoryList = ({ categories }) => {
  return categories.map((category) => (
    <Category category={category} key={category.catID} />
  ));
};

export default CategoryList;
