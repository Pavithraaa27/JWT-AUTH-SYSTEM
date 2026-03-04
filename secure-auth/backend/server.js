const express = require('express');
const jwt = require('jsonwebtoken');
const fs = require('fs');
const cors = require('cors');
const bcrypt = require('bcryptjs');

const app = express();
app.use(express.json());
app.use(cors());

const users = JSON.parse(fs.readFileSync('./users.json', 'utf-8'));

app.post('/register', async (req, res) => {
  const { email, password } = req.body;
  if (users[email]) return res.status(400).json({ message: 'User exists' });

  users[email] = { password: await bcrypt.hash(password, 10) };
  fs.writeFileSync('./users.json', JSON.stringify(users));
  res.json({ message: 'Registered successfully' });
});

app.post('/login', async (req, res) => {
  const { email, password } = req.body;
  const user = users[email];
  if (!user || !(await bcrypt.compare(password, user.password)))
    return res.status(401).json({ message: 'Invalid credentials' });

  const token = jwt.sign({ email }, SECRET);
  res.json({ token });
});

app.get('/dashboard', (req, res) => {
  const auth = req.headers.authorization;
  if (!auth) return res.sendStatus(401);
  try {
    jwt.verify(auth.split(' ')[1], SECRET);
    res.json({ message: 'Welcome to the dashboard!' });
  } catch {
    res.sendStatus(403);
  }
});

app.listen(3000, () => console.log('Server running on http://localhost:3000'));

