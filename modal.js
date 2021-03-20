const btnYes = document.querySelector('.btn-yes');
const modal = document.querySelector('.modal');
const loading = document.querySelector('.loading');
const modalText = document.querySelector('.modal__text');
const messages = {
  18: 'По вам скучает очень близкий человек, которого больше нет в мире живых.',
  36: 'По вам скучает очень близкий человек, которого больше нет в мире живых. Возможно это дедушка или бабушка.',
  46: 'По вам скучает очень близкий человек, которого больше нет в мире живых. Возможно это кто-то из Ваших родителей.'
}

let age = localStorage.age;

btnYes.addEventListener('click', (evt) => {
  evt.preventDefault();
  loading.classList.remove('hidden');
  setTimeout(closeLoading, 2000);
  setTimeout(onAnimationComplete, 1500);
});


function closeLoading () {
  loading.classList.add('hidden');
}

function showMessage (){
  if (age >= 18 && age < 36) {
    modalText.textContent = messages[18];
  } else if (age >= 36  && age < 46) {
    modalText.textContent = messages[36];
  } else if (age >= 46) {
    modalText.textContent = messages[46];
  } else {
    modalText.textContent = 'У Вас ещё всё впереди!'
  }
  setTimeout(() => {modal.classList.remove('modal-hidden');}, 500);
  
  localStorage.removeItem('age');
}

function onAnimationComplete() {
  window.location = btnYes.href;  
}
showMessage();
console.log(age)