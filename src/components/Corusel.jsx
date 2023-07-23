import React, { useState, useEffect } from "react";
import styled, { keyframes, css } from "styled-components";
import { ArrowLeft, ArrowRight } from "@material-ui/icons";
import { SliderItems } from "../data";

const opacityAnimation = keyframes`
  0% { opacity: 0 }
  20% { opacity: 0 }
  100% { opacity: 1 }
`;

const Container = styled.div`
  z-index: -1;
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  overflow: hidden;
  @media (max-width: 1125px) {
    height: 90vh;
  }
  @media (max-width: 950px) {
    height: 60vh;
  }
  @media (max-width: 850px) {
    height: 60vh;
  }
  @media (max-width: 640px) {
    height: 50vh;
  }
  @media (max-width: 450px) {
    height: 40vh;
  }
  @media (max-width: 360px) {
    height: 30vh;
  }
`;
const Arrow = styled.div`
  width: 50px;
  height: 50px;
  display: flex;
  position: absolute;
  background-color: #efe3e3;
  border-radius: 50%;
  justify-content: center;
  margin: auto;
  align-items: center;
  opacity: 0.5;
  transition: all 0.5s ease-out;
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};
  z-index: 1;
  &:hover {
    transform: scale(1.2);
  }
  @media (max-width: 1125px) {
    width: 40px;
    height: 40px;
  }
  @media (max-width: 850px) {
    width: 35px;
    height: 35px;
  }
  @media (max-width: 640px) {
    width: 30px;
    height: 30px;
  }
  @media (max-width: 450px) {
    width: 20px;
    height: 20px;
  }
`;
const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transition: all 0.5s;
  transform: translateX(${(props) => props.slideIndex * -100}vw);
`;

const Slide = styled.div`
  display: flex;
  position: relative;
`;

const ImgContainer = styled.div`
  flex: 1;
`;

const Image = styled.img`
  width: 100vw;
  height: 100vh;
  @media (max-width: 1125px) {
    height: 90vh;
  }
  @media (max-width: 950px) {
    height: 60vh;
  }
  @media (max-width: 850px) {
    height: 60vh;
  }
  @media (max-width: 640px) {
    height: 50vh;
  }
  @media (max-width: 450px) {
    height: 40vh;
  }
  @media (max-width: 360px) {
    height: 30vh;
  }
`;

const InfoContainer = styled.div`
  flex: 1;
`;

const Title = styled.h3`
  position: absolute;
  color: white;
  font-size: 60px;
  left: 5%;
  top: 5%;
  @media (max-width: 1125px) {
    font-size: 45px;
    top: 7%;
  }
  @media (max-width: 850px) {
    font-size: 35px;
    top: 9%;
  }
  @media (max-width: 640px) {
    font-size: 30px;
    top: 11%;
  }
  @media (max-width: 450px) {
    font-size: 20px;
    top: 13%;
  }
  @media (max-width: 360px) {
    font-size: 16px;
    top: 15%;
  }
`;
const Description = styled.p`
  position: absolute;
  color: white;
  font-size: 60px;
  left: 5%;
  top: 13%;
  animation: ${opacityAnimation} 4s linear;
  animation-fill-mode: forwards;
  ${(props) =>
    props.refresh &&
    css`
      animation-name: none;
      animation-play-state: running;
    `};
  @media (max-width: 1125px) {
    font-size: 45px;
    top: 15%;
  }
  @media (max-width: 850px) {
    font-size: 35px;
    top: 17%;
  }
  @media (max-width: 640px) {
    font-size: 30px;
    top: 19%;
  }
  @media (max-width: 450px) {
    font-size: 20px;
    top: 21%;
  }
  @media (max-width: 360px) {
    font-size: 16px;
    top: 23%;
  }
`;
const Button = styled.button`
  position: absolute;
  left: 5%;
  top: 35%;
  width: 10%;
  height: 5%;
  background-color: #00b4d8;
  font-size: 16px;
  font-weight: bold;
  border: none;
  transition: 0.2s;
  color: white;
  border: 1px solid #4361ee;
  cursor: pointer;
  &:hover {
    background-color: #00b4d8;
    border-radius: 20px;
  }
  @media (max-width: 1125px) {
    font-size: 14px;
    width: 12%;
    top: 37%;
  }
  @media (max-width: 850px) {
    font-size: 12px;
    top: 39%;
  }
  @media (max-width: 640px) {
    font-size: 10px;
    width: 14%;
    top: 41%;
  }
  @media (max-width: 450px) {
    font-size: 8px;
    width: 18%;
    top: 43%;
  }
  @media (max-width: 360px) {
    font-size: 8px;
    width: 20%;
    height: 10%;
    top: 45%;
    &:hover {
      background-color: #00b4d8;
      width: 22%;
    }
  }
`;

const Corusel = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const [refreshing, setRefreshing] = useState(false);
  const handleClick = (direction) => {
    setRefreshing(true);
    if (direction === "left") {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : SliderItems.length - 1);
    } else {
      setSlideIndex(slideIndex < SliderItems.length - 1 ? slideIndex + 1 : 0);
    }
    setTimeout(() => {
      setRefreshing(false);
    }, 100);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setSlideIndex((prevSlideIndex) =>
        prevSlideIndex < SliderItems.length - 1 ? prevSlideIndex + 1 : 0
      );
    }, 8000);
    const refreshingInterval = setInterval(() => {
      setRefreshing((prevRefreshing) => !prevRefreshing);
    }, 4000);
    return () => {
      clearInterval(interval);
      clearInterval(refreshingInterval);
    };
  }, [slideIndex]);
  return (
    <Container>
      <Arrow
        direction="left"
        refresh={refreshing}
        onClick={() => handleClick("left")}
      >
        <ArrowLeft />
      </Arrow>
      <Wrapper slideIndex={slideIndex}>
        {SliderItems.map((item) => (
          <Slide>
            <ImgContainer>
              <Image src={item.img} />
            </ImgContainer>
            <Title>{item.title}</Title>
            <Description refresh={refreshing}>{item.desc}</Description>
            <Button>Shop Now</Button>
            <InfoContainer></InfoContainer>
          </Slide>
        ))}
      </Wrapper>
      <Arrow direction="right" onClick={() => handleClick("right")}>
        <ArrowRight />
      </Arrow>
    </Container>
  );
};

export default Corusel;
