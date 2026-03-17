const helmet = require('helmet');

app.use(
  helmet.contentSecurityPolicy({
    directives: {
      defaultSrc: ["'self'"],
      scriptSrc: ["'self'", "https://trustedscripts.com"],
      objectSrc: ["'none'"]
    }
  })
);
