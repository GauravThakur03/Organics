import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import CategoryStickyBar from "./CategoryStickyBar";
import SearchCategory from "./SearchCategory";
import SelectLanguage from "./SelectLanguage";
import UserLocation from "./UserLocation";
const NavBar = () => {
  const [mobileNavToggle, setMobileNavToggle] = useState(false);

  return (
    <div className="fixed-top">
      <NavWrapper className="navbar navbar-expand-lg navbar-dark">
        <Link to="/home" className="navbar-brand d-flex">
          <img
            src="icons/logo.png"
            alt="mamidikayalu.com"
            className="mr-2"
            width="32"
            height="32"
          />
          MAMIDIKAYALU
        </Link>
        <UserLocation />
        
        <button
          className="navbar-toggler collapsed"
          type="button"
          data-toggle="collapse"
          data-target="#navbarsExampleDefault"
          aria-controls="navbarsExampleDefault"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={() => {
            setMobileNavToggle(!mobileNavToggle);
          }}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <SearchCategory/>
        <div
          className={`collapse navbar-collapse ${
            mobileNavToggle ? "show" : ""
          }`}
          id="navbarsExampleDefault"
        >
          <ul className="navbar-nav ml-40">
            <li className="nav-item">
              <Link to="/home" className="nav-link">
                Home <span className="sr-only">(current)</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/aboutus" className="nav-link">
                About us
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/contactus" className="nav-link">
                Contact us
              </Link>
            </li>
          </ul>
          <div className="ml-auto">
            <SelectLanguage />
            <Link to="orders">
              <button className="btn btn-success mr-2">
                <span className="mr-2">
                  <i className="fas fa-truck"></i>
                </span>
                Track Order
              </button>
            </Link>
            <Link to="cart">
              <button className="btn btn-success mr-2">
                <span className="mr-2">
                  <i className="fas fa-shopping-cart"></i>
                </span>
                My Cart
              </button>
            </Link>
          </div>
        </div>
      </NavWrapper>
      <CategoryStickyBar />
    </div>
  );
};

export default NavBar;

const NavWrapper = styled.nav`
  background: var(--mainGreen);
`;
