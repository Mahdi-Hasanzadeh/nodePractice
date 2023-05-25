// const { readFileSync, writeFileSync } = require("fs");
// const path = require("path");
// const text = readFileSync("./content/subfolder/test.txt", "utf-8"); //10 sec

// console.log(text);

// writeFileSync("./content/subfolder/t.txt", "Hello world", {
//   flag: "a",
// });

const { readFile, writeFile } = require("fs");

let text;

readFile("./content/subfolder/test.txt", "utf-8", (err, result) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log(result);
  writeFile(
    "./content/subfolder/t.txt",
    "Hello world\n",
    {
      flag: "a",
    },
    (err, result) => {
      if (err) {
        console.log(err);
        return;
      }
      console.log("Task is done");
    }
  );
});
