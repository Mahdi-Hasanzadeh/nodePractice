const express = require("express");

const path = require("path");

const app = express();

// console.log(__dirname + "/index.html");//absolute path

app.get("/", (req, res) => {
  res.status(200).sendFile(path.join(__dirname, "index.html"));
});

app.get("/about", (req, res) => {
  res.status(200).send("About page");
});

app.get("/contact", (req, res) => {
  res.status(200).send("contact page");
});

app.all("*", (req, res) => {
  res.statusMessage = "hey page is not found";
  res.status(404).send("page not found");
});

app.listen(5000, () => {
  console.log("Server is listening on port 5000...");
});

// const express = require("express");

// const path = require("path");

// const app = express();

// app.use(express.static("./public")); // used for middleware and static file

// app.get("/", (req, res) => {
//   //   res.send("HomePage");
//   //   res.send(`
//   // <h1>HomePage</h1>
//   // <p>welcome</p>
//   // `);
//   res.status(200).sendFile(path.join(__dirname, "index.html"));
// });

// app.get("/about", (req, res) => {
//   res.status(200).send("about page");
// });

// app.get("/api/products", (req, res) => {
//   res.json([
//     {
//       name: "Mahdi",
//       lastName: "hasanzadeh",
//       id: 1,
//     },
//     {
//       name: "hamidollah",
//       lastName: "Hasanzoghlu",
//       id: 2,
//     },
//   ]);
// });

// app.all("*", (req, res) => {
//   res.status(404).send(`
//   <h1>Invalid URL</h1>
//   <a href="/">HomePage</a>
//   `);
// });

// app.listen(4000, () => {
//   console.log("Server is listening on port 4000...");
// });

// // app.get();
// // app.post();
// // app.delete();
// // app.put();
// // app.use();
// // app.all();
// // app.listen();

// //status code

// //200 ok,success
// //201 data added to server successfully
// //404 not found
