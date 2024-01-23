const fs = require("fs");
const http = require("http");

http
  .createServer(function (req, res) {
    fs.readFile("sample.html", function (err, data) {
      if (err) {
        res.writeHead(500, { "Content-Type": "text/plain" });
        res.end("Internal Server Error");
      } else {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write(data);
        res.end();
      }
    });
  })
  .listen(1000, () => {
    console.log("Server is listening on port 1000");
  });
