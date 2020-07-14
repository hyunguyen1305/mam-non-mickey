import React from "react";
import styled from "styled-components";
import HeroBanner from "../../images/herroBanner.png";

const CarouselWrapper = styled.div`
  z-index: 1;
  .image-banner {
    width: 100%;
    height: 100%;
    object-fit: contain;
    display: block;
  }
  .text-banner {
    position: absolute;
    bottom: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.1);
    width: 100%;
    color: white;
    padding: 1rem 0;
    text-align: center;
  }
`;

function Carousel() {
  return (
    <CarouselWrapper>
      <div>
        <img src={HeroBanner} alt="hello" className="image-banner"></img>
      </div>
    </CarouselWrapper>
  );
}

export default Carousel;
