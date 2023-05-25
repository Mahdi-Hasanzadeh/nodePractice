// const http = require("http");

// const fs = require("fs");

// const homepage = fs.readFileSync("./index.html");

// // const server = http.createServer((req, res) => {
// //   console.log(req.url);
// //   console.log(req.method);
// //   if (req.url === "/") {
// //     res.writeHead(200, "success", {
// //       "content-type": "text/html",
// //     });
// //     res.write(`<h1>Home page</h1>
// //     <p>welcome to my website</p>
// //     `);
// //     res.end();
// //   } else if (req.url === "/about") {
// //     res.writeHead(200, "success", {
// //       "content-type": "text/html",
// //     });
// //     res.write(`<h1>About page</h1>
// //       <p>THis is about page</p>
// //       `);
// //     res.end();
// //   } else {
// //     res.writeHead(404, "not found", {
// //       "content-type": "text/html",
// //     });
// //     res.write(`<h1>invalid URL</h1>
// //       <a href="/">back to home</a>
// //       `);
// //     res.end();
// //   }
// // });

// // server.listen(5000, () => {
// //   console.log("server is listening on port 5000");
// // });

// //http hypertext transfer protocol:

// // const sayhello = function () {
// //   console.log("hello");
// // };

// // {}  braces
// // parentheses ()
// //squqre brackets []

// // const sayHello1 = (name) => {
// //   console.log(`Hello ${name}`);
// // };

// // sayHello1("Mahdi");

// // const { log } = require("console");
// // const http = require("http");

// const server = http.createServer((req, res) => {
//   if (req.url === "/") {
//     // res.write("This is our HomePage");
//     // res.write(`
//     // <h1>Home Page</h1>
//     // <p>hi there, This is our homepage</p>
//     // `);
//     res.write(homepage);
//     res.end();
//   } else if (req.url === "/about") {
//     // res.write("Thi is our aboutpage, and this is short story of our company");
//     res.write(`
//     <h1>About Page</h1>
//     <p> This is our story</p>
//     `);
//     res.end();
//   } else {
//     // res.write("invalid URL");
//     res.write(`
//     <h1>Invalid URL</h1>
//     <p>Page not found</p>
//     <a href="/" >back to home</a>
//     `);
//     res.end();
//   }
// });

// server.listen(5000, () => {
//   console.log("Server is listening on port 5000...");
// });
