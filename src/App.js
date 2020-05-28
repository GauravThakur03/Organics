import PropTypes from "prop-types";
import React from "react";
import { Provider } from "react-redux";
import { Route, Switch } from "react-router-dom";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { createStore } from "./store/store-factory";

import NavBar from "./components/Navbar";
import Home from "./components/HomeConnector";
import Footer from "./components/Footer";
import Cart from "./components/Cart";
import Orders from "./components/Orders";
import ContactUs from "./components/ContactUs";
import AboutUs from "./components/AboutUs";

const store = createStore();

function App(props) {
  return (
    <Provider store={store}>
      <>
        <NavBar />
        <Switch>
          <Route exact path="/home" component={Home} />
          <Route exact path="/aboutus" component={AboutUs} />
          <Route exact path="/cart" component={Cart} />
          <Route exact path="/contactus" component={ContactUs} />
          <Route exact path="/orders" component={Orders} />
          <Route exact path="/" component={Home} />
        </Switch>
        <Footer />
      </>
    </Provider>
  );
}

export default App;
