const fs = require("fs");
const http = require("http");
var url=require('url')


http.createServer(function (req, res) {

  var q=url.parse(req.url,true)
  //console.log(q.pathname)
    
   if (q.pathname==="/"){
  fs.readFile("kiddu.html", function (err, data) {
      if (err) {
        res.writeHead(500, { "Content-Type": "text/plain" });
        res.end("Internal Server Error");
      } else {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write(data);
        res.end();
      }
    })
  }else if (q.pathname === "/signup") {
    fs.readFile("sample.html", (err, data) => {
      
      res.write(data);
      res.end();
    });
  } else if (q.pathname === "/signupaction") {
      console.log(q.query.name)
       
     res.writeHead(200, { "Content-Type": "text/html" });
    res.write("<h1>"+q.query.name+"<h1>");
    res.end();
  } else {
    res.writeHead(404, { "content-Type": "text/html" });
    res.write("error");
    res.end();
  }
    }).listen(1000,()=>{
  console.log("Server is started and listening the port:1000")
})
