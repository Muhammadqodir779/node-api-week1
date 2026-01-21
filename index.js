const express = require('express');
const app = express();
app.get('/', (req, res) => {
  res.send('Salom, Express! Server ishlamoqda 🚀');
});
app.get('/hello', (req, res) => {
  res.send('Hello World from Express!');
});
app.get('/about', (req, res) => {
  res.send('Bu haqida sahifa. Backend o‘rganayapmiz!');
});
app.listen(3000, () => {
  console.log('Express server 3000-portda ishlamoqda → http://localhost:3000');
});
