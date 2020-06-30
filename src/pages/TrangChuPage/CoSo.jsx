import React from "react";
import { AiOutlineClockCircle } from "react-icons/ai";
import { MdLocationOn, MdSmartphone } from "react-icons/md";
import { FiPhone } from "react-icons/fi";
import TitleText from "../../components/TitleText";
import styled from "styled-components";

const CoSoWrapper = styled.div``;

function CoSo() {
  return (
    <div className="container">
      <TitleText text="Cơ sở vật chất"></TitleText>
      <CoSoWrapper className="row ">
        <div className="col-lg-6 col-xl-6 col-md-6 col-sm-12 col-xs-12 ">
          <img
            src="https://www.harvest-christian-school.com/wp-content/uploads/2015/08/Kindergarten-classroom-800x532.jpg"
            alt="coso"
          ></img>
        </div>
        <div className="col-lg-6 col-xl-6 col-md-6 col-sm-12 col-xs-12 ">
          <div>
            {/*  */}
            <div style={{ display: "flex", alignItems: "top", margin: "1rem" }}>
              <div>
                <MdLocationOn
                  style={{
                    border: "1px black solid",
                    borderRadius: "50%",
                    padding: "8px",
                  }}
                  size={40}
                ></MdLocationOn>
              </div>
              <div style={{ fontSize: "1.5rem" }}>
                Khu Vực: Gồm 2 cơ sở thuộc khu dân cư đường Chu Văn An, Quận
                Bình Thạnh, Tp Hồ Chí Minh
              </div>
            </div>
            {/*  */}
            <div
              style={{ display: "flex", alignItems: "center", margin: "1rem" }}
            >
              <div>
                <MdLocationOn
                  style={{
                    border: "1px black solid",
                    borderRadius: "50%",
                    padding: "8px",
                  }}
                  size={40}
                ></MdLocationOn>
              </div>
              <div style={{ fontSize: "1.5rem" }}>
                Diện tích : {">"} 100m<sup>2</sup>
              </div>
            </div>
            {/*  */}
            <div style={{ display: "flex", alignItems: "top", margin: "1rem" }}>
              <div>
                <MdLocationOn
                  style={{
                    border: "1px black solid",
                    borderRadius: "50%",
                    padding: "8px",
                  }}
                  size={40}
                ></MdLocationOn>
              </div>
              <div style={{ fontSize: "1.5rem", paddingTop: "8px" }}>
                Hệ thống phòng học:
                <ul>
                  <li>
                    Mỗi phòng học rộng trung bình 50m
                    <sup>2</sup>
                  </li>
                  <li>
                    Đầy đủ các trang thiết bị và đồ dùng giảng dạy, tủ đựng
                    giày, tủ đựng chăn gối, quần áo, ...
                  </li>
                  <li>
                    Tất cả các phòng học đều được bố trí, lắp đặt để lấy ánh
                    sáng, ánh nắng tự nhiên.
                  </li>
                  <li>
                    Tất cả các phòng học đều được trang bị máy điều hòa giúp cho
                    không gian phòng học mát mẻ và trong lành.
                  </li>
                </ul>
              </div>
            </div>
            {/*  */}
            <div style={{ display: "flex", alignItems: "top", margin: "1rem" }}>
              <div>
                <MdLocationOn
                  style={{
                    border: "1px black solid",
                    borderRadius: "50%",
                    padding: "8px",
                  }}
                  size={40}
                ></MdLocationOn>
              </div>
              <div style={{ fontSize: "1.5rem", paddingTop: "8px" }}>
                Khu vực nhà bếp:
                <ul>
                  <li>
                    Đầy đủ các trang thiết bị, đồ dùng inox và đảm bảo vệ sinh
                  </li>
                  <li>Nước uống hàng ngày là nước đun sôi để nguội.</li>
                  <li>
                    Tất cả quy trình và thao tác chế biến thức ăn cho trẻ đều
                    đảm bảo vệ sinh và được giám sát bởi hệ thống camera.
                  </li>
                </ul>
              </div>
            </div>
            {/*  */}
            <div
              style={{ display: "flex", alignItems: "center", margin: "1rem" }}
            >
              <div>
                <MdLocationOn
                  style={{
                    border: "1px black solid",
                    borderRadius: "50%",
                    padding: "8px",
                  }}
                  size={40}
                ></MdLocationOn>
              </div>
              <div style={{ fontSize: "1.5rem" }}>
                Phòng y tế: trang bị đầy đủ đồ dùng, thiết bị y tế, có nhân viên
                y tế túc trực để chăm sóc sức khỏe và kịp thời xử lý các tình
                huống sơ cấp cứu.
              </div>
            </div>
            {/*  */}

            <div
              style={{ display: "flex", alignItems: "center", margin: "1rem" }}
            >
              <div>
                <MdLocationOn
                  style={{
                    border: "1px black solid",
                    borderRadius: "50%",
                    padding: "8px",
                  }}
                  size={40}
                ></MdLocationOn>
              </div>
              <div style={{ fontSize: "1.5rem" }}>
                Hệ thống camera online: Được trang bị trong từng phòng học và
                khu vực chức năng giúp quý phụ huynh có thể quan sát mọi hoạt
                động của bé.
              </div>
            </div>
            {/*  */}
          </div>
        </div>
      </CoSoWrapper>
    </div>
  );
}

export default CoSo;
