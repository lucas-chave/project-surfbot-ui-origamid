import React from 'react';
import PropTypes from 'prop-types';
import { Link, useHistory } from 'react-router-dom';
import waves from '../../images/ondas.svg';
import pran1 from '../../images/pran.svg';
import pran2 from '../../images/pran1.svg';
import pran3 from '../../images/pran2.svg';
import setButton from '../../images/seta.svg';
import '../../css/sectionCards.css'
import { connect } from 'react-redux';
import { changeAdult, changeChild, changeProfessional } from '../../redux/actions';

function SectionCads(props) {
  const { adultDispatch, childDispatch, professionalDispatch } = props;
  const history = useHistory();

  const cardsData = [
    {
      image: pran1,
      title: 'INFANTIL',
      tags: [
        'Público entre 5 e 15 anos',
        'equipamentos fornecidos',
        'Horários de sexta a sábado',
        '2 horas seguidas de aula',
      ],
      price: '49,00',
      function: childDispatch,
    },
    {
      image: pran2,
      title: 'ADULTO',
      tags: [
        'Público entre 5 e 15 anos',
        'equipamentos fornecidos',
        'Horários de sexta a sábado',
        '2 horas seguidas de aula',
      ],
      price: '49,00',
      function: adultDispatch,

    },
    {
      image: pran3,
      title: 'PROFISSIONAL',
      tags: [
        'Público entre 5 e 15 anos',
        'equipamentos fornecidos',
        'Horários de sexta a sábado',
        '2 horas seguidas de aula',
      ],
      price: '49,00',
      function: professionalDispatch,
    },
  ];

  const toRegister = (func) => {
    func();
    history.push('/register');
  }

  return(
    <div className="container-cards">
        <img src={ waves } alt="icone de ondas" className="icon-wave" />
        <h4 className="title-cards">Aulas</h4>
        <div className="cards">
          {cardsData.map((card, index) => (
            <div key={index} className="card">
              <img src={card.image} alt="icone de uma prancha" className="icon-card" />
              <h4 className="title-card">{card.title}</h4>
              <div className="tags-card">
                {card.tags.map((tag, index) => (
                  <span key={index}>{tag}</span>
                ))}
              </div>
              <div className="card-price">{`R$ ${card.price} / Aula`}</div>
              <Link onClick={() => toRegister(card.function)}  to="/register" className="button-registration">
                MATRICULE-SE<img src={setButton} alt="icone de botão" className="image-button" />
              </Link>
            </div>
          ))}
        </div>
        <p>Possui um grupo com mais de <span className="threePeople">3 pessoas</span>?</p>
        <p>Entre <span className="contact-name">em contato</span> para um desconto personalizado.</p>
    </div>
  );
}

function mapDispatchToProps(dispatch) {
  return {
    childDispatch: () => dispatch(changeChild()),
    adultDispatch: () => dispatch(changeAdult()),
    professionalDispatch: () => dispatch(changeProfessional())
  };
}

SectionCads.propTypes = {
  childDispatch: PropTypes.func.isRequired,
  adultDispatch: PropTypes.func.isRequired,
  professionalDispatch: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(SectionCads);
