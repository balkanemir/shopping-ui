import React, { useState } from "react";
import styled from "styled-components";
import { useInView } from "react-intersection-observer";

const Container = styled.div`
  padding: 20px;
  display: flex;
  align-items: center;
  height: 400px;
  justify-content: center;
  overflow: hidden;
  @media (max-width: 1125px) {
    height: 400px;
  }

  @media (max-width: 850px) {
    height: 300px;
  }
`;

const Title = styled.div`
  font-size: 80px;
  font-weight: bold;
  color: black;
  opacity: ${(props) => (props.isVisible ? 1 : 0)};
  transform: translateY(${(props) => (props.isVisible ? "0" : "-40px")});
  transition: all 1s;
  @media (max-width: 1125px) {
    font-size: 70px;
  }
  @media (max-width: 850px) {
    font-size: 65px;
  }
  @media (max-width: 640px) {
    font-size: 60px;
  }
  @media (max-width: 450px) {
    font-size: 40px;
  }
`;

const SubTitle = styled.p`
  font-size: 16px;
  color: black;
  opacity: ${(props) => (props.isVisible ? 1 : 0)};
  transform: translateY(${(props) => (props.isVisible ? "0" : "-40px")});
  transition: all 1s;
  text-align: center;
  @media (max-width: 1125px) {
    font-size: 16px;
  }
  @media (max-width: 850px) {
    font-size: 14px;
  }
  @media (max-width: 640px) {
    font-size: 12px;
  }
`;

const ButtonTile = styled.div`
  margin: 20px;
  display: flex;
  justify-content: center;
  @media (max-width: 450px) {
    flex-direction: column;
    align-items: center;
  }
  @media (max-width: 360px) {
    flex-direction: column;
    align-items: center;
  }
`;

const Button = styled.button`
  border: 1px solid #4361ee;
  padding: 10px;
  margin: 5px;
  background-color: #00b4d8;
  color: white;
  cursor: pointer;
  opacity: ${(props) => (props.isVisible ? 1 : 0)};
  transform: translateY(${(props) => (props.isVisible ? "0" : "40px")});
  transition: all 0.2s;
  &:hover {
    background-color: #0077b6;
    border-radius: 20px;
  }
  @media (max-width: 1125px) {
    font-size: 12px;
  }
  @media (max-width: 850px) {
    font-size: 10px;
  }
  @media (max-width: 450px) {
    font-size: 8px;
    width: 100px;
  }
  @media (max-width: 360px) {
    font-size: 8px;
  }
`;

const ContainerLeft = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const ContainerCenter = styled.div`
  flex: 1;
`;

const ContainerRight = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

const LeftRectangle = styled.div`
  width: 300px;
  height: 30px;
  background-color: ${(props) => (props.isHovered ? "#00b4d8" : "#0077b6")};
  border-radius: ${(props) => (props.isHovered ? "20px" : "0")};
  margin-top: 10px;
  margin-bottom: 10px;
  position: relative;
  left: ${(props) => props.index};
  transition: all 0.2s;
  @media (max-width: 1125px) {
    left: ${(props) => (props.index === "-30px" ? "-100px" : "-130px")};
    height: 25px;
  }

  @media (max-width: 850px) {
    left: ${(props) => (props.index === "-30px" ? "-80px" : "-110px")};
    height: 20px;
  }
  @media (max-width: 640px) {
    left: ${(props) => (props.index === "-30px" ? "-30px" : "-60px")};
  }
  @media (max-width: 450px) {
    height: 15px;
    margin-top: 15px;
  }
  @media (max-width: 360px) {
    display: none;
  }
`;

const RightRectangle = styled.div`
  width: 300px;
  height: 30px;
  background-color: ${(props) => (props.isHovered ? "#00b4d8" : "#0077b6")};
  border-radius: ${(props) => (props.isHovered ? "20px" : "0")};
  margin-top: 10px;
  margin-bottom: 10px;
  position: relative;
  right: ${(props) => props.index};
  transition: all 0.2s;
  @media (max-width: 1125px) {
    left: ${(props) => (props.index === "-30px" ? "100px" : "130px")};
    height: 25px;
  }
  @media (max-width: 850px) {
    left: ${(props) => (props.index === "-30px" ? "80px" : "110px")};
    height: 20px;
  }
  @media (max-width: 640px) {
    left: ${(props) => (props.index === "-30px" ? "30px" : "60px")};
  }
  @media (max-width: 450px) {
    height: 15px;
    margin-top: 15px;
  }
  @media (max-width: 360px) {
    display: none;
  }
`;

