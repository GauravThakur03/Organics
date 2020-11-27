import React from "react";
import SelectLanguage from "./SelectLanguage";
import { Link } from "react-router-dom";
const NavActions = () => {
  return (
    <div className="ml-auto">
      <SelectLanguage />
      <Link to="orders">
        <button className="btn btn-success mr-2">
          <span className="mr-2">
            <i className="fas fa-truck" title="Track Order"></i>
          </span>
        </button>
      </Link>
      <Link to="cart">
        <button className="btn btn-success mr-2">
          <span className="mr-2">
            <i className="fas fa-shopping-cart" title="My Cart"></i>
          </span>
        </button>
      </Link>
    </div>
  );
};

export default NavActions;
