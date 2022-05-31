import React from 'react';

import ImageS2 from '../ImageS2';
import image from '../../images/bigail.svg';
import map from '../../images/mapa.svg';

import Heading from '../Heading';
import CardList from '../CardList';
import Paragraph from '../Paragraph';
import TextInfor from '../TextInfo';

import { text } from './data';
import {
  ContainerLeft,
  ContainerRigth,
  ContainerSection,
  ImageMap,
  ImageSurf,
  TextInformation
} from './styles';

function SectionInfor() {
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

export default SectionInfor;
