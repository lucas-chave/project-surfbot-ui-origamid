import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

function NavMenu() {
  return(
    <>
      <ContainerNav>
        <List>
          <ListItem>Praia</ListItem>
          <IconElement></IconElement>
          <ListItem>Aulas</ListItem>
          <IconElement></IconElement>
          <ListItem>contato</ListItem>
          <IconElement></IconElement>
          <Link to="/register">
            <ListItem>Matricule-se</ListItem>
          </Link>
        </List>
      </ContainerNav>  
    </>
  );
}

const ContainerNav = styled.nav`
  display: flex;
  align-self: center;
  margin-right: 5%;
  @media(max-width: 700px) {
    display: none;
  }
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
