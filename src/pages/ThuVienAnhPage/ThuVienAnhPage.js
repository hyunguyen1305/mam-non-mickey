import React, { useEffect, useState } from "react";
import { createClient } from "contentful";

import ThuVienAnhComponent from "../TrangChuPage/ThuVienAnh";

const client = createClient({
  space: "0htr8e4wjyd9",
  accessToken: `vBO4C9cLXX5v6JbvNaplqfeVH9j-_HDp7WJeMnhEIOQ`,
});

function ThuVienAnhPage() {
  const [hinhAnh, setHinhAnh] = useState(null);
  useEffect(() => {
    const getImage = () => {
      client
        .getAssets()
        .then((response) => {
          console.log(response.items);
          return setHinhAnh(response.items);
        })
        .catch(console.error);
    };

    getImage();
  }, []);
  return (
    <section style={{ minHeight: "90vh" }}>
      {hinhAnh && <ThuVienAnhComponent data={hinhAnh}></ThuVienAnhComponent>}
    </section>
  );
}

export default ThuVienAnhPage;
