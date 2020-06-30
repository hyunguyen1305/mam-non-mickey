import React from "react";
import styled from "styled-components";

const CardItemWrapper = styled.div`
  transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  div,
  img {
    transition: all 0.3s ease;
    max-width: 100%;
    height: auto;
    display: block;
    object-fit: scale-down;
    margin: auto;
  }
  .card-image {
    width: 100%;
    height: 200px;
    object-fit: scale-down;
  }
  .card-text {
    font-size: 2rem;
    padding: 0 0 1rem 0;
  }
  &:hover {
    transform: translateY(-1rem);
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
