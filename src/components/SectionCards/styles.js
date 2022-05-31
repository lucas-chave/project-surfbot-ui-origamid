import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const ContainerCards = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #EFF4F9;
  padding-bottom: 57px;
  width: 100%;

  p {
    font-weight: 400;
    font-size: 18px;
    line-height: 29px;
    text-align: center;
  }

  .threePeople {
    color: #FF3726;
  }
`;

export const IconWave = styled.img`
  margin: -35px 0 30px;
`;

export const TitleCards = styled.h2`
  font-size: 72px;
  line-height: 82px;
  font-weight: 400;
  font-family: Alice;
  margin-bottom: 42px;
  color: #445566;
`;

export const Cards = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

export const Card = styled.div`
  background: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 16px 15px;
  padding: 30px;
  box-shadow: 0px 5px 5px rgba(187, 204, 221, 0.4), 0px 10px 10px rgba(187, 204, 221, 0.4);
  border-radius: 5px;
`;

export const IconCard = styled.div`
  margin: -50px 0 0 0;
`;

export const TitleCard = styled.h3`
  font-size: 24px;
  line-height: 32px;
  font-weight: 700;
  text-align: center;
  margin: 20px 0;
  color: #445566;
`;

export const TagsCard = styled.div`
  display: flex;
  flex-direction: column;

  span {
    margin: 10px 0;
  }

  &::before {
    content: '';
    width: 8px;
    display: inline-block;
    margin: 0 6px 0 0;
    height: 8px;
    border-radius: 50%;
    border: 2px solid #FF3726;
  }
`;

export const CardPrice = styled.p`
  display: flex;
  align-self: flex-start;
  margin-top: 20px;
  color: #1188EE;
  font-weight: 700;
`;

export const ButtonRegistration = styled(Link)`
  margin-top: 32px;
  width: 230px;
  height: 40px;
  border: none;
  color: #fff;
  background: #445566;
  border-radius: 5px;
  font-weight: bold;
  font-size: 18px;
  line-height: 25px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`

export const ContactName = styled.p`
  &::before {
    content: '';
    width: 90px;
    display: block;
    position: absolute;
    margin: 1px 0 0 50px;
    height: 2px;
    background: #FF3726;
  }
`;
