import throttle from 'lodash.throttle';
const form = document.querySelector('.feedback-form');

const STORAGE_KEY = 'feedback-form-state';
const formData = {};

form.addEventListener('input', throttle(onInputForm, 500));
form.addEventListener('submit', onSubmitForm);

populateText();

function onInputForm(event) {
  const email = form.elements.email.value.trim();
  const message = form.elements.message.value.trim();
  formData.email = email;
  formData.message = message;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function onSubmitForm(event) {
  event.preventDefault();

  if (form.email.value === '' || form.message.value === '') {
    alert('Введіть текст');
    return;
  }
  localStorage.removeItem(STORAGE_KEY);
  form.reset();
  console.log(formData);
}

function populateText() {
  const savedMessage = localStorage.getItem(STORAGE_KEY);
  const parsedMessage = JSON.parse(savedMessage);
  if (parsedMessage) {
    form.email.value = parsedMessage.email;
    form.message.value = parsedMessage.message;
  }
}
