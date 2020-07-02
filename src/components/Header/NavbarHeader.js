import React from "react";
import Navbar from "./Navbar";
import banner from "../../images/logoBanner.png";

function NavbarHeader({ refBar, isSticky }) {
  return (
    <header>
      <div style={{ padding: "0.8rem 0" }}>
        <img src={banner} alt="banner" style={{ margin: "0 auto" }}></img>
      </div>

      <Navbar refBar={refBar} isSticky={isSticky}></Navbar>
    </header>
  );
}

export default NavbarHeader;
