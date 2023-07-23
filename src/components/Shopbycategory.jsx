import { ArrowLeft, ArrowRight } from "@material-ui/icons";
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { ShopbycategoryItems } from "../shopbycategory";
import { useInView } from "react-intersection-observer";

const Container = styled.div`
  height: 35vw;
  display: flex;
  width: 100%;
  overflow: hidden;
  opacity: ${(props) => (props.isVisible ? "1" : "0")};
  transition: all 1s;
  @media (max-width: 900px) {
    height: 40vw;
  }
  @media (max-width: 500px) {
    height: 100vw;
  }
  @media (max-width: 360px) {
    height: 110vw;
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
  margin-top: 30px;

  @media (max-width: 640px) {
    font-size: 24px;
  }
`;

const ProductTile = styled.div`
  display: flex;
  position: relative;
  left: ${(props) => props.isClicked * -32}vw;
  transition: all 0.4s;

  @media (max-width: 500px) {
    align-items: center;
    left: ${(props) => props.isClicked * -100}vw;
    width: 100vw;
  }
`;

const ProductFrame = styled.div`
  height: 20vw;
  width: 28vw;
  margin: 2vw;
  position: relative;
  border: none;
  padding: 0;
  display: flex;
  flex-direction: column;
  background-color: white;

  transition: all 0.2s;
  &:hover {
    border-radius: 20px;
  }
  @media (max-width: 500px) {
    margin: 6vw 15vw 6vw 15vw;
    height: 50vw;
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
  height: 20vw;
  width: 28vw;
  transition: all 0.2s;
  @media (max-width: 500px) {
    height: 50vw;
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
`;

const Button = styled.div`
  position: absolute;
  justify-content: center;
  align-items: center;
  display: flex;
  margin: 25px;
  bottom: 10px;
  height: 30px;
  width: 70px;
  padding: 5px;
  background-color: #00b4d8;
  border: 1px solid #4361ee;
  font-size: 16px;
  color: white;
  transition: all 0.2s;
  cursor: pointer;
  &:hover {
    border-radius: 20px;
  }
  @media (max-width: 1125px) {
    margin: 20px;
    bottom: 10px;
    height: 30px;
    width: 70px;
  }
  @media (max-width: 850px) {
    margin: 15px;
    bottom: 10px;
    height: 20px;
    width: 50px;
    font-size: 14px;
  }
  @media (max-width: 640px) {
    font-size: 12px;
    margin: 10px;
    width: 40px;
    height: 15px;
  }
  @media (max-width: 500px) {
    margin: 20px;
    bottom: 10px;
    height: 30px;
    width: 70px;
    font-size: 16px;
  }
`;

const Shopbycategory = () => {
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
      ? ShopbycategoryItems.length - 1
      : ShopbycategoryItems.length - 3;
  };

  return (
    <Container ref={ref} isVisible={inView}>
      <Wrapper>
        <TitleContainer>
          <Title>Shop by Sport</Title>
          <ArrowContainer>
            <Arrow onClick={() => handleClick("left")}>
              <ArrowLeft></ArrowLeft>
            </Arrow>
            <Arrow onClick={() => handleClick("right")}>
              <ArrowRight></ArrowRight>
            </Arrow>
          </ArrowContainer>
        </TitleContainer>

        <ProductTile isClicked={isClicked}>
          {ShopbycategoryItems.map((item) => (
            <>
              <ProductFrame>
                <Image src={item.img} />
                <Button>Shop</Button>
                <ProductTitle>{item.title}</ProductTitle>
              </ProductFrame>
            </>
          ))}
        </ProductTile>
      </Wrapper>
    </Container>
  );
};

export default Shopbycategory;
