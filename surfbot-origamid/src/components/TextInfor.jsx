import React from 'react';
import PropTypes from 'prop-types';
import '../css/imageInfor.css';

function TextInfor(props) {
  const { textOne, textTwo, h4 } = props;
  return(
    <div className="container-infor">
      <div className="title">{ h4 }</div>
      <div className="text">{ textOne }</div>
      <div className="text">{ textTwo }</div>
    </div>
  );
}

TextInfor.propTypes = {
  textOne: PropTypes.string,
  textTwo: PropTypes.string,
  h4: PropTypes.string,
}.isRequired;

export default TextInfor;
