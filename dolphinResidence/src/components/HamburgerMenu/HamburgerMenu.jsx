import "./HamburgerMenu.css";

const HamburgerMenu = ({ showMenu }) => {
  return (
    <div className={`off-screen-menu ${showMenu ? "active" : ""}`}>
      <ul className="off-screen-links ">
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
    </div>
  );
};

export default HamburgerMenu;
