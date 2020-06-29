import React from "react";
import styled from "styled-components";

const TitleTextWrapper = styled.h2`
  font-size: 2.3rem;
  color: ${(props) => props.color};
  text-align: center;
  margin: 2rem;
  text-transform: uppercase;
  font-family: "Raleway", sans-serif;
  vertical-align: baseline;
  font-weight: 500;
`;

function TitleText({ text, color }) {
  return <TitleTextWrapper color={color}>{text}</TitleTextWrapper>;
}

export default TitleText;
