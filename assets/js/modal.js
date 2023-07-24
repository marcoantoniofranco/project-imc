export const Modal = {
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

Modal.btnClose.onclick = () => {
  Modal.close();
};

window.addEventListener('keydown', handleKeyDown);

function handleKeyDown(event) {
  if (event.key === 'Escape') {
    Modal.close();
  }
}
