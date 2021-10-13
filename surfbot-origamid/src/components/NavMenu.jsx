import React from 'react';
import '../css/navMenu.css';

function NavMenu() {
  return(
    <nav className="container-list">
      <ul className="list">
        <li>Praia</li>
        <div className="element-circle"></div>
        <li>Aulas</li>
        <div className="element-circle"></div>
        <li>contato</li>
        <div className="element-circle"></div>
        <li>Matricule-se</li>
      </ul>
    </nav>
  );
}

export default NavMenu;
