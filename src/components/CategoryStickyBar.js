import React from "react";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import { categories, setSelectedCategory } from "../action-creator/organic";
import { useHistory } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { default_selected_cat } from "../state/defaultStates";

function CategoryItem({ data, onSelect, active }) {
  const { catName, catIcon } = data;

  return (
    <ItemWrapper
      className={`px-2 py-1 mx-2 d-flex-column justify-content-center ${
        active ? "active" : ""
      }`}
      onClick={() => {
        onSelect(data);
      }}
    >
      <IconWrapper className="p-1 catItemIcon d-inline-flex border-1 align-items-center justify-content-center">
        <img src={catIcon} alt={catName} width="80%" height="80%" />
      </IconWrapper>
      <div className="text-center">{catName}</div>
    </ItemWrapper>
  );
}

const CategoryStickyBar = (props) => {
  let history = useHistory();
  let { pathname } = useLocation();
  const categoriesArray = useSelector((state) => state.fruits.categories);
  const selectedCategory = useSelector(
    (state) => state.fruits.selectedCategory
  );

  const dispatch = useDispatch();

  const [squeezed, setSqueezed] = useState(false);
  const [hidden, setHidden] = useState(false);

  const handleScroll = (event) => {
    window.scrollY !== 0 ? setSqueezed(true) : setSqueezed(false);
  };

  const handleCategorySelect = (cat) => {
    dispatch(setSelectedCategory(cat));
    history.push("/products");
  };

  useEffect(() => {
    if (pathname === "/home") {
      dispatch(setSelectedCategory(default_selected_cat));
    }
    if (["/home", "/products"].includes(pathname)) {
      setHidden(false);
    } else {
      setHidden(true);
    }
  }, [pathname]);

  useEffect(() => {
    dispatch(categories(dispatch));
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return hidden ? null : (
    <BarWrapper
      className={`row d-flex justify-content-center stickyCatListContainer py-2 ${
        squeezed ? "squeezed" : ""
      }`}
    >
      {categoriesArray.map((cat) => (
        <CategoryItem
          data={cat}
          key={cat.catID}
          active={
            selectedCategory.catID && selectedCategory.catID === cat.catID
              ? true
              : false
          }
          onSelect={handleCategorySelect}
        />
      ))}
    </BarWrapper>
  );
};

export default CategoryStickyBar;

const BarWrapper = styled.div`
  background: var(--mainWhite);
  color: var(--mainGreen);
  box-shadow: 1px 1px 5px -1px #474747;
`;

const ItemWrapper = styled.div`
  cursor: pointer;
  border-radius: 4%;
  &:hover {
    text-decoration: underline;
  }
`;
const IconWrapper = styled.div`
  border: 1px solid;
  border-color: var(--mainGreen);
  border-radius: 50%;
  width: 60px;
  height: 60px;
  &:hover {
    background: var(--mainGreen);
    color: var(--mainWhite);
  }
`;
