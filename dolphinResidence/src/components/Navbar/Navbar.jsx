import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faX } from "@fortawesome/free-solid-svg-icons";
import HamburgerMenu from "../HamburgerMenu/HamburgerMenu";
import Logo from "../../assets/logo.png";
import "./Navbar.css";

const Navbar = () => {
  const [showHamburgerMenu, setShowHamburgerMenu] = useState(false);

  const navLinks = [
    {
      label: "Начало",
      target: "top",
    },
    {
      label: "За нас",
      target: "about-us-section",
    },
    {
      label: "Бунгала",
      target: "our-bungalows-section",
    },
    {
      label: "Контакти",
      target: "footer",
    },
  ];

  const scrollToSection = (targetId) => {
    const element = document.getElementById(targetId);

    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  const toggleShowHamburgerMenu = () => setShowHamburgerMenu((prev) => !prev);

  return (
    <nav className="navbar">
      <img className="logo" src={Logo} alt="logo" />

      <ul className="links">
        {navLinks.map((navLink) => {
          return (
            <li
              key={navLink.target}
              className="item"
              onClick={() =>
                navLink.target === "top"
                  ? window.scrollTo({ top: 0, behavior: "smooth" })
                  : scrollToSection(navLink.target)
              }
            >
              {navLink.label}
            </li>
          );
        })}
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
