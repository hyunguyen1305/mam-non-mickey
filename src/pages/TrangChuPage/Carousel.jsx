import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import styled from "styled-components";

import { createClient } from "contentful";
import { Link } from "react-router-dom";
const client = createClient({
  space: "0htr8e4wjyd9",
  accessToken: `vBO4C9cLXX5v6JbvNaplqfeVH9j-_HDp7WJeMnhEIOQ`,
});

const CarouselWrapper = styled.div`
  z-index: 1;
  .item {
    width: 100%;
    height: 70vh;
    position: relative;
    overflow: hidden;
    .image-banner {
      margin: 0 auto;
      max-width: 100%;
      height: auto;
      display: block;
      object-fit: scale-down;
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
  }
`;

function Carousel() {
  const [banner, setBanner] = useState(null);
  useEffect(() => {
    const getBanner = () => {
      client
        .getEntries({
          content_type: "banner",
        })
        .then((response) => {
          console.log(response.items);
          return setBanner(response.items);
        })
        .catch(console.error);
    };

    getBanner();
  }, []);
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
          <img
            src="http://www.nicdarkthemes.com/themes/children/wp/demo/wp-content/uploads/2018/09/parallax-3.jpg"
            alt="hello"
          ></img>
        </div>
        {banner &&
          banner.map((item) => {
            return (
              <div className="item" key={item.fields.hinhanh.fields.file.url}>
                <img
                  src={item.fields.hinhanh.fields.file.url}
                  alt="banner"
                  className="image-banner"
                ></img>
                <Link to={`/su-kien/${item.fields.lienket.sys.id}`}>
                  <div className="text-banner">
                    <h2>{item.fields.lienket.fields.tieude}</h2>
                  </div>
                </Link>
              </div>
            );
          })}
      </Slider>
    </CarouselWrapper>
  );
}

export default Carousel;
