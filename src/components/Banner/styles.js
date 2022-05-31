import styled from "styled-components";

export const MainContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  flex-direction: column;
  width: 100%;
`;

export const Image = styled.img`
  position: relative;
  width: 100%;

  @media screen and (max-width: 450px) { 
    display: none;
  }
`;

export const ContainerBanner = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-self: flex-end;
  justify-content: space-between;
  position: absolute;
  width: 100%;

  @media screen and (max-width: 450px) {
    display: none;
  }
`;

export const HeadingOne = styled.h1`
  color: #fff;
  display: flex;
  align-self: center;
  font-family: Alice, serif;
  font-size: 72px;
  padding-bottom: 20px;
  margin-left: 5%;
  margin-right: 5%;

  @media screen and (max-width: 450px) {
    font-size: 32px;
  }

  @media screen and (max-width: 610px) {
    font-size: 36px;
  }
  @media screen and (max-width: 800px) {
    font-size: 38px;
  }
`;

export const FormEmail = styled.form`
  display: flex;
  align-self: center;
  padding-bottom: 20px;
  margin-right: 5%;
  margin-left: 5%;
`;

export const InputEmail = styled.input`
  padding: 12px;
  width: 350px;
  font-size: 14px;
  font-weight: 400;
  height: 50px;
  border: none;
  border-radius: 5px 0 0 5px;
  box-shadow: 0px 5px 5px rgba(23, 34, 45, 0.4);

  @media screen and (max-width: 590px) {
    display: none;
  }
  @media screen and (max-width: 800px) {
    width: 230px;
    height: 30px;
  }
`;

export const ButtonRegister = styled.button`
  width: 164px;
  height: 50px;
  border-radius: 0 5px 5px 0;
  background-color: #EE2211;
  color: #fff;
  border: none;
  box-shadow: 0px 5px 5px rgba(23, 34, 45, 0.4);
  font-weight: 600;

  @media screen and (max-width: 590px) {
    border-radius: 5px;
    width: 150px;
    height: 34px;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
  @media screen and (max-width: 800px) {
    width: 150px;
    height: 30px;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
`;