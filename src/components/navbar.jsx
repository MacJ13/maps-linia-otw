import { Link } from "react-router-dom";

const Navbar = () => (
  <nav id="navbar">
    <ul id="navbar-list">
      <li>
        <Link to="/">Główna</Link>
      </li>
      <li>
        <Link to="map">Mapa</Link>
      </li>

      <a href="#">O Projekcie</a>
      <a href="#">Miejsca</a>
      <a href="#">Kontakt</a>
    </ul>
  </nav>
);

export default Navbar;
