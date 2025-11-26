const imagesArray = [
  "bungalow-1-cover.jpg",
  "bungalow-1-interior-1.jpg",
  "bungalow-1-interior-2.jpg",
];

let currentIndex = 0;

const currentImageElement = document.querySelector(
  ".wrapper .bungalow-images .bungalow-image"
);

const path = `./assets/images/bungalow-${currentImageElement.id}-images`;

const arrowContainer = document.querySelector(
  ".wrapper .bungalow-images .arrows"
);

const leftArrow = arrowContainer.querySelector(".left");

const rightArrow = arrowContainer.querySelector(".right");

leftArrow.addEventListener("click", decreaseIndex);
rightArrow.addEventListener("click", increaseIndex);
arrowContainer.addEventListener("click", changeImageSrc);

function decreaseIndex() {
  if (currentIndex > 0) currentIndex--;
}

function increaseIndex() {
  if (currentIndex < imagesArray.length - 1) currentIndex++;
}

function changeImageSrc() {
  currentImageElement.src = `${path}/${imagesArray[currentIndex]}`;
}
