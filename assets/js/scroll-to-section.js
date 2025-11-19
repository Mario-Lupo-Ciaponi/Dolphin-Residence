function scrollToSection() {
  const navLinks = document.querySelectorAll(
    ".header > .navbar > .links > .item"
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
