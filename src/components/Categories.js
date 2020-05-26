import React from "react";
import styled from "styled-components";
const categories = [
  { label: "Vegetables" },
  { label: "Fruits" },
  { label: "Pickles" },
];
const Categories = () => {
  return (
    <CategoriesWrapper>
      {categories.map((item, index) => {
        return (
          <a
            key={index}
            className={
              index === 1 ? "active border-bottom px-3" : "border-bottom px-3"
            }
          >
            {item.label}
            {index === 1 ? <i className="fas fa-caret-left" /> : null}
          </a>
        );
      })}
    </CategoriesWrapper>
  );
};

export default Categories;

const CategoriesWrapper = styled.div`
  width: 100%;
  a {
    background-color: var(--mainWhite);
    color: black;
    display: block;
    padding: 12px;
    text-decoration: none;
    cursor: pointer;
    position: relative;
  }

  a:hover {
    background-color: #ccc;
  }

  a.active {
    background-color: var(--mainGreen);
    color: var(--mainWhite);
    i {
      position: absolute;
      right: -2px;
      font-size: 3rem;
      top: 0;
    }
  }
`;
