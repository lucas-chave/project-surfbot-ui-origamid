import { Link } from "react-router-dom";
import { Container, ListItem } from "./styles";

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

export default NavMenuMobile;
