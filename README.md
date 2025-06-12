# 💸 Expense Tracker (MERN)

A full-stack Expense Tracker application built using the **MERN stack** (MongoDB, Express.js, React, Node.js). Easily track your income and expenses with a clean UI and persistent data.

### 🌐 Live Demo

🔗 [View Live on Vercel](https://expense-tracker-xhtswvugk-ishanis-projects-b80470ce.vercel.app)

---

## 🚀 Features

- Add and delete transactions
- Automatically calculates balance, income, and expenses
- Connects to a live MongoDB Atlas database
- Deployed on **Vercel** (frontend) and **Render** (backend)
- Responsive design, production-ready

---

## 🛠 Tech Stack

| Layer       | Tech                          |
|-------------|-------------------------------|
| **Frontend** | React, Context API, Axios     |
| **Backend**  | Node.js, Express.js, Mongoose |
| **Database** | MongoDB Atlas                 |
| **Dev Tools**| Vercel, Render, dotenv, CORS  |

---

## ⚙️ Getting Started (Locally)

### 1️⃣ Clone the repository

```bash
git clone https://github.com/allankiishani/expense-tracker.git
cd expense-tracker
````

### 2️⃣ Set up the backend

Create `config/config.env`:

```env
PORT=5000
MONGO_URI=your_mongodb_uri
```

### 3️⃣ Install dependencies

```bash
# Backend
npm install

# Frontend
cd client
npm install
```

### 4️⃣ Run the app in development

```bash
npm run dev
```

---

## 📦 Available Commands

| Command          | Description                        |
| ---------------- | ---------------------------------- |
| `npm run dev`    | Run client and server concurrently |
| `npm run server` | Run backend only                   |
| `npm run client` | Run frontend only                  |
| `npm run build`  | Build frontend for production      |
| `npm start`      | Run full app in production mode    |

---


## ✨ Deployment Links

* **Frontend (Vercel)**: [View Live](https://expense-tracker-xhtswvugk-ishanis-projects-b80470ce.vercel.app)
* **Backend (Render)**: Your live API (e.g., `/api/v1/transactions`)

---

## 🧠 Future Enhancements

* Expense categories
* Monthly breakdown & filters
* Analytics & charts (e.g., pie chart, trend graph)
* CSV export & login system
