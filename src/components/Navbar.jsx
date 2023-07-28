import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { SearchSharp } from "@material-ui/icons";
import { CategoryItems } from "../categories";

const Container = styled.div`
  position: fixed;
  z-index: 2;
  height: ${(props) =>
    props.isHovered
      ? props.categoryData === "REGISTER" || props.categoryData === "LOGIN"
        ? "80px"
        : "400px"
      : "80px"};
  width: 100%;
  background-color: ${(props) =>
    props.isHovered
      ? "white"
      : props.isScrolled
      ? "rgba(255, 255, 255, 0.3)"
      : "none"};
  transition: all 0.2s;
  transition-delay: 0.1s;
  backdrop-filter: ${(props) => (props.isScrolled ? "blur(10px)" : "none")};
  @media (max-width: 1125px) {
    height: ${(props) =>
      props.isHovered
        ? props.categoryData === "REGISTER"
          ? "80px"
          : "400px"
        : "50px"};
  }
`;

const Wrapper = styled.div`
  padding: 0 20px 0 20px;
  color: #0077b6;
  display: flex;
  justify-content: space-between;
  @media (max-width: 1125px) {
    padding: 0 0 0 10px;
  }
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  @media (max-width: 1125px) {
    height: 50px;
  }
`;

const SearchContainer = styled.div`
  border: ${(props) =>
    props.isScrolled
      ? "1px solid #0077b6"
      : props.hoverchanged
      ? "1px solid #0077b6"
      : "1px solid white"};
  width: 40%;
  display: flex;
  justify-content: space-between;
  padding: 5px;
  transition: all 0.2s;
  @media (max-width: 1125px) {
    height: 20px;
  }
  @media (max-width: 850px) {
    width: 200px;
    margin-right: 10vw;
  }
  @media (max-width: 640px) {
    width: 100px;
    margin-right: 15vw;
  }
  @media (max-width: 450px) {
    width: 80px;
    margin-right: 20vw;
  }
  @media (max-width: 360px) {
    width: 80px;
    margin-right: 25vw;
  }
`;

const Input = styled.input`
  border: none;
  background-color: transparent;
  width: 100%;
  color: #0077b6;
  font-size: 14px;
  font-weight: bold;
  &:focus {
    outline: none;
    caret-color: #0077b6;
  }
  @media (max-width: 1125px) {
    height: 20px;
    font-size: 12px;
  }
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: right;
  @media (max-width: 1125px) {
    height: 50px;
  }
`;

const Center = styled.div`
  flex: 2;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  transition: all 1s;
  @media (max-width: 1125px) {
    height: 50px;
  }
`;

const Logo = styled.h1`
  font-weight: bold;
  @media (max-width: 1125px) {
    font-size: 22px;
  }
  @media (max-width: 360px) {
    font-size: 16px;
  }
`;

const Button = styled.button`
  padding: 10px;
  margin: 5px;
  font-weight: bold;
  background-color: ${(props) =>
    props.isScrolled
      ? props.hoverchanged
        ? props.isHovered
          ? "#0077b6"
          : "transparent"
        : "transparent"
      : props.hoverchanged
      ? props.isHovered
        ? "#0077b6"
        : "transparent"
      : "transparent"};
  height: 40px;
  color: ${(props) =>
    props.isScrolled
      ? props.hoverchanged
        ? props.isHovered
          ? "white"
          : "#0077b6"
        : "#0077b6"
      : props.hoverchanged
      ? props.isHovered
        ? "white"
        : "#0077b6"
      : "white"};
  cursor: pointer;
  border: none;
  transition: all 0.2s;
  border-radius: ${(props) => (props.isHovered ? "20px" : "0")};
  &:focus {
    background-color: #0077b6;
    color: white;
    border-radius: 20px;
  }
  @media (max-width: 1125px) {
    padding: 5px;
    font-size: 10px;
    height: 20px;
  }
  @media (max-width: 850px) {
    display: none;
  }
`;

const CategoryTile = styled.div`
  display: flex;
`;

const CategoryTitle = styled.div`
  background: none;
  border: none;
  color: #0077b6;
  font-size: 16px;
  font-weight: bold;
  margin: 10px;
`;

