import SuccessReg from './alfabet/success-reg.js';

const form = document.querySelector('#form');
const nameInput = document.querySelector('#name');
const successReg = new SuccessReg();

form.addEventListener('submit', (event) => {
    event.preventDefault();
    if (nameInput.value) {
        successReg.writeName(nameInput.value);
    }
});

const passwordInput = document.getElementById('password');
const showPasswordCheckbox = document.getElementById('showPassword');

showPasswordCheckbox.addEventListener('change', function() {
    const type = showPasswordCheckbox.checked ? 'text' : 'password';
    passwordInput.setAttribute('type', type);
});