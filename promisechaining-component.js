// app.js
import http from "http";
import fs, { appendFileSync, writeFileSync } from "fs";
const htmlPath = "./promisechaining-component.html";
const componentPath = "./component.js"

const serv = http.createServer((req, res) => {
  if (req.method === "GET" && req.url === "/") {
    // Read the join.html file
    fs.readFile(htmlPath, "utf8", (err, data) => {
      // Set response header and send the file content
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end(data);
    });
  } else if (req.method === 'GET' && req.url === '/component.js') {
    // Read the userData.json file and send its content as a response
    fs.readFile(componentPath, 'utf8', (err, component) => {
        res.writeHead(200, { 'Content-Type': 'application/javascript' });
        res.end(component);    
    })
  }
});
// Define port number
const port = 3210;

// Start the server
serv.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
