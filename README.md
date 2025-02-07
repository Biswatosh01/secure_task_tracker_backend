# 🚀 Fast Secure Task Tracker - Backend (Nest.js with MongoDB)

A secure and efficient backend API for managing tasks, built with **Nest.js** and **MongoDB**. This API handles user authentication and task management with JWT-based security.

## 📚 Table of Contents
- [Project Overview](#project-overview)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Environment Variables](#environment-variables)
- [Run Locally](#run-locally)
- [Deployment](#deployment)
- [API Endpoints](#api-endpoints)
- [Contributing](#contributing)
- [License](#license)

## 📋 Project Overview
This backend API supports functionalities for:
- **User Authentication**: Signup, Login (JWT-secured)
- **Task Management**: Create and fetch tasks for authenticated users

## 🛠️ Tech Stack
- **Framework:** Nest.js (Node.js + TypeScript)
- **Database:** MongoDB (using Mongoose)
- **Authentication:** JWT & Passport
- **Deployment:** Render (or Railway)

## 🚀 Getting Started

### Clone the Repository
```bash
git clone https://github.com/yourusername/backend-repo.git
cd backend-repo
```

### Install Dependencies
```bash
npm install
```

### Set Up Environment Variables
Create a `.env` file in the root directory:
```ini
MONGO_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/yourdatabase
JWT_SECRET=supersecretkey123
```

### Run the Server
```bash
npm run start
```
API Base URL: http://localhost:3000

## ⚙️ Environment Variables
| Variable | Description | Example |
|----------|-------------|---------|
| MONGO_URI | MongoDB connection string | mongodb+srv://user:pass@cluster.mongodb.net/mydb |
| JWT_SECRET | Secret key for signing JWTs | supersecretkey123 |

## 💻 Run Locally

### Development Mode
```bash
npm run start:dev
```

### Production Mode
```bash
npm run build
npm run start:prod
```

## 🚀 Deployment (Render / Railway)

### Step 1: Push Code to GitHub
```bash
git add .
git commit -m "Initial commit"
git push origin main
```

### Step 2: Deploy on Render or Railway
1. Go to Render or Railway
2. Click "New Web Service" → Connect GitHub Repo
3. Add Environment Variables (MONGO_URI, JWT_SECRET)
4. Click Deploy 🚀

## 📡 API Endpoints

### Auth Routes

#### POST /auth/signup - Register a new user
Body:
```json
{
  "username": "testuser",
  "password": "testuser"
}
```

#### POST /auth/login - Authenticate user and return JWT
Body:
```json
{
  "username": "testuser",
  "password": "testuser"
}
```

Response:
```json
{
  "token": "your-jwt-token"
}
```

### Task Routes (Protected)
Authorization Header:
```
Authorization: Bearer <your-jwt-token>
```

#### GET /tasks - Fetch tasks for authenticated user
Response:
```json
[
  {
    "_id": "12345",
    "title": "Complete assignment",
    "userId": "67890"
  }
]
```

#### POST /tasks - Create a new task
Body:
```json
{
  "title": "Prepare for meeting"
}
```

Response:
```json
{
  "_id": "12345",
  "title": "Prepare for meeting",
  "userId": "67890"
}
```

## 📜 License
This project is licensed under the MIT License.
