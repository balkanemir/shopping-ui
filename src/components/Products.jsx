import { ArrowLeft, ArrowRight } from "@material-ui/icons";
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { ProductsItems } from "../featuredproducts";
import { useInView } from "react-intersection-observer";
import { Link } from "react-router-dom";

const Container = styled.div`
  height: 45vw;
  display: flex;
  width: 100%;
  overflow: hidden;
  opacity: ${(props) => (props.isVisible ? "1" : "0")};
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

  @media (max-width: 640px) {
    font-size: 24px;
  }
`;

const ProductTile = styled.div`
  display: flex;
  position: relative;
  left: ${(props) => props.isClicked * -24}vw;
  transition: all 0.4s;

  @media (max-width: 500px) {
    align-items: center;
    left: ${(props) => props.isClicked * -100}vw;
    width: 100vw;
  }
`;

const ProductFrame = styled.button`
  height: 30vw;
  width: 20vw;
  margin: 2vw;
  position: relative;
  border: none;
  padding: 0;
  display: flex;
  flex-direction: column;
  background-color: white;
  cursor: pointer;
  transition: all 0.2s;
  border-radius: ${(props) => (props.isHovered ? "20px" : "0")};
  @media (max-width: 500px) {
    margin: 6vw 25vw 6vw 25vw;
    height: 70vw;
    width: 50vw;
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
  width: 20vw;
  transition: all 0.2s;
  border-radius: ${(props) => (props.isHovered ? "20px" : "0")};
  @media (max-width: 500px) {
    height: 50vw;
    width: 50vw;
  }
  @media (max-width: 360px) {
    height: 50vw;
    width: 50vw;
  }
`;

const ProductTitle = styled.p`
  font-size: 16px;
  font-weight: 500;
  margin: 0 20px 0 20px;
  color: white;
  @media (max-width: 1125px) {
    font-size: 14px;
  }
  @media (max-width: 850px) {
    font-size: 10px;
    margin: 0 10px 0 10px;
  }
  @media (max-width: 640px) {
    font-size: 8px;
  }
  @media (max-width: 500px) {
    font-size: 12px;
  }
  @media (max-width: 360px) {
    font-size: 8px;
  }
`;

const Frame = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  height: 10vw;
  width: 20vw;
  bottom: 0;
  background-color: #0077b6;
  overflow: hidden;
  text-align: center;
  transition: all 0.2s;
  &:hover {
    height: 30vw;
    background-color: #0076b672;
    border-radius: 20px;
  }
  @media (max-width: 500px) {
    height: 20vw;
    width: 50vw;
    &:hover {
      height: 70vw;
      background-color: #0076b672;
      border-radius: 20px;
    }
  }
  @media (max-width: 360px) {
    height: 20vw;
    width: 50vw;
  }
`;

const ButtonFrame = styled.div`
  width: 20vw;
  height: 10vw;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 20vw;
  @media (max-width: 500px) {
    width: 50vw;
    height: 20vw;
    top: 50vw;
  }
`;

const CartButton = styled.button`
  height: 30px;
  width: 150px;
  background-color: #b9fbc0;
  border: none;
  border-radius: 10px;
  font-size: 12px;
  transition: all 0.2s;
  &:hover {
    background-color: #a7c957;
    transform: scale(1.04);
  }
  @media (max-width: 1125px) {
    height: 30px;
    width: 120px;
  }
  @media (max-width: 850px) {
    height: 30px;
    width: 100px;
    font-size: 10px;
    margin: 0 10px 0 10px;
  }
  @media (max-width: 640px) {
    height: 20px;
    width: 80px;
    font-size: 8px;
  }
  @media (max-width: 500px) {
    height: 30px;
    width: 150px;
    font-size: 10px;
  }
`;
const Price = styled.p`
  color: white;
  margin-top: 2vw;
  margin-bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  font-weight: bold;
  @media (max-width: 1125px) {
    font-size: 18px;
    margin-top: 14px;
  }
  @media (max-width: 850px) {
    font-size: 14px;
    margin-top: 14px;
  }
  @media (max-width: 640px) {
    font-size: 12px;
    margin-top: 6px;
  }
  @media (max-width: 500px) {
    font-size: 16px;
    margin-top: 14px;
  }
  @media (max-width: 360px) {
    font-size: 12px;
    margin-top: 0px;
  }
`;

const OldPrice = styled.p`
  text-decoration: line-through;
  margin-left: 10px;
  color: white;
  font-size: 14px;
  font-weight: bold;
  @media (max-width: 1125px) {
    font-size: 9px;
  }
  @media (max-width: 850px) {
    font-size: 8px;
  }
  @media (max-width: 640px) {
    font-size: 7px;
  }
  @media (max-width: 500px) {
    font-size: 10px;
  }
`;

const Products = () => {
  const [isClicked, setisClicked] = useState(0);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [productId, setProductId] = useState(0);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });
  const handleId = (id) => {
    setProductId(id);
  };
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
      ? ProductsItems.length - 1
      : ProductsItems.length - 4;
  };

  return (
    <Container ref={ref} isVisible={inView}>
      <Wrapper>
        <TitleContainer>
          <Title>Best Sellers</Title>
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
          {ProductsItems.map((item) => (
            <ProductFrame isHovered={productId === item.id}>
              <Link to="/product">
                <Image isHovered={productId === item.id} src={item.img} />
              </Link>
              <Frame
                onMouseEnter={() => handleId(item.id)}
                onMouseLeave={() => handleId(0)}
              >
                <Price>
                  ${item.price} <OldPrice>${item.oldprice}</OldPrice>
                </Price>
                <ProductTitle>{item.title}</ProductTitle>
                <ButtonFrame>
                  <CartButton>ADD TO CART</CartButton>
                </ButtonFrame>
              </Frame>
            </ProductFrame>
          ))}
        </ProductTile>
      </Wrapper>
    </Container>
  );
};

export default Products;
