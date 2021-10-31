const path = require('path');
const express = require('express');

const app = express();

app.use('/public', express.static(path.join(__dirname, '..', 'public')));

app.get('/', (req, res) => {
  res.send('Hello OSUT!');
});

app.get('/dbutt', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'public', 'dummytext.txt'))
});

app.listen(3000, () => {
  console.log('Server started! Listening on: 3000')
});
