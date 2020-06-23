import React from "react";
import styled from "styled-components";

import TitleText from "../../components/TitleText";
import CardItem from "../../components/CardItem";

const SuKienWrapper = styled.div`
  .item {
    transition: all 0.5s ease-in-out;
  }
`;

function Sukien() {
  return (
    <div>
      <TitleText text="các Sự kiện và Hoạt động"></TitleText>
      <div className="container-fluid">
        <SuKienWrapper>
          <div className="row no-gutters">
            <div className="col-lg-3 col-xl-3 col-md-3 col-sm-12 col-xs-12 item">
              <CardItem
                imgLink="https://s3.ap-southeast-1.amazonaws.com/images.vasapi.mangoads.vn/uploads/2020/06/18/1592476231-300.jpg"
                text="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
                date="20/6/2020"
              ></CardItem>
            </div>
            <div className="col-lg-3 col-xl-3 col-md-3 col-sm-12 col-xs-12 item">
              <CardItem
                imgLink="https://s3.ap-southeast-1.amazonaws.com/images.vasapi.mangoads.vn/uploads/2020/06/02/1591072792-300.jpg"
                text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. industry."
                date="20/6/2020"
              ></CardItem>
            </div>
            <div className="col-lg-3 col-xl-3 col-md-3 col-sm-12 col-xs-12 item">
              <CardItem
                imgLink="https://s3.ap-southeast-1.amazonaws.com/images.vasapi.mangoads.vn/uploads/2020/05/15/1589529414-300.png"
                text="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
                date="20/6/2020"
              ></CardItem>
            </div>
            <div className="col-lg-3 col-xl-3 col-md-3 col-sm-12 col-xs-12 item">
              <CardItem
                imgLink="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Double-alaskan-rainbow.jpg/300px-Double-alaskan-rainbow.jpg"
                text="Lorem Ipsum is simply dummy text of the ."
                date="20/6/2020"
              ></CardItem>
            </div>
          </div>
        </SuKienWrapper>
      </div>
    </div>
  );
}

export default Sukien;
