import React from 'react';
import styled from  'styled-components';
import ImageS2 from '../ImageS2';
import image from '../../images/bigail.svg';
import map from '../../images/mapa.svg';
import Heading from '../Heading';
import CardList from '../CardList';
import Paragraph from '../Paragraph';
import TextInfor from '../TextInfo';

function SectionInfor() {
  const text = (
    `Lorem Ipsum is simply dummy text of the printing and 
    typesetting industry. Lorem Ipsum has been the industry's 
    standard dummy text ever since the 1500s, when an
    unknown printer took a galley of type and scrambled
    it to make a type specimen book.
    Lorem Ipsum is simply dummy text of the printing and 
    typesetting industry. Lorem Ipsum has been the industry's 
    standard dummy text ever since the 1500s, when an
    unknown printer took a galley of type and scrambled
    it to make a type specimen book.
    it to make a type specimen book.
    Lorem Ipsum is simply dummy text of the printing and 
    typesetting industry. Lorem Ipsum has been the industry's 
    standard dummy text ever since the 1500s, when an
    unknown printer took a galley of type and scrambled
    it to make a type specimen book.
`);

  return(
    <ContainerSection>
      <ContainerLeft>
        <ImageSurf>
          <ImageS2 image={ image } alt="imagens de pranchas" />
        </ImageSurf>
        <ImageMap>
          <ImageS2 image={ map } alt="imagem de um mapa"/>
        </ImageMap>
        <TextInfor
          h4="COMO CHEGAR"
          textOne="Carro pela via  Washington Soares Sentido  Aldeota"
          textTwo="Ônibus linhas: 51, 52."
        />
      </ContainerLeft>
      <ContainerRigth>
        <Heading />
        <CardList />
        <TextInformation>
          <Paragraph text={ text } />
          <Paragraph text={ text } />
        </TextInformation>
      </ContainerRigth>
    </ContainerSection>
  );
}

const ContainerSection = styled.div`
  display: flex;
  @media screen and (max-width: 1250px) {
    display: flex;
    flex-direction: column-reverse;
  }
`;

const ContainerLeft = styled.div`
  margin: 64px 5%;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (max-width: 1250px) {
    margin-top:  0;
  }

  @media screen and (max-width: 590px) {
    margin-top:  0px;
  }
  @media screen and (max-width: 590px) {
    margin-top:  0px;
  }
`;

const ContainerRigth = styled.div`
  margin: 64px 5%;
  display: flex;
  flex-direction: column;

  span {
    color: #1188EE;
  }

  h1 {
    font-size: 72px;
    line-height: 74px;
    font-family: Alice, serif;
  }
  p {
    margin: 24px 0;
  }
  @media screen and (max-width: 1250px) {
    h1 {
      font-size: 54px;
      line-height: 60px;
      font-family: Alice;
    }
  }
  @media screen and (max-width: 590px) {
    h1 {
      font-size: 40px;
      line-height: 46px;
      font-family: Alice, serif;
    }
  }
  @media screen and (max-width: 590px) {
    h1 {
      font-size: 40px;
      line-height: 46px;
      font-family: Alice;
    }
  }
`;

const ImageSurf = styled.div`
  position: relative;

  @media screen and (max-width: 600px) {
    display: none;
  }
  @media screen and (max-width: 590px) {
    display: none;
  }
`;

const ImageMap = styled.div`
  top: -70px;
  display: flex;
  position: relative;
  box-shadow: 2px 3px 4px 3px rgba(23, 34, 45, 0.4);

  @media screen and (max-width: 600px) {
    display: none;
  }
  @media screen and (max-width: 590px) {
    display: none;
  }
`;

const TextInformation = styled.div`
  @media screen and (max-width: 1250px) {
    display: flex;
    
    p {
      margin: 8px 16px;

    }
  }
  @media screen and (max-width: 590px) {
    display: none;
  }
  @media screen and (max-width: 590px) {
    display: none;
  }
`;


export default SectionInfor;
