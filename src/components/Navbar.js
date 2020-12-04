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
        <NavActions />
      </NavWrapper>
      <CategoryStickyBar />
    </div>
  );
};

export default NavBar;

const NavWrapper = styled.nav`
  background: var(--mainGreen);
`;
