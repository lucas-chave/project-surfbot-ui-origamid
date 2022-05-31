import React from 'react';

import image from '../../images/foto-srf.svg';
import seta from '../../images/seta.svg';

import {
  ButtonRegister,
  ContainerBanner,
  FormEmail,
  HeadingOne,
  Image,
  InputEmail,
  MainContainer,
} from './styles';

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

export default Banner;
