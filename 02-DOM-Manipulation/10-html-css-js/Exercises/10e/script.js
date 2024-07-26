const buttons = document.querySelectorAll('.btn');

buttons.forEach(button => { 
   button.addEventListener('click', () => {
    if(button.classList.contains('btn')) {
      button.classList.remove('btn');
      button.classList.add('btn-changed');
    } else {
      button.classList.remove('btn-changed');
      button.classList.add('btn');
    }
  })
});
