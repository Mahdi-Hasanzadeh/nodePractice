const path = require("path");

console.log("Seperator sign is: " + path.sep); //return the file seperator sign in your system

const filePath = path.join("content", "subfolder", "text.txt");

console.log("file Path is: " + filePath);

// const splitter = filePath.split("\\");
// console.log(splitter.length);

// console.log("last portion is: " + splitter[splitter.length - 1]);

console.log("Last portion of the path: " + path.basename(filePath)); //return the last portion of a path

console.log(__dirname); // absolute path of our prject excluding the last portion
console.log(__filename); // absolute path of our project including the last portion

const absolutePath = path.resolve(
  __dirname,
  "content",
  "subfolder",
  "test.txt"
);
console.log("absolute Path: " + absolutePath);
