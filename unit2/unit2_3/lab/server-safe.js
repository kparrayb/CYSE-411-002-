app.get('/login', (req, res) => {
  res.cookie('sessionId', 'SESSION-ABC-123', {
    httpOnly: true,    // ✅ protection
    secure: false,     // false for localhost demo
    sameSite: 'lax'
  });

  res.send(`
    <h1>Logged in</h1>
    <p>Secure session cookie set.</p>
    <a href="/profile">Go to profile</a>
  `);
});
