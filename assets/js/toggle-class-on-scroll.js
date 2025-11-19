function toggleClassOnScroll() {
  const goBackToTopElement = document.getElementById("back-to-top-btn");
  if (document.documentElement.scrollTop >= 500)
    goBackToTopElement.classList.add("show");
  else goBackToTopElement.classList.remove("show");
}

window.addEventListener("scroll", toggleClassOnScroll);
