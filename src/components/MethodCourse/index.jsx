import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { changeAdult, changeProfessional, changeChild } from '../../redux/actions';

import pran1 from '../../images/pran.svg';
import pran2 from '../../images/pran1.svg';
import pran3 from '../../images/pran2.svg';
import { Card, Container, ContainerInput, ContainerInputs } from './styles';

function MethodCourse(props) {
  const { adultDispatch, childDispatch, professionalDispatch } = props;
  const [inputSelected, setInputSelected] = useState('child');
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
    },
    {
      image: pran2,
      title: 'ADULTO',
      tags: [
        'Público maior de 16 anos',
        'equipamentos fornecidos',
        'Horários de sexta a sábado',
        '2 horas seguidas de aula',
      ],
      price: '59,00',
    },
    {
      image: pran3,
      title: 'PROFISSIONAL',
      tags: [
        'Público maior de 16 anos',
        'equipamentos fornecidos',
        'Horários de sexta a sábado',
        '2 horas seguidas de aula',
      ],
      price: '69,00',
    },
  ];

  function changeCard() {
    if (inputSelected === 'child') return 0;
    if (inputSelected === 'adult') return 1;
    if (inputSelected === 'professional') return 2;
  }

  function renderCards() {
    const numberCard = changeCard();
    console.log(numberCard);
    console.log(cardsData)
    return (
       <div className="card">
        <img src={cardsData[numberCard].image} alt="icone de uma prancha" className="icon-card" />
        <h4 className="title-card">{cardsData[numberCard].title}</h4>
        <div className="tags-card">
          {cardsData[numberCard].tags.map((tag, index) => (
            <span key={index}>{tag}</span>
          ))}
        </div>
        <div className="card-price">{`R$ ${cardsData[numberCard].price} / Aula`}</div>
      </div>
    );
  }

  useEffect(() => {
    function changeColorInput() {
      const child = document.querySelector('#containerChild');
      const adult = document.querySelector('#containerAdult');
      const professional = document.querySelector('#containerProfessional');
      if (inputSelected === 'child') {
        professional.classList.remove('color');
        adult.classList.remove('color');
        child.classList.add('color');
        childDispatch();
      }
      if (inputSelected === 'adult') {
        professional.classList.remove('color');
        child.classList.remove('color');
        adult.classList.add('color');      
        adultDispatch();
      }
      if (inputSelected === 'professional') {
        child.classList.remove('color');
        adult.classList.remove('color');
        professional.classList.add('color');
        professionalDispatch();
      }
    }
    changeColorInput();
  }, [inputSelected, childDispatch, adultDispatch, professionalDispatch]);

  return (
    <Container>
      <h4>Escolha o Plano</h4>
      <ContainerInputs>
        <ContainerInput id="containerChild">
          <input  id="child" name="flat" type="radio" onClick={({target}) => setInputSelected(target.id) } />
          <label htmlFor="child">Infantil</label>
        </ContainerInput>
        <div className="separator"/>
        <ContainerInput id="containerAdult">
          <input id="adult" name="flat" type="radio" onClick={({target}) => setInputSelected(target.id) } />
          <label htmlFor="adult">Adulto</label>
        </ContainerInput>
        <div className="separator"/>
        <ContainerInput id="containerProfessional">
          <input id="professional" name="flat" type="radio" onClick={({target}) => setInputSelected(target.id) } />
          <label htmlFor="professional">Profissional</label>
        </ContainerInput>
      </ContainerInputs>
      <Card>
        {renderCards()}
      </Card>
    </Container>
  );
}

MethodCourse.propTypes = {
  childDispatch: PropTypes.func.isRequired,
  adultDispatch: PropTypes.func.isRequired,
  professionalDispatch: PropTypes.func.isRequired,
};

function mapDispatchToProps(dispatch) {
  return {
    childDispatch: () => dispatch(changeChild()),
    adultDispatch: () => dispatch(changeAdult()),
    professionalDispatch: () => dispatch(changeProfessional())
  };
}

export default connect(null, mapDispatchToProps)(MethodCourse);
