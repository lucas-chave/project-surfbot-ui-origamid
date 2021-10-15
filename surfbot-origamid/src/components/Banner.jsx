import React from 'react';
import styled from 'styled-components';
import image from '../images/foto-srf.svg';
import seta from '../images/seta.svg';

function Banner() {
  return (
    <MainContainer>
      <Image src={ image } alt="foto do mar com dois rapazes em cima de pranchas" />
      <ContainerBanner>
        <HeadingOne>Escola de Surf</HeadingOne>
        <FormEmail>
          <InputEmail
            placeholder="Email" 
            type="email"
            name="email"
            id="email"
          />
          <ButtonRegister>MATRICULE-SE<img src={seta} alt="icone"/></ButtonRegister>
        </FormEmail>
      </ContainerBanner> 
    </MainContainer>
  );
}

const MainContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  flex-direction: column;
  width: 100%;
`;

const Image = styled.img`
  position: relative;
  width: 100%;

  @media screen and (max-width: 450px) { 
    display: none;
  }
`;

const ContainerBanner = styled.div`
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

const HeadingOne = styled.h1`
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

const FormEmail = styled.form`
  display: flex;
  align-self: center;
  padding-bottom: 20px;
  margin-right: 5%;
  margin-left: 5%;
`;

const InputEmail = styled.input`
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

const ButtonRegister = styled.button`
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

export default Banner;
