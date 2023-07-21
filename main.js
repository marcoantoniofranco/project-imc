const form = document.querySelector('form');
const inputWeight = document.querySelector('#weight');
const inputHeight = document.querySelector('#height');

const Modal = {
  wrapper: document.querySelector('.modal-wrapper'),
  message: document.querySelector('.modal-wrapper h2 span'),
  btnClose: document.querySelector('.modal-wrapper .close'),
  errorMessage: document.querySelector('#error-message'),

  open() {
    Modal.wrapper.classList.remove('opacity-0', 'invisible');
  },
  close() {
    Modal.wrapper.classList.add('opacity-0', 'invisible');
  },
};

form.onsubmit = (event) => {
  event.preventDefault();

  const weight = inputWeight.value;
  const height = inputHeight.value;

  const result = imc(weight, height);
  const message = `Seu IMC é de ${result}`;
  Modal.message.innerText = message;
  Modal.open();
  // Modal.errorMessage.setAttribute('data-error', 'true');
};

Modal.btnClose.onclick = () => {
  Modal.close();
};

function imc(weight, height) {
  return (weight / (height / 100) ** 2).toFixed(2);
}
