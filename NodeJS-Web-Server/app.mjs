import http from "http";
import fs from "fs";

const port = 4000;

const renderHtml = (path, response) => {
  fs.readFile(path, (err, data) => {
    if (err) {
      response.writeHead(404);
      response.write(`Error : file not found`);
    } else {
      response.write(data);
    }
    response.end();
  });
};

http
  .createServer((request, response) => {
    response.writeHead(200, {
      "Content-Type": "text/html",
    });

    const url = request.url;
    // if (url === "/about") {
    //   renderHtml("./about.html", response);
    // } else if (url === "/contact") {
    //   renderHtml("./contact.html", response);
    //   // response.write(`<h1>Ini Adalah Halaman Contact</h1>`);
    //   // response.end();
    // } else {
    //   renderHtml("./index.html", response);
    //   // response.write("Hello World");
    //   // fs.readFile("./index.html", (err, data) => {
    //   //   if (err) {
    //   //     response.writeHead(404);
    //   //     response.write(`Error : file not found`);
    //   //   } else {
    //   //     response.write(data);
    //   //   }
    //   //   response.end();
    //   // });
    // }

    switch (url) {
      case "/about":
        renderHtml("./about.html", response);
        break;
      case "/contact":
        renderHtml("./contact.html");
        break;
      default:
        renderHtml("./index.html", response);
        break;
    }
  })
  .listen(port, () => {
    console.log(`Server is listening on port ${port}..`);
  });
