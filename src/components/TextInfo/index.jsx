import React from 'react';
import PropTypes from 'prop-types';

import { ContainerInfor, Text, Title } from './styles';

function TextInfor(props) {
  const { textOne, textTwo, h4 } = props;
  return(
    <ContainerInfor>
      <Title>{ h4 }</Title>
      <Text>{ textOne }</Text>
      <Text>{ textTwo }</Text>
    </ContainerInfor>
  );
}

TextInfor.propTypes = {
  textOne: PropTypes.string,
  textTwo: PropTypes.string,
  h4: PropTypes.string,
}.isRequired;

export default TextInfor;
