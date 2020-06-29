import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import TitleText from "../../components/TitleText";
import CardItem from "../../components/CardItem";

const SuKienWrapper = styled.div`
  .item {
    transition: all 0.5s ease-in-out;
    margin: 4px 0;
  }
`;

function Sukien({ data }) {
  return (
    <div>
      <TitleText text="các Sự kiện và Hoạt động"></TitleText>
      <div className="container-fluid">
        <SuKienWrapper>
          <div className="row no-gutters">
            {data &&
              data.map((item, i) => {
                return (
                  <div
                    className="col-lg-3 col-xl-3 col-md-3 col-sm-12 col-xs-12 item"
                    key={i}
                  >
                    <Link
                      to={`/su-kien/${item.sys.id}`}
                      style={{ textDecoration: "none", color: "black" }}
                    >
                      <CardItem
                        imgLink={item.fields.anhdaidien.fields.file.url}
                        text={item.fields.tieude}
                        date={item.fields.ngaytao}
                      ></CardItem>
                    </Link>
                  </div>
                );
              })}
          </div>
        </SuKienWrapper>
      </div>
    </div>
  );
}

export default Sukien;
