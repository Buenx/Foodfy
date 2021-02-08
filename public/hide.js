// Hide and show contents

const buttons = document.querySelectorAll('.hidden-button');
const contents = document.querySelectorAll('.text');

for (let button in buttons) {
  buttons[button].addEventListener('click', function () {
    contents[button].classList.toggle('hidden');

    if (contents[button].classList.contains('hidden')) {
      buttons[button].innerHTML = 'Mostrar';
    } else {
      buttons[button].innerHTML = 'Esconder';
    }
  });
}
