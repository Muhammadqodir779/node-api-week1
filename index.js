const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors());

// Middleware – JSON ma'lumotlarni o‘qish uchun
app.use(express.json());

app.get('/hello', (req, res) => {
  res.send('Hello World from Express!');
});

app.get('/about', (req, res) => {
  res.send('Bu haqida sahifa. Backend o‘rganayapmiz!');
});

app.post('/users', (req, res) => {
  const { name } = req.body;
  res.status(201).json({ message: `Yangi user qo'shildi: ${name}` });
});

app.put('/users/:id', (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  res.json({ message: `User ${id} yangilandi: ${name}` });
});

app.delete('/users/:id', (req, res) => {
  const { id } = req.params;
  res.json({ message: `User ${id} o‘chirildi` });
});

app.listen(3000, () => {
  console.log('Server 3000-portda ishlamoqda → http://localhost:3000');
});
