import React from "react";
import Navbar from "./Navbar";
import banner from "../../images/logoBanner.png";

function NavbarHeader() {
  return (
    <header>
      <img
        src={banner}
        alt="banner"
        style={{ margin: ".8em auto", display: "block" }}
      ></img>
      <Navbar></Navbar>
    </header>
  );
}

export default NavbarHeader;
