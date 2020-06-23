import React from "react";

import styled from "styled-components";

import { AiOutlineClockCircle } from "react-icons/ai";
import { MdLocationOn, MdSmartphone } from "react-icons/md";
import { FiPhone } from "react-icons/fi";

import TitleText from "../../components/TitleText";

const CoSoWrapper = styled.div`
  .item {
    transition: all 0.5s ease-in-out;
  }
  .coso {
    margin: 0 auto;
  }
  .coso-image {
    width: 100%;
    height: 400px;
    object-fit: fill;
  }
  .coso-title {
    margin: 0;
    font-size: 2rem;
    color: red;
    padding: 2rem;
    text-transform: uppercase;
    font-family: "Raleway", sans-serif;
    vertical-align: baseline;
    font-weight: 400;
  }
  .coso-text {
    font-size: 1.5rem;
    color: black;
    padding: 0rem 1.5rem 2rem 1.5rem;
    margin-bottom: 2rem;
    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
    vertical-align: baseline;
    font-weight: 400;
  }
`;

function CoSo() {
  return (
    <div>
      <TitleText text="Cơ sở học"></TitleText>
      <div className="container">
        <CoSoWrapper>
          <div className="row no-gutters">
            <div className="col-lg-6 col-xl-6 col-md-6 col-sm-12 col-xs-12 item">
              <div
                className="coso"
                style={{
                  borderTop: "5px red solid",
                  borderBottom: "5px red solid",
                }}
              >
                <img
                  src="https://scontent.fsgn5-2.fna.fbcdn.net/v/t1.0-9/12032092_1622404468027481_8782011830391817839_n.jpg?_nc_cat=107&_nc_sid=6e5ad9&_nc_ohc=suO4OND3RjwAX_9OawG&_nc_ht=scontent.fsgn5-2.fna&oh=78e2ce95e67b9fe7042a0b723279cfb0&oe=5F17904B"
                  alt="img"
                  className="coso-image"
                ></img>
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
              </div>
            </div>
            <div className="col-lg-6 col-xl-6 col-md-6 col-sm-12 col-xs-12 item">
              <div
                className="coso"
                style={{
                  borderTop: "5px red solid",
                  borderBottom: "5px red solid",
                }}
              >
                <img
                  src="https://cdn.designrulz.com/wp-content/uploads/2014/10/DR-vig-2.jpg"
                  alt="img"
                  className="coso-image"
                ></img>
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
                {/* <MyGoogleMapComp
                  dataLocation={{ lat: 10.811159, lng: 106.705376 }}
                  name="Nhóm trẻ Mickey"
                  address="250A Chu Văn An, phường 26, Quận Bình Thạnh, Thành phố Hồ Chí Minh"
                ></MyGoogleMapComp> */}
              </div>
            </div>
          </div>
        </CoSoWrapper>
      </div>
    </div>
  );
}

export default CoSo;
