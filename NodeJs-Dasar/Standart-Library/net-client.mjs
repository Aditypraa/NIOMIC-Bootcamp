import net from "net";

const client = net.createConnection({
  port: 3000,
  host: "localhost",
});

client.addListener("data", (data) => {
  console.info(`Receive Data From Server : ${data.toString()}`);
});

setInterval(() => {
  client.write("Aditya\r\n");
}, 2000);
