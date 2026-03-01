import Logo from "../../assets/logo.png";
import "./Footer.css";

const Footer = () => {
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
            <li data-target="home" className="item">
              Начало
            </li>
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
        </div>

        <div className="menu-link footer-column">
          <h3 className="column-heading">Бунгала</h3>

          <ul className="footer-links">
            <li className="item">
              <a href="bungalow-1.html" target="_blank" className="item-link">
                Бунгало 1
              </a>
            </li>
            <li className="item">
              <a href="#" className="item-link">
                Бунгало 2
              </a>
            </li>
            <li className="item">
              <a href="#" className="item-link">
                Бунгало 3
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
