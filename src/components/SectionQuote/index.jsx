import React from 'react';

import image from '../../images/quote-image.png';

import { Container, Image, TextQuote } from './styles';

function SectionQuote() {
  return (
    <Container>
      <Image src={ image } alt="imagem do mar" />
      <TextQuote>“O surf liberta as ondas de uma vida.”</TextQuote>
    </Container>
  );
}


export default SectionQuote;
