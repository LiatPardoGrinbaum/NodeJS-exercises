import http from "http";
import fs, { appendFile } from "fs";
import path from "path";
import { fileURLToPath } from "url";
const fileName = fileURLToPath(import.meta.url);
const __diranme = path.dirname(fileName);

const indexHTML = path.join(__diranme, "../public/index.html");

// const directoryPath = path.join(__dirname, "../")
// console.log(path.join(__dirname));
const port = 3000;

const server = http.createServer(function (req, res) {
  res.writeHead(200, { "Content-Type": "text/html" });
  fs.readFile(indexHTML, function (error, data) {
    if (error) {
      res.writeHead(404);
      res.write("Error: file not found");
    } else {
      res.write(data); //data is all the information inside index.html
    }
    res.end();
  });
});

const listenServer = (e) => console.log(e ? "Something wen wrong" : "server is listening on port " + port);
server.listen(port, listenServer);
