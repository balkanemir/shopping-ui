import React, { useState, useEffect } from "react";
import Corusel from "../components/Corusel";
import Essentials from "../components/Essentials";
import Navbar from "../components/Navbar";
import SideBar from "../components/SideBar";
import Trending from "../components/Trending";
import Shopbycategory from "../components/Shopbycategory";
import Footer from "../components/Footer";
import styled, { keyframes, css } from "styled-components";
import Products from "../components/Products";
import Testimonials from "../components/Testimonials";
import ContactUs from "../components/ContactUs";
import { ArrowUpward } from "@material-ui/icons";

const TopButtonAnimation = keyframes`
  0% {
    opacity: 0;
    bottom: -20px;
  }
  50% {
    bottom: 50px;
  }
  100% {
    opacity: 1;
    bottom: 30px;
  }
`;

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

const HomeContainer = styled.div`
  filter: ${(props) => (props.isBlurred ? "blur(10px)" : "")};
  transition: filter 0.5s ease-in-out;
`;

const Button = styled.button`
  right: 30px;
  bottom: 30px;
  z-index: 2;
  width: 70px;
  height: 70px;
  position: fixed;
  color: white;
  border: 1px solid #00b4d8;
  background-color: #0077b6;
  cursor: pointer;
  display: ${(props) => (props.isOnTop ? "none" : "flex")};
  justify-content: center;
  align-items: center;
  animation: ${TopButtonAnimation} 0.5s ease;
  @media (max-width: 850px) {
    width: 50px;
    height: 50px;
  }
  @media (max-width: 500px) {
    width: 40px;
    height: 40px;
  }
`;

const Content = styled.div`
  width: 70vw;
  display: flex;
  align-items: center;
`;

const Alert = styled.div`
  width: 90vw;
  height: 50px;
  border: 1px solid white;
  background-color: white;
  position: fixed;
  bottom: 30px;
  margin: 0 3vw 0 3vw;
  z-index: 3;
  animation: ${TopButtonAnimation} 0.5s ease;
  display: ${(props) => (props.isMoved && props.isDisplay ? "flex" : "none")};
  justify-content: space-between;
  align-items: center;
  padding: 2vw;
  font-size: 14px;
  background-color: #00b4d8;
  color: white;
  @media (max-width: 850px) {
    width: 90vw;
    height: 50px;
    font-size: 12px;
  }
  @media (max-width: 500px) {
    width: 80vw;
    margin: 0 8vw 0 8vw;
    height: 100px;
    font-size: 10px;
    flex-direction: column;
  }
`;

const AlertButton = styled.button`
  border: 1px solid white;
  height: 40px;
  width: 10vw;
  padding: 10px;
  background-color: #0077b6;
  color: white;
  cursor: pointer;
  @media (max-width: 850px) {
    font-size: 10px;
  }
  @media (max-width: 500px) {
    width: 40vw;
    font-size: 14px;
  }
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
  z-index: 5;
  animation: ${(props) =>
    props.id % 2 === 0
      ? css`
          ${LoadingAnimation} 0.5s infinite alternate
        `
      : css`
          ${LoadingAnimationReverse} 0.5s infinite alternate
        `};
`;

const Home = () => {
  const [isBlurred, setIsBlurred] = useState(true);
  const [isOnTop, setIsOnTop] = useState(true);
  const [isDisplay, setIsDisplay] = useState(true);
  const [isMoved, setIsMoved] = useState(true);
  const handleScroll = () => {
    const scrollTop = window.pageYOffset;
    {
      scrollTop >= 300 ? setIsOnTop(false) : setIsOnTop(true);
      scrollTop !== 0 ? setIsMoved(true) : setIsMoved(false);
    }
  };
  const handleScrollUp = () => {
    setIsOnTop(true);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleDisplay = (display) => {
    setIsDisplay(display);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
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
      <Alert isMoved={isMoved} isDisplay={isDisplay}>
        <Content>
          This template has no partnership with Nike Inc. It does not aim any
          advertisement purpose. Use this box to show user a warning.
        </Content>
        <AlertButton onClick={() => handleDisplay(false)}>Accept</AlertButton>
      </Alert>
      <HomeContainer isBlurred={isBlurred}>
        <Button isOnTop={isOnTop} onClick={handleScrollUp}>
          <ArrowUpward></ArrowUpward>
        </Button>

        <Navbar />
        <SideBar />
        <Corusel />
        <Essentials />
        <Trending />
        <Shopbycategory />
        <Products />
        <Testimonials />
        <ContactUs />
        <Footer />
      </HomeContainer>
    </>
  );
};

export default Home;
