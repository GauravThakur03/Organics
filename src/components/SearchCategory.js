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
    <SearchCategoryWrapper className="m-1 m-md-0">
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
  .MuiOutlinedInput-notchedOutline {
    border-color: rgb(255, 255, 255, 0.23) !important;
  }
  .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline {
    border-color: white !important;
  }
  
`;
