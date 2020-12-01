import React, { useState, useRef, useEffect } from "react";
import { Button, Overlay, Popover } from "react-bootstrap";
import ComboBox from "./ComboBox";
import { useSelector } from "react-redux";
import { loadAreas } from "../services/organic";
import { useDispatch } from "react-redux";
import { setDeliveryLocation } from "../action-creator/organic";
import styled from "styled-components";

const PopOver = ({ title }) => {
  const [show, setShow] = useState(false);
  const [target, setTarget] = useState(null);
  const ref = useRef(null);
  const deliveryLocation = useSelector(
    (state) => state.fruits.deliveryLocation
  );

  const [cities, setCities] = useState([]);
  const [selectedCity, setSelectedCity] = useState({ city: "", area: [] });
  const dispatch = useDispatch();

  const handleClick = (event) => {
    setShow(!show);
    setTarget(event.target);
  };

  const onChange = ({area}) => {
    dispatch(setDeliveryLocation(`${area}, ${selectedCity.city}`));
    setShow(false);
  };

  useEffect(() => {
    loadAreas().then((res) => {
      const { deliveryArea } = res;
      setCities(deliveryArea);
    });
  }, []);

  const handleCityClick = (selectedCityObject) => {
    setSelectedCity(selectedCityObject);
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
        <span className="px-2 d-none d-md-inline">{deliveryLocation}</span>
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
            <CitiesContainer className="citiesContainer py-2 mb-1">
              {cities.map((city, i) => {
                let activeClass =
                  city.city === selectedCity.city ? "active" : "";
                return (
                  <li key={i} className="my-1">
                    <span
                      className={`city-text ${activeClass}`}
                      onClick={() => {
                        handleCityClick(city);
                      }}
                    >
                      {city.city}
                    </span>
                    {i !== cities.length - 1 ? (
                      <span className="px-2">|</span>
                    ) : null}
                  </li>
                );
              })}
            </CitiesContainer>
            <ComboBox
              onChange={onChange}
              options={selectedCity.area.map((a, i) => {
                const { area, id = !+1 } = a;
                return { area, id };
              })}
              displayProp="area"
              valueProp="id"
              label="Select city and type area"
            />
          </Popover.Content>
        </Popover>
      </Overlay>
    </div>
  );
};

export default PopOver;

const CitiesContainer = styled.div`
  list-style-type: none;
  li {
    display: inline;

    .city-text {
      cursor: pointer;
      &:hover {
        color: var(--mainGreen);
        text-decoration: underline;
      }
    }
    .active {
      color: var(--mainGreen);
    }
  }
`;
