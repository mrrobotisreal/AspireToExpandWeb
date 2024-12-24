const express = require("express");
const http = require("http");
const https = require("https");
const fs = require("fs");
const path = require("path");

const options = {
  cert: fs.readFileSync("/etc/letsencrypt/live/aspirewithalina.com/fullchain.pem"),
  key: fs.readFileSync("/etc/letsencrypt/live/aspirewithalina.com/privkey.pem"),
};
const app = express();
const PORT = 443;

app.use(express.static("dist"));
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "dist", "index.html"));
});

https.createServer(options, app).listen(PORT, () => {
  console.log(`Server is running securely on https://aspirewithalina.com:${PORT}`);
});

http
  .createServer((req, res) => {
    console.log(`Redirecting to https://${req.headers.host}${req.url}`);
    res.writeHead(301, {
      Location: `https://${req.headers.host}${req.url}`,
    });
    res.end();
  })
  .listen(80);
