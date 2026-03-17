const express = require("express");
const fs = require("fs");
const db = require("./db");

const app = express();
app.use(express.json());
app.use(express.static(__dirname));

app.post("/login", (req, res) => {
  const { username, password } = req.body;

  const query =
    "SELECT * FROM users WHERE username = '" +
    username +
    "' AND password = '" +
    password +
    "'";

  db.get(query, (err, row) => {
    if (row) return res.send("Welcome " + row.username);
    res.status(401).send("Login failed");
  });
});

app.get("/file", (req, res) => {
  const filename = req.query.name;
  const path = "./files/" + filename;

  res.send(fs.readFileSync(path, "utf8"));
});

app.listen(3000, () => console.log("Vulnerable app running"));
