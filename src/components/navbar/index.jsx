import logo from '../../assets/logo.jpg';
import CartWidget from '../CartWidget/Index.jsx';
import ItemList from '../ItemList/index.jsx'

function Navbar () {
  
  return (
    <header className="header">
      <nav className="navbar">
        <figure className="navbar__logo">
          <img src={logo} alt="" />
        </figure>
        <menu className="navbar__menu">
          <ItemList label="Shop" />
          <ItemList label="Contacto" />
          <ItemList label="Login" />
          <li>
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