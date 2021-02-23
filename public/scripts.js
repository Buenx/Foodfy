const images = document.querySelectorAll('.card-image');

// Open page
for (let i = 0; i < images.length; i++) {
  images[i].addEventListener('click', function () {
    window.location.href = `/recipes/${i}`;
  });
}
