import React from 'react';
import image from '../images/quote-image.png';
import '../css/sectionQuote.css';

function SectionQuote() {
  return (
    <div className="container-section-quote">
      <img src={ image } alt="imagem do mar" className="image-quote" />
      <p className="text-quote">“O surf liberta as ondas de uma vida.”</p>
    </div>
  );
}

export default SectionQuote;
