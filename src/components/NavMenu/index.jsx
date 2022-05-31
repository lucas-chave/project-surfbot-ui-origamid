import React from 'react';
import { Link } from 'react-router-dom';

import { ContainerNav, IconElement, List, ListItem } from './styles';

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

export default NavMenu;
