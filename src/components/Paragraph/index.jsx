import React from 'react';
import PropTypes from 'prop-types';
import { Paragraph as Style } from './styles';

function Paragraph(props) {

  const { text } = props;

  return(
    <Style>{ text }</Style>
  );
}

Paragraph.propTypes = {
  text: PropTypes.string,
}.isRequired

export default Paragraph;
