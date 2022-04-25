import React from 'react';
import SetaContact from '../../images/seta-contact.svg';
import setaButton from '../../images/seta.svg';
import bgIcons from '../../images/bicones.svg';
import '../../css/sectionContact.css';

function SectionContact() {
  return (
    <div className="container-section-contact">
      <h2 className="title-section-contact">Contato</h2>
      <div className="sub-container-contact">
        <form>
          <div className="container-input-contact">
            <label>Nome</label>
            <input type="text" />
          </div>
          <div className="container-input-contact">
            <label>Email</label>
            <input type="email" />
          </div>
          <div className="container-input-contact">
            <label>Mensagem</label>
            <textarea />
          </div>
          <button className="button-send-message">ENVIAR MENSAGEM <img src={setaButton} alt="icone de seta" /></button>
        </form>
        <div className="trace" />
        <div className="container-information">
          <div className="sub-container-information">
            <div className="container-detail-informations">
              <p className="title-information-address">Endereço</p>
              <p className="information-address">Prai mansa n: 47</p>
              <p className="information-address">Procure a barraca vermelha</p>
              <p className="map-indication">VER NO MAPA <img src={ SetaContact } alt="icone de seta"/></p>
            </div>
            <div className="container-detail-informations">
              <p className="title-information-address">Email & telefone</p>
              <p className="information-address">contato@surfbot.com</p>
              <p className="information-address">88 99999-9999</p>
            </div>
            <div className="container-detail-informations-hour">
              <p className="title-information-hour">Horário</p>
              <p className="information-address">De Sexta à sábado</p>
              <p className="information-address">das 06:00 às 14:00</p>
            </div>
          </div>
          <img className="image-icons-information" src={ bgIcons } alt="icones"/>
        </div>
      </div>
    </div>
  );
}

export default SectionContact;
