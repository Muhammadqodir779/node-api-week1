const { Pool } = require('pg');
require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors());
app.use(express.json());

const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
  ssl: false, // faqat cloud serverda bo‘lsa true qilish kerak
});

pool
  .connect()
  .then(() => console.log('✅ PostgreSQL ga muvaffaqiyatli ulandi!'))
  .catch((err) => console.error('❌ Ulanish xatosi:', err));

let users = [
  { id: 1, name: 'Ali' },
  { id: 2, name: 'Valijon' },
];

// Barcha userlar
app.get('/users', (req, res) => {
  res.json(users);
});

// ID bo‘yicha user
app.get('/users/:id', (req, res) => {
  const id = Number(req.params.id);
  const user = users.find((u) => u.id === id);
  if (!user) return res.status(404).json({ message: 'User topilmadi' });
  res.json(user);
});

// Yangi user qo‘shish
app.post('/users', (req, res) => {
  const { name } = req.body;
  const newId = users.length ? users[users.length - 1].id + 1 : 1;
  const newUser = { id: newId, name };
  users.push(newUser);
  res
    .status(201)
    .json({ message: `Yangi user qo‘shildi: ${name}`, user: newUser });
});

// ID bo‘yicha userni yangilash
app.put('/users/:id', (req, res) => {
  const id = Number(req.params.id);
  const { name } = req.body;
  const user = users.find((u) => u.id === id);
  if (!user) return res.status(404).json({ message: 'User topilmadi' });

  user.name = name;
  res.json({ message: `User ${id} yangilandi`, user });
});

// ID bo‘yicha userni o‘chirish
app.delete('/users/:id', (req, res) => {
  const id = Number(req.params.id);
  const index = users.findIndex((u) => u.id === id);
  if (index === -1) return res.status(404).json({ message: 'User topilmadi' });

  const deletedUser = users.splice(index, 1);
  res.json({ message: `User ${id} o‘chirildi`, deletedUser });
});

app.listen(4000, () => {
  console.log('Server 4000-portda ishlamoqda → http://localhost:4000');
});
