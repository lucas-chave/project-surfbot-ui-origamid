import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import logo from '../images/surfbot-logo.svg';
import NavMenu from './NavMenu';
import NavMenuMobile from './NavMenuMobile';

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

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 8px 0;
  align-items: center;
  background: #17222D;

  .link-logo {
    margin-left: 5%;
  }
  
`;

export default Header;
