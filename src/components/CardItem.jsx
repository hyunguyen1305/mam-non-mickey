import React from "react";
import styled from "styled-components";

const CardItemWrapper = styled.div`
  div,
  img {
    transition: all 0.5s ease;
  }
  .card-image {
    width: 90%;
    height: 200px;
    object-fit: scale-down;
  }
  .card-text {
    font-size: 2rem;
    padding: 1rem 0;
  }
  &:hover {
    .card-image {
      filter: brightness(105%);
    }
    .card-text {
      color: red;
      cursor: pointer;
    }
  }
`;

function CardItem({ imgLink, text, date }) {
  return (
    <CardItemWrapper>
      <div>
        <img src={imgLink} alt="img" className="card-image"></img>
      </div>
      <small>Ngày: {date}</small>
      <div className="card-text">{text}</div>
    </CardItemWrapper>
  );
}

export default CardItem;
