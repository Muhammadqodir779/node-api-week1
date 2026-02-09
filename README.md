# 🧩 Express.js User API

This project is a simple **REST API** built with **Express.js** that performs basic CRUD operations on users.  
You can **view**, **add**, **update**, and **delete** users easily via HTTP requests.

---

## 🚀 Installation & Run

1. Make sure **Node.js** is installed on your computer.
2. Clone or download this repository:
   ```bash
   git clone https://github.com/username/express-user-api.git
   cd express-user-api
   ```
3. Install required dependencies:
   ```bash
   npm install express cors
   ```
4. Start the server:
   ```bash
   node server.js
   ```
5. Open your browser or Postman and go to:  
   👉 [http://localhost:3000](http://localhost:3000)

---

## 🧠 API Routes

| Method | Route | Description | Body (JSON) |
|:--|:--|:--|:--|
| **GET** | `/users` | Get all users | — |
| **GET** | `/users/:id` | Get a user by ID | — |
| **POST** | `/users` | Add a new user | `{ "name": "Hasan" }` |
| **PUT** | `/users/:id` | Update a user by ID | `{ "name": "Ahmad" }` |
| **DELETE** | `/users/:id` | Delete a user by ID | — |

---

## 📦 Technologies Used

- **Node.js** – Server runtime
- **Express.js** – Web framework
- **CORS** – Enables cross-origin requests
- **JSON** – Data exchange format

---

## ✨ Author

👤 **Muhammadqodir Kadirov**  
📍 Namangan, Uzbekistan  
🚀 A passionate frontend/backend developer learning and building real-world projects


---------------------------------UZB-----------------------

# 🧩 Express.js User API

Bu loyiha **Express.js** yordamida yaratilgan oddiy REST API bo‘lib, unda foydalanuvchilar (users) bilan ishlash amaliyotlari bajariladi.  
API orqali siz foydalanuvchilarni **ko‘rish**, **qo‘shish**, **yangilash** va **o‘chirish** imkoniyatiga egasiz.

---

## 🚀 O‘rnatish va Ishga Tushirish

1. **Node.js** o‘rnatilganligiga ishonch hosil qiling.
2. Loyihani yuklab oling yoki klon qiling:
   ```bash
   git clone https://github.com/username/express-user-api.git
   cd express-user-api
   ```
3. Zarur kutubxonalarni o‘rnating:
   ```bash
   npm install express cors
   ```
4. Serverni ishga tushiring:
   ```bash
   node server.js
   ```
5. Brauzer yoki Postman orqali quyidagi manzilga kiring:  
   👉 [http://localhost:3000](http://localhost:3000)

---

## 🧠 API Route’lar

| Method | Route | Tavsif | Body (JSON) |
|:--|:--|:--|:--|
| **GET** | `/users` | Barcha foydalanuvchilarni olish | — |
| **GET** | `/users/:id` | ID bo‘yicha foydalanuvchini olish | — |
| **POST** | `/users` | Yangi foydalanuvchini qo‘shish | `{ "name": "Hasan" }` |
| **PUT** | `/users/:id` | ID bo‘yicha foydalanuvchini yangilash | `{ "name": "Ahmad" }` |
| **DELETE** | `/users/:id` | ID bo‘yicha foydalanuvchini o‘chirish | — |

---

## 📦 Foydalanilgan texnologiyalar

- **Node.js** – server muhit
- **Express.js** – web framework
- **CORS** – so‘rovlarni boshqa domenlardan ruxsat bilan yuborish
- **JSON** – ma’lumot almashish formati

---

## ✨ Muallif

👤 **Muhammadqodir Kadirov**  
📍 Namangan, O‘zbekiston  
🚀 Dasturchilik yo‘lida tajriba orttirayotgan frontend/backend developer
