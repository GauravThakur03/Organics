import React from "react";
import { Link } from "react-router-dom";
import logo from "../logo.svg";
import { ButtonContainer } from "./Button";
import styled from "styled-components";
const NavBar = () => {
  return (
    <NavWrapper className="navbar navbar-expand-md navbar-dark fixed-top">
      <Link to="/" className="navbar-brand">
        Organics Store
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarsExampleDefault"
        aria-controls="navbarsExampleDefault"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarsExampleDefault">
        <ul className="navbar-nav ml-40">
          <li className="nav-item">
            <Link to="/" className="nav-link">
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
      </div>
      <Link to="orders" className="ml-auto">
        <ButtonContainer>
          <span className="mr-2">
            <i className="fas fa-truck"></i>
          </span>
          Track Order
        </ButtonContainer>
      </Link>
      <Link to="cart" className="ml-auto">
        <ButtonContainer>
          <span className="mr-2">
            <i className="fas fa-cart-plus"></i>
          </span>
          My Cart
        </ButtonContainer>
      </Link>
    </NavWrapper>
  );
};

export default NavBar;

const NavWrapper = styled.nav`
  background: var(--mainGreen);
`;
