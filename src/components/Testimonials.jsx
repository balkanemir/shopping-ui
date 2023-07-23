import { FormatQuote } from "@material-ui/icons";
import React, { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import { TestimonialsItems } from "../testimonials";
import { BlogItems } from "../blog";

const fadeIn = keyframes`
  from {
    filter: blur(10px);

  }
  to {
    filter: blur(0);

  }
`;

const Container = styled.div`
  height: 60vw;
  display: flex;
  flex-direction: column;
  margin-bottom: 50px;
  overflow: hidden;
  @media (max-width: 850px) {
    height: 100vw;
  }
  @media (max-width: 500px) {
    height: 140vw;
  }
  @media (max-width: 360px) {
    height: 200vw;
  }
`;

const Up = styled.div`
  display: flex;
  height: 30vw;
  overflow: hidden;
  @media (max-width: 850px) {
    height: 100vh;
  }
  @media (max-width: 500px) {
    height: 140vw;
  }
  @media (max-width: 360px) {
    height: 180vw;
  }
`;
const Down = styled.div`
  display: flex;
  height: 30vw;
  overflow: hidden;
  @media (max-width: 850px) {
    height: 100vh;
  }
  @media (max-width: 500px) {
    height: 140vw;
  }
  @media (max-width: 360px) {
    height: 180vw;
  }
`;

const UpLeft = styled.div`
  flex: 1 0 50vw;
  position: absolute;
  overflow: hidden;
  height: 30vw;
  animation: ${fadeIn} 1s ease-in-out;
  z-index: 1;
  @media (max-width: 850px) {
    display: none;
  }
`;

const UpRight = styled.div`
  background-color: #00b4d8;
  width: 50vw;
  flex: 1 0 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  overflow: hidden;
  transition: all 1s;
  z-index: 0;
  text-align: center;
  padding-top: 100px;
  transform: translateX(${(props) => props.upSlideIndex * -50}vw);
  @media (max-width: 850px) {
    transform: translateX(${(props) => props.upSlideIndex * -100}vw);
    flex: 0 0 100%;
    padding-top: 50px;
  }
`;

const DownLeft = styled.div`
  background-color: #0077b6;
  width: 50vw;
  flex: 1 0 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  overflow: hidden;
  transition: all 1s;
  z-index: 0;
  padding-top: 0px;
  transform: translateX(${(props) => props.downSlideIndex * -50}vw);
  @media (max-width: 1125px) {
    padding-top: 60px;
  }
  @media (max-width: 850px) {
    transform: translateX(${(props) => props.downSlideIndex * -100}vw);
    flex: 0 0 100%;
    padding-top: 60px;
  }
`;
const DownRight = styled.div`
  flex: 1 0 50vw;
  position: absolute;
  height: 30vw;
  right: 0;
  overflow: hidden;
  animation: ${fadeIn} 1s ease-in-out;
  z-index: 1;
  @media (max-width: 850px) {
    display: none;
  }
`;

const Image = styled.img`
  width: 50vw;
  height: 30vw;
  transform: scale(1.4) translateY(${(props) => (props.scroll - 2200) / 20}px);
`;

const TitleUp = styled.h1`
  position: absolute;
  color: white;
  right: 16vw;
  margin-top: 40px;
  font-size: 40px;
  z-index: 1;
  @media (max-width: 1125px) {
    font-size: 30px;
  }
  @media (max-width: 850px) {
    right: 38vw;
    font-size: 35px;
  }
  @media (max-width: 640px) {
    font-size: 30px;
  }
  @media (max-width: 500px) {
    font-size: 26px;
    right: 32vw;
  }
  @media (max-width: 360px) {
    right: 29vw;
  }
`;

const TitleDown = styled.h1`
  position: absolute;
  color: white;
  left: 50px;
  margin-top: 40px;
  font-size: 40px;
  z-index: 1;
  @media (max-width: 1125px) {
    font-size: 30px;
  }
  @media (max-width: 850px) {
    font-size: 35px;
  }
  @media (max-width: 640px) {
    font-size: 30px;
    left: 20px;
  }
  @media (max-width: 500px) {
    font-size: 26px;
  }
  @media (max-width: 420px) {
    margin-top: 30px;
  }
`;

const Testimonial = styled.div`
  color: white;
  margin: 0 50px 0 50px;
  @media (max-width: 1125px) {
    font-size: 15px;
  }
  @media (max-width: 950px) {
    font-size: 12px;
  }
  @media (max-width: 850px) {
    font-size: 20px;
  }
  @media (max-width: 640px) {
    font-size: 15px;
  }
  @media (max-width: 500px) {
    font-size: 16px;
  }
  @media (max-width: 360px) {
    font-size: 12px;
  }
`;

const Content = styled.div`
  color: white;
  margin: 0 50px 0 50px;
  @media (max-width: 1125px) {
    font-size: 15px;
  }
  @media (max-width: 950px) {
    font-size: 12px;
  }
  @media (max-width: 850px) {
    font-size: 20px;
  }
  @media (max-width: 640px) {
    font-size: 15px;
    margin: 0 20px 0 20px;
  }
  @media (max-width: 500px) {
    font-size: 16px;
  }
  @media (max-width: 420px) {
    font-size: 12px;
  }
`;

const Line = styled.div`
  width: 200px;
  border: 0.5px solid black;
  margin: 40px auto 40px auto;
  @media (max-width: 1125px) {
    margin: 30px auto 30px auto;
  }
  @media (max-width: 950px) {
    margin: 20px auto 20px auto;
  }
  @media (max-width: 640px) {
    margin: 10px auto 10px auto;
  }
`;

const Person = styled.div`
  font-size: 20px;
  font-weight: bold;
  color: white;
  margin: 0 50px 0 50px;
  @media (max-width: 1125px) {
    font-size: 19px;
  }
  @media (max-width: 950px) {
    font-size: 18px;
  }
  @media (max-width: 850px) {
    font-size: 26px;
  }
  @media (max-width: 640px) {
    font-size: 22px;
  }
  @media (max-width: 500px) {
    font-size: 18px;
  }
`;

const Job = styled.div`
  font-size: 14px;
  color: white;
  margin: 10px 50px 0 50px;
  @media (max-width: 1125px) {
    font-size: 13px;
  }
  @media (max-width: 950px) {
    font-size: 12px;
  }
  @media (max-width: 850px) {
    font-size: 16px;
  }
  @media (max-width: 640px) {
    font-size: 10px;
  }
`;

const Icon = styled.div`
  position: absolute;
  right: 15%;
  margin-top: 100px;
  opacity: 0.2;
  color: black;
  transform: scale(10);
  z-index: 1;
  @media (max-width: 1125px) {
    transform: scale(9);
  }
  @media (max-width: 850px) {
    transform: scale(8);
  }
  @media (max-width: 640px) {
    transform: scale(7);
  }
  @media (max-width: 500px) {
    transform: scale(6);
  }
  @media (max-width: 420px) {
    transform: scale(5);
  }
  @media (max-width: 360px) {
    transform: scale(4);
  }
`;

const Button = styled.button`
  width: 100px;
  height: 50px;
  margin: 0 50px 0 50px;
  color: white;
  border: none;
  text-align: left;
  background-color: transparent;
  text-decoration: underline;
  opacity: 0.8;
  font-weight: bold;
  cursor: pointer;
  transition: all 1s;
  &:hover {
    text-decoration: none;
  }

  @media (max-width: 640px) {
    margin: 0 20px 0 20px;
  }
`;

const Testimonials = () => {
  const [upSlideIndex, setUpSlideIndex] = useState(3);
  const [downSlideIndex, setDownSlideIndex] = useState(1);
  const [scroll, setScroll] = useState(null);

  const handleScroll = () => {
    const scrollTop = window.pageYOffset;
    setScroll(scrollTop);
  };
  useEffect(() => {
    const upInterval = setInterval(() => {
      setUpSlideIndex((prevIndex) =>
        prevIndex < TestimonialsItems.length - 2 ? prevIndex + 1 : 1
      );
    }, 14000);

    window.addEventListener("scroll", handleScroll);
    return () => {
      clearInterval(upInterval);

      window.addEventListener("scroll", handleScroll);
    };
  }, [upSlideIndex]);
  useEffect(() => {
    const downInterval = setInterval(() => {
      setDownSlideIndex((prevIndex) =>
        prevIndex < TestimonialsItems.length - 2 ? prevIndex + 1 : 1
      );
    }, 8000);
    window.addEventListener("scroll", handleScroll);
    return () => {
      clearInterval(downInterval);
      window.addEventListener("scroll", handleScroll);
    };
  }, [downSlideIndex]);
  return (
    <Container>
      <Up>
        <TitleUp>Testimonials</TitleUp>
        <Icon>
          <FormatQuote></FormatQuote>
        </Icon>
        {TestimonialsItems.map((item) => (
          <>
            {item.id === upSlideIndex ? (
              <UpLeft>
                <Image scroll={scroll} src={item.img} />
              </UpLeft>
            ) : (
              <></>
            )}
            <UpRight upSlideIndex={upSlideIndex}>
              <Testimonial>{item.testimonial}</Testimonial>
              <Line></Line>
              <Person>{item.person}</Person>
              <Job>{item.job}</Job>
            </UpRight>
          </>
        ))}
      </Up>
      <Down>
        <TitleDown>From Our Blog</TitleDown>
        {BlogItems.map((item) => (
          <>
            <DownLeft downSlideIndex={downSlideIndex}>
              <Content>{item.content}</Content>
              <Button>READ MORE</Button>
            </DownLeft>
            {item.id === downSlideIndex ? (
              <DownRight>
                <Image scroll={scroll} src={item.img} />
              </DownRight>
            ) : (
              <></>
            )}
          </>
        ))}
      </Down>
    </Container>
  );
};

export default Testimonials;
