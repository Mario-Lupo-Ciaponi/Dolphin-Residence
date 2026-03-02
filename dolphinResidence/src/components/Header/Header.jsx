import Navbar from "../Navbar/Navbar";
import "./Header.css";

const Header = () => {
  return (
    <header className="header" id="home">
      <Navbar />

      <div id="welcoming-container">
        <div className="main-part">
          <p className="welcome-to">Добре дошли в,</p>
          <h1 className="title-heading">DOLPHIN RESIDENCE</h1>
        </div>

        <p className="secondary-title">
          - твоят малък рай в подножието на Врачанския Балкан!
        </p>
      </div>
    </header>
  );
};

export default Header;
