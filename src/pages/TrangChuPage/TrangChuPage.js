import React, { useEffect, useState } from "react";
import { createClient } from "contentful";
import { Link } from "react-router-dom";

import Carousel from "./Carousel";
import Sukien from "./Sukien";
import ChuongTrinhHoc from "./ChuongTrinhHoc";
import ThuVienAnh from "./ThuVienAnh";
import CoSo from "./CoSo";

const client = createClient({
  space: "0htr8e4wjyd9",
  accessToken: `vBO4C9cLXX5v6JbvNaplqfeVH9j-_HDp7WJeMnhEIOQ`,
});

function TrangChuPage() {
  const [hinhAnh, setHinhAnh] = useState(null);
  const [suKien, setSukien] = useState(null);
  // const [banner, setBanner] = useState(null);
  useEffect(() => {
    const getImage = () => {
      client
        .getAssets({
          limit: 10,
        })
        .then((response) => {
          console.log(response.items);
          return setHinhAnh(response.items);
        })
        .catch(console.error);
    };
    const getSukien = () => {
      client
        .getEntries({
          limit: 4,
          content_type: "sukien",
        })
        .then((response) => {
          return setSukien(response.items);
        })
        .catch(console.error);
    };
    getImage();
    getSukien();
  }, []);
  return (
    <section>
      <div className="container">
        <Carousel></Carousel>
      </div>
      <div
        className="container"
        style={{ padding: "2rem 0", marginTop: "1rem" }}
      >
        {suKien && <Sukien data={suKien}></Sukien>}
        <div
          style={{
            textAlign: "center",
            margin: "2rem",
          }}
        >
          <Link
            to="/su-kien"
            style={{
              textDecoration: "none",
              border: "1px gray solid",
              width: "auto",
              padding: "1rem",
              borderRadius: "8px",
              color: "gray",
            }}
          >
            Xem tất cả sự kiện
          </Link>
        </div>
      </div>
      <div
        className="container-fluid"
        style={{
          backgroundColor: "whitesmoke",
          padding: "2rem 0",
          marginTop: "2rem 0",
        }}
      >
        <ChuongTrinhHoc></ChuongTrinhHoc>
      </div>
      <div
        className="container"
        style={{
          padding: "2rem 0",
          marginTop: "1rem",
        }}
      >
        <CoSo></CoSo>
      </div>
      <hr></hr>
      <div
        className="container-fluid"
        style={{ padding: "2rem 0", margin: "2rem 0" }}
      >
        {hinhAnh && <ThuVienAnh data={hinhAnh}></ThuVienAnh>}
        <div
          style={{
            textAlign: "center",
          }}
        >
          <Link
            to="/thu-vien-anh"
            style={{
              textDecoration: "none",
              border: "1px gray solid",
              width: "auto",
              padding: "1rem",
              borderRadius: "8px",
              color: "gray",
            }}
          >
            Xem tất cả ảnh
          </Link>
        </div>
      </div>
    </section>
  );
}

export default TrangChuPage;
