import React from 'react';
import '../css/banner.css';
import imag from '../fotos/foto-srf.svg';

function Banner() {
  return (
    <div className="container-banner">
        <img src={ imag } alt="foto do mar com dois rapazes em cima de pranchas" className="foto-banner"/>
        <div className="container">
        <h1>Escola de Surf</h1>
        <form className="form-email">
          <label htmlFor="email">
          <input
            className="input-email"
            placeholder="Email" 
            type="email"
            name="email"
            id="email"
            />
          </label>
          <button className="button-register">MATRICULE-SE</button>
        </form>
        </div> 
      </div>
  );
}

export default Banner;
