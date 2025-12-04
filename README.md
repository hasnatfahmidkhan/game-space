# 🎮 Gamespace - A Game Library

An engaging online library for discovering and supporting game developers.

---

## Live URL

**Live Site:** https://game-space-app.netlify.app/

---

## 📝 Overview 

Gamespace is a non-profit, single-page game library where users can explore a curated collection of games, view detailed information, and visit official download/install links.

---

## 📸 Screenshot  
<img src="https://i.ibb.co.com/QFDPPcJy/Screenshot-2025-11-19-105128.png" />

---

## 🎯 Purpose

**Gamespace** is designed to connect gamers with talented indie developers.  

---

## 🚀 Features

- 🎮 **Game Library Management**  
  Users can explore diffrent games.

- 🔍 **Search & Filter**  
  Easily find games by name.
  Filter game by category.

- 📊 **Sort Games by Ratings**  
  Quickly view top-rated games in your library or the platform.

- 📝 **Detailed Game Pages**  
  - Game title, cover, screenshots gallery  
  - Category & subcategory  
  - Platforms (PC / Mobile / Console)  
  - Release date, price, ratings, description  
  - New: **age rating**, **play time estimate**, **key features**, and for PC titles, **minimum & recommended system requirements**
  
- 💖 **Wishlist**  
  Add favorite games to a personal wishlist for quick access later.

- ⬇️ **Install / Visit Official Site**  
  Click to go directly to the official game website for installation or purchase.

- 📱 **Fully Responsive UI**  
  Optimized for desktop, tablet, and mobile devices.

- ⚡ **Modern Interface & Animations**  
  Smooth interactions with React and Tailwind CSS for an engaging experience.

---

## 🧩 Technologies & Dependencies

### Frontend Stack
- **React 19**
- **React Router 7**
- **Tailwind CSS + DaisyUI**
- **Firebase Authentication**
- **Axios** for data fetching
- **Motion (Framer Motion)** for animations
- **Swiper.js** for the homepage slider
- **React Toastify** for notifications
- **Lottie React** for animations
- **React Icons** for UI icons
- **React Spinners** for loading states
- **SweetAlert** for alert dialogs

---

## 📦 Dependencies
```
"dependencies": {
    "@tanstack/react-query": "^5.90.7",
    "firebase": "^12.5.0",
    "lottie-react": "^2.4.1",
    "react": "^19.1.1",
    "react-dom": "^19.1.1",
    "react-hook-form": "^7.66.0",
    "react-hot-toast": "^2.6.0",
    "react-icons": "^5.5.0",
    "react-spinners": "^0.17.0",
    "sweetalert2": "^11.26.3",
    "swiper": "^12.0.3"
  }
  
```

## 📦 **Dev Dependencies**
```
{
    "@eslint/js": "^9.36.0",
    "@tailwindcss/vite": "^4.1.17",
    "@types/react": "^19.1.16",
    "@types/react-dom": "^19.1.9",
    "@vitejs/plugin-react": "^5.0.4",
    "axios": "^1.13.2",
    "daisyui": "^5.4.7",
    "eslint": "^9.36.0",
    "eslint-plugin-react-hooks": "^5.2.0",
    "eslint-plugin-react-refresh": "^0.4.22",
    "globals": "^16.4.0",
    "react-router": "^7.9.5",
    "tailwindcss": "^4.1.17",
    "vite": "^7.1.7"
  
}
```

----

## ⚙ Installation 
Clone the repo and install dependencies:

```bash
git clone https://github.com/hasnatfahmidkhan/game-space
npm install
```

Set up environment variables by creating a `.env` file in the root directory:

```env
VITE_APIKEY=your_api_key
VITE_AUTHDOMAIN=your_auth_domain
VITE_PROJECTID=your_project_id
VITE_STORAGEBUCKET=your_storage_bucket
VITE_MESSAGINGSENDERID=your_sender_id
VITE_APPID=your_app_id
```
---
4. Start the development server:

```
npm run dev
```
---
5. Open your browser and navigate to `http://localhost:5173` to view the application.
