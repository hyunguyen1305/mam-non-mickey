import React from "react";
import Slider from "react-slick";
import styled from "styled-components";

const CarouselWrapper = styled.div`
  z-index: 1;
  max-width: 1920px;
  margin: 0 auto;
  padding: 0 3rem;
  .item {
    width: 100%;
    height: 60vh;
    background-color: whitesmoke;
  }
`;

function Carousel() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    swipeToSlide: true,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    accessibility: true,
    arrows: true,
    cssEase: "linear",
  };
  return (
    <CarouselWrapper>
      <Slider {...settings}>
        <div className="item">
          <h3>1</h3>
        </div>
        <div className="item">
          <h3>2</h3>
        </div>
        <div className="item">
          <h3>3</h3>
        </div>
        <div className="item">
          <h3>4</h3>
        </div>
        <div className="item">
          <h3>5</h3>
        </div>
      </Slider>
    </CarouselWrapper>
  );
}

export default Carousel;
