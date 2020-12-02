import React from "react";
import { Tab, Tabs } from "react-bootstrap";
import Login from "./Login";
import styled from 'styled-components'
import "./TabPanel.css";
import Register from "./Register";

const TabPanel = ({closeModal}) => {
  return (
    <CustomWrapper className="tab-panel">
      <Tabs defaultActiveKey="login" id="uncontrolled-tab-example">
        <Tab eventKey="login" title="Login" key="login">
          <Login closeModal={closeModal}/>
        </Tab>
        <Tab eventKey="register" title="Register" key="register">
          <Register closeModal={closeModal}/>
        </Tab>
      </Tabs>
    </CustomWrapper>
  );
};

export default TabPanel;

const CustomWrapper = styled.div`
  .nav{
    justify-content:center;
    border-bottom:none
  }
  .tab-content{
    padding:20px
  }
 
`
