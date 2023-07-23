import React from "react";
import styled from "styled-components";
import {
  Copyright,
  Facebook,
  Instagram,
  Twitter,
  YouTube,
  LocationOnOutlined,
} from "@material-ui/icons";

const Container = styled.div`
  display: flex;
`;

const FooterFrame = styled.div`
  display: flex;
  width: 100vw;
  background-color: #0077b6;

  @media (max-width: 850px) {
    flex-direction: column;
  }
`;

const TitleContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;

  @media (max-width: 850px) {
    align-items: center;
  }
`;

const Title = styled.div`
  font-size: 60px;
  font-weight: bold;
  color: white;
  margin: 3vw 0 2vw 3vw;
  @media (max-width: 1125px) {
    font-size: 50px;
  }
  @media (max-width: 950px) {
    font-size: 40px;
  }
  @media (max-width: 850px) {
    font-size: 50px;
  }
  @media (max-width: 640px) {
    font-size: 40px;
  }
  @media (max-width: 450px) {
    font-size: 30px;
  }
  @media (max-width: 360px) {
    font-size: 20px;
  }
`;

const SubTitle = styled.div`
  font-size: 16px;
  color: white;
  margin-left: 3vw;
  @media (max-width: 1125px) {
    font-size: 16px;
  }

  @media (max-width: 640px) {
    font-size: 14px;
  }
  @media (max-width: 450px) {
    font-size: 12px;
  }
  @media (max-width: 360px) {
    font-size: 10px;
  }
`;

const AllRightsReserved = styled.div`
  font-size: 10px;
  color: white;
  position: absolute;
  margin-top: 320px;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 1125px) {
    margin-top: 320px;
    margin-left: 60%;
  }
  @media (max-width: 850px) {
    margin-top: 480px;
    margin-left: 55%;
  }
  @media (max-width: 640px) {
    margin-top: 400px;
    margin-left: 40%;
  }
  @media (max-width: 500px) {
    margin-top: 400px;
    margin-left: 30%;
  }
  @media (max-width: 450px) {
    margin-top: 290px;
    margin-left: 30%;
    font-size: 8px;
  }
  @media (max-width: 360px) {
    margin-top: 395px;
    margin-left: 0;
    text-align: center;
    font-size: 6px;
  }
`;

const RectangleContainer = styled.div`
  flex: 2;
  margin: 1vw;
  display: flex;
  width: 30vw;
  padding-left: 8vw;
  @media (max-width: 1125px) {
    padding-left: 4vw;
  }
  @media (max-width: 950px) {
    padding-left: 2vw;
  }
  @media (max-width: 850px) {
    padding: 0;
    margin: 0;
    width: 100vw;
  }
  @media (max-width: 360px) {
    padding: 0;
    margin: 0;
    width: 100vw;
    flex-direction: column;
    align-items: center;
  }
`;

const Rectangle = styled.div`
  flex: 1;
  margin: 20px;
  display: flex;
  flex-direction: column;
  @media (max-width: 1125px) {
    margin: 20px;
  }
  @media (max-width: 640px) {
    margin: 10px;
  }
  @media (max-width: 360px) {
    margin: 0;
    align-items: center;
  }
`;

const RectangleTitle = styled.div`
  font-size: 16px;
  color: white;
  margin: 10px;
  @media (max-width: 640px) {
    font-size: 14px;
  }
  @media (max-width: 450px) {
    font-size: 12px;
    margin: 5px;
  }
  @media (max-width: 360px) {
    font-size: 10px;
  }
`;

const RectangleSubTitle = styled.div`
  font-size: 14px;
  color: white;
  opacity: 0.6;
  margin: 10px;
  cursor: pointer;
  &:hover {
    opacity: 1;
  }
  @media (max-width: 640px) {
    font-size: 12px;
  }
  @media (max-width: 450px) {
    font-size: 10px;
    margin: 5px;
  }
  @media (max-width: 360px) {
    font-size: 8px;
  }
