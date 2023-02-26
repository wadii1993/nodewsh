// console.log("HELLO WORLD");

const http = require("http");

const hostname = "127.0.0.1";
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.end("<h1>HELLO NODE!!!!</h1>");
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
//create welcometxt
// var fs = require("fs");

// fs.appendFile("welcome.txt", "Hello NODE", function (err) {
//   if (err) throw err;
//   console.log("Saved!");
// });

//readfile and clg data

var fs = require("fs");

// Use fs.readFile() method to read the file
fs.readFile("welcome.txt", "utf8", function (err, data) {
  // Display the file content
  console.log(data);
});

console.log("readFile called");
