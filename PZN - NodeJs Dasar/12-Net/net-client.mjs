import net from "net";

const connection = net.createConnection({
  port: 8080,
  host: "localhost",
});

connection.addListener("data", (data) => {
  console.log("Received: " + data.toString());
});

setInterval(() => {
  connection.write("Aditya\r\n");
}, 2000);
