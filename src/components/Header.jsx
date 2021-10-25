import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import logo from '../images/surfbot-logo.svg';
import NavMenu from './NavMenu';

function Header() {
  return(
    <Div>
      <Link to="/">
        <ImageLogo src={ logo } alt="logo" />
      </Link>
      <NavMenu />
    </Div>
  );
}

const Div = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 8px 0;
  background: #17222D;
`;

const ImageLogo = styled.img`
  width: 150px;
  height: 45px;
  margin-left: 5%;
`;

export default Header;
