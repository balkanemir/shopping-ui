import { Check } from "@material-ui/icons";
import React, { useState, useEffect } from "react";
import styled from "styled-components";

const Container = styled.div`
  height: 35vw;
  display: flex;
  justify-content: center;
  @media (max-width: 1125px) {
    height: 45vw;
  }
  @media (max-width: 950px) {
    height: 50vw;
  }
  @media (max-width: 850px) {
    height: 55vw;
  }
  @media (max-width: 690px) {
    height: 400px;
  }
  @media (max-width: 450px) {
    height: 350px;
  }
`;

const Frame = styled.div`
  height: 30vw;
  width: 50vw;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.div`
  display: flex;
  width: 17vw;
  justify-content: space-around;
  margin-bottom: 30px;
  @media (max-width: 1125px) {
    margin-bottom: 30px;
  }
  @media (max-width: 850px) {
    margin-bottom: 10px;
  }
`;

const TitleFirst = styled.div`
  font-size: 40px;
  font-weight: bolder;
  background-color: #00b4d8;
  color: white;
  padding: 5px 10px 5px 10px;
  @media (max-width: 1125px) {
    font-size: 40px;
  }
  @media (max-width: 850px) {
    font-size: 30px;
  }
`;

const TitleSecond = styled.div`
  font-size: 40px;
  font-weight: bolder;
  color: #00b4d8;
  padding: 5px 10px 5px 10px;
  @media (max-width: 1125px) {
    font-size: 40px;
  }
  @media (max-width: 850px) {
    font-size: 30px;
  }
`;

const Input = styled.input`
  width: 30vw;
  height: 30px;
  border-bottom: 2px solid #0077b6;
  border-left: none;
  border-right: none;
  border-top: none;
  margin-top: 30px;
  padding: 5px;
  &:focus {
    border-bottom: 2px solid #00b4d8;
    border-left: none;
    border-right: none;
    border-top: none;
    outline: none;
  }
  @media (max-width: 1125px) {
    margin-top: 30px;
  }
  @media (max-width: 850px) {
    width: 40vw;
  }
  @media (max-width: 690px) {
    margin-top: 20px;
    width: 50vw;
  }
  @media (max-width: 450px) {
    width: 40vw;
    font-size: 12px;
  }
`;

const Button = styled.button`
  width: 10vw;
  height: 50px;
  padding: 10px;
  margin: 30px;
  background-color: ${(props) => (props.isClicked ? "green" : "#0077b6")};
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  border: none;
  font-size: 16px;
  transition: all 0.5s;
  border-radius: ${(props) => (props.isClicked ? "20px" : "0")};
  cursor: pointer;
  &:hover {
    border-radius: 20px;
    background-color: ${(props) => (props.isClicked ? "green" : "#00b4d8")};
  }
  @media (max-width: 690px) {
    font-size: 14px;
    width: 20vw;
  }
  @media (max-width: 450px) {
    font-size: 12px;
    width: 20vw;
  }
  @media (max-width: 360px) {
    font-size: 10px;
  }
`;

const Icon = styled.div`
  width: 20px;
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ContactUs = () => {
  const [isClicked, setIsClicked] = useState(false);
  const handleClick = (click) => {
    setIsClicked(click);
  };
  useEffect(() => {
    if (isClicked) {
      setTimeout(() => {
        setIsClicked(false);
      }, 5000);
    }
  }, [isClicked]);
  return (
    <Container>
      <Frame>
        <Title>
          <TitleFirst>Contact</TitleFirst>
          <TitleSecond>Us</TitleSecond>
        </Title>
        <Input placeholder="Name"></Input>
        <Input placeholder="Surname"></Input>
        <Input placeholder="Email"></Input>
        <Input placeholder="Your Message..."></Input>

        <Button isClicked={isClicked} onClick={() => handleClick(true)}>
          {isClicked ? (
            <>
              Sent
              <Icon>
                <Check viewBox="-5 -5 36 36"></Check>
              </Icon>
            </>
          ) : (
            "Send"
          )}
        </Button>
      </Frame>
    </Container>
  );
};

export default ContactUs;