const Category = styled.button`
  display: flex;
  background: none;
  border: none;
  color: #0077b6;
  margin: 0 0 0 5px;
  opacity: 0.6;
  font-weight: bold;
  padding-top: 5px;
  &:hover {
    opacity: 1;
    cursor: pointer;
  }
`;

const CategoryColumn = styled.div`
  margin-left: 10px;
  flex: 1;
`;

const Navbar = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [categoryData, setCategoryData] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const handleHover = (hover, data) => {
    setIsHovered(hover);
    setCategoryData(data);
  };

  const handleScroll = () => {
    const scrollTop = window.pageYOffset;
    let threshold = getThresholdBasedOnWidth();
    setIsScrolled(scrollTop > threshold);
  };

  const updateWindowWidth = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", updateWindowWidth);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.addEventListener("resize", updateWindowWidth);
    };
  }, []);

  const getThresholdBasedOnWidth = () => {
    if (windowWidth < 950) {
      if (windowWidth > 640) {
        return 400;
      } else {
        return 150;
      }
    } else {
      return 500;
    }
  };
  return (
    <Container
      isScrolled={isScrolled}
      isHovered={isHovered}
      onMouseLeave={() => handleHover(false)}
      categoryData={categoryData}
    >
      <Wrapper>
        <Left>
          <Logo>NikeFactory.</Logo>
        </Left>
        <Center>
          <Button
            isScrolled={isScrolled}
            isHovered={categoryData === "NEW&FEATURED"}
            hoverchanged={isHovered}
            onMouseEnter={() => handleHover(true, "NEW&FEATURED")}
          >
            NEW & FEATURED
          </Button>
          <Button
            isScrolled={isScrolled}
            isHovered={categoryData === "MEN"}
            hoverchanged={isHovered}
            onMouseEnter={() => handleHover(true, "MEN")}
          >
            MEN
          </Button>
          <Button
            isScrolled={isScrolled}
            isHovered={categoryData === "WOMEN"}
            hoverchanged={isHovered}
            onMouseEnter={() => handleHover(true, "WOMEN")}
          >
            WOMEN
          </Button>
          <Button
            isScrolled={isScrolled}
            isHovered={categoryData === "KIDS"}
            hoverchanged={isHovered}
            onMouseEnter={() => handleHover(true, "KIDS")}
          >
            KIDS
          </Button>
          <Button
            isScrolled={isScrolled}
            isHovered={categoryData === "ACCESORIES"}
            hoverchanged={isHovered}
            onMouseEnter={() => handleHover(true, "ACCESORIES")}
          >
            ACCESORIES
          </Button>
          <Button
            isScrolled={isScrolled}
            isHovered={categoryData === "SALES"}
            hoverchanged={isHovered}
            onMouseEnter={() => handleHover(true, "SALES")}
          >
            SALES
          </Button>
        </Center>
        <Right>
          <SearchContainer hoverchanged={isHovered} isScrolled={isScrolled}>
            <Input placeholder="Search... "></Input>
            <SearchSharp></SearchSharp>
          </SearchContainer>

          <Button
            isScrolled={isScrolled}
            isHovered={categoryData === "REGISTER"}
            categoryData={categoryData}
            onMouseEnter={() => handleHover(true, "REGISTER")}
            onMouseLeave={() => handleHover(false, "")}
            hoverchanged={isHovered}
          >
            REGISTER
          </Button>
          <Button
            isScrolled={isScrolled}
            categoryData={categoryData}
            onMouseEnter={() => handleHover(true, "LOGIN")}
            onMouseLeave={() => handleHover(false, "")}
            isHovered={categoryData === "LOGIN"}
            hoverchanged={isHovered}
          >
            LOGIN
          </Button>
        </Right>
      </Wrapper>
      <CategoryTile>
        {CategoryItems.map((item) => (
          <>
            {categoryData === item.categoryTitle && (
              <>
                {item.categories.map((category) => (
                  <CategoryColumn>
                    <CategoryTitle>{category.title}</CategoryTitle>
                    {category.names.map((name) => (
                      <Category key={name.name}>{name.name}</Category>
                    ))}
                  </CategoryColumn>
                ))}
              </>
            )}
          </>
        ))}
      </CategoryTile>
    </Container>
  );
};

export default Navbar;
