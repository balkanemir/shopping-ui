import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import styled, { keyframes, css } from "styled-components";
import ProductDetailed from "../components/ProductDetailed";
import SideBar from "../components/SideBar";
import Footer from "../components/Footer";

const LoadingAnimation = keyframes`
  0% {
    border-radius: 0;
    background-color: #0077b6;
  }
  100% {
    border-radius: 20px;
    background-color: #00b4d8;
  }
`;

const LoadingAnimationReverse = keyframes`
  0% {
    border-radius: 20px;
    background-color: #00b4d8;
  }
  100% {
    border-radius: 0;
    background-color: #0077b6;
  }
`;

const Container = styled.div`
  background: linear-gradient(to bottom, #00b4d8, white 80%);
  height: 100vh;
  filter: ${(props) => (props.isBlurred ? "blur(10px)" : "")};
  transition: filter 0.5s ease-in-out;
`;

const LoadingIcon = styled.div`
  transform: all 1s;
  display: ${(props) => (props.isBlurred ? "block" : "none")};
  position: fixed;
  top: 50%;
  left: ${(props) => props.translate}%;
  transform: translate(-50%, -50%);
  width: 30px;
  height: 30px;
  background-color: #0077b6;
  font-size: 30px;
  animation: ${(props) =>
    props.id % 2 === 0
      ? css`
          ${LoadingAnimation} 0.5s infinite alternate
        `
      : css`
          ${LoadingAnimationReverse} 0.5s infinite alternate
        `};
  z-index: 5;
`;

const Product = () => {
  const [isBlurred, setIsBlurred] = useState(true);

  useEffect(() => {
    const delay = setTimeout(() => {
      setIsBlurred(false);
    }, 2000);

    return () => clearTimeout(delay);
  }, []);

  return (
    <>
      <LoadingIcon translate={44} id={0} isBlurred={isBlurred}></LoadingIcon>
      <LoadingIcon translate={47} id={1} isBlurred={isBlurred}></LoadingIcon>
      <LoadingIcon translate={50} id={2} isBlurred={isBlurred}></LoadingIcon>
      <LoadingIcon translate={53} id={3} isBlurred={isBlurred}></LoadingIcon>
      <LoadingIcon translate={56} id={4} isBlurred={isBlurred}></LoadingIcon>
      <Container isBlurred={isBlurred}>
        <Navbar />
        <SideBar />
        <ProductDetailed />
      </Container>
      <Footer />
    </>
  );
};

export default Product;
