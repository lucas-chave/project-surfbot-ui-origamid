import logo from '../images/surfbot-logo.svg'
import '../css/header.css'
import NavMenu from './NavMenu'

function Header() {
  return(
    <div className="header">
      <img className="image-logo" src={ logo } alt="logo" />
      <NavMenu />
    </div>
  );
}

export default Header;
