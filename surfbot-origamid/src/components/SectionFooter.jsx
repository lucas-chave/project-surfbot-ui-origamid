import React from 'react';
import icon from '../images/prancha.svg';
import '../css/footer.css';

function SectionFooter() {
  return (
    <div className="container-footer">
      <p className="elements-footer">Surfnet 2017 - alguns direitos reservados..</p>
      <img  className="elements-footer" src={ icon } alt="icone de prancha" />
    </div>
  );
}

export default SectionFooter;
