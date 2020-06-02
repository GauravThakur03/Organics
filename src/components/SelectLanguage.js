import React from "react";
import { Dropdown } from "react-bootstrap";
const SelectLanguage = () => {
  return (
    <Dropdown className="mr-2">
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        Choose language
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Hindi</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Telugu</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Kannada</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default SelectLanguage;
