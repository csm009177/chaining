import http from "http";
import fs from "fs";

const htmlPath = "index.html";
const twoPath = "two.html";

const serv = http.createServer((req, res) => {
  new Promise((resolve, reject) => {
    setTimeout(() => {
      if (req.method === "GET" && req.url === "/") {
        fs.promises.readFile(htmlPath, "utf8")
          .then((data) => {
            res.writeHead(200, { "Content-Type": "text/html" });
            res.write(data);
            resolve();
          });
      }
    }, 3000);
  })
  .then(() => {
    setTimeout(() => {
      if (req.method === "GET" && req.url === "/") {
        fs.promises.readFile(twoPath, "utf8")
          .then((data) => {
            res.end(data);
          });
      }
    }, 3000);
  });
});

const port = 3212;
serv.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});