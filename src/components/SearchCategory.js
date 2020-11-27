import React from "react";
import ComboBox from "./ComboBox";
import { useSelector, useDispatch } from "react-redux";
import { setSelectedCategory } from "../action-creator/organic";
import { useHistory } from "react-router-dom";
import styled from "styled-components";

const SearchCategory = () => {
  const categories = useSelector((state) => state.fruits.categories);
  const dispatch = useDispatch();
  let history = useHistory();
  return (
    <SearchCategoryWrapper>
      <ComboBox
        style={{ color: "white" }}
        label="Search category"
        options={categories.map((cat) => cat)}
        onChange={(cat) => {
          dispatch(setSelectedCategory(cat));
          history.push("/products");
        }}
        displayProp="catName"
        valueProp="catID"
      />
    </SearchCategoryWrapper>
  );
};

export default SearchCategory;

const SearchCategoryWrapper = styled.div`
  width:300px;
  *{
    color:white !important;
  }
`;
