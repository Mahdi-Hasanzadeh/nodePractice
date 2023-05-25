const http = require("http"); //built-in module
const fs = require("fs");
// console.log(http.METHODS);
// GET: Recieving Data
// POST: Sending Data to server
// PUT: updata an existing data
// Delete: delete a specific data from the server

const homepage = fs.readFileSync("./index.html");

const server = http.createServer((req, res) => {
  console.log(req.url);
  if (req.url === "/") {
    res.writeHead(200, "success", {
      "content-type": "text/html",
    });
    // res.write("This is our homepage");
    // res.write(`<h1>HomePage</h1>
    // <p>Welcome to our web app</p>
    // `);
    res.write(homepage);
    res.end();
  } else if (req.url === "/about") {
    res.statusCode = 200;
    res.statusMessage = "success";
    res.write(`<h1>AboutPage</h1>
    <p>short story</p>
    `);
    // res.write("About page");
    res.end();
  } else {
    res.statusCode = 404; // statusCode shows that the operation is successfull or not
    res.statusMessage = "Invalid URL ,Please Enter a valid URL";
    res.write(`
    <h1>Opps! Invalid URL</h1>
    <p>Page not found</p>
    <a href="/">Back to home</a>
    `);
    res.end();
  }
});

server.listen(5000, () => {
  console.log("server is listening on port 5000");
});

// 200 success
//201 data added to server successfully
//404 not found
