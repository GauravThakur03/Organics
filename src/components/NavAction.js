import React from "react";
import { Link } from "react-router-dom";
import ModalComponent from "./ModalComponent";
import Login from "./Login";
import TabPanel from "./TabPanel";
const NavActions = () => {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <div className="ml-auto">
      {/* <SelectLanguage /> */}
      <Link to="/home">
        <button className="btn btn-success mr-2">
          <span className="mr-2">
            <i className="fas fa-home" title="Home"></i>
          </span>
        </button>
      </Link>
      <Link to="orders">
        <button className="btn btn-success mr-2">
          <span className="mr-2 d-none d-md-inline">Track Order</span>
          <i className="fas fa-truck" title="Track Order"></i>
        </button>
      </Link>
      <Link to="cart">
        <button className="btn btn-success mr-2">
          <span className="mr-2  d-none d-md-inline">My Cart</span>
          <i className="fas fa-shopping-cart" title="My Cart"></i>
        </button>
      </Link>

      <button
        className="btn btn-success mr-2"
        onClick={() => {
          setModalShow(true);
        }}
      >
        <span className="mr-2  d-none d-md-inline">Login</span>
        <i className="fas fa-sign-in-alt" title="Login"></i>
      </button>
      <ModalComponent
        className="customModal"
        show={modalShow}
        onHide={() => setModalShow(false)}
      >
        <TabPanel closeModal={() => setModalShow(false)} />
      </ModalComponent>
    </div>
  );
};

export default NavActions;
