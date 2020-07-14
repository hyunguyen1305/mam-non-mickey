import React from "react";

import styled from "styled-components";

import { AiOutlineClockCircle, AiFillFacebook } from "react-icons/ai";
import { MdLocationOn, MdSmartphone } from "react-icons/md";
import { FiPhone } from "react-icons/fi";

import MyGoogleMapComp from "../MyGoogleMapComp";
import TitleText from "../TitleText";

const FooterWrapper = styled.div`
  a {
    text-decoration: none;
    color: orange;
  }
  .item {
    transition: all 0.5s ease-in-out;
    padding: 0 2rem;
  }
  .coso-title {
    margin: 0;
    font-size: 2rem;
    color: #cf0a2c;
    padding: 1.5rem;
    text-transform: uppercase;
    font-family: "Raleway", sans-serif;
    vertical-align: baseline;
    font-weight: 400;
  }
  .coso-text {
    font-size: 1.8rem;
    color: white;
    padding: 0rem 1.5rem 1.5rem 1.5rem;
    margin-bottom: 2rem;
    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
    vertical-align: baseline;
    font-weight: 400;
  }
`;

function Footer() {
  return (
    <section className="container-fluid" style={{ backgroundColor: "#333333" }}>
      <div className="container">
        <FooterWrapper>
          <TitleText text="Mầm non Mickey" color="white"></TitleText>
          <div className="row no-gutters">
            <div className="col-lg-6 col-xl-6 col-md-6 col-sm-12 col-xs-12 item">
              <div className="coso">
                <h4 className="coso-title">Nhóm trẻ Mickey</h4>
                <div className="coso-text">
                  <div style={{ lineHeight: "3rem" }}>
                    <AiOutlineClockCircle
                      style={{ verticalAlign: "middle" }}
                      size="2rem"
                    ></AiOutlineClockCircle>
                    <span style={{ verticalAlign: "middle" }}>
                      Thời gian học: 6:00 sáng - 4:30 chiều
                    </span>
                  </div>
                  <div style={{ lineHeight: "3rem" }}>
                    <MdLocationOn
                      style={{ verticalAlign: "middle" }}
                      size="2rem"
                    ></MdLocationOn>
                    <span style={{ verticalAlign: "middle" }}>
                      Địa chỉ:{" "}
                      <a
                        href="https://www.google.com/maps/place/Nh%C3%B3m+tr%E1%BA%BB+Mickey/@10.8112253,106.7026443,17z/data=!3m1!4b1!4m5!3m4!1s0x317528962ae22f6d:0x6782931f5154849e!8m2!3d10.81122!4d106.704833"
                        target="_blank"
                        rel="noopener noreferrer"
                        title="250A Chu Văn An, phường 26, Quận Bình Thạnh, Thành phố
                        Hồ Chí Minh"
                      >
                        250A Chu Văn An, phường 26, Quận Bình Thạnh, Thành phố
                        Hồ Chí Minh
                      </a>
                    </span>
                  </div>
                  <div style={{ lineHeight: "3rem" }}>
                    <FiPhone
                      style={{ verticalAlign: "middle" }}
                      size="2rem"
                    ></FiPhone>
                    <span style={{ verticalAlign: "middle" }}>
                      Số điện thoại:{" "}
                      <a
                        href="tel:+842835110146"
                        target="_blank"
                        rel="noopener noreferrer"
                        title="Call Now"
                      >
                        0283 511 0146
                      </a>
                    </span>
                  </div>
                  <div style={{ lineHeight: "3rem" }}>
                    <MdSmartphone
                      style={{ verticalAlign: "middle" }}
                      size="2rem"
                    ></MdSmartphone>
                    <span style={{ verticalAlign: "middle" }}>
                      Điện thoại Di động:{" "}
                      <a
                        href="tel:+84989999612"
                        target="_blank"
                        rel="noopener noreferrer"
                        title="Call Now"
                      >
                        0989 999 612
                      </a>
                    </span>
                  </div>
                  <div style={{ lineHeight: "3rem" }}>
                    <AiFillFacebook
                      style={{ verticalAlign: "middle" }}
                      size="2rem"
                    ></AiFillFacebook>
                    <span style={{ verticalAlign: "middle" }}>
                      Facebook:{" "}
                      <a
                        href="https://www.facebook.com/M%E1%BA%A7m-non-mickey-1617080488559879/"
                        target="_blank"
                        rel="noopener noreferrer"
                        title="Facebook"
                      >
                        Mầm non Mickey
                      </a>
                    </span>
                  </div>
                </div>
                <MyGoogleMapComp
                  dataLocation={{ lat: 10.811159, lng: 106.705376 }}
                  name="Mẫu giáo Mickey"
                  address="250A Chu Văn An, phường 26, Quận Bình Thạnh, Thành phố Hồ Chí Minh"
                ></MyGoogleMapComp>
              </div>
            </div>
            <div className="col-lg-6 col-xl-6 col-md-6 col-sm-12 col-xs-12 item">
              <div className="coso">
                <h4 className="coso-title">Lớp Mẫu Giáo Mickey 2</h4>
                <div className="coso-text">
                  <div style={{ lineHeight: "3rem" }}>
                    <AiOutlineClockCircle
                      style={{ verticalAlign: "middle" }}
                      size="2rem"
                    ></AiOutlineClockCircle>
                    <span style={{ verticalAlign: "middle" }}>
                      Thời gian học: 6:00 sáng - 4:30 chiều
                    </span>
                  </div>
                  <div style={{ lineHeight: "3rem" }}>
                    <MdLocationOn
                      style={{ verticalAlign: "middle" }}
                      size="2rem"
                    ></MdLocationOn>
                    <span style={{ verticalAlign: "middle" }}>
                      Địa chỉ:{" "}
                      <a
                        href="https://www.google.com/maps/place/L%E1%BB%9Bp+M%E1%BA%ABu+Gi%C3%A1o+Mickey+2/@10.81046,106.7020113,17z/data=!4m5!3m4!1s0x317528be21bfc3ed:0x9435278dc1f89197!8m2!3d10.81046!4d106.7042"
                        target="_blank"
                        rel="noopener noreferrer"
                        title="243/24 Chu Văn An, phường 12, Quận Bình Thạnh, Thành phố
                        Hồ Chí Minh."
                      >
                        243/24 Chu Văn An, phường 12, Quận Bình Thạnh, Thành phố
                        Hồ Chí Minh.
                      </a>
                    </span>
                  </div>
                  <div style={{ lineHeight: "3rem" }}>
                    <FiPhone
                      style={{ verticalAlign: "middle" }}
                      size="2rem"
                    ></FiPhone>
                    <span style={{ verticalAlign: "middle" }}>
                      Điện thoại bàn:{" "}
                      <a
                        href="tel:+842835160189"
                        target="_blank"
                        rel="noopener noreferrer"
                        title="Call Now"
                      >
                        0283 516 0189
                      </a>
                    </span>
                  </div>
                  <div style={{ lineHeight: "3rem" }}>
                    <MdSmartphone
                      style={{ verticalAlign: "middle" }}
                      size="2rem"
                    ></MdSmartphone>
                    <span style={{ verticalAlign: "middle" }}>
                      Điện thoại Di động:{" "}
                      <a
                        href="tel:+84989999612"
                        target="_blank"
                        rel="noopener noreferrer"
                        title="Call Now"
                      >
                        0989 999 612
                      </a>
                    </span>
                  </div>
                  <div style={{ lineHeight: "3rem" }}>
                    <AiFillFacebook
                      style={{ verticalAlign: "middle" }}
                      size="2rem"
                    ></AiFillFacebook>
                    <span style={{ verticalAlign: "middle" }}>
                      Facebook:{" "}
                      <a
                        href="https://www.facebook.com/M%E1%BA%A7m-non-mickey-1617080488559879/"
                        target="_blank"
                        rel="noopener noreferrer"
                        title="Facebook"
                      >
                        Mầm non Mickey
                      </a>
                    </span>
                  </div>
                </div>
                <MyGoogleMapComp
                  dataLocation={{ lat: 10.810608, lng: 106.704221 }}
                  name="Lớp Mẫu Giáo Mickey 2"
                  address="243/24 Chu Văn An, phường 12, Quận Bình Thạnh,
                  Thành phố Hồ Chí Minh."
                ></MyGoogleMapComp>
              </div>
            </div>
          </div>
        </FooterWrapper>
        <div style={{ color: "white", padding: "1em" }}>- @2020 -</div>
      </div>
    </section>
  );
}

export default Footer;
