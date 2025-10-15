const form = document.getElementById('loginForm');
const nameInput = document.getElementById('name');
const passwordInput = document.getElementById('password');
const showPassword = document.getElementById('showPassword');
const output = document.getElementById('output');


showPassword.addEventListener('change', () => {
  passwordInput.type = showPassword.checked ? 'text' : 'password';
});


form.addEventListener('submit', (event) => {
  event.preventDefault();

  const nameValue = nameInput.value.trim();
  if (nameValue === '') {
    output.textContent = 'Введіть ім’я!';
    return;
  }

  output.innerHTML = 'Літери вашого імені:<br>';
  for (let i = 0; i < nameValue.length; i++) {
    const letter = document.createElement('span');
    letter.textContent = nameValue[i] + ' ';
    output.appendChild(letter);
  }
});
