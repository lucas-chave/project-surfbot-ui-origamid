import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';

import waves from '../../images/ondas.svg';
import setButton from '../../images/seta.svg';

import { changeAdult, changeChild, changeProfessional } from '../../redux/actions';

import {
  ButtonRegistration,
  Card,
  CardPrice,
  Cards,
  ContactName,
  ContainerCards,
  IconCard,
  IconWave,
  TagsCard,
  TitleCard,
  TitleCards
} from './styles.js';

import { cardsData } from './data';

function SectionCads(props) {
  const { adultDispatch, childDispatch, professionalDispatch } = props;
  const history = useHistory();

  const toRegister = (func) => {
    func();
    history.push('/register');
  }

  return(
    <ContainerCards className="container-cards">
        <IconWave src={ waves } alt="icone de ondas" className="icon-wave" />
        <TitleCards className="title-cards">Aulas</TitleCards>
        <Cards className="cards">
          {cardsData(childDispatch, adultDispatch, professionalDispatch).map((card, index) => (
            <Card key={index} className="card">
              <IconCard src={card.image} alt="icone de uma prancha" className="icon-card" />
              <TitleCard className="title-card">{card.title}</TitleCard>
              <TagsCard className="tags-card">
                {card.tags.map((tag, index) => (
                  <span key={index}>{tag}</span>
                ))}
              </TagsCard>
              <CardPrice className="card-price">{`R$ ${card.price} / Aula`}</CardPrice>
              <ButtonRegistration onClick={() => toRegister(card.function)}  to="/register" className="button-registration">
                MATRICULE-SE<img src={setButton} alt="icone de botão" className="image-button" />
              </ButtonRegistration>
            </Card>
          ))}
        </Cards>
        <p>Possui um grupo com mais de <span className="threePeople">3 pessoas</span>?</p>
        <ContactName>Entre <span className="contact-name">em contato</span> para um desconto personalizado.</ContactName>
    </ContainerCards>
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
