import React, { useEffect, useState } from "react";
import { createClient } from "contentful";

import SuKienComponent from "../TrangChuPage/Sukien";

const client = createClient({
  space: "0htr8e4wjyd9",
  accessToken: `vBO4C9cLXX5v6JbvNaplqfeVH9j-_HDp7WJeMnhEIOQ`,
});

function SuKienPage() {
  const [suKien, setSukien] = useState(null);
  useEffect(() => {
    const getSukien = () => {
      client
        .getEntries({
          content_type: "sukien",
        })
        .then((response) => {
          console.log(response.items);
          return setSukien(response.items);
        })
        .catch(console.error);
    };

    getSukien();
  }, []);
  return (
    <section className="container" style={{ minHeight: "90vh" }}>
      {suKien && <SuKienComponent data={suKien}></SuKienComponent>}
    </section>
  );
}

export default SuKienPage;
