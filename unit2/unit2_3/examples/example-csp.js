const express = require('express');
const app = express();

app.use((req, res, next) => {
  res.setHeader(
    'Content-Security-Policy',
    "default-src 'self'; script-src 'self'"
  );
  next();
});

app.get('/', (req, res) => {
  res.send(`
    <html>
      <body>
        <h1>Hello</h1>
        <script>alert('inline script');</script>
      </body>
    </html>
  `);
});

app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});
