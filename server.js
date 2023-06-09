const express = require("express");
const { readFile, read } = require("fs");

const app = express();

const port = process.env.PORT || 8080;

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.redirect("/about");
});
app.get("/about", (req, res) => {
  res.sendFile(__dirname + "/views/about.html");
});

app.get("/posts", (req, res) => {
  readFile("./data/posts.json", "utf-8", (err, data) => {
    if (err) {
      res.send("Error occured");
      return;
    }
    res.send(JSON.parse(data));
  });
});

app.get("/blog", (req, res) => {
  readFile("./data/posts.json", "utf-8", (err, data) => {
    if (err) {
      res.send("Error occured");
      return;
    }
    res.send(JSON.parse(data));
  });
});

app.get("/categories", (req, res) => {
  readFile("./data/categories.json", "utf-8", (err, data) => {
    if (err) {
      res.send("Error occured");
      return;
    }
    res.send(JSON.parse(data));
  });
});

app.listen(port, () => {
  console.log("Server is listening on port " + port + "...");
});

// const http = require("http"); //built-in module
// const fs = require("fs");
// // console.log(http.METHODS);
// // GET: Recieving Data
// // POST: Sending Data to server
// // PUT: updata an existing data
// // Delete: delete a specific data from the server

// const homepage = fs.readFileSync("./index.html");

// const server = http.createServer((req, res) => {
//   console.log(req.url);
//   if (req.url === "/") {
//     res.writeHead(200, "success", {
//       "content-type": "text/html",
//     });
//     // res.write("This is our homepage");
//     // res.write(`<h1>HomePage</h1>
//     // <p>Welcome to our web app</p>
//     // `);
//     res.write(homepage);
//     res.end();
//   } else if (req.url === "/about") {
//     res.statusCode = 200;
//     res.statusMessage = "success";
//     res.write(`<h1>AboutPage</h1>
//     <p>short story</p>
//     `);
//     // res.write("About page");
//     res.end();
//   } else {
//     res.statusCode = 404; // statusCode shows that the operation is successfull or not
//     res.statusMessage = "Invalid URL ,Please Enter a valid URL";
//     res.write(`
//     <h1>Opps! Invalid URL</h1>
//     <p>Page not found</p>
//     <a href="/">Back to home</a>
//     `);
//     res.end();
//   }
// });

// server.listen(5000, () => {
//   console.log("server is listening on port 5000");
// });

// // 200 success
// //201 data added to server successfully
// //404 not found
