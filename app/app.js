"use strict";
require("dotenv").config();
const Koa = require("koa");
const app = new Koa();
const figlet = require("figlet");
const cors = require("koa2-cors");
const health = require("koa-ping");
const port = process.env["NODE_PORT"] || 3001;
const bodyParser = require("koa-bodyparser");
const mount = require("koa-mount");
const wechat = require("./wechat");

app.use(health());

app.use(mount("/wechat", wechat));
// https://www.npmjs.com/package/koa2-cors
app.use(
  cors({
    origin: function(ctx) {
      return "*";
    },
    exposeHeaders: ["WWW-Authenticate", "Server-Authorization"],
    maxAge: 5,
    credentials: true,
    allowMethods: ["GET", "POST", "DELETE", "PUT"],
    allowHeaders: [
      "Content-Type",
      "Authorization",
      "Accept",
      "X-Requested-With",
      "X-CSRFToken"
    ]
  })
);

app.use(bodyParser());

app.listen(port, function() {
  figlet("Chatopera Gzh Sample", function(err, data) {
    console.log(`
${data}
=============== Powered by chatopera ============
-------- https://github.com/chatopera --------
                Build a better world.
___________________________________________________
`);
    console.log("Wechat Server listening on port", port);
  });
});
