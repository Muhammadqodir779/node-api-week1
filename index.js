const { Pool } = require('pg');
require('dotenv').config();
const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// PostgreSQL bilan ulanish
const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
  ssl: false,
});

// Jadvalni avtomatik yaratish
const createUsersTable = async () => {
  try {
    await pool.query(`
      CREATE TABLE IF NOT EXISTS users (
        id SERIAL PRIMARY KEY,
        name VARCHAR(100) NOT NULL,
        email VARCHAR(100) UNIQUE NOT NULL,
        age INTEGER DEFAULT 18
      )
    `);
    console.log('✅ users jadvali tayyor!');
  } catch (err) {
    console.error('❌ Jadval yaratishda xato:', err);
  }
};

// Pool ulanish va jadval yaratish
pool
  .connect()
  .then(() => {
    console.log('✅ PostgreSQL ga muvaffaqiyatli ulandi!');
    createUsersTable();
  })
  .catch((err) => console.error('❌ Ulanish xatosi:', err));

/* ------------------ ROUTES ------------------ */

// Barcha userlarni olish
app.get('/users', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM users ORDER BY id');
    res.json({
      message: `Hamma ${result.rows.length} userlar ro‘yxati olindi`,
      users: result.rows,
    });
  } catch (err) {
    res.status(500).json({ message: 'Xato yuz berdi', error: err.message });
  }
});

// ID bo‘yicha user
app.get('/users/:id', async (req, res) => {
  const id = Number(req.params.id);
  try {
    const result = await pool.query('SELECT * FROM users WHERE id = $1', [id]);
    if (result.rows.length === 0)
      return res.status(404).json({ message: 'User topilmadi' });

    res.json({ message: `User ID ${id} topildi`, user: result.rows[0] });
  } catch (err) {
    res.status(500).json({ message: 'Xato yuz berdi', error: err.message });
  }
});

// Yangi user qo‘shish
app.post('/users', async (req, res) => {
  const { name, email, age } = req.body;
  try {
    const result = await pool.query(
      'INSERT INTO users (name, email, age) VALUES ($1, $2, $3) RETURNING *',
      [name, email, age]
    );
    res.status(201).json({
      message: 'Yangi user yaratildi ✅',
      user: result.rows[0],
    });
  } catch (err) {
    res.status(400).json({
      message: 'User yaratishda xato yuz berdi ❌',
      error: err.message,
    });
  }
});

// ID bo‘yicha userni yangilash
app.put('/users/:id', async (req, res) => {
  const id = Number(req.params.id);
  const { name, email, age } = req.body;
  try {
    const result = await pool.query(
      'UPDATE users SET name = $1, email = $2, age = $3 WHERE id = $4 RETURNING *',
      [name, email, age, id]
    );
    if (result.rows.length === 0)
      return res.status(404).json({ message: 'User topilmadi' });

    res.json({
      message: `User ID ${id} yangilandi ✅`,
      user: result.rows[0],
    });
  } catch (err) {
    res
      .status(400)
      .json({ message: 'Yangilashda xato yuz berdi ❌', error: err.message });
  }
});

// ID bo‘yicha userni o‘chirish
app.delete('/users/:id', async (req, res) => {
  const id = Number(req.params.id);
  try {
    const result = await pool.query(
      'DELETE FROM users WHERE id = $1 RETURNING *',
      [id]
    );
    if (result.rows.length === 0)
      return res.status(404).json({ message: 'User topilmadi' });

    res.json({
      message: `User ID ${id} o‘chirildi ✅`,
      user: result.rows[0],
    });
  } catch (err) {
    res
      .status(500)
      .json({ message: 'O‘chirishda xato yuz berdi ❌', error: err.message });
  }
});

/* ------------------ SERVER ------------------ */
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server ${PORT}-portda ishlamoqda → http://localhost:${PORT}`);
});
