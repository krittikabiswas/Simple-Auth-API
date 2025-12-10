<p align="center">
  <img src="https://octodex.github.com/images/daftpunktocat-guy.gif" width="180" />
  <img src="https://octodex.github.com/images/daftpunktocat-thomas.gif" width="180" />
</p>

<h1 align="center">🔐 Simple Auth API</h1>
<p align="center">Node.js • Express • Postman 🧪</p>

<p align="center">
  <img src="https://octodex.github.com/images/monroe.jpg" width="150" />
  <img src="https://octodex.github.com/images/codercat.jpg" width="150" />
  <img src="https://octodex.github.com/images/octocat-de-los-muertos.jpg" width="150" />
</p>

<hr>

# 🔐 Simple Authentication API

A lightweight authentication API built using **Node.js** and **Express**, featuring **📝 Signup** and **🔑 Signin** endpoints. This project of mine demonstrates **API handling**, **request/response validation**, and **⚡ in-memory user storage**. All endpoints are tested using **Postman 🧪**, making it ideal for interviews or beginners learning backend basics.

---

## 🚀 Features

- 📝 **User Signup**
- 🔑 **User Signin**
- 🧠 In-memory user storage (no database)
- 📮 Proper request/response handling
- 🧪 Postman tested
- ❗ Basic validation included

---

## 🛠️ Tech Stack

- **Node.js**
- **Express.js**
- **Postman** (for API testing)

---

## 📦 Installation & Setup

```bash
# Clone the repo
git clone https://github.com/your-username/your-repo.git

# Navigate into the project
cd your-repo

# Install dependencies
npm install

# Start the server
node index.js
```

---

## 📡 API Endpoints

### 📝 **POST /signup**
Create a new user.

**Request Body**
```json
{
  "username": "yourname",
  "password": "yourpassword"
}
```

**Responses**
- `201` – User created successfully  
- `400` – Username already exists / invalid input  

---

### 🔑 **POST /signin**
Authenticate an existing user.

**Request Body**
```json
{
  "username": "yourname",
  "password": "yourpassword"
}
```

**Responses**
- `200` – Signin successful  
- `401` – Invalid username or password  

---

## 🧪 Testing with Postman

- Open Postman  
- Create **POST** requests for `/signup` and `/signin`  
- Send JSON request bodies  
- Verify responses & status codes  

---

## 📬 Postman Collection
You can import the Postman collection that I made to test the API endpoints:

> **File:** `postman\Webhibe Assignment.postman_collection.json`

It contains:
- POST /signup
- POST /signin


## 📄 License

This project is open-source under the **BSD 2-Clause License**.

## 🩵 Author

**Krittika Biswas**
Made as an assignment for Webhibe
