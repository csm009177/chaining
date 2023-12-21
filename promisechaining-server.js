import http from "http";
import fs, { appendFileSync, writeFileSync } from "fs";
const htmlPath = "index.html";
const twoPath = "two.html";
const jsonPath = "name.json";
const xhrPath = "xhr.js";

const serv = http.createServer((req, res) => {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("첫번째");
      if (req.method === "GET" && req.url === "/") {
        // Read the join.html file
        fs.readFile(htmlPath, "utf8", (err, data) => {
          // Set response header and send the file content
          res.writeHead(200, { "Content-Type": "text/html" });
          res.end(data);
        });
      }
      resolve();
    }, 3000);
  }).then(() => {
    setTimeout(() => {
      console.log("두번째");
      if (req.method === "GET" && req.url === "/") {
        // Read the join.html file
        fs.readFile(twoPath, "utf8", (err, data) => {
          // Set response header and send the file content
          res.writeHead(200, { "Content-Type": "text/html" });
          res.end(data);
        });
      }
      resolve();
    }, 3000);
  });
});
// Define port number
const port = 3212;

// Start the server
serv.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
