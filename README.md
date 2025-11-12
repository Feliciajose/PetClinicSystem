        ____      _        ____ _ _       _        ____           _                 
       |  _ \ ___| |_ __ _/ ___(_) |_ ___| |__    / ___|_ __ ___ | | ___  ___  ___  
       | |_) / _ \ __/ _` | |   | | __/ __| '_ \  | |   | '_ ` _ \| |/ _ \/ __|/ _ \ 
       |  __/  __/ || (_| | |___| | || (__| | | | | |___| | | | | | |  __/\__ \  __/
       |_|   \___|\__\__,_|\____|_|\__\___|_| |_|  \____|_| |_| |_|_|\___||___/\___|

        🐾 Pet Clinic System — A Modern Full-Stack Vet Management App
        ⚡ Manage • Appointments • Pets • Owners • Dashboard Stats

---

# 🐾 Pet Clinic System

[![Spring Boot](https://img.shields.io/badge/Spring%20Boot-6DB33F?style=for-the-badge&logo=springboot&logoColor=white)](https://spring.io/projects/spring-boot)
[![React](https://img.shields.io/badge/React-61DBFB?style=for-the-badge&logo=react&logoColor=white)](https://react.dev/)
[![Material UI](https://img.shields.io/badge/MUI-007FFF?style=for-the-badge&logo=mui&logoColor=white)](https://mui.com/)
[![MySQL](https://img.shields.io/badge/MySQL-4479A1?style=for-the-badge&logo=mysql&logoColor=white)](https://www.mysql.com/)
[![Java](https://img.shields.io/badge/Java-ED8B00?style=for-the-badge&logo=openjdk&logoColor=white)](https://www.java.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)
[![GitHub Repo Size](https://img.shields.io/github/repo-size/Feliciajose/PetClinicSystem?style=for-the-badge&color=8B4513)](https://github.com/Feliciajose/PetClinicSystem)
[![Contributions Welcome](https://img.shields.io/badge/Contributions-Welcome-green?style=for-the-badge)](https://github.com/Feliciajose/PetClinicSystem/pulls)

---

## 🩺 Overview

**Pet Clinic System** is a full-stack veterinary management platform that helps clinics manage pets, owners, and appointments efficiently.  
It features a modern **React + Material UI** frontend and a **Spring Boot + MySQL** backend, connected via REST APIs.

✨ **Highlights**
- Interactive dashboard with real-time stats
- Appointment tracking
- Pet and owner CRUD management
- Brown–Sandal–White aesthetic theme
- Responsive layout and chart analytics

---


## ✨ Tech Stack

| Layer | Technology |
|--------|-------------|
| 🎨 **Frontend** | React.js + Material UI (MUI v5) |
| ☕ **Backend** | Spring Boot (REST APIs) |
| 🗃️ **Database** | MySQL |
| 📦 **Build Tools** | Maven + npm + Vite |
| 🔗 **API Layer** | Axios |
| 📊 **Charts** | Recharts |
| 💡 **Language** | Java 17 + JavaScript (ES6) |

---

## 🖼️ UI Preview

> A clean and responsive veterinary dashboard built for comfort and clarity.

![Pet Clinic Dashboard](./src/assets/dashboard-preview.jpg)

📊 **Key Highlights:**
- Pet Distribution (Pie Chart)  
- Appointments per Doctor (Bar Chart)  
- Real-time summary cards  
- Responsive and animated illustration  
- Themed with brown, sandal, and cream colors  

---

## 🚀 Live Demo

🌐 **Frontend:** [http://localhost:3000](http://localhost:3000)  
⚙️ **Backend:** [http://localhost:8080](http://localhost:8080/api/pet/getall)

🧠 You can deploy this easily to:
- **Render / Vercel** (Frontend)
- **Render / Railway / Spring Boot Jar** (Backend)

---

## 🧩 Features

| Feature | Description |
|----------|-------------|
| 🐕 **Pet Management** | Add, edit, and delete pet records with full details |
| 👩‍⚕️ **Owner Management** | Manage owner info and link pets easily |
| 📅 **Appointment Scheduling** | Create and manage doctor appointments |
| 📊 **Dashboard Analytics** | View live statistics and visualizations |
| 🌗 **Dark / Light Theme** | Toggle seamlessly with MUI theme |
| 🧾 **MySQL Integration** | Persistent storage for pets, owners, and appointments |
| ⚡ **RESTful API** | Spring Boot APIs for CRUD operations |
| 🎨 **Illustrated UI** | Interactive and visually pleasant design |

---

## 🧱 Folder Structure
### 📦 Backend
PetClinicSystem/
└── src/main/java/com/example/PetClinicSystem/
├── controller/
├── model/
├── repository/
└── service/

### ⚛️ Frontend
petclinicfrontend/
├── src/
│ ├── api/
│ ├── components/
│ ├── pages/
│ ├── assets/
│ ├── App.js
│ ├── theme.js
│ └── index.js

---

## ⚙️ Installation & Setup

### 🧩 Clone Repository
```
git clone https://github.com/<your-username>/PetClinicSystem.git
cd PetClinicSystem
```
---
###☕ Backend (Spring Boot)
```
cd backend
mvn spring-boot:run
```
📍 Runs at: http://localhost:8080
---
###⚛️ Frontend (React)
```
cd petclinicfrontend
npm install
npm start
```
📍 Runs at: http://localhost:3000
---
##🔗 API Endpoints
| Method   | Endpoint                | Description         |
| -------- | ----------------------- | ------------------- |
| `GET`    | `/api/pet/getall`       | Fetch all pets      |
| `POST`   | `/api/pet/add`          | Add a new pet       |
| `DELETE` | `/api/pet/{id}`         | Delete pet          |
| `GET`    | `/api/owners/getall`    | Fetch owners        |
| `POST`   | `/api/appointments/add` | Add new appointment |
---
##🎨 Theme Configuration
| Mode              | Color Palette                                      |
| ----------------- | -------------------------------------------------- |
| 🌞 **Light Mode** | Brown `#8B4513`, Sandal `#D2B48C`, Cream `#FFF8E7` |
| 🌙 **Dark Mode**  | Soft beige and muted brown tones                   |
| 🧩 **Typography** | `'Poppins', sans-serif`                            |
| ✨ **Shape**       | Rounded corners, shadowed cards, hover animations  |
---
##🧠 Future Enhancements

🔐 Authentication with JWT

💊 Pet medical & vaccination history

🧾 Invoice generation for visits

📅 Email reminders for appointments

🖼️ Pet photo uploads
---
🧑‍💻 Developer

👩‍💻 Developed by: Felicia Jose
🌐 GitHub: @Feliciajose
💼 LinkedIn: Felicia Jose
📧 Contact: feliciajose200407@gmail.com
---
🪪 License

This project is licensed under the MIT License — free to use, modify, and distribute.

MIT © 2025 Pet Clinic System

⚡ Pet Clinic System

“Because every paw deserves care and every vet deserves ease.” 🐾

