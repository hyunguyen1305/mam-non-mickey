import React from "react";

import Carousel from "./Carousel";
import Sukien from "./Sukien";
import ChuongTrinhHoc from "./ChuongTrinhHoc";
import CoSo from "./CoSo";

function TrangChuPage() {
  return (
    <section>
      <div className="container">
        <Carousel></Carousel>
      </div>
      <div
        className="container"
        style={{ padding: "2rem 0", marginTop: "1rem" }}
      >
        <Sukien></Sukien>
      </div>
      <div
        className="container-fluid"
        style={{
          backgroundColor: "#eee",
          padding: "2rem 0",
          marginTop: "1rem",
        }}
      >
        <ChuongTrinhHoc></ChuongTrinhHoc>
      </div>
      <div
        className="container"
        style={{ padding: "2rem 0", marginTop: "1rem" }}
      >
        <CoSo></CoSo>
      </div>
    </section>
  );
}

export default TrangChuPage;
