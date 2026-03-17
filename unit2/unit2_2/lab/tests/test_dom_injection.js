test("DOM injection should not execute HTML", () => {
  const { JSDOM } = require("jsdom");
  const dom = new JSDOM(`<div id="wall"></div>`);

  dom.window.document.getElementById("wall").textContent =
    "<img src=x onerror=alert(1)>";

  expect(dom.window.document.body.innerHTML).not.toContain("onerror");
});
