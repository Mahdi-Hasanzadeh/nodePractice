const { readFile, readFileSync } = require("fs");
const { parse } = require("path");

// let posts = [];
// let categories = [];
const getAllPosts = new Promise((res, rej) => {
  readFile("./data/posts.json", "utf-8", (err, data) => {
    if (err) {
      rej(err);
    }
    res(JSON.parse(data));
  });
});

const getCategories = () => {
  readFile("./data/categories.json", "utf-8", (err, data) => {
    if (err) {
      return err.message;
    }
    return JSON.parse(data);
  });
};

module.exports.getAllPosts = getAllPosts;

// console.log();
// console.log(posts);
// console.log(categories);
