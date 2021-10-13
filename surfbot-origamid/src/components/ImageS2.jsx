import React from 'react';
import PropTypes from 'prop-types';
import '../css/imageInfor.css';

function ImageS2(props) {
  const { image, alt } = props;
  return(
    <div>
      <img src={ image } alt={ alt } />
    </div>
  );
}

ImageS2.propTypes = {
  image: PropTypes.string,
  alt: PropTypes.string,
}.isRequired;

export default ImageS2;
