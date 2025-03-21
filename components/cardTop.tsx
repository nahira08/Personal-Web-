"use client";

import styled from "styled-components";

export default function CardTop() {
    return (
        <Main className="sm:mb-10 mt-5">
            <div className="card" id="c1"></div>
            <div className="card" id="c2"></div>
            <div className="card" id="c3"></div>
            <div className="card" id="c4"></div>
        </Main>
    );
}

const Main = styled.div`

    width: 160px;
    height: 170px;

  .card {
    width: 160px;
    height: 170px;
    background: rgba(211, 211, 211, 0.199);
    position: absolute;
    transition: 0.3s ease-in-out;
    border-radius: 15px;
    cursor: pointer;
    box-shadow: 0px 0px 30px -10px rgba(0, 0, 0, 0.3);
  }

  #c1 {
    background-color: black;
  }

  #c2 {
    background-color: blue;
  }

  #c3 {
    background-color: red;
  }

  #c4 {
    background-color: green;
  }

  &:hover #c1 {
    transform: translateX(-100px) rotate(-40deg);
  }

  &:hover #c2 {
    transform: translateX(-50px) rotate(-30deg);
  }

  &:hover #c3 {
    transform: translateX(0) rotate(-20deg);
  }

  &:hover #c4 {
    transform: translateX(50px) rotate(-10deg);
  }

  #c1:hover {
    transform: translateX(-150px) rotate(0deg) !important;
  }

  #c2:hover {
    transform: translateX(-100px) rotate(0deg) !important;
  }

  #c3:hover {
    transform: translateX(-50px) rotate(0deg) !important;
  }

  #c4:hover {
    transform: translateX(50px) rotate(0deg) !important;
  }
`;
