import express from "express";
import Http from "http";
import Https from "https";
import Fs from "fs";

const options = {
  cert: Fs.readFileSync("/etc/letsencrypt/live/aspirewithalina.com/fullchain.pem"),
  key: Fs.readFileSync("/etc/letsencrypt/live/aspirewithalina.com/privkey.pem"),
};
const app = express();
const PORT = 443;

app.use(express.static("dist"));

Https.createServer(options, app).listen(PORT, () => {
  console.log(`Server is running securely on https://aspirewithalina.com:${PORT}`);
});

Http
  .createServer((req, res) => {
    console.log(`Redirecting to https://${req.headers.host}${req.url}`);
    res.writeHead(301, {
      Location: `https://${req.headers.host}${req.url}`,
    });
    res.end();
  })
  .listen(80);
