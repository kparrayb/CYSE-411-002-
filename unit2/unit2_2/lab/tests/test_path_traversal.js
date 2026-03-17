test("Path traversal should be blocked", async () => {
  const res = await request(app).get("/file?name=../db.js");
  expect(res.statusCode).toBe(403);
});
