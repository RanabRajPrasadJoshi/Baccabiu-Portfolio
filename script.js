const slides = document.querySelector(".slides");
const images = document.querySelectorAll(".slides img");
const dotsContainer = document.querySelector(".dots");

let currentIndex = 0;
const slideCount = images.length;
let interval;

function updateSlide(index) {
  slides.style.transform = `translateX(${-index * 100}%)`;
  document.querySelectorAll('.dots span').forEach(dot => dot.classList.remove('active'));
  dotsContainer.children[index].classList.add('active');
  currentIndex = index;
}

function nextSlide() {
  const nextIndex = (currentIndex + 1) % slideCount;
  updateSlide(nextIndex);
}

function prevSlide() {
  const prevIndex = (currentIndex - 1 + slideCount) % slideCount;
  updateSlide(prevIndex);
}

// Auto slide
function startAutoSlide() {
  interval = setInterval(nextSlide, 4000);
}
function stopAutoSlide() {
  clearInterval(interval);
}

// Create dots
images.forEach((_, index) => {
  const dot = document.createElement("span");
  dot.addEventListener("click", () => {
    updateSlide(index);
    stopAutoSlide();
    startAutoSlide();
  });
  dotsContainer.appendChild(dot);
});

// Initial state
updateSlide(0);
startAutoSlide();

// Buttons
document.querySelector(".next").addEventListener("click", () => {
  nextSlide();
  stopAutoSlide();
  startAutoSlide();
});
document.querySelector(".prev").addEventListener("click", () => {
  prevSlide();
  stopAutoSlide();
  startAutoSlide();
});