`;

const Button = styled.button`
  width: 100px;
  height: 40px;
  margin: 2vw 5px 2vw 3vw;
  background-color: white;
  border: none;
  font-size: 16px;
  transition: all 0.2s;
  color: #0077b6;
  cursor: pointer;
  &:hover {
    background-color: #00b4d8;
    border-radius: 20px;
    color: white;
  }
  @media (max-width: 850px) {
    width: 100px;
    height: 40px;
  }
  @media (max-width: 640px) {
    width: 90px;
    height: 30px;
    font-size: 12px;
  }
  @media (max-width: 450px) {
    width: 80px;
    height: 30px;
    margin-top: 20px;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
`;

const IconContainer = styled.div`
  display: flex;
  margin-left: 8vw;
  justify-content: space-between;
  @media (max-width: 1125px) {
    margin-left: 4vw;
  }
  @media (max-width: 950px) {
    margin-left: 2vw;
  }
  @media (max-width: 850px) {
    margin-left: 8vw;
    justify-content: right;
  }
  @media (max-width: 640px) {
    margin-left: 8vw;
  }
  @media (max-width: 450px) {
    margin-left: 0vw;
    margin-bottom: 20px;
  }
`;

const Icon = styled.div`
  color: white;
  opacity: 0.6;
  cursor: pointer;
  &:hover {
    opacity: 1;
  }
`;

const Location = styled.div`
  font-size: 10px;
  @media (max-width: 1125px) {
    font-size: 10px;
  }
  @media (max-width: 850px) {
    font-size: 8px;
  }
  @media (max-width: 450px) {
    font-size: 8px;
  }
`;

const LocationIcon = styled.div`
  margin-left: 20px;
`;

const Footer = () => {
  return (
    <Container>
      <FooterFrame>
        <TitleContainer>
          <Title>NikeFactory.</Title>
          <SubTitle>Register for Free. Join Us.</SubTitle>
          <ButtonContainer>
            <Button>Register</Button>
            <Button>Log In</Button>
          </ButtonContainer>
        </TitleContainer>
        <RectangleContainer>
          <Rectangle>
            <RectangleTitle>Get Help</RectangleTitle>
            <RectangleSubTitle>Contact Us</RectangleSubTitle>
            <RectangleSubTitle>Order Status</RectangleSubTitle>
            <RectangleSubTitle>Shipping and Delivery</RectangleSubTitle>
            <RectangleSubTitle>Returns</RectangleSubTitle>
            <RectangleSubTitle>Order Cancellation</RectangleSubTitle>
            <RectangleSubTitle>Payment Options</RectangleSubTitle>
            <RectangleSubTitle>Gift Card Balance</RectangleSubTitle>
          </Rectangle>
          <Rectangle>
            <RectangleTitle>About NikeFactory.</RectangleTitle>
            <RectangleSubTitle>News</RectangleSubTitle>
            <RectangleSubTitle>Careers</RectangleSubTitle>
            <RectangleSubTitle>Investors</RectangleSubTitle>
            <RectangleSubTitle>Purpose</RectangleSubTitle>
            <RectangleSubTitle>Sustainabilty</RectangleSubTitle>
          </Rectangle>
          <Rectangle>
            <IconContainer>
              <Icon>
                <Facebook></Facebook>
              </Icon>
              <Icon>
                <Twitter></Twitter>
              </Icon>
              <Icon>
                <YouTube></YouTube>
              </Icon>
              <Icon>
                <Instagram></Instagram>
              </Icon>
            </IconContainer>
          </Rectangle>
        </RectangleContainer>
        <AllRightsReserved>
          <Copyright viewBox="-18 -8 48 38"></Copyright>
          2023 NikeFactory Theme
          <LocationIcon>
            <LocationOnOutlined></LocationOnOutlined>
          </LocationIcon>
          <Location>United States</Location>
        </AllRightsReserved>
      </FooterFrame>
    </Container>
  );
};

export default Footer;
