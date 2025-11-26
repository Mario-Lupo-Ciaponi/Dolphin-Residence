const goBackToTopButton = document.querySelector("#back-to-top-btn");

goBackToTopButton.addEventListener("click", goBackToTop);

function goBackToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}
