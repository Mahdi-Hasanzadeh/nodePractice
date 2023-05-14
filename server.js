const http = require("http");

const server = http.createServer((req, res) => {
  console.log("res");
  if (req.url === "/") {
    res.write("Mahdi Hasanzadeh, ID: 123435");
    res.end();
  }
});

server.listen(4000, () => {
  console.log("sever is listening on port 4000");
});
