import React, { useState, useRef } from "react";
import { Button, Overlay, Popover } from "react-bootstrap";
import { GOOGLE_API_KEY } from "../config";
import GooglePlacesAutocomplete from "react-google-places-autocomplete";

const PopOver = ({ title }) => {
  const [show, setShow] = useState(false);
  const [target, setTarget] = useState(null);
  const ref = useRef(null);
  const [value, setValue] = useState(null);

  const handleClick = (event) => {
    setShow(!show);
    setTarget(event.target);
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
        <span className="px-2">Hyderabad</span>
      </Button>

      <Overlay
        show={show}
        target={target}
        placement="bottom"
        container={ref.current}
        containerPadding={20}
      >
        <Popover id="popover-contained">
          <Popover.Title as="h3">{title}</Popover.Title>
          <Popover.Content>
            <GooglePlacesAutocomplete
              apiKey={GOOGLE_API_KEY}
              selectProps={{
                value,
                onChange: setValue,
              }}
            />
          </Popover.Content>
        </Popover>
      </Overlay>
    </div>
  );
};

export default PopOver;
