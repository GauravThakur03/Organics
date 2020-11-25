import React, { useState, useRef } from "react";
import { Button, Overlay, Popover } from "react-bootstrap";
import ComboBox from "./ComboBox";
import { useSelector } from "react-redux";

const PopOver = ({ title }) => {
  const [show, setShow] = useState(false);
  const [target, setTarget] = useState(null);
  const ref = useRef(null);
  const deliveryLocation = useSelector(
    (state) => state.fruits.deliveryLocation
  );

  const handleClick = (event) => {
    setShow(!show);
    setTarget(event.target);
  };

  const onChange = (newValue) => {
    setShow(false);
  };

  return (
    <div ref={ref}>
      <Button
        onClick={handleClick}
        title={title}
        variant="success"
        className="dropdown-toggle"
      >
        <i className="fas fa-map-marker-alt"></i>
        <span className="px-2">{deliveryLocation}</span>
      </Button>

      <Overlay
        show={show}
        target={target}
        placement="bottom"
        container={ref.current}
        containerPadding={20}
        style={{ width: 300 }}
      >
        <Popover id="popover-contained">
          <Popover.Title as="h3">{title}</Popover.Title>
          <Popover.Content>
            <ComboBox onChange={onChange} />
          </Popover.Content>
        </Popover>
      </Overlay>
    </div>
  );
};

export default PopOver;
