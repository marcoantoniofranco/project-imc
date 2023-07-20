const form = document.querySelector('form');
const inputWeight = document.querySelector('#weight');
const inputHeight = document.querySelector('#height');

const modalWrapper = document.querySelector('.modal-wrapper');
const modalMessage = document.querySelector('.modal-wrapper h2 span');
const modalBtnClose = document.querySelector('.modal-wrapper .close');
const errorMessage = document.querySelector('#error-message');

modalWrapper.classList.remove('opacity-0');
modalWrapper.classList.remove('hidden');

form.onsubmit = function (event) {
  event.preventDefault();

  const weight = inputWeight.value;
  const height = inputHeight.value;

  const result = imc(weight, height);
  const message = `Seu IMC é de ${result}`;
  modalWrapper.classList.remove('opacity-0');
  modalWrapper.classList.remove('invisible');
  modalMessage.innerText = message;
  // errorMessage.setAttribute('data-error', 'true');
};

modalBtnClose.onclick = () => {
  modalWrapper.classList.add('opacity-0');
  modalWrapper.classList.add('invisible');
};

function imc(weight, height) {
  return (weight / (height / 100) ** 2).toFixed(2);
}
