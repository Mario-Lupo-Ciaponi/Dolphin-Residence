import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import "./ScrollTopButton.css";

const ScrollTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleIsVisible = () => {
    const scrolled = window.scrollY;

    if (scrolled > 300) setIsVisible(true);
    else setIsVisible(false);
  };

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  useEffect(() => {
    window.addEventListener("scroll", toggleIsVisible);
  }, []);

  return (
    <button
      onClick={scrollToTop}
      className={isVisible ? "active" : ""}
      id="back-to-top-btn"
    >
      <FontAwesomeIcon icon={faArrowUp} />
    </button>
  );
};

export default ScrollTopButton;
