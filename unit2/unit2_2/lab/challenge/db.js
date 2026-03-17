
const sqlite3 = require("sqlite3").verbose();
const db = new sqlite3.Database(":memory:");

db.serialize(() => {
  db.run("CREATE TABLE users (id INTEGER, username TEXT, password TEXT)");
  db.run("INSERT INTO users VALUES (1, 'admin', 'secret')");
});

module.exports = db;
