export const AlertError = {
  element: document.querySelector('#error-message'),
  open() {
    AlertError.element.setAttribute('data-error', 'true');
  },
  close() {
    AlertError.element.setAttribute('data-error', 'false');
  },
};
