import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import {
  ArrowBack,
  ArrowBackIos,
  ArrowRightOutlined,
  Close,
} from "@material-ui/icons";
import { CategoryItems } from "../categories";

const SideBarContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 0px;
  right: 0;
  bottom: 0;
  width: ${(props) => (props.isClicked ? "30vw" : "0")};
  height: 100vh;
  background-color: white;
  z-index: 2;
  transition: all 0.2s ease;
  overflow-y: auto;
  padding: ${(props) => (props.isClicked ? "5px" : "0")};
  @media (max-width: 640px) {
    width: ${(props) => (props.isClicked ? "50vw" : "0")};
  }
  @media (max-width: 450px) {
    width: ${(props) => (props.isClicked ? "100vw" : "0")};
  }
  @media (max-width: 360px) {
    width: ${(props) => (props.isClicked ? "100vw" : "0")};
  }
`;

const SideBarButton = styled.button`
  display: ${(props) => (props.menuSelected ? "none" : "flex")};
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  margin: 5px;
  background-color: white;
  height: 40px;
  color: #0077b6;
  border: none;
  transition: all 0.2s;
  &:hover {
    background-color: #0077b6;
    color: white;
    border-radius: 20px;
  }
  @media (max-width: 640px) {
    justify-content: center;
  }
`;

const SideBarSubButton = styled.button`
  display: ${(props) => (props.subMenuSelected ? "none" : "flex")};
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  margin: 5px;
  background-color: white;
  height: 40px;
  color: #0077b6;
  border: none;
  transition: all 0.2s;
  &:hover {
    background-color: #0077b6;
    color: white;
    border-radius: 20px;
  }
  @media (max-width: 640px) {
    justify-content: center;
  }
`;

const Category = styled.button`
  display: flex;
  background: none;
  border: none;
  color: #0077b6;
  margin: 5px;
  padding: 10px;
  opacity: 0.6;
  font-weight: bold;
  padding-top: 5px;
  &:hover {
    opacity: 1;
    cursor: pointer;
  }
  @media (max-width: 640px) {
    justify-content: center;
  }
`;

const CategoryTitle = styled.div`
  background: none;
  border: none;
  color: #0077b6;
  font-size: 16px;
  font-weight: bold;
  margin: 5px;
  padding: 10px;
  @media (max-width: 640px) {
    text-align: center;
  }
`;

const CloseButton = styled.div`
  display: flex;
  justify-content: right;
  align-items: center;
  padding: 10px;
  position: relative;
  margin: 5px;
  background-color: white;
  color: #0077b6;
  border: none;
  transition: all 0.2s;
  cursor: pointer;
`;

const BackButton = styled.div`
  display: ${(props) => (props.menuSelected ? "flex" : "none")};
  font-size: 14px;
  align-items: center;
  padding: 10px;
  margin: 5px;
  background-color: white;
  color: #0077b6;
  border: none;
  transition: all 0.2s;
  cursor: pointer;
  @media (max-width: 600px) {
    margin: 5px;
  }
  @media (max-width: 360px) {
    margin: 5px;
  }
`;

const SideBarCategoryColumn = styled.div`
  display: flex;
  flex-direction: column;
`;

const NavButton = styled.button`
  position: fixed;
  top: 3px;
  right: 3px;
  z-index: 2;
  height: 32px;
  width: 50px;
  border: none;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin: 5px;
  cursor: pointer;

  display: none;
  padding: 1px;
  background-color: transparent;
  @media (max-width: 850px) {
    display: block;
  }
`;

const NavLine = styled.div`
  width: 30px;
  height: 2px;
  background-color: #0077b6;
  margin: 7px;
`;

const SideBar = () => {
  const [isClicked, setIsClicked] = useState(false);
  const [menuSelected, setMenuSelected] = useState(false);
  const [menuData, setMenuData] = useState(null);
  const [subMenuSelected, setSubMenuSelected] = useState(false);
  const [subMenuData, setSubMenuData] = useState(null);
  const sidebarRef = useRef(null);
  const handleMenu = (click) => {
    setIsClicked(click);
  };

  const handleMenuClick = (data, click) => {
    setMenuData(data);
    setMenuSelected(click);
  };
  const handleSubMenuClick = (data, click) => {
    setSubMenuData(data);
    setSubMenuSelected(click);
  };
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setIsClicked(false);
        setMenuSelected(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  return (
    <>
      <NavButton onClick={() => handleMenu(true)}>
        <NavLine></NavLine>
        <NavLine></NavLine>
        <NavLine></NavLine>
      </NavButton>
      <SideBarContainer ref={sidebarRef} isClicked={isClicked}>
        <CloseButton onClick={() => handleMenu(false)}>
          <Close></Close>
        </CloseButton>
        <BackButton
          menuSelected={menuSelected}
          onClick={() => {
            {
              subMenuSelected
                ? handleSubMenuClick(null, false)
                : handleMenuClick(null, false);
            }
          }}
        >
          <ArrowBackIos></ArrowBackIos> {subMenuSelected ? menuData : "All"}
        </BackButton>

        {CategoryItems.map((item) => (
          <>
            {menuData === item.categoryTitle && menuSelected && (
              <>
                <CategoryTitle>
                  {subMenuSelected ? subMenuData : item.categoryTitle}
                </CategoryTitle>
                {item.categories.map((category) => (
                  <>
                    <SideBarSubButton
                      subMenuSelected={subMenuSelected}
                      onClick={() => handleSubMenuClick(category.title, true)}
                    >
                      {category.title} <ArrowRightOutlined />
                    </SideBarSubButton>
                    <SideBarCategoryColumn>
                      {category.names.map((name) => (
                        <>
                          {subMenuData === category.title &&
                            subMenuSelected && <Category>{name.name}</Category>}
                        </>
                      ))}
                    </SideBarCategoryColumn>
                  </>
                ))}
              </>
            )}
          </>
        ))}
        <SideBarButton
          menuSelected={menuSelected}
          onClick={() => handleMenuClick("NEW&FEATURED", true)}
        >
          NEW & FEATURED <ArrowRightOutlined />
        </SideBarButton>
        <SideBarButton
          menuSelected={menuSelected}
          onClick={() => handleMenuClick("MEN", true)}
        >
          MEN <ArrowRightOutlined />
        </SideBarButton>
        <SideBarButton
          menuSelected={menuSelected}
          onClick={() => handleMenuClick("WOMEN", true)}
        >
          WOMEN <ArrowRightOutlined />
        </SideBarButton>
        <SideBarButton
          menuSelected={menuSelected}
          onClick={() => handleMenuClick("KIDS", true)}
        >
          KIDS <ArrowRightOutlined />
        </SideBarButton>
        <SideBarButton
          menuSelected={menuSelected}
          onClick={() => handleMenuClick("ACCESORIES", true)}
        >
          ACCESORIES <ArrowRightOutlined />
        </SideBarButton>
        <SideBarButton
          menuSelected={menuSelected}
          onClick={() => handleMenuClick("SALES", true)}
        >
          SALES <ArrowRightOutlined />
        </SideBarButton>
      </SideBarContainer>
    </>
  );
};

export default SideBar;
