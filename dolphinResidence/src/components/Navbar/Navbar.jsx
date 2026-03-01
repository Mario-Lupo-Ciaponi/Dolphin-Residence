import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faX } from "@fortawesome/free-solid-svg-icons";
import HamburgerMenu from "../HamburgerMenu/HamburgerMenu";
import Logo from "../../assets/logo.png";
import "./Navbar.css";

const Navbar = () => {
  const [showHamburgerMenu, setShowHamburgerMenu] = useState(false);

  const toggleShowHamburgerMenu = () => setShowHamburgerMenu((prev) => !prev);

  return (
    <nav className="navbar">
      <img className="logo" src={Logo} alt="logo" />

      <ul className="links">
        <li className="item">Начало</li>
        <li data-target="about-us-section" className="item">
          За нас
        </li>
        <li data-target="our-bungalows-section" className="item">
          Бунгала
        </li>
        <li data-target="our-services-section" className="item">
          Услуги
        </li>
        <li data-target="footer" className="item">
          Контакти
        </li>
      </ul>

      <HamburgerMenu showMenu={showHamburgerMenu} />

      <button onClick={toggleShowHamburgerMenu} className="menu-button">
        <FontAwesomeIcon
          className="icon"
          icon={showHamburgerMenu ? faX : faBars}
        />
      </button>
    </nav>
  );
};

export default Navbar;
