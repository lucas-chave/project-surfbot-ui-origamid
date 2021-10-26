import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { changeAdult, changeProfessional, changeChild } from '../redux/actions';
import pran1 from '../images/surfbot-icon.svg';
import pran2 from '../images/Group1.svg';
import pran3 from '../images/Group2.svg';

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
          <input defaultChecked id="child" name="flat" type="radio" onClick={({target}) => setInputSelected(target.id) } />
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

const Container = styled.div`
  margin: 10px 0 20px 0;
  justify-content: center;
  display: flex;
  flex-direction: column;
  background: #EFF4F9;
  box-shadow: 0px 2px 2px rgba(187, 204, 221, 0.4);
  border-radius: 5px;
  padding: 15px;
  h4 {
    margin-bottom: 30px;
    font-weight: normal;
    font-size: 18px;
    color: #445566;
  }
`;

const ContainerInputs = styled.div`
  display: flex;
  align-items: center;
  height: 50px;
  background: #FFFFFF;
  box-shadow: 0px 2px 2px rgba(187, 204, 221, 0.4);
  border-radius: 5px;
  background: #fff;
  .color {
    background: #BBCCDD;
  }
  .separator {
    width: 2px;
    height: 50px;
    background: #EFF4F9;
  }
`;

const ContainerInput = styled.div`
  display: flex;
  align-items: center;
  padding: 6px;
  height: 50px;

  label {
    margin: 4px;
    font-weight: bold;
    font-size: 18px;
    line-height: 25px;
    color: #445566;
  }
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 22px;
`;

export default connect(null, mapDispatchToProps)(MethodCourse);
