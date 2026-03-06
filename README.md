<div id="top"></div>

<div align="center">

# 🚀 PopX
*A Modern, Polished Authentication and Profile Management UI*

![last-commit](https://img.shields.io/github/last-commit/USER/PopX?style=flat&logo=git&logoColor=white&color=6C25FF)
![repo-top-language](https://img.shields.io/github/languages/top/USER/PopX?style=flat&color=6C25FF)
![repo-language-count](https://img.shields.io/github/languages/count/USER/PopX?style=flat&color=6C25FF)

**Tech Stack Used**

![React](https://img.shields.io/badge/React-20232A.svg?style=flat&logo=React&logoColor=61DAFB)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-38B2AC.svg?style=flat&logo=tailwind-css&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-646CFF.svg?style=flat&logo=vite&logoColor=white)
![React Router](https://img.shields.io/badge/React_Router-CA4245.svg?style=flat&logo=react-router&logoColor=white)

</div>

---

## 📸 Screenshots

### 🖥️ Mobile-First Design

| Landing | Login | Signup | Profile |
|:--:|:--:|:--:|:--:|
| ![Landing Screen](landing_thumb.png) | ![Login Screen](login_thumb.png) | ![Signup Screen](signup_thumb.png) | ![Profile Screen](profile_thumb.png) |

---

## 📑 Table of Contents

- [Overview](#-overview)
- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Project Structure](#-project-structure)
- [Getting Started](#-getting-started)
- [Usage](#-usage)
- [Validation Criteria](#-validation-criteria)
- [Contact](#-contact)

---

## 🧐 Overview

**PopX** is a high-fidelity user interface built to exact design specifications. It features a complete user flow from a welcoming landing page to account creation, authentication, and a personalized profile dashboard. The project emphasizes **premium aesthetics**, **smooth micro-animations**, and **robust form validation**.

---

## ✨ Features

✅ **Landing Page**: Visually striking welcome screen with intuitive navigation.  
✅ **Mock Auth System**: Functional Login/Signup using React Context API + LocalStorage.  
✅ **Signin Flow**: Email and password-based login with dynamic error handling.  
✅ **Account Creation**: Comprehensive registration including Full Name, Phone, Email, Company, and Agency status.  
✅ **Form Validations**: Real-time validation for email formats, password strength, and 10-digit mobile numbers.  
✅ **Mobile-Responsive**: Constrained max-width layout optimized for personal device viewing.  
✅ **Aesthetic Excellence**: Driven by Tailwind CSS v4 with custom @theme color tokens and Outfit typography.  
✅ **Smooth Transitions**: Integrated fade-in and hover animations for an interactive feel.

---

## ⚙️ Tech Stack

### **Frontend:**
- **React (Vite 7)**: Fast development and build tool.
- **Tailwind CSS v4**: Utility-first styling with the new @tailwindcss/vite plugin.
- **React Router DOM**: Seamless client-side navigation.
- **Context API**: Global state management for user sessions.

### **Design Assets:**
- **Google Fonts (Outfit)**: Modern and professional typography.
- **Adobe XD Specs**: UI built to follow precise design requirements.

---

## 📂 Project Structure

```bash
PopX/
├── src/
│   ├── context/          # State management (AuthContext.jsx)
│   ├── pages/            # View components
│   │   ├── LandingPage.jsx
│   │   ├── LoginPage.jsx
│   │   ├── SignupPage.jsx
│   │   └── ProfilePage.jsx
│   ├── App.jsx           # Routing logic
│   ├── index.css         # Tailwind directives & Theme configs
│   └── main.jsx          # Entry point
├── public/               # Static assets
└── vite.config.js        # Vite & Tailwind plugin configuration
```

---

## 🚀 Getting Started

### ✅ Prerequisites

- **Node.js**: v18.0.0 or higher
- **npm**: v9.0.0 or higher

---

### 👇 Installation

```bash
# Clone the repository
git clone https://github.com/Surya821/PopX

# Navigate to the project
cd PopX

# Install dependencies
npm install

# Start development server
npm run dev
```

---

## 🛑 Validation Criteria

The app enforces the following business logic:
- **Email**: Must contain `@` and a valid domain.
- **Phone**: Must be exactly 10 digits.
- **Password**: Minimum length of 6 characters.
- **Full Name**: Cannot be empty.
- **Mock Auth**: Successful signup automatically logs the user in and persists data to `localStorage`.

---

## ▶️ Usage

1. **Launch**: Run `npm run dev` and open the local URL.
2. **Explore**: Click **Create Account** from the landing page.
3. **Register**: Fill out the signup form and witness real-time validation.
4. **Authenticate**: Log in with your new credentials.
5. **Dashboard**: View your profile details and toggle account settings.

---

## 📬 Contact

**Created by — Surya Pratap Singh**  
📩 **Contact Me:**  
[LinkedIn](https://www.linkedin.com/in/surya-pratap-singh1/) • [Gmail](mailto:surya30082005@gmail.com)

If you like this project, consider giving it a ⭐ on GitHub!

<p align="right">(<a href="#top">⬆️ Back to Top</a>)</p>
