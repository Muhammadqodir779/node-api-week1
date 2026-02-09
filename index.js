// const express = require('express');
// const app = express();
// const cors = require('cors');
// app.use(cors());

// // Middleware – JSON ma'lumotlarni o‘qish uchun
// app.use(express.json());

// let users = [
//   { id: 1, name: 'Ali' },
//   { id: 2, name: 'Vali' },
// ];

// app.get('/users', (req, res) => {
//   res.send('Hello World from Express!');
// });

// app.get('/users/:id', (req, res) => {
//   res.send('Bu haqida sahifa. Backend o‘rganayapmiz!');
// });

// app.post('/users', (req, res) => {
//   const { name } = req.body;
//   res.status(201).json({ message: `Yangi user qo'shildi: ${name}` });
// });

// app.put('/users/:id', (req, res) => {
//   const { id } = req.params;
//   const { name } = req.body;
//   res.json({ message: `User ${id} yangilandi: ${name}` });
// });

// app.delete('/users/:id', (req, res) => {
//   const { id } = req.params;
//   res.json({ message: `User ${id} o‘chirildi` });
// });

// app.listen(3000, () => {
//   console.log('Server 3000-portda ishlamoqda → http://localhost:3000');
// });

const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors());
app.use(express.json());

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
