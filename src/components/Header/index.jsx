import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../../images/surfbot-logo.svg';

import NavMenu from '../NavMenu';
import NavMenuMobile from '../NavMenuMobile';

import { Container } from './styles';

function Header() {
  return(
    <Container>
      <Link className='link-logo' to="/">
        <img src={ logo } alt="logo" />
      </Link>
      <NavMenu />
      <NavMenuMobile />
    </Container>
  );
}

export default Header;
