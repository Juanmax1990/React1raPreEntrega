import CartWidget from "../CartWidget/CartWidget";
import "../NavBar/NavBar.css";

const NavBar = ({ logo }) => {
  return (
    <nav className="nav-bar">
      <div className="container-fluid">
        <a href="/" className="logo">
          {logo}
          <h1>JMD Tenis & Padel</h1>
        </a>
        <input type="checkbox" className="side-menu" id="side-menu-checkbox" />
        <label className="hamb" htmlFor="side-menu-checkbox">
          <span className="hamb-line"></span>
        </label>
        <nav className="nav">
          <div className="menu-cart-container">
            <ul className="menu">
              <li>
                <a href="#">Raquetas</a>
              </li>
              <li>
                <a href="#">Paletas</a>
              </li>
              <li>
                <a href="#">Indumentaria</a>
              </li>
              <li>
                <a href="#">Accesorios</a>
              </li>
              <li>
                <a href="#">Contacto</a>
              </li>
            </ul>
            <CartWidget />
          </div>
        </nav>
      </div>
    </nav>
  );
};

export default NavBar;

