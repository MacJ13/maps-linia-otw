import { NavLink } from "react-router-dom";

const Navbar = () => {
  const activeLink = ({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "active" : "";

  return (
    <nav id="navbar">
      <ul id="navbar-list">
        <li>
          <NavLink to="/" className={activeLink}>
            Główna
          </NavLink>
        </li>
        <li>
          <NavLink className={activeLink} to="map">
            Mapa
          </NavLink>
        </li>

        <a href="#">O Projekcie</a>
        <a href="#">Miejsca</a>
        <a href="#">Kontakt</a>
      </ul>
    </nav>
  );
};

export default Navbar;
