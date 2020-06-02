import React from "react";
import { Tab, Tabs } from "react-bootstrap";
import ProductList from "./ProductList";
import "./TabPanel.css"

const TabPanel = () => {
  return (
    <div className="tab-panel">
      <Tabs defaultActiveKey="fruits" id="uncontrolled-tab-example">
        <Tab eventKey="fruits" title="Fruits">
          <ProductList />
        </Tab>
        <Tab eventKey="pickles" title="Pickles">
          <ProductList />
        </Tab>
        <Tab eventKey="vegetables" title="Vegetables">
          <ProductList />
        </Tab>
      </Tabs>
    </div>
  );
};

export default TabPanel;
