import React from 'react';
import waves from '../images/ondas.svg';
import pran1 from '../images/surfbot-icon.svg';
import pran2 from '../images/Group1.svg';
import pran3 from '../images/Group2.svg';
import setButton from '../images/seta.svg';
import '../css/sectionCards.css'

function SectionCads() {
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
        'Público entre 5 e 15 anos',
        'equipamentos fornecidos',
        'Horários de sexta a sábado',
        '2 horas seguidas de aula',
      ],
      price: '49,00',
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
    },
  ];

  return(
    <div className="container-cards">
        <img src={ waves } alt="icone de ondas" className="icon-wave" />
        <h4 className="title-cards">Aulas</h4>
        <div className="cards">
          {cardsData.map((card) => (
            <div className="card">
              <img src={card.image} alt="icone de uma prancha" className="icon-card" />
              <h4 className="title-card">{card.title}</h4>
              <div className="tags-card">
                {card.tags.map((tag) => (
                  <span>{tag}</span>
                ))}
              </div>
              <div className="card-price">{`R$ ${card.price} / Aula`}</div>
              <button className="button-registration">
                MATRICULE-SE<img src={setButton} alt="icone de botão" className="image-button" />
              </button>
            </div>
          ))}
        </div>
    </div>
  );
}

export default SectionCads;
