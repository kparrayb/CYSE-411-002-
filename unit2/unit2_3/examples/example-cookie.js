const express = require('express');
const app = express();

app.get('/login', (req, res) => {
  res.cookie('sessionId', 'abc123', {
    httpOnly: true,
    secure: true,
    sameSite: 'strict'
  });

  res.send('Logged in');
});

app.listen(3000, () => {
  console.log('Server running on https://localhost:3000');
});
