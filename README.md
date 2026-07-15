# Vividly – AI Text-to-Image SaaS

Vividly is a full-stack AI-powered SaaS application that transforms text prompts into high-quality images using AI. It features secure authentication, a credit-based usage system, online payments with Polar, and a modern responsive interface.

> Built to explore full-stack development, AI integration, secure authentication, and SaaS architecture.

---

## Live Demo

Frontend: https://vividly11.vercel.app

Backend: https://vividly-text-to-image-generator.onrender.com

<video controls src="VID_20260715_112205.mp4" title="Title"></video>

---

## Features

- JWT Authentication (Register/Login)
- AI Text-to-Image Generation
- Credit-Based Usage System
- Polar Payment Integration
- Automatic Credit Updates via Webhooks
- User Dashboard with Credit Tracking
- Fully Responsive Design
- Smooth Animations using Framer Motion
- MongoDB Atlas Database
- Deployed using Vercel & Render

---

## Tech Stack

### Frontend

- React
- Vite
- Tailwind CSS
- Framer Motion
- Axios
- React Router
- React Toastify

### Backend

- Node.js
- Express.js
- MongoDB Atlas
- Mongoose
- JWT Authentication
- bcrypt
- Polar SDK
- ClipDrop AI API

### Deployment

- Vercel
- Render
- MongoDB Atlas

---

## Project Structure

```
Vividly/
│
├── client/
│   ├── src/
│   ├── assets/
│   ├── pages/
│   ├── components/
│   └── context/
│
├── server/
│   ├── controllers/
│   ├── routes/
│   ├── models/
│   ├── middlewares/
│   ├── config/
│   └── server.js
│
└── README.md
```

---

## Installation

### Clone the repository

```bash
git clone https://github.com/AtharvaVKadam/Vividly---Text-to-image-generator.git
```

### Install Frontend

```bash
cd client
npm install
```

### Install Backend

```bash
cd ../server
npm install
```

---

## Environment Variables

### Server

Create a `.env` file inside the `server` folder.

```env
PORT=

MONGODB_URL=

JWT_SECRET=

CLIPDROP_API=

POLAR_ACCESS_TOKEN=
POLAR_WEBHOOK_SECRET=

POLAR_BASIC_PRODUCT_ID=
POLAR_ADVANCED_PRODUCT_ID=
POLAR_BUSINESS_PRODUCT_ID=

CLIENT_URL=
```

### Client

Create a `.env` file inside the `client` folder.

```env
VITE_BACKEND_URL=
```

---

## Payment Flow

```
User selects a plan
        │
        ▼
Polar Checkout
        │
        ▼
Payment Successful
        │
        ▼
Polar Webhook
        │
        ▼
Backend verifies payment
        │
        ▼
Credits updated in MongoDB
        │
        ▼
Frontend reflects updated balance
```

---

## Authentication Flow

```
Register/Login
        │
        ▼
JWT Generated
        │
        ▼
Stored in Local Storage
        │
        ▼
Protected Routes
        │
        ▼
Authenticated API Requests
```

---

## Future Improvements

- Prompt History
- Favorite Images
- Download & Copy Prompt
- AI Prompt Enhancer
- Surprise Me Generator
- User Dashboard Analytics
- Community Gallery
- Google Authentication
- Dark Mode

---

## Author

**Atharva Kadam**

- GitHub: https://github.com/AtharvaVKadam
- LinkedIn: https://www.linkedin.com/in/atharva-kadam

---

## ⭐ If you like this project

Give the repository a ⭐ on GitHub!
