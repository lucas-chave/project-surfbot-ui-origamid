import React, { useState } from 'react';
import styled from 'styled-components';
import menu from '../images/menu.svg';

function NavMenu() {
  const [varBool, setVarBool] = useState(false);
  const widthPage = document.body.clientWidth;
  const proxyUseVarBool = () => setVarBool(!varBool);
  function alterMenu() {
    if (varBool) {
      return (
        <>
          <img onClick={() => proxyUseVarBool() } src={menu} alt="icone menu"/>
          <ContainerListResponsive className="containerListResponsive">
            <UlResponsive className="ulResponsive">
              <li>Praia</li>
              <li>Aulas</li>
              <li>contato</li>
              <li>Matricule-se</li>
            </UlResponsive>
          </ContainerListResponsive>
        </>
      )   
    }
    return <img onClick={() => proxyUseVarBool() } src={menu} alt="icone menu"/>;
  }
  return(
    <>
      {widthPage > 575 ? (
        <ContainerNav className="container-list">
          <List className="list">
            <ListItem>Praia</ListItem>
            <IconElement className="element-circle"></IconElement>
            <ListItem>Aulas</ListItem>
            <IconElement className="element-circle"></IconElement>
            <ListItem>contato</ListItem>
            <IconElement className="element-circle"></IconElement>
            <ListItem>Matricule-se</ListItem>
          </List>
        </ContainerNav>
        ) : alterMenu()}
    </>
  );
}

const ContainerListResponsive = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  background: cornsilk;
  position: absolute;
`;

const UlResponsive = styled.ul`
  display: flex;
  flex-direction: column;

  li {
    list-style: none;
  }
`;

const ContainerNav = styled.nav`
  display: flex;
  align-self: center;
  margin-right: 5%;
`;

const List = styled.ul`
    display: flex;
    align-items: center;
`;

const ListItem = styled.li`
  list-style: none;
  margin: 0 20px;
  color: #fff;
`;

const IconElement = styled.div`
  width: 8px;
  height: 8px;
  border: 2px solid #fff;
  border-radius: 50%;
  box-sizing: border-box;
`

export default NavMenu;
