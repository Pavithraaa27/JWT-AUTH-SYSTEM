let token = '';

async function register() {
  const res = await fetch('http://localhost:3000/register', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email: email.value, password: password.value })
  });
  output.innerText = await res.text();
}

async function login() {
  const res = await fetch('http://localhost:3000/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email: email.value, password: password.value })
  });
  const data = await res.json();
  token = data.token;
  output.innerText = 'Logged in!';
}

async function getDashboard() {
  const res = await fetch('http://localhost:3000/dashboard', {
    headers: { Authorization: 'Bearer ' + token }
  });
  output.innerText = await res.text();
}
