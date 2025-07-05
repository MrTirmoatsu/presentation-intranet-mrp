// === Initialisation ===
let currentSlide = 0;
const slides = document.querySelectorAll(".slide");
const progressBar = document.getElementById("progressBar");

// === Mise à jour de l'affichage ===
function updateSlides() {
  slides.forEach((slide, index) => {
    slide.style.display = index === currentSlide ? "block" : "none";
  });

  // Mise à jour de la barre de progression
  const pourcentage = ((currentSlide + 1) / slides.length) * 100;
  progressBar.style.width = pourcentage + "%";
}

// === Navigation ===
function nextSlide() {
  if (currentSlide < slides.length - 1) {
    currentSlide++;
    updateSlides();
  }
}

function prevSlide() {
  if (currentSlide > 0) {
    currentSlide--;
    updateSlides();
  }
}

// === Lancement ===
updateSlides();