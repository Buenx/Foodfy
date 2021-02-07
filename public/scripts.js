const modalOverlay = document.querySelector('.modal-overlay');
const images = document.querySelectorAll('.card-image');
const cards = document.querySelectorAll('.card');

// Open card
for (let i = 0; i < images.length; i++) {
  images[i].addEventListener('click', function () {
    window.location.href = `/recipes/${i}`;
  });
}
