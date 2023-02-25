import './Header.css';
import moonLogo from './assets/img/moonow-logo.svg'

function Header() {
  return (
    <nav className='navbar'>
      <img className='img-navbar' src={moonLogo} alt='Logo Moonow'></img>
      <ul className='list-navbar'>
        <li className='list-item-navbar'>Quem somos</li>
        <li className='list-item-navbar'>Nosso propósito</li>
        <li className='list-item-navbar'>Suporte</li>
      </ul>
    </nav>
  );
}

export default Header;