const Essentials = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });
  const [subTitleRef, subTitleInView] = useInView({
    triggerOnce: true,
    threshold: 0.7,
  });
  const [buttonRef, buttonInView] = useInView({
    triggerOnce: true,
    threshold: 0.9,
  });
  const [isHovered, setIsHovered] = useState(false);
  const [indexEven, setEvenIndex] = useState("-90px");
  const [indexOdd, setOddIndex] = useState("-30px");
  const handleHover = (hover) => {
    setIsHovered(hover);
  };

  const handleIndex = (hover) => {
    setEvenIndex(hover ? "-30px" : "-90px");
    setOddIndex(hover ? "-90px" : "-30px");
  };

  return (
    <Container isHovered={isHovered} isVisible={buttonInView}>
      <ContainerLeft>
        <LeftRectangle
          isVisible={buttonInView}
          isHovered={isHovered}
          index={indexOdd}
        ></LeftRectangle>
        <LeftRectangle
          isVisible={buttonInView}
          isHovered={isHovered}
          index={indexEven}
        ></LeftRectangle>
        <LeftRectangle
          isVisible={buttonInView}
          isHovered={isHovered}
          index={indexOdd}
        ></LeftRectangle>
        <LeftRectangle
          isVisible={buttonInView}
          isHovered={isHovered}
          index={indexEven}
        ></LeftRectangle>
        <LeftRectangle
          isVisible={buttonInView}
          isHovered={isHovered}
          index={indexOdd}
        ></LeftRectangle>
        <LeftRectangle
          isVisible={buttonInView}
          isHovered={isHovered}
          index={indexEven}
        ></LeftRectangle>
        <LeftRectangle
          isVisible={buttonInView}
          isHovered={isHovered}
          index={indexOdd}
        ></LeftRectangle>
      </ContainerLeft>

      <ContainerCenter>
        <Title ref={ref} isVisible={inView}>
          ESSENTIALS
        </Title>
        <SubTitle ref={subTitleRef} isVisible={subTitleInView}>
          Nike designed styles for the best adventure experience.
        </SubTitle>
        <ButtonTile>
          <Button
            onMouseEnter={() => {
              handleHover(true);
              handleIndex(true);
            }}
            onMouseLeave={() => {
              handleHover(false);
              handleIndex(false);
            }}
            ref={buttonRef}
            isVisible={buttonInView}
          >
            SHOP MEN'S
          </Button>
          <Button
            onMouseEnter={() => {
              handleHover(true);
              handleIndex(true);
            }}
            onMouseLeave={() => {
              handleHover(false);
              handleIndex(false);
            }}
            ref={buttonRef}
            isVisible={buttonInView}
          >
            SHOP WOMEN'S
          </Button>
          <Button
            onMouseEnter={() => {
              handleHover(true);
              handleIndex(true);
            }}
            onMouseLeave={() => {
              handleHover(false);
              handleIndex(false);
            }}
            ref={buttonRef}
            isVisible={buttonInView}
          >
            SHOP KIDS'
          </Button>
        </ButtonTile>
      </ContainerCenter>
      <ContainerRight>
        <RightRectangle
          isVisible={buttonInView}
          isHovered={isHovered}
          index={indexOdd}
        ></RightRectangle>
        <RightRectangle
          isVisible={buttonInView}
          isHovered={isHovered}
          index={indexEven}
        ></RightRectangle>
        <RightRectangle
          isVisible={buttonInView}
          isHovered={isHovered}
          index={indexOdd}
        ></RightRectangle>
        <RightRectangle
          isVisible={buttonInView}
          isHovered={isHovered}
          index={indexEven}
        ></RightRectangle>
        <RightRectangle
          isVisible={buttonInView}
          isHovered={isHovered}
          index={indexOdd}
        ></RightRectangle>
        <RightRectangle
          isVisible={buttonInView}
          isHovered={isHovered}
          index={indexEven}
        ></RightRectangle>
        <RightRectangle
          isVisible={buttonInView}
          isHovered={isHovered}
          index={indexOdd}
        ></RightRectangle>
      </ContainerRight>
    </Container>
  );
};

export default Essentials;
