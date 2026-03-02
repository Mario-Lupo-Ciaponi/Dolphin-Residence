import Logo from "../../assets/logo.png";
import navLinks from "../../data/navLinks";
import "./Footer.css";

const Footer = () => {
  const scrollToSection = (targetId) => {
    const element = document.getElementById(targetId);

    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer id="footer">
      <div className="all-rights-reserved-container">
        <img className="footer-logo" src={Logo} alt="лого" />

        <p className="all-rights-reserved-p">
          Dolphin Residence - All rights reserved
        </p>
        <p className="email-address">dolphinresidense@gmail.com</p>
      </div>

      <div className="quick-links">
        <div className="menu-link footer-column">
          <h3 className="column-heading">Бързи връски</h3>

          <ul className="footer-links">
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
        </div>
      </div>
    </footer>
  );
};

export default Footer;
