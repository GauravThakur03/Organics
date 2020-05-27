import PropTypes from 'prop-types';
import React from 'react';
import {Provider} from 'react-redux';
import {Route, Switch } from "react-router-dom";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import {createStore} from './store/store-factory';

import NavBar from "./components/Navbar";
import Home from "./components/Home";
import Footer from "./components/Footer";

const store = createStore();

function App() {
  return (
    <>
      <NavBar/>
      	<Switch>
      		<Route exact path="/home" component={Home} />
      	</Switch>
      <Footer />
    </>
  );
}

export default App;
