let slideIndex = 0;
let timer = null;
let paused = false;

const slides  = () => document.getElementsByClassName("image-sliderfade");
const controlsBar = () => document.querySelector('.controls-bar');
const indexEl = () => document.querySelector('.slide-index');

function showSlides() {
  const s = slides();
  for (let i = 0; i < s.length; i++) {
    s[i].style.display = "none";
  }

  slideIndex++;
  if (slideIndex > s.length) slideIndex = 1;

  s[slideIndex - 1].style.display = "block";
  updateIndex();
  timer = setTimeout(showSlides, 3000);
}

function plusSlides(n) {
  clearTimeout(timer);
  slideIndex += n - 1; // porque showSlides faz +1
  if (slideIndex < 0) slideIndex = slides().length - 1;
  showSlides();
}

function togglePause() {
  const btn = document.querySelector('.pause');
  if (paused) {
    paused = false;
    btn.textContent = '❚❚';
    showSlides();
  } else {
    paused = true;
    clearTimeout(timer);
    btn.textContent = '▶';
  }
}

function updateIndex() {
  const total = slides().length;
  indexEl().textContent = `${slideIndex}/${total}`;
}

// inicializa
document.addEventListener("DOMContentLoaded", () => showSlides());
