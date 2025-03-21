"use client";

import Image from "next/image";
import styled from "styled-components";

export default function CardTop() {
    return (
        <Main className="sm:mb-10 mt-5">
            <div className="card rounded-2xl relative" id="c1"><Image className="rounded-2xl" src={"/kucing1.jpeg"} alt="kucing" fill></Image></div>
            <div className="card rounded-2xl relative" id="c2"><Image className="rounded-2xl" src={"/kucing2.jpeg"} alt="kucing" fill></Image></div>
            <div className="card relative rounded-2xl" id="c3"><Image className="rounded-2xl" src={"/kucing3.jpeg"} alt="kucing" fill></Image></div>
            <div className="card rounded-2xl relative" id="c4"><Image className="rounded-2xl" src={"/kucing4.jpeg"} alt="kucing" fill></Image></div>
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
    cursor: pointer;
    box-shadow: 0px 0px 30px -10px rgba(0, 0, 0, 0.3);
  }

  #c1 {
    border: 1px solid white;
  }

  #c2 {
    border: 1px solid white;
  }

  #c3 {
    border: 1px solid white;
  }

  #c4 {
    border: 1px solid white;
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
