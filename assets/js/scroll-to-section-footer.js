function scrollToSection() {
  const navLinks = document.querySelectorAll(
    "#footer .quick-links .footer-column:first-child .footer-links .item"
  );

  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      const targetId = link.getAttribute("data-target");
      const targetSection = document.getElementById(targetId);

      targetSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    });
  });
}

scrollToSection();
