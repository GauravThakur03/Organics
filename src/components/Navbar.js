import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import CategoryStickyBar from "./CategoryStickyBar";
import SearchCategory from "./SearchCategory";

import UserLocation from "./UserLocation";
import useWindowResize from "./WindowResizedHook";
import $ from "jquery";
import NavActions from "./NavAction";

const NavBar = () => {
  // const [mobileNavToggle, setMobileNavToggle] = useState(false);
  
  let headerHeight = $("#appHeader").outerHeight() || null;
  useEffect(() => {
    if (headerHeight !== $("#appHeader").outerHeight()) {
      headerHeight = $("#appHeader").outerHeight();
      $("body").css("padding-top", headerHeight + "px");
    }
  }, [headerHeight]);
  useWindowResize(() => {
    let newHeight = $("#appHeader").outerHeight();
    if (newHeight !== headerHeight) {
      $("body").css("padding-top", newHeight + "px");
    }
  });

  return (
    <div className="fixed-top" id="appHeader">
      <NavWrapper className="navbar navbar-expand-xxl navbar-dark">
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
        <SearchCategory />
        <NavActions/>
        {/* <button
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
        </button> */}

        {/* <div
          className={`collapse navbar-collapse ${
            mobileNavToggle ? "show" : ""
          }`}
          id="navbarsExampleDefault"
        >
          <ul className="navbar-nav ml-40 flex-md-row justify-content-end">
            <li className="nav-item px-md-1 mr-md-1">
              <Link to="/home" className="nav-link text-right">
                Home <span className="sr-only">(current)</span>
              </Link>
            </li>
          </ul>
          <div className="d-md-none">
            <NavActions />
          </div>
        </div> */}
      </NavWrapper>
      <CategoryStickyBar />
      
    </div>
  );
};

export default NavBar;

const NavWrapper = styled.nav`
  background: var(--mainGreen);
`;
