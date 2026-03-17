// FIXES:
// 1. Parameterized SQL
// 2. Path canonicalization and directory enforcement

const express = require("express");
const fs = require("fs");
const path = require("path");
const db = require("../challenge/db");

const app = express();
app.use(express.json());

app.post("/login", (req, res) => {
  const { username, password } = req.body;

  db.get(
    "SELECT * FROM users WHERE username = ? AND password = ?",
    [username, password],
    (err, row) => {
      if (row) return res.send("Welcome " + row.username);
      res.status(401).send("Login failed");
    }
  );
});

app.get("/file", (req, res) => {
  const base = path.resolve(__dirname, "../challenge/files");
  const requested = path.resolve(base, req.query.name);

  if (!requested.startsWith(base)) {
    return res.status(403).send("Access denied");
  }

  res.send(fs.readFileSync(requested, "utf8"));
});
