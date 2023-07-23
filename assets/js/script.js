import { Modal } from './modal.js';

const form = document.querySelector('form');
const inputWeight = document.querySelector('#weight');
const inputHeight = document.querySelector('#height');

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

function imc(weight, height) {
  return (weight / (height / 100) ** 2).toFixed(2);
}
