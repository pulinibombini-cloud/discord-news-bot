const http = require("http");

function keepAlive() {
  const port = process.env.PORT || 3000;
  http
    .createServer((req, res) => {
      res.writeHead(200, { "Content-Type": "text/plain" });
      res.end("Bot is alive!");
    })
    .listen(port, () => {
      console.log(`🌐 Keep-alive server in ascolto sulla porta ${port}`);
    });
}

module.exports = keepAlive;
