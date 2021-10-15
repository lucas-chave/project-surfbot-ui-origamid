import React from 'react';
import styled from 'styled-components';
import logo from '../images/surfbot-logo.svg';
import NavMenu from './NavMenu';

function Header() {
  return(
    <Div>
      <ImageLogo className="image-logo" src={ logo } alt="logo" />
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
