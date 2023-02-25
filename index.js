var password = document.getElementById("password")
  , confirm_password = document.getElementById("confirm_password");

function validatePassword(){
  if(password.value != confirm_password.value) {
    confirm_password.setCustomValidity("Passwords Don't Match");
  } else {
    confirm_password.setCustomValidity('');
  }
}

password.onchange = validatePassword;
confirm_password.onkeyup = validatePassword;


const form = document.querySelector('form');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  const user = {
    name: name,
    email: email,
    password: password
  };

  localStorage.setItem('user', JSON.stringify(user));

  window.location.href = 'login.html';
});

