import http from "http";
import fs from "fs";

const onePath = "one.html";
const twoPath = "two.html";

const serv = http.createServer((req, res) => {
  new Promise((resolve, reject) => {
    setTimeout(() => {
      if (req.method === "GET" && req.url === "/") {
        fs.promises.readFile(onePath, "utf8")
          .then((data) => {
            res.writeHead(200, { "Content-Type": "text/html" });
            res.write(data);
            resolve();
          });
      }
    }, 1000);
  })
  .then(() => {
    setTimeout(() => {
      if (req.method === "GET" && req.url === "/") {
        fs.promises.readFile(twoPath, "utf8")
          .then((data) => {
            res.end(data);
          });
      }
    }, 2000);
  });
});

const port = 3212;
serv.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});