import React, { useState } from 'react';
import menu from '../images/menu.svg';
import '../css/navMenu.css';

function NavMenu() {
  const [varBool, setVarBool] = useState(false);
  const widthPage = document.body.clientWidth;
  const proxyUseVarBool = () => setVarBool(!varBool);
  function alterMenu() {
    if (varBool) {
      return (
        <>
          <img onClick={() => proxyUseVarBool() } src={menu} alt="icone menu"/>
          <nav className="containerListResponsive">
            <ul className="ulResponsive">
              <li>Praia</li>
              <li>Aulas</li>
              <li>contato</li>
              <li>Matricule-se</li>
            </ul>
          </nav>
        </>
      )   
    }
    return <img onClick={() => proxyUseVarBool() } src={menu} alt="icone menu"/>;
  }
  return(
    <>
      {widthPage > 575 ? (
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
        ) : alterMenu()}
    </>
  );
}

export default NavMenu;
