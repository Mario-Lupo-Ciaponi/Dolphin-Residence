const hamburgerIconElement = document.querySelector(".header .menu-button");

const offScreenMenuElement = document.querySelector(".header .off-screen-menu");

hamburgerIconElement.addEventListener("click", toggleMenu);

function toggleMenu() {
  const isActive = offScreenMenuElement.classList.toggle("active");

  if (isActive) {
    hamburgerIconElement.querySelector(".open").style.display = "none";
    hamburgerIconElement.querySelector(".close").style.display = "block";
  } else {
    hamburgerIconElement.querySelector(".open").style.display = "block";
    hamburgerIconElement.querySelector(".close").style.display = "none";
  }
}

function scrollToSection() {
  const navLinks = document.querySelectorAll(
    ".header > .navbar > .off-screen-menu > .links > .item"
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
