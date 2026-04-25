# 🔐 Secure Authentication System (Node.js + JWT)

A simple and secure authentication system built using Node.js, Express, JWT, and bcrypt. This project demonstrates user registration, login, password hashing, and protected routes using JSON Web Tokens.

---


## 🚀 Features

* User Registration with password hashing
* Secure Login with JWT authentication
* Protected route (`/dashboard`)
* Token-based authentication system
* Simple frontend for testing (HTML + JS)
* Data stored locally using JSON file
  
---

## 🛠️ Tech Stack

* Backend: Node.js, Express
* Authentication: JWT (JSON Web Tokens)
* Security: bcryptjs (password hashing)
* Storage: Local JSON file
* Frontend: HTML, CSS, JavaScript

---

## 📁 Project Structure

```
project-folder/
│
├── server.js          # Backend server
├── users.json         # Local database
├── index.html         # Frontend UI
├── script.js          # Frontend logic
└── README.md
```

---

## ⚙️ Installation & Setup

### 1. Clone the repository

```
git clone https://github.com/your-username/secure-auth-system.git
cd secure-auth-system
```

### 2. Install dependencies

```
npm install express jsonwebtoken bcryptjs cors
```

### 3. Create users.json file

```
{}
```

---

## 🔑 Important Setup

Add a secret key in your `server.js`:

```js
const SECRET = "your_secret_key_here";
```

---

## ▶️ Run the Server

```
node server.js
```

Server will run on:

```
http://localhost:3000
```

---

## 🧪 How to Use

1. Open `index.html` in browser
2. Enter email and password
3. Click:

   * Register → creates user
   * Login → returns JWT token
   * Get Dashboard → access protected route

---

## 🔐 API Endpoints

### Register

```
POST /register
```

### Login

```
POST /login
```

### Protected Route

```
GET /dashboard
Headers: Authorization: Bearer <token>
```

---

## 🧠 How It Works

* Passwords are hashed using bcrypt before storing
* JWT token is generated on login
* Token is required to access protected routes
* Token is verified using a secret key

---

## ⚠️ Limitations

* Uses local JSON file instead of database
* No token expiration implemented
* Not production-ready (for learning/demo purposes)

---

## 💡 Future Improvements

* Add MongoDB integration
* Implement token expiration & refresh tokens
* Add frontend UI improvements
* Add user roles (admin/user)
* Add logout functionality

---

## 👨‍💻 Author

* Pavithra Nair

---
