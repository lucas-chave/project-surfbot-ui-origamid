import React from 'react';

import iconBoia from '../../images/boia.svg';
import iconCoco from '../../images/coco.svg';
import iconSandalhas from '../../images/sandalhas.svg';

import {
  ContainerCard,
  ContainerCardList,
} from './styles';

function CardList() {
  const data = [
    { image: iconBoia, distance: '16Km' },
    { image: iconCoco, distance: 'Restaurantes a beira mar' },
    { image: iconSandalhas, distance: 'Salva-vidas' },
  ];

  return (
    <ContainerCard>
      {data.map((obj, index) => (
        <ContainerCardList key={ index }>
          <img src={ obj.image } alt="exaple" />
          <p>{obj.distance} de costa</p>
        </ContainerCardList>
      ))}
    </ContainerCard>
  );
}

export default CardList;
