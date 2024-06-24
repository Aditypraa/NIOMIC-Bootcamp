import { EventEmitter } from "events";

const myEvent = new EventEmitter();

myEvent.addListener("login", (name) => {
  console.info(`Hello ${name}`);
});

myEvent.emit("login", "John Doe");
