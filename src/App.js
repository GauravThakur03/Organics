import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/Navbar";
import Home from "./components/Home";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <NavBar></NavBar>
      <Home></Home>
      <Footer />
    </>
  );
}

export default App;
