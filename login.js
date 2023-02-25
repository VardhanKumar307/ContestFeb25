const login = document.getElementById('login');

login.addEventListener('login', function(event) {
  event.preventDefault();

  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  // Add basic validations here

  const users = JSON.parse(localStorage.getItem('users')) || [];
  const user = users.find(u => u.email === email && u.password === password);

  if (user) {
    const token = generateToken();
    user.token = token;

    localStorage.setItem('currentUser', JSON.stringify(user));

    // Redirect to dashboard page
    window.location.href = 'dashboard.html';
  } else {
    // Display error message
  }
});

function generateToken() {
  const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  let token = '';

  for (let i = 0; i < 16; i++) {
    const index = Math.floor(Math.random() * chars.length);
    token += chars[index];
  }

  return token;
}
