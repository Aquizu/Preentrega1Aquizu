import logo from '../../assets/logo.jpg';
import CartWidget from '../CartWidget/Index.jsx';

function Navbar () {
  
  return (
    <header className="header">
      <nav className="navbar">
        <figure className="navbar__logo">
          <img src={logo} alt="" />
        </figure>
        <menu className="navbar__menu">
          <li className="navbar__item">
            <a className='navbar__link' href="">Shop</a>
          </li>
          <li className="navbar__item">
            <a className='navbar__link' href="">Contacto</a>
          </li>
          <li className="navbar__item">
            <a className='navbar__link' href="">Login</a>
          </li>
          <li >
            <a href="">
              <CartWidget quantity={2}/>
            </a>
          </li>
        </menu>
      </nav>
    </header>
  );
}

export default Navbar;