import React from 'react';
import styled from 'styled-components';
import image from '../images/quote-image.png';

function SectionQuote() {
  return (
    <Div className="container-section-quote">
      <Image src={ image } alt="imagem do mar" className="image-quote" />
      <TextQuote className="text-quote">“O surf liberta as ondas de uma vida.”</TextQuote>
    </Div>
  );
}

const Div = styled.div`
  width: 100%;
  margin-bottom: 150px;
  @media screen and (max-width: 450px) {
    padding: 0;
    margin: 0 0 30px 0 ;
  }
`;

const Image = styled.img`
  padding-bottom: 110px;
  width: 100%;
  max-height: 480px;
  position: absolute;
`;

const TextQuote = styled.p`
  padding: 150px 10px 10px 10px;
  position: relative;
  font-family: Alice;
  font-size: 72px;
  line-height: 74px;
  text-align: center;
  color: #FFFFFF;

  @media screen and (max-width: 950px) {
    padding: 100px 10px 10px 10px;
    font-size: 62px;
    line-height: 64px;
  }

  @media screen and (max-width: 700px) {
    padding: 70px 10px 0 10px;
    line-height: 36px;
    font-size: 42px;
  }

  @media screen and (max-width: 450px) {
    padding: 40px 10px 0 10px;
    font-size: 32px;
    line-height: 38px;
  }
`;

export default SectionQuote;
