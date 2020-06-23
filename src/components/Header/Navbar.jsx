import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const NavigationWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  text-transform: uppercase;

  a {
    color: black;
    font-weight: 500;
    text-decoration: none;
    transition: 0.3s;
    padding: 0.8em;
    margin: 0.5em;
    :hover {
      color: white;
    }
  }
`;

function Navbar() {
  const [isSticky, setSticky] = useState(false);
  const navBar = useRef(null);
  const handleScroll = () => {
    const sticky = navBar.current.getBoundingClientRect().bottom;
    if (window.pageYOffset > sticky) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", () => handleScroll);
    };
  }, []);
  return (
    <div
      style={{
        textAlign: "center",
        backgroundColor: "#cf0a2c",
        boxShadow: "0 2px 2px 0 rgba(0,0,0,.5)",
        overflowX: "scroll",
      }}
      ref={navBar}
      className={isSticky ? " sticky" : " normal"}
    >
      <div className="container">
        <NavigationWrapper>
          <NavLink
            to="/"
            exact={true}
            activeStyle={{
              color: "white",
            }}
          >
            Trang chủ
          </NavLink>
          <NavLink
            to="/khoi-nha-tre"
            activeStyle={{
              color: "white",
            }}
          >
            Khối nhà trẻ
          </NavLink>
          <NavLink
            to="/khoi-mam-non"
            activeStyle={{
              color: "white",
            }}
          >
            Khối Mầm non
          </NavLink>
          <NavLink
            to="/su-kien"
            activeStyle={{
              color: "white",
            }}
          >
            Sự kiện và hoạt động
          </NavLink>
          <NavLink
            to="/csvc"
            activeStyle={{
              color: "white",
            }}
          >
            Cơ sở vật chất
          </NavLink>
          <NavLink
            to="lien-he"
            activeStyle={{
              color: "white",
            }}
          >
            Liên Hệ
          </NavLink>
        </NavigationWrapper>
      </div>
    </div>
  );
}

export default Navbar;
