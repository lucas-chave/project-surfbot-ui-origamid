import React from 'react';
import imag from '../fotos/foto-srf.svg';
import seta from '../images/seta.svg';
import '../css/banner.css';

function Banner() {
  return (
    <div className="main-container">
      <img src={ imag } alt="foto do mar com dois rapazes em cima de pranchas" className="image-banner"/>
      <div className="container-banner">
        <h1>Escola de Surf</h1>
        <form>
          <input
            className="input-email"
            placeholder="Email" 
            type="email"
            name="email"
            id="email"
          />
          <button className="button-register">MATRICULE-SE<img src={seta} alt="icone"/></button>
        </form>
      </div> 
    </div>
  );
}

export default Banner;
