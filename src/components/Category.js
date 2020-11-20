import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setSelectedCategory } from "../action-creator/organic";

const Category = ({ category }) => {
  const { catName, catImage } = category;
  let history = useHistory();
  const dispatch = useDispatch();

  const handleCategorySelect = () => {
    dispatch(setSelectedCategory(category));
    history.push("/products");
  };

  return (
    <CategoryWrapper
      className="col-9 col-md-6 col-lg-3 my-3 d-flex"
      onClick={handleCategorySelect}
    >
      <div className="card justify-content-between">
        <div className="img-container p-5">
          <Link to="/details">
            <img src={catImage} alt={catName} className="card-img-top" />
          </Link>
        </div>

        <div className="card-footer">
          <p className="align-self-center mb-0 text-center">{catName}</p>
        </div>
      </div>
    </CategoryWrapper>
  );
};

export default Category;

const CategoryWrapper = styled.div`
  cursor: pointer;
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
