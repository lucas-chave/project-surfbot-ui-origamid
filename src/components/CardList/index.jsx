import React from 'react';
import styled from 'styled-components';
import iconBoia from '../../images/boia.svg';
import iconCoco from '../../images/coco.svg';
import iconSandalhas from '../../images/sandalhas.svg';

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

const ContainerCard = styled.div`
  margin-top: 42px;
  border-top: solid 1px #808080;
`;

const ContainerCardList = styled.div`
  display: flex;
  align-self: flex-start;
  align-items: center;
  border-bottom: solid 1px #808080;
  padding: 16px 0;

  img {
    margin-right: 40px;
  }
`;

export default CardList;
