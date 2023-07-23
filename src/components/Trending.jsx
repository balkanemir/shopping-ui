import { ArrowLeft, ArrowRight } from "@material-ui/icons";
import React, { useState, useEffect } from "react";
import styled, { keyframes, css } from "styled-components";
import { TrendingItems } from "../trending";
import { useInView } from "react-intersection-observer";

const Container = styled.div`
  height: 45vw;
  display: flex;
  width: 100%;
  overflow: hidden;
  background-color: #00b4d8;
  transition: all 1s;
  @media (max-width: 900px) {
    height: 50vw;
  }
  @media (max-width: 500px) {
    height: 120vw;
  }
  @media (max-width: 360px) {
    height: 135vw;
  }
`;

const Wrapper = styled.div`
  padding: 20px;
  @media (max-width: 500px) {
    padding: 0;
  }
`;

const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100vw;
  padding: 0 2vw 0 2vw;
  @media (max-width: 500px) {
    flex-direction: column;
    align-items: center;
    padding: 0;
  }
  @media (max-width: 360px) {
    flex-direction: column;
    align-items: center;
  }
`;

const Title = styled.div`
  font-size: 28px;
  font-weight: bold;
  color: white;
  @media (max-width: 640px) {
    font-size: 24px;
  }
  @media (max-width: 500px) {
    font-size: 24px;
  }
  @media (max-width: 360px) {
    font-size: 24px;
  }
`;

const ProductTile = styled.div`
  display: flex;
  position: relative;
  left: ${(props) => props.isClicked * -32}vw;
  transition: all 0.4s;
  opacity: ${(props) => (props.isVisible ? "1" : "0")};
  @media (max-width: 500px) {
    align-items: center;
    left: ${(props) => props.isClicked * -100}vw;
    width: 100vw;
  }
`;

const ProductFrame = styled.button`
  height: 28vw;
  width: 28vw;
  margin: 2vw;
  position: relative;
  border: none;
  padding: 0;
  display: flex;
  flex-direction: column;
  cursor: pointer;
  background-color: white;
  transition: all 0.2s;
  &:hover {
    border-radius: 20px;
  }
  @media (max-width: 500px) {
    margin: 6vw 15vw 6vw 15vw;
    height: 70vw;
    width: 70vw;
  }
`;

const ArrowContainer = styled.div`
  width: 100px;
  height: 50px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-right: 10vw;
  @media (max-width: 500px) {
    margin-top: 10px;
    margin-right: 0;
  }
  @media (max-width: 360px) {
    margin-top: 10px;
    margin-right: 0;
  }
`;

const Arrow = styled.div`
  border: none;
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50px;
  background-color: #efe3e3;
  transition: all 0.2s;
  cursor: pointer;
  &:hover {
    transform: scale(1.2);
  }
  @media (max-width: 850px) {
    width: 35px;
    height: 35px;
  }
`;

const Image = styled.img`
  height: 28vw;
  width: 28vw;
  transition: all 0.2s;
  &:hover {
    border-radius: 20px;
    box-shadow: 2px 2px 4px #0077b6;
  }
  @media (max-width: 500px) {
    height: 70vw;
    width: 70vw;
  }
  @media (max-width: 360px) {
    height: 70vw;
    width: 70vw;
  }
`;

const ProductTitle = styled.div`
  font-size: 20px;
  font-weight: 500;
  margin-top: 10px;
  color: white;
  @media (max-width: 1125px) {
    font-size: 18px;
  }
  @media (max-width: 850px) {
    font-size: 15px;
  }
  @media (max-width: 640px) {
    font-size: 12px;
  }
  @media (max-width: 500px) {
    font-size: 16px;
  }
  @media (max-width: 420px) {
    font-size: 16px;
  }
`;

const Trending = () => {
  const [isClicked, setisClicked] = useState(0);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });
  const handleClick = (direction) => {
    if (direction === "left") {
      setisClicked((prevClicked) =>
        prevClicked === 0 ? getLengthBasedOnWidth() : prevClicked - 1
      );
    } else {
      setisClicked((prevClicked) =>
        prevClicked === getLengthBasedOnWidth() ? 0 : prevClicked + 1
      );
    }
  };
  const updateWindowWidth = () => {
    setWindowWidth(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener("resize", updateWindowWidth);
    return () => {
      window.removeEventListener("resize", updateWindowWidth);
    };
  }, []);
  const getLengthBasedOnWidth = () => {
    return windowWidth < 500
      ? TrendingItems.length - 1
      : TrendingItems.length - 3;
  };

  return (
    <Container>
      <Wrapper>
        <TitleContainer>
          <Title>Trending</Title>
          <ArrowContainer>
            <Arrow onClick={() => handleClick("left")}>
              <ArrowLeft></ArrowLeft>
            </Arrow>
            <Arrow onClick={() => handleClick("right")}>
              <ArrowRight></ArrowRight>
            </Arrow>
          </ArrowContainer>
        </TitleContainer>

        <ProductTile isVisible={inView} ref={ref} isClicked={isClicked}>
          {TrendingItems.map((item) => (
            <>
              <ProductFrame>
                <Image src={item.img} />
                <ProductTitle>{item.title}</ProductTitle>
              </ProductFrame>
            </>
          ))}
        </ProductTile>
      </Wrapper>
    </Container>
  );
};

export default Trending;
