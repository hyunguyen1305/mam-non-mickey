import React from "react";
// import { AiOutlineClockCircle } from "react-icons/ai";
import { MdLocationOn, MdCropLandscape, MdRoomService } from "react-icons/md";
import { BsHouseDoor, BsFillCameraVideoFill } from "react-icons/bs";
import { FaPlusCircle } from "react-icons/fa";
import { RiServiceLine } from "react-icons/ri";

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
                <strong>Khu Vực</strong>: Gồm 2 cơ sở thuộc khu dân cư đường Chu
                Văn An, Quận Bình Thạnh, Tp Hồ Chí Minh
              </div>
            </div>
            {/*  */}
            <div
              style={{ display: "flex", alignItems: "center", margin: "1rem" }}
            >
              <div>
                <MdCropLandscape
                  style={{
                    border: "1px black solid",
                    borderRadius: "50%",
                    padding: "8px",
                  }}
                  size={40}
                ></MdCropLandscape>
              </div>
              <div style={{ fontSize: "1.5rem" }}>
                <strong>Diện Tích</strong>: {">"} 100m<sup>2</sup>
              </div>
            </div>
            {/*  */}
            <div style={{ display: "flex", alignItems: "top", margin: "1rem" }}>
              <div>
                <BsHouseDoor
                  style={{
                    border: "1px black solid",
                    borderRadius: "50%",
                    padding: "8px",
                  }}
                  size={40}
                ></BsHouseDoor>
              </div>
              <div style={{ fontSize: "1.5rem", paddingTop: "8px" }}>
                <strong>Hệ thống phòng học</strong>:
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
                <MdRoomService
                  style={{
                    border: "1px black solid",
                    borderRadius: "50%",
                    padding: "8px",
                  }}
                  size={40}
                ></MdRoomService>
              </div>
              <div style={{ fontSize: "1.5rem", paddingTop: "8px" }}>
                <strong>Khu vực nhà bếp</strong>:
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
            <div style={{ display: "flex", alignItems: "top", margin: "1rem" }}>
              <div>
                <FaPlusCircle
                  style={{
                    border: "1px black solid",
                    borderRadius: "50%",
                    padding: "8px",
                  }}
                  size={40}
                ></FaPlusCircle>
              </div>
              <div style={{ fontSize: "1.5rem" }}>
                <strong>Phòng y tế</strong>: trang bị đầy đủ đồ dùng, thiết bị y
                tế, có nhân viên y tế túc trực để chăm sóc sức khỏe và kịp thời
                xử lý các tình huống sơ cấp cứu.
              </div>
            </div>
            {/*  */}
            <div style={{ display: "flex", alignItems: "top", margin: "1rem" }}>
              <div>
                <BsFillCameraVideoFill
                  style={{
                    border: "1px black solid",
                    borderRadius: "50%",
                    padding: "8px",
                  }}
                  size={40}
                ></BsFillCameraVideoFill>
              </div>
              <div style={{ fontSize: "1.5rem" }}>
                <strong>Hệ thống camera online</strong>: Được trang bị trong
                từng phòng học và khu vực chức năng giúp quý phụ huynh có thể
                quan sát mọi hoạt động của bé.
              </div>
            </div>
            {/*  */}
            <div style={{ display: "flex", margin: "1rem" }}>
              <div>
                <RiServiceLine
                  style={{
                    border: "1px black solid",
                    borderRadius: "50%",
                    padding: "8px",
                  }}
                  size={40}
                ></RiServiceLine>
              </div>
              <div style={{ fontSize: "1.5rem", paddingTop: "8px" }}>
                <strong>Dịch vụ</strong>:
                <ul>
                  <li>Trông thứ 7</li>
                  <li>Đón muộn.</li>
                </ul>
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
