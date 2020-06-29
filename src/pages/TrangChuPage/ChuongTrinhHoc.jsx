import React from "react";
import styled from "styled-components";

import TitleText from "../../components/TitleText";

const ChuongTrinhHocWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  .item {
    transition: all 0.5s ease-in-out;
  }
  .media {
    width: 100%;
  }
  .media-image {
  }
  .media-title {
    margin: 0;
    font-size: 2rem;
    color: white;
    padding: 2rem;
    text-transform: uppercase;
    font-family: "Raleway", sans-serif;
    vertical-align: baseline;
    font-weight: 400;
  }
  .media-text {
    font-size: 1.5rem;
    color: white;
    padding: 0rem 1.5rem 2rem 1.5rem;
    margin-bottom: 2rem;
    font-family: "Raleway", sans-serif;
    vertical-align: baseline;
    font-weight: 400;
  }
`;

function ChuongTrinhHoc() {
  return (
    <div>
      <TitleText text="Chương trình học"></TitleText>
      <div className="container">
        <ChuongTrinhHocWrapper>
          <div className="row no-gutters">
            <div className="col-lg-6 col-xl-6 col-md-6 col-sm-12 col-xs-12 item">
              <div className="media" style={{ backgroundColor: "#ea907a" }}>
                <div style={{ width: "100%" }}>
                  <img
                    src="https://img.freepik.com/free-vector/board-template-with-five-kids-garden_1308-6224.jpg?size=626&ext=jpg"
                    alt="img"
                    className="media-image"
                  ></img>
                </div>
                <h4 className="media-title">Khối Nhà Trẻ</h4>
                <div className="media-text">
                  Mô hình Học Tập Đa Hoạt Động ở bậc học Mầm non giúp các em có
                  thể có được nhận thức cá nhân, tinh thần cộng đồng, phát triển
                  toàn diện và hài hòa.
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-xl-6 col-md-6 col-sm-12 col-xs-12 item">
              <div className="media" style={{ backgroundColor: "#aacdbe" }}>
                <img
                  src="https://img3.stockfresh.com/files/l/lenm/m/72/1170195_stock-photo-preschool-kids.jpg"
                  alt="img"
                  className="media-image"
                ></img>
                <h4 className="media-title">Khối Mầm Non</h4>
                <div className="media-text">
                  Mô hình Học Tập Đa Hoạt Động ở bậc học Mầm non, giúp các em có
                  thể có được nhận thức cá nhân, tinh thần cộng đồng, phát triển
                  toàn diện và hài hòa.
                </div>
                <div>Chi Tiết </div>
              </div>
            </div>
          </div>
        </ChuongTrinhHocWrapper>
      </div>
    </div>
  );
}

export default ChuongTrinhHoc;
