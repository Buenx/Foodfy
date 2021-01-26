const modalOverlay = document.querySelector('.modal-overlay')
const cards = document.querySelectorAll('.card')
const close = document.querySelector('.close-modal')
const images = document.querySelectorAll('.card-image')



// Open card
for (const image of images) {
  image.addEventListener('click', function (){
    modalOverlay.classList.add('active')
  })
}

//add card content
for (const card of cards) {
  const foodID = card.getAttribute('id')
  const titleID = card.querySelector('h1').innerHTML
  const authorID = card.querySelector('p').innerHTML
  
  card.addEventListener('click', function() {
    modalOverlay.querySelector('img').src = `assets/${foodID}`
    modalOverlay.querySelector('h1').innerHTML = titleID
    modalOverlay.querySelector('p').innerHTML = authorID
  })
}

// Close card
close.addEventListener('click', function() {
  modalOverlay.classList.remove('active')
})