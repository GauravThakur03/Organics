import React from "react";
import { Tab, Tabs } from "react-bootstrap";
import ProductList from "./ProductList";

import "./TabPanel.css";


const TabPanel = ({categories}) => {
  return (
    <div className="tab-panel">
      <Tabs defaultActiveKey={categories[0].catID} id="uncontrolled-tab-example">
        {
            categories.map((category) => {
                return (
                  <Tab eventKey={category.catID} title={category.catName} key={category.catID}>
                    <ProductList products={category.products} catID={category.catID}/>
                  </Tab>
                )
            })
        }
      </Tabs>
    </div>
  );
};

export default TabPanel;
