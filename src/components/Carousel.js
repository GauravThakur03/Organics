import React from "react";
import { useEffect, useState } from "react";
import useWindowResize from "./WindowResizedHook";
import Product from "./ProductConnector";
import styled from "styled-components";
import Carousel from "react-elastic-carousel";

const CarouselContainer = ({ items }) => {
  const [itemsToShow, setItemsToShow] = useState(1);

  useWindowResize((width) => {
    let x = 2;
    if (width < 768) {
      x = 1;
    } else if (991 < width) {
      x = 4;
    }
    setItemsToShow(x);
  });

  return (
    <CarouselContainerDiv className="row carouselContainer">
      <Carousel itemsToShow={itemsToShow}>
        {items.map((product, i) => (
          <Product
            product={product}
            key={i}
            catID={product.catID}
            asCarouselItem={true}
          />
        ))}
      </Carousel>
    </CarouselContainerDiv>
  );
};

export default CarouselContainer;

const CarouselContainerDiv = styled.div`
  justify-content: center;
  align-items: center;
  position: relative;
`;

const NextBtn = styled.div`
  position: absolute;
  right: 0;
  background: grey;
  opacity: 0.8;
  padding: 5px;
  color: white;
`;
const PrevBtn = styled.div`
  position: absolute;
  left: 0;
  z-index: 1;
  background: grey;
  opacity: 0.8;
  padding: 5px;
  color: white;
`;
