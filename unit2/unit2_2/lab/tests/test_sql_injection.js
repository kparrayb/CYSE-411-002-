const request = require("supertest");
const app = require("../solutions/app.secure");

test("SQL injection should fail", async () => {
  const res = await request(app)
    .post("/login")
    .send({ username: "admin' --", password: "x" });

  expect(res.statusCode).toBe(401);
});
