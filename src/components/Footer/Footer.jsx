import React from "react";

import styled from "styled-components";

import { AiOutlineClockCircle } from "react-icons/ai";
import { MdLocationOn, MdSmartphone } from "react-icons/md";
import { FiPhone } from "react-icons/fi";

import MyGoogleMapComp from "../MyGoogleMapComp";
import TitleText from "../TitleText";

const FooterWrapper = styled.div`
  .item {
    transition: all 0.5s ease-in-out;
    padding: 2rem;
  }
  .coso {
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
    font-size: 1.5rem;
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
                <h4 className="coso-title">Cơ Sở 1</h4>
                <div className="coso-text">
                  <div style={{ lineHeight: "3rem" }}>
                    <AiOutlineClockCircle
                      style={{ verticalAlign: "middle" }}
                      size="2rem"
                    ></AiOutlineClockCircle>
                    <span style={{ verticalAlign: "middle" }}>
                      Thời gian học: 8:00 am - 5:00 pm
                    </span>
                  </div>
                  <div style={{ lineHeight: "3rem" }}>
                    <MdLocationOn
                      style={{ verticalAlign: "middle" }}
                      size="2rem"
                    ></MdLocationOn>
                    <span style={{ verticalAlign: "middle" }}>
                      Địa chỉ: 250A Chu Văn An, Phường 26, Quận Bình Thạnh,
                      Thành phố Hồ Chí Minh.
                    </span>
                  </div>
                  <div style={{ lineHeight: "3rem" }}>
                    <FiPhone
                      style={{ verticalAlign: "middle" }}
                      size="2rem"
                    ></FiPhone>
                    <span style={{ verticalAlign: "middle" }}>
                      Số điện thoại: +84 283 511 0146
                    </span>
                  </div>
                  <div style={{ lineHeight: "3rem" }}>
                    <MdSmartphone
                      style={{ verticalAlign: "middle" }}
                      size="2rem"
                    ></MdSmartphone>
                    <span style={{ verticalAlign: "middle" }}>
                      Điện thoại Di động: +84 283 511 0146
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
                <h4 className="coso-title">Cơ Sở 2</h4>
                <div className="coso-text">
                  <div style={{ lineHeight: "3rem" }}>
                    <AiOutlineClockCircle
                      style={{ verticalAlign: "middle" }}
                      size="2rem"
                    ></AiOutlineClockCircle>
                    <span style={{ verticalAlign: "middle" }}>
                      Thời gian học: 8:00 am - 5:00 pm
                    </span>
                  </div>
                  <div style={{ lineHeight: "3rem" }}>
                    <MdLocationOn
                      style={{ verticalAlign: "middle" }}
                      size="2rem"
                    ></MdLocationOn>
                    <span style={{ verticalAlign: "middle" }}>
                      Địa chỉ: 250A Chu Văn An, Phường 26, Quận Bình Thạnh,
                      Thành phố Hồ Chí Minh.
                    </span>
                  </div>
                  <div style={{ lineHeight: "3rem" }}>
                    <FiPhone
                      style={{ verticalAlign: "middle" }}
                      size="2rem"
                    ></FiPhone>
                    <span style={{ verticalAlign: "middle" }}>
                      Điện thoại bàn: +84 283 511 0146
                    </span>
                  </div>
                  <div style={{ lineHeight: "3rem" }}>
                    <MdSmartphone
                      style={{ verticalAlign: "middle" }}
                      size="2rem"
                    ></MdSmartphone>
                    <span style={{ verticalAlign: "middle" }}>
                      Điện thoại Di động: +84 283 511 0146
                    </span>
                  </div>
                </div>
                <MyGoogleMapComp
                  dataLocation={{ lat: 10.811159, lng: 106.705376 }}
                  name="Nhóm trẻ Mickey"
                  address="250A Chu Văn An, phường 26, Quận Bình Thạnh, Thành phố Hồ Chí Minh"
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
