import React from 'react';

import icon from '../../images/prancha.svg';

import { Footer, Icon, Info } from './styles';

function SectionFooter() {
  return (
    <Footer>
      <Info>Surfnet 2017 - alguns direitos reservados..</Info>
      <Icon src={ icon } alt="icone de prancha" />
    </Footer>
  );
}

export default SectionFooter;
