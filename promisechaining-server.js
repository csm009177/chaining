import http from "http";
import fs, { appendFileSync, writeFileSync } from "fs";
const htmlPath = "index.html";
const twoPath = "two.html";
const jsonPath = "name.json";
const xhrPath = "xhr.js";

const serv = http.createServer((req, res) => {
  if (req.method === "GET" && req.url === "/") {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        // Read the join.html file
        fs.readFile(htmlPath, "utf8", (err, data) => {
          // Set response header and send the file content
          res.writeHead(200, { "Content-Type": "text/html" });
          res.end(data);
        });
      resolve();
    }, 1000);
  }).then(() => {
    setTimeout(() => {
        fs.readFile(twoPath, "utf8", (err, data) => {
          // Set response header and send the file content
          res.writeHead(200, { "Content-Type": "text/html" });
          res.end(data);
        });
      resolve();
    }, 1000);
  });
  }
});

// Define port number
const port = 3212;

// Start the server
serv.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
