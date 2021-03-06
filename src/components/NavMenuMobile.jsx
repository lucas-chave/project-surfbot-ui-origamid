import { Link } from "react-router-dom";
import styled from "styled-components";

function NavMenuMobile() {

  function toggleMenu(event) {
    if (event.type === 'touchstart') event.preventDefault();
    const nav = document.getElementById('nav');
    nav.classList.toggle('active');
    const active = nav.classList.contains('active');
    event.currentTarget.setAttribute('aria-expanded', active);
    if (active) {
      event.currentTarget.setAttribute('aria-label', 'Fechar Menu');
    } else {
      event.currentTarget.setAttribute('aria-label', 'Abrir Menu');
    }
  }

  return (
    <Container id="nav">
      <button onClick={(event) => toggleMenu(event)} aria-label="Abrir Menu" id="btn-mobile" aria-haspopup="true" aria-controls="menu" aria-expanded="false">
        <span id="hamburger"></span>
      </button>
      <ul id="menu" role="menu">
        <ListItem>Praia</ListItem>
        <ListItem>Aulas</ListItem>
        <ListItem>contato</ListItem>
        <Link to="/register">
          <ListItem>Matricule-se</ListItem>
        </Link>
      </ul>
    </Container>
  );
}

const Container = styled.nav`
  display: flex;
  align-items: center;
  padding: .6em;
  display: none;

  @media (max-width: 700px) {
    display: flex;
    #menu {
      display: block;
      position: absolute;
      width: 100%;
      top: 96px;
      right: 0px;
      background: rgba(0, 0, 0, 0.01);
      background: rgba(0, 0, 0, 0.8);
      transition: 0.3s;
      z-index: 1000;
      height: 0px;
      visibility: hidden;
      overflow-y: hidden;
    }
    &.active #menu {
      height: calc(100vh);
      visibility: visible;
      overflow-y: auto;
    }
    #menu li {
      padding: 1rem 0;
      margin: 0 1rem;
      border-bottom: 2px solid rgba(0, 0, 0, 0.05);
      list-style: none;
      margin: 0 20px;
      color: #fff;
      font-size: 20px;
    }
    #btn-mobile {
      display: flex;
      padding: 0.5rem 1rem;
      font-size: 1rem;
      border: none;
      background: none;
      cursor: pointer;
      gap: 0.5rem;
    }
    #hamburger {
      border-top: 2px solid #e7e7e7;
      width: 20px;
    }
    #hamburger::after,
    #hamburger::before {
      content: '';
      display: block;
      width: 20px;
      height: 2px;
      background: #e7e7e7;
      margin-top: 5px;
      transition: 0.3s;
      position: relative;
    }
    &.active #hamburger {
      border-top-color: transparent;
    }
    &.active #hamburger::before {
      transform: rotate(135deg);
    }
    &.active #hamburger::after {
      transform: rotate(-135deg);
      top: -7px;
    }
  }
`;

const ListItem = styled.li`

`;

export default NavMenuMobile;
