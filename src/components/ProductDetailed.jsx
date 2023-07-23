import React from "react";
import styled from "styled-components";

const Container = styled.div`
  position: absolute;
  width: 70vw;
  height: 40vw;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  padding: 40px;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 500px) {
    height: 80vh;
    flex-direction: column;
  }
  @media (max-width: 360px) {
    justify-content: space-evenly;
  }
`;

const Image = styled.img`
  width: 30vw;
  height: 30vw;
  @media (max-width: 1125px) {
    width: 30vw;
    height: 30vw;
  }
  @media (max-width: 950px) {
    width: 40vw;
    height: 40vw;
  }
  @media (max-width: 640px) {
    width: 35vw;
    height: 35vw;
  }
  @media (max-width: 500px) {
    width: 60vw;
    height: 60vw;
  }
`;

const DescriptionContainer = styled.div`
  width: 35vw;
  height: 30vw;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media (max-width: 1125px) {
    height: 30vw;
  }
  @media (max-width: 950px) {
    height: 40vw;
  }
  @media (max-width: 640px) {
    height: 50vw;
  }
  @media (max-width: 500px) {
    height: 120vw;
    width: 50vw;
    align-items: center;
  }
`;

const Title = styled.div`
  font-size: 40px;
  font-weight: bold;
  @media (max-width: 1125px) {
    font-size: 35px;
  }
  @media (max-width: 950px) {
    font-size: 30px;
  }
  @media (max-width: 850px) {
    font-size: 25px;
  }
  @media (max-width: 640px) {
    font-size: 20px;
  }
  @media (max-width: 500px) {
    font-size: 35px;
  }
`;
const IdNumber = styled.div`
  font-size: 10px;
`;
const Price = styled.div`
  font-size: 45px;
  background-color: #0077b6;
  color: white;
  width: 200px;
  @media (max-width: 1125px) {
    font-size: 35px;
    width: 160px;
  }
  @media (max-width: 950px) {
    font-size: 30px;
    width: 140px;
  }
  @media (max-width: 850px) {
    font-size: 25px;
    width: 120px;
  }
  @media (max-width: 640px) {
    font-size: 20px;
    width: 100px;
  }
  @media (max-width: 500px) {
    font-size: 30px;
    width: 120px;
  }
`;
const Description = styled.div`
  font-size: 14px;
  @media (max-width: 1125px) {
    font-size: 14px;
  }
  @media (max-width: 950px) {
    font-size: 12px;
  }
  @media (max-width: 850px) {
    font-size: 10px;
  }
  @media (max-width: 500px) {
    text-align: center;
  }
`;

const SizesFrame = styled.div`
  display: flex;
  font-size: 18px;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 1125px) {
    font-size: 18px;
  }
  @media (max-width: 950px) {
    font-size: 16px;
  }
  @media (max-width: 850px) {
    font-size: 14px;
  }
  @media (max-width: 640px) {
    font-size: 12px;
  }
  @media (max-width: 500px) {
    font-size: 10px;
  }
`;
const SizesContainer = styled.div`
  display: flex;
`;
const Size = styled.button`
  width: 40px;
  height: 40px;
  border: 1px solid #0077b6;
  color: black;
  background-color: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 5px;
  cursor: pointer;
  &:hover {
    background-color: #00b4d8;
  }
  &:focus {
    background-color: #00b4d8;
  }
  @media (max-width: 1125px) {
    width: 35px;
    height: 35px;
  }
  @media (max-width: 950px) {
    width: 30px;
    height: 30px;
  }
`;
const Button = styled.button`
  border: none;
  height: 40px;
  background-color: #00b4d8;
  color: white;
  font-size: 18px;
  font-weight: bold;
  transition: all 0.2s;
  cursor: pointer;
  &:hover {
    background-color: #0077b6;
    border-radius: 20px;
  }
  @media (max-width: 1125px) {
    font-size: 18px;
  }
  @media (max-width: 950px) {
    font-size: 16px;
  }
  @media (max-width: 850px) {
    font-size: 14px;
  }
  @media (max-width: 500px) {
    font-size: 12px;
  }
`;

const ProductDetailed = () => {
  return (
    <Container>
      <Image
        src={
          "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/5b0981ff-45f8-40c3-9372-32430a62aaea/dunk-high-womens-shoes-PXHcGT.png"
        }
      />
      <DescriptionContainer>
        <Title>Nike Air</Title>
        <IdNumber>product number: 243948</IdNumber>
        <Price>$ 142,99</Price>
        <Description>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eu
          dignissim dui, quis auctor ante. Nunc quis tellus vitae leo iaculis
          maximus. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Donec eu dignissim dui, quis auctor ante. Nunc quis tellus vitae leo
          iaculis maximus
        </Description>
        <SizesFrame>
          Size:
          <SizesContainer>
            <Size>36</Size>
            <Size>38</Size>
            <Size>40</Size>
            <Size>41.5</Size>
            <Size>42</Size>
          </SizesContainer>
        </SizesFrame>

        <Button>Add to Cart</Button>
      </DescriptionContainer>
    </Container>
  );
};

export default ProductDetailed;
