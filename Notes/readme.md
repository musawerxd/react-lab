
# React  Notes

## 1. Modern Way (Recommended - Vite)

We don’t use CRA much now because it’s heavy and slower.  
Use Vite instead (fast + modern).

### Create App
```bash
npm create vite@latest
````

### Install

```bash
npm install
```

### Run

```bash
npm run dev
```

Docs: [https://vite.dev/](https://vite.dev/)

---

## 2. Old Way (CRA - Not Recommended)

Used before, but now outdated.
Create React App is known for being resource-heavy, so nowadays, developers often prefer Vite for building and bundling React projects

### Create App

```bash
npx create-react-app my-app
```

### Run

```bash
npm start
```

---


# React Folder Structure (CRA vs Vite)

## 1. CRA (Create React App)

```bash
my-app/
├── node_modules/
├── public/
│   └── index.html
├── src/
│   ├── App.js
│   ├── index.js
│   └── ...
├── package.json
└── ...

```

### Key Points
- `public/index.html` → main HTML file  
- `src/index.js` → entry point (renders App)  
- `src/App.js` → main component  

---

## 2. Vite (Modern)

```

my-app/
├── node_modules/
├── public/
├── src/
│   ├── App.jsx
│   ├── main.jsx
│   └── ...
├── index.html
├── package.json
├── vite.config.js

```

### Key Points
- `index.html` → in root (not in public)  
- `src/main.jsx` → entry point  
- `src/App.jsx` → main component  
- `vite.config.js` → config file  



---

# 📁 VITE FOLDER STRUCTURE (what you’re using)

```id="5cgyo0"
my-app/
├─ index.html
├─ package.json
├─ vite.config.js
├─ src/
│  ├─ main.jsx
│  ├─ App.jsx
│  ├─ assets/
│  └─ components/
```

---

## 🧠 What each file ACTUALLY does

### 📄 `index.html`

* The **only HTML file**
* Has `<div id="root"></div>`

👉 React injects everything here

---

### ⚡ `main.jsx` (ENTRY POINT)

```jsx id="in69l0"
import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"

ReactDOM.createRoot(document.getElementById("root")).render(
  <App />
)
```

👉 This is where React starts
👉 It connects React → HTML

---

### 🧱 `App.jsx`

```jsx id="s13tks"
function App() {
  return <h1>Hello</h1>
}
```

👉 Your main component (root UI)

---

### 📂 `components/`

👉 YOU create this folder

Put reusable stuff here:

* Card.jsx
* Navbar.jsx
* Button.jsx

---

### 🎨 `assets/`

Images, icons, etc.

---

# 🧠 FLOW (THIS IS IMPORTANT)

```id="kqg1lj"
index.html → main.jsx → App.jsx → Components
```

If you understand this → you won React basics.

---


