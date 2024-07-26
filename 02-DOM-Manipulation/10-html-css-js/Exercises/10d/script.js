const button1 = document.querySelector('.js-button');

button1.addEventListener('click', change);

function change() {
  if (button1.classList.contains('js-button')) {
    button1.classList.remove('js-button');
    button1.classList.add('js-button-changed');
    button1.innerText = 'white'
  } else {
    button1.classList.remove('js-button-changed');
    button1.classList.add('js-button')
    button1.innerText = 'black'
  }
}
