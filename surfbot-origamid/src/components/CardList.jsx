import React from 'react';
import iconBoia from '../images/boia.svg';
import iconCoco from '../images/coco.svg';
import iconSandalhas from '../images/sandalhas.svg';
import '../css/cardList.css';

function CardList() {
  const data = [
    { image: iconBoia, distance: '16Km' },
    { image: iconCoco, distance: 'Restaurantes a beira mar' },
    { image: iconSandalhas, distance: 'Salva-vidas' },
  ];

  return (
    <div className="container-card">
      {data.map((obj) => (
        <div className="container-card-list" >
          <img src={ obj.image } alt="exaple" />
          <p>{obj.distance} de costa</p>
        </div>
      ))}
    </div>
  );
}

export default CardList;
