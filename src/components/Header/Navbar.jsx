import React from "react";
import styled from "styled-components";
import ReactTooltip from "react-tooltip";
import { NavLink } from "react-router-dom";

import { AiFillCaretDown } from "react-icons/ai";

const NavigationWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  text-transform: uppercase;
  white-space: nowrap;
  a {
    position: relative;
    color: black;
    font-weight: 500;
    text-decoration: none;
    transition: 0.3s;
    padding: 0.8em;
    margin: 0.5em;
    display: inline-block;
    :hover {
      color: white;
    }
  }
  .hoverStill {
    a {
      color: black;
      :hover {
        color: red;
      }
    }
  }
`;

function Navbar({ refBar, isSticky }) {
  return (
    <div style={{ position: "relative", zIndex: "100" }}>
      <div
        style={{
          textAlign: "center",
          backgroundColor: "#cf0a2c",
          boxShadow: "0 2px 2px 0 rgba(0,0,0,.5)",
          overflowX: "scroll",
        }}
        ref={refBar}
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
              to="/gioi-thieu"
              activeStyle={{
                color: "white",
              }}
            >
              Giới Thiệu
            </NavLink>
            <NavLink
              to="/chuong-trinh-hoc"
              activeStyle={{
                color: "white",
              }}
              data-tip
              data-for="chuong-trinh-hoc"
            >
              Chương trình học
              <span>
                <AiFillCaretDown></AiFillCaretDown>
              </span>
            </NavLink>
            <ReactTooltip
              id="chuong-trinh-hoc"
              effect="solid"
              place="bottom"
              type="light"
              className="hoverStill"
              delayHide={200}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <NavLink
                  to="/chuong-trinh-hoc/khoi-mam-non"
                  activeStyle={{
                    color: "red",
                  }}
                >
                  Khối mầm non
                </NavLink>
                <NavLink
                  to="/chuong-trinh-hoc/khoi-nha-tre"
                  activeStyle={{
                    color: "red",
                  }}
                >
                  Khối nhà trẻ
                </NavLink>
              </div>
            </ReactTooltip>

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
      <div></div>
    </div>
  );
}

export default Navbar;
