import React from 'react';
import styled from 'styled-components';
import icon from '../../images/prancha.svg';

function SectionFooter() {
  return (
    <Footer>
      <Par>Surfnet 2017 - alguns direitos reservados..</Par>
      <Icon src={ icon } alt="icone de prancha" />
    </Footer>
  );
}

const Footer = styled.footer`
    height: 80px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center; 
  background: #1188EE;
`;

const Par = styled.p`
    padding: 0 30px;
    color: #fff;
`;

const Icon = styled.img`
  padding: 0 30px;
  color: #fff;
`

export default SectionFooter;